import { useContext } from 'react'
import { tableVar, touchContext, updateContext, componentKind, synchronize } from './TableIndex'
import { SearchAnimation, SearchBombAnimation, MazeAnimation, FinalAnimation, FinalMazeAnimation } from './Animation'
import { sysStatusContext, algorithmContext, bombContext, speedContext, position } from '../../Core'
import { setTable } from './SetTable'
import { UpdateTable } from './UpdateTable'
import { WhichComponentSame } from './WhichComp'


function ButtonEvent() {
    const [touch, update] = [useContext(touchContext), useContext(updateContext)]
    const [algorithm, bomb, sysSpeed, sysStatus] = [useContext(algorithmContext), useContext(bombContext), useContext(speedContext), useContext(sysStatusContext)]

    const Start = (search, path, pathDirection, speed, bomb = []) => {
        if (update.get && synchronize.update) {
            FinalAnimation(search, path, pathDirection, bomb)
        } else {
            // console.log("Start")
            sysStatus.set("RUNNING")
            update.set("True")
            synchronize.update = true
            SearchBombAnimation(search, bomb, path, pathDirection, speed, 0, SearchAnimation, () => sysStatus.set("IDLE"))
        }
    }

    const CreateMaze = (maze, speed) => {
        if (speed === 0) {
            FinalMazeAnimation(maze)
        } else {
            sysStatus.set("RUNNING")
            MazeAnimation(maze, speed, 0, () => sysStatus.set("IDLE"))
        }
    }

    const Addbomb = () => {
        // console.log("AddBomb")
        const index = Math.floor(tableVar.rowSize / 2) * tableVar.colSize + Math.floor(tableVar.colSize / 2)

        if (WhichComponentSame(index) <= 2) {
            return
        }

        bomb.set("True")
        setTable(index, componentKind.bomb, true)

        if (update.get) {
            UpdateTable(Start, ClearPath, algorithm, sysSpeed)
        }
    }

    const RemoveBomb = () => {
        // console.log("RemoveBomb")
        if(position.bomb !== false){
            setTable(position.bomb, componentKind.background, true)
        }  
        bomb.set("False")

        if (update.get) {
            UpdateTable(Start, ClearPath, algorithm, sysSpeed)
        }
    }

    const ClearWalls = () => {
        // console.log("ClearWall")
        for (var i = 0; i < tableVar.rowSize * tableVar.colSize; i++) {
            if (WhichComponentSame(i) === 3 || WhichComponentSame(i) === 4) {
                setTable(i, componentKind.background, true)
            }
        }
        touch.set("")
        ClearPath()
    }

    const ClearWeights = () => {
        // console.log("ClearWeights")
        for (var i = 0; i < tableVar.rowSize * tableVar.colSize; i++) {
            if (WhichComponentSame(i) === 3) {
                setTable(i, componentKind.background, true)
            }
        }
        touch.set("")
        ClearPath()
    }

    const ClearPath = (event = true) => {
        // console.log("ClearPath")
        if (event) {
            update.set("False")
            synchronize.update = false
        }
        for (var i = 0; i < tableVar.rowSize * tableVar.colSize; i++) {
            if (WhichComponentSame(i) >= 5) {
                setTable(i, componentKind.background)
            } else if (WhichComponentSame(i) === 3) {
                setTable(i, componentKind.weightStatic)
            } else if (WhichComponentSame(i) === 2) {
                setTable(i, componentKind.bomb)
            } else if (WhichComponentSame(i) === 1) {
                setTable(i, componentKind.end)
            } else if (WhichComponentSame(i) === 0) {
                setTable(i, componentKind.start)
            }
        }
    }

    const ClearBoard = () => {
        // console.log("ClearBoard")
        update.set("False")
        for (var i = 0; i < tableVar.rowSize * tableVar.colSize; i++) {
            setTable(i, componentKind.background, true)
        }
        setTable(Math.floor(tableVar.rowSize / 2) * tableVar.colSize + Math.floor(tableVar.colSize / 4), componentKind.start, true)
        setTable(Math.floor(tableVar.rowSize / 2 + 1) * tableVar.colSize - Math.floor(tableVar.colSize / 4), componentKind.end, true)
        touch.set("")
        bomb.set("False")
    }

    return { Start, Addbomb, RemoveBomb, ClearWalls, ClearPath, ClearBoard, CreateMaze, ClearWeights }
}

export default ButtonEvent



