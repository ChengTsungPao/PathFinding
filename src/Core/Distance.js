class Distance {
    constructor() {
        this.dict = {};
        this.max_d = 0;
    }

    // pos=[x, y], d=距離
    set(pos, d) {
        this.dict[pos] = d;
        this.max_d = Math.max(this.max_d, d);
    }

    // 取得距離
    get(pos) {
        if (pos in this.dict) {
            return this.dict[pos];
        } else {
            return -1;
        }
    }

    // 從end開始找尋附近四周圍，第一個 "有被找過的" 且 "距離最小的"的點，並回傳一個array
    getShortestPath(endPos) {
        if (!(endPos in this.dict)) return []; // 若終點沒被找過，就回傳空值

        var shortest = [endPos];
        var x = endPos[0];
        var y = endPos[1];
        var visited = new Set();

        visited.add(endPos.toString());
        while (this.max_d > 0) {
            var curD = Infinity;
            var curX = x;
            var curY = y;

            // up
            if ([x - 1, y] in this.dict && !(visited.has([x - 1, y].toString()))) {
                if (this.dict[[x - 1, y]] < curD) {
                    curX = x - 1;
                    curY = y;
                    curD = this.dict[[x - 1, y]];
                }
                visited.add([x - 1, y].toString());
            }

            // right
            if ([x, y + 1] in this.dict && !(visited.has([x, y + 1].toString()))) {
                if (this.dict[[x, y + 1]] < curD) {
                    curX = x;
                    curY = y + 1;
                    curD = this.dict[[x, y + 1]];
                }
                visited.add([x, y + 1].toString());
            }

            // down
            if ([x + 1, y] in this.dict && !(visited.has([x + 1, y].toString()))) {
                if (this.dict[[x + 1, y]] < curD) {
                    curX = x + 1;
                    curY = y;
                    curD = this.dict[[x + 1, y]];
                }
                visited.add([x + 1, y].toString());
            }

            // up
            if ([x, y - 1] in this.dict && !(visited.has([x, y - 1].toString()))) {
                if (this.dict[[x, y - 1]] < curD) {
                    curX = x;
                    curY = y - 1;
                    curD = this.dict[[x, y - 1]];
                }
                visited.add([x, y - 1].toString());
            }
            x = curX;
            y = curY;
            shortest.unshift([x, y]);
            this.max_d = curD;
        }
        if (shortest.length === 1) return []; // 如果沒有找到路徑(只有終點自己)，則不用跑最短路徑
        return shortest;
    }

    clear() {
        this.dict = {};
        this.max_d = 0;
    }
}

export default Distance;