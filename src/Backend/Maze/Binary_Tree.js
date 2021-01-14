import { position } from '../../Core';

function Binary_Tree() {
    var walls = [];
    var wallSet = new Set();

    // 取得外圍
    var tmp = position.colSize - 1;
    for (var y = 0; y <= tmp; y++) {
        walls.push([0, y]);
        walls.push([0, tmp]);
        wallSet.add([0, y].toString());
        wallSet.add([0, tmp].toString());
        tmp--;
    }

    for (var x = 0; x < position.rowSize; x++) {
        walls.push([x, 0]);
        walls.push([x, position.colSize - 1]);
        wallSet.add([x, 0].toString());
        wallSet.add([x, position.colSize - 1].toString());

    }

    var tmp = position.colSize - 1;
    for (var y = 0; y <= tmp; y++) {
        walls.push([position.rowSize - 1, y]);
        walls.push([position.rowSize - 1, tmp]);
        wallSet.add([position.rowSize - 1, y].toString());
        wallSet.add([position.rowSize - 1, tmp].toString());
        tmp--;
    }

    // Binary Tree to get random maze
    // http://weblog.jamisbuck.org/2011/2/1/maze-generation-binary-tree-algorithm
    for (var x = 2; x <= position.rowSize; x += 2) {
        for (var y = 2; y <= position.colSize; y += 2) {
            if (wallSet.has([x - 2, y].toString()) && wallSet.has([x, y - 2].toString())) {
                var randomFace = Math.floor(Math.random() * 2) + 1;// 1=上，2=左
                switch (randomFace) {
                    case 1:
                        walls.push([x - 1, y]);
                        wallSet.add([x - 1, y].toString());
                        break;
                    case 2:
                        walls.push([x, y - 1]);
                        wallSet.add([x, y - 1].toString());
                }
            } else if (wallSet.has([x - 2, y].toString())) {
                walls.push([x - 1, y]);
                wallSet.add([x - 1, y].toString());
            } else if (wallSet.has([x, y - 2].toString())) {
                walls.push([x, y - 2]);
                wallSet.add([x, y - 1].toString());
            } else {
                console.log('Some Error in Binary_Tree_Maze()');
            }
            walls.push([x, y]);
            wallSet.add([x, y].toString());
        }
    }

    return walls;
}

export default Binary_Tree;