import React, { useContext } from 'react'
import { NavDropdown, Nav } from 'react-bootstrap';
import { sysStatusContext, speedContext } from '../../Core';
import Colored from '../../HOC/Colored';
import ButtonEvent from '../TableHelper/ButtonEvent';
import Simple_Stair_Pattern from '../../Backend/Maze/Simple_Stair_Pattern';
import Binary_Tree from '../../Backend/Maze/Binary_Tree';
import RecursiveDivision from '../../Backend/Maze/RecursiveDivision';
import RecursiveDivision_Horizontal from '../../Backend/Maze/RecursiveDivision_Horizontal';
import RecursiveDivision_Vertical from '../../Backend/Maze/RecursiveDivision_Vertical';
import Kruskal from '../../Backend/Maze/Kruskal';
import Basic_Random_Maze from '../../Backend/Maze/Basic_Random_Maze'
import Basic_Weight_Maze from '../../Backend/Maze/Basic_Weight_Maze'

function DropdownMaze() {
    const sysStatus = useContext(sysStatusContext);
    const speedStatus = useContext(speedContext);
    const [className, toggleHandler] = Colored();
    const buttonEvent = ButtonEvent();
    const speed = speedStatus.get[1];

    const DropdownMazeHandler = (eventKey) => {
        if (sysStatus.get !== "IDLE") {
            return;
        }
        buttonEvent.ClearPath()
        buttonEvent.ClearWalls()
        switch (eventKey) {
            case "Maze_Recursive_Division":
                buttonEvent.CreateMaze(RecursiveDivision(), speed);
                break;
            case "Maze_Recursive_Division_vertical":
                buttonEvent.CreateMaze(RecursiveDivision_Vertical(), speed);
                break;
            case "Maze_Recursive_Division_horizontal":
                buttonEvent.CreateMaze(RecursiveDivision_Horizontal(), speed);
                break;
            case "Maze_Basic_Random":
                buttonEvent.CreateMaze(Basic_Random_Maze(), 0)
                break;
            case "Maze_Basic_Weight_Maze":
                buttonEvent.CreateMaze(Basic_Weight_Maze(), 0)
                break;
            case "Maze_Simple_stair_pattern":
                buttonEvent.CreateMaze(Simple_Stair_Pattern(), speed);
                break;
            case "Maze_Binary_Tree":
                buttonEvent.CreateMaze(Binary_Tree(), speed);
                break;
            case "Maze_Kruskal":
                buttonEvent.CreateMaze(Kruskal(), speed);
                break;
            default:
                break;
        }
    }

    return (
        <Nav.Item>
            <NavDropdown xs={1} title={<span className={className}>Mazes & Patterns</span>} id="DropdownMaze" onSelect={DropdownMazeHandler}
                onMouseEnter={toggleHandler} onMouseLeave={toggleHandler}
            >
                <NavDropdown.Item eventKey="Maze_Recursive_Division">Recursive Division</NavDropdown.Item>
                <NavDropdown.Item eventKey="Maze_Recursive_Division_vertical">Recursive Division(vertical skew)</NavDropdown.Item>
                <NavDropdown.Item eventKey="Maze_Recursive_Division_horizontal">Recursive Division(horizontal skew)</NavDropdown.Item>
                <NavDropdown.Item eventKey="Maze_Basic_Random">Basic Random Maze</NavDropdown.Item>
                <NavDropdown.Item eventKey="Maze_Basic_Weight_Maze">Basic Weight Maze</NavDropdown.Item>
                <NavDropdown.Item eventKey="Maze_Simple_stair_pattern">Simple Stair Pattern</NavDropdown.Item>
                <NavDropdown.Item eventKey="Maze_Binary_Tree">Binary Tree Generator</NavDropdown.Item>
                <NavDropdown.Item eventKey="Maze_Kruskal">Kruskal's Maze</NavDropdown.Item>
            </NavDropdown>
        </Nav.Item>
    )
}

export default DropdownMaze;