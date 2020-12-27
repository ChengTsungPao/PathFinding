import React, { useContext } from 'react';
import { NavDropdown, Nav } from 'react-bootstrap';
import { algorithmContext, sysStatusContext } from '../../Core';

function DropdownAlgorithm({ className }) {
    const algoContext = useContext(algorithmContext);
    const sysStatus = useContext(sysStatusContext);

    const DropdownAlgorithmHandler = (eventKey) => {

        if (sysStatus.get !== "IDLE") {
            return;
        }

        switch (eventKey) {
            case "Algorithm_Dijkstra":
                algoContext.set('Algorithm_Dijkstra');
                break;
            case "Algorithm_APlus":
                algoContext.set('Algorithm_APlus');
                break;
            case "Algorithm_Greedy_Best_First":
                algoContext.set('Algorithm_Greedy_Best_First');
                break;
            case "Algorithm_Swarm":
                algoContext.set('Algorithm_Swarm');
                break;
            case "Algorithm_Convergent_Swarm":
                algoContext.set('Algorithm_Convergent_Swarm');
                break;
            case "Algorithm_Bidrectional_Swarm":
                algoContext.set('Algorithm_Bidrectional_Swarm');
                break;
            case "Algorithm_Breadth_First":
                algoContext.set('Algorithm_Breadth_First');
                break;
            case "Algorithm_Depth_First":
                algoContext.set('Algorithm_Depth_First');
                break;
            default:
                break;
        }
    }

    return (
        <Nav.Item>
            <NavDropdown xs={1} title="Algorithms" id="DropdownAlgorithm" onSelect={(eventKey) => DropdownAlgorithmHandler(eventKey)} className={className}>
                <NavDropdown.Item eventKey="Algorithm_Dijkstra">Dijkstra's Algorithm</NavDropdown.Item>
                <NavDropdown.Item eventKey="Algorithm_APlus">A+ Search</NavDropdown.Item>
                <NavDropdown.Item eventKey="Algorithm_Greedy_Best_First">Greedy Best-First Search</NavDropdown.Item>
                <NavDropdown.Item eventKey="Algorithm_Swarm">Swarm Algorithm</NavDropdown.Item>
                <NavDropdown.Item eventKey="Algorithm_Convergent_Swarm">Convergent Swarm Algorithm</NavDropdown.Item>
                <NavDropdown.Item eventKey="Algorithm_Bidrectional_Swarm">Bidirectional Swarm Algorithm</NavDropdown.Item>
                <NavDropdown.Item eventKey="Algorithm_Breadth_First">Breadth-First Search</NavDropdown.Item>
                <NavDropdown.Item eventKey="Algorithm_Depth_First">Depth-First Search</NavDropdown.Item>
            </NavDropdown>
        </Nav.Item>
    )
}

export default DropdownAlgorithm;