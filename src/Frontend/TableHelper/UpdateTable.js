import BFS from '../../Backend/Algorithms/BFS';
import DFS from '../../Backend/Algorithms/DFS';
import Dijkstra from '../../Backend/Algorithms/Dijkstra';


export function UpdateTable(Start, ClearPath, algorithm, speed) {
    ClearPath(false)
    switch (algorithm.get) {
        case "Algorithm_Dijkstra":
            Dijkstra(Start, speed.get[1]);
            break;
        case 'Algorithm_APlus':
            break;
        case "Algorithm_Greedy_Best_First":
            break;
        case "Algorithm_Swarm":
            break;
        case "Algorithm_Convergent_Swarm":
            break;
        case "Algorithm_Bidrectional_Swarm":
            break;
        case "Algorithm_Breadth_First":
            BFS(Start, speed.get[1]);
            break;
        case "Algorithm_Depth_First":
            DFS(Start, speed.get[1]);
            break;
        default:
            break;
    }
}