import React from 'react'
import { tableVar } from '../Frontend/TableHelper/TableIndex'

// component position
export var position = {
    start: [Math.floor(tableVar.rowSize / 2), Math.floor(tableVar.colSize / 4)],
    end: [Math.floor(tableVar.rowSize / 2), tableVar.colSize - Math.floor(tableVar.colSize / 4)],
    bomb: false,
    wall: false
}


// 目前系統狀態
export const sysStatusContext = React.createContext();
export const initialsysStatus = "IDLE";
export const sysStatusReducer = (state, action) => {
    switch (action) {
        case 'IDLE':
            return 'IDLE';
        case 'RUNNING':
            return 'RUNNING';
        default:
            return initialsysStatus;
    }
}

// Bomb status
export const bombContext = React.createContext();
export const bombInitial = false;
export const bombReducer = (state, action) => {
    switch (action) {
        case 'True':
            return true;
        case 'False':
            return false;
        default:
            return bombInitial
    }
}

// Speed
export const speedContext = React.createContext();
export const speedInitial = "average";
export const speedReducer = (state, action) => {
    switch (action) {
        case 'Fast':
            return "Fast";
        case 'Average':
            return "Average";
        case 'Slow':
            return "Slow";
        default:
            return bombInitial
    }
}

// 目前系統是哪種演算法
export const algorithmContext = React.createContext();
export const initialAlgorithm = "";
export const algorithmReducer = (state, action) => {
    switch (action) {
        case 'Algorithm_Dijkstra':
            return 'Algorithm_Dijkstra';
        case 'Algorithm_APlus':
            return 'Algorithm_APlus';
        case "Algorithm_Greedy_Best_First":
            return 'Algorithm_Greedy_Best_First';
        case "Algorithm_Swarm":
            return 'Algorithm_Swarm';
        case "Algorithm_Convergent_Swarm":
            return 'Algorithm_Convergent_Swarm';
        case "Algorithm_Bidrectional_Swarm":
            return 'Algorithm_Bidrectional_Swarm';
        case "Algorithm_Breadth_First":
            return 'Algorithm_Breadth_First';
        case "Algorithm_Depth_First":
            return 'Algorithm_Depth_First';
        default:
            return initialAlgorithm;
    }
}