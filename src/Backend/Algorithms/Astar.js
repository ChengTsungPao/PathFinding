import { position } from '../../Core';

function Astar(startCallback, speed) {
    var retSearchPath = [];
    var retBombPath = [];
    var retShortestPath = [];

    if (position.bomb) {
        retShortestPath = retShortestPath.concat(DoAStar(position.start, position.bomb, retSearchPath))

        // 有找到最小路徑才繼續
        if (retShortestPath.length > 0) {
            retShortestPath = retShortestPath.concat(DoAStar(position.bomb, position.end, retBombPath))
        }
    } else {
        retShortestPath = retShortestPath.concat(DoAStar(position.start, position.end, retSearchPath))
    }
    // 執行 start 動畫
    startCallback(retSearchPath, retShortestPath, speed, retBombPath);
}

// 回傳最短路徑，update search
function DoAStar(startPos, endPos, searchPath) {
    // 先假設權重都是1
    var i, j;
    var weights = {}
    for (i = 0; i < position.rowSize; i++) {
        for (j = 0; j < position.colSize; j++) {
            weights[[i, j]] = 1;
        }
    }

    var unvisited = [];
    var table = {};

    // 設定table: 起始點為0，其他為無限大，所有的previous vertex均為null
    // 設定目前最短路徑的queue
    for (i = 0; i < position.rowSize; i++) {
        for (j = 0; j < position.colSize; j++) {
            var pos = [i, j];

            // 起始點走到pos的最短距離，上一個點，direction，total距離
            table[pos] = [Infinity, null, null, null];
        }
    }
    table[startPos] = [0, null, "up", 0]; // 設定起始點
    unvisited.push(startPos); // 設定目前最短路徑的queue

    /* 演算法開始 */
    var isFoundEnd = false;
    var visited = new Set();
    searchPath.push([startPos]); // 加入搜尋範圍
    while (unvisited.length > 0) {
        // 1. 選出當前最小路徑的點
        var curPos = GetClosestNode(table, unvisited, endPos);

        if (visited.has(curPos.toString())) {
            continue; // 已走過的點不走
        } else {
            visited.add(curPos.toString()); // 加入已走過
            searchPath.push([curPos]); // 加入搜尋範圍
        }

        // 2. 計算相鄰且尚未走過的點
        var up = curPos[0] - 1 >= 0 ? [curPos[0] - 1, curPos[1]] : null;
        var right = curPos[1] + 1 < position.colSize ? [curPos[0], curPos[1] + 1] : null;
        var down = curPos[0] + 1 < position.rowSize ? [curPos[0] + 1, curPos[1]] : null;
        var left = curPos[1] - 1 >= 0 ? [curPos[0], curPos[1] - 1] : null;

        // eslint-disable-next-line
        [up, right, down, left].forEach((nextPos, idx) => {
            if (!nextPos || isFoundEnd || nextPos in position.wall) return; // 若超過邊界 or 已經找到終點了 or 是牆壁

            // 策略為：只考慮 目前總分+權重+轉向分數
            var total = table[curPos][0] + weights[nextPos] + GetScore(table[nextPos][2], idx);
            if (total < table[nextPos][0]) {
                table[nextPos][0] = total;
                table[nextPos][3] = total + GetHeuristic(nextPos, endPos);
                table[nextPos][1] = curPos;
                switch (idx) {
                    case 0:
                        table[nextPos][2] = "up";
                        break;
                    case 1:
                        table[nextPos][2] = "right";
                        break;
                    case 2:
                        table[nextPos][2] = "down";
                        break;
                    case 3:
                        table[nextPos][2] = "left";
                        break;
                    default:
                        break;
                }
            }
            unvisited.push(nextPos);

            if (nextPos.toString() === endPos.toString()) { // 看是否找到終點了
                isFoundEnd = true;
            }
        })

        if (isFoundEnd) { // 找到終點跳出
            break;
        }
    }

    // 若有找到終點再判斷最小路徑
    var curShortestPath = []
    if (isFoundEnd) {
        curPos = endPos;
        while (curPos) { // 因為找到start時的previous vertex為null
            curShortestPath.unshift(curPos);
            curPos = table[curPos][1];
        }
    }
    return curShortestPath;
}

// 推測值：用距離來表示，因為是棋盤，所以改成最短距離幾格
function GetHeuristic(startPos, endPos) {
    return Math.abs(endPos[0] - startPos[0]) + Math.abs(endPos[1] - startPos[1]);
}

// 找出分數最小點，策略：考慮所有的分數 目前總分+權重+轉向分數+估值
function GetClosestNode(table, unvisited, endPos) {
    let retPos, retIndex;
    for (var i = 0; i < unvisited.length; i++) {
        if (!retPos || table[retPos][3] > table[unvisited[i]][3]) {
            retPos = unvisited[i];
            retIndex = i;

            // 若相等則取得 估值大的（距離目標遠的）
        } else if (table[retPos][3] === table[unvisited[i]][3]) {
            if (GetHeuristic(retPos, endPos) > GetHeuristic(unvisited[i], endPos)) {
                retPos = unvisited[i];
                retIndex = i;
            }
        }
    }

    unvisited.splice(retIndex, 1);
    return retPos;
}

function GetScore(direction, index) {
    var score = 0;
    switch (direction) {
        case "up":
            switch (index) {
                case 0:
                    score = 1;
                    break;
                case 1:
                    score = 2;
                    break;
                case 2:
                    score = 3;
                    break;
                case 3:
                    score = 2;
                    break;
                default:
                    break;
            }
            break;
        case "right":
            switch (index) {
                case 0:
                    score = 2;
                    break;
                case 1:
                    score = 1;
                    break;
                case 2:
                    score = 2;
                    break;
                case 3:
                    score = 3;
                    break;
                default:
                    break;
            }
            break;
        case "down":
            switch (index) {
                case 0:
                    score = 3;
                    break;
                case 1:
                    score = 2;
                    break;
                case 2:
                    score = 1;
                    break;
                case 3:
                    score = 2;
                    break;
                default:
                    break;
            }
            break;
        case "left":
            switch (index) {
                case 0:
                    score = 2;
                    break;
                case 1:
                    score = 3;
                    break;
                case 2:
                    score = 2;
                    break;
                case 3:
                    score = 1;
                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
    return score;
}

export default Astar;