import React, { useState, useEffect, useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { algorithmContext, sysStatusContext, bombContext } from '../../Core';

const NavButton = () => {

    const [buttonName, setButtonName] = useState("Visualize !");
    const [myVariant, setMyVariant] = useState("");
    const algoContext = useContext(algorithmContext);
    const sysStatus = useContext(sysStatusContext);
    const bomb = useContext(bombContext);

    useEffect(() => {
        setMyVariant('success');
    }, [])

    useEffect(() => {
        var algoName = "";
        switch (algoContext.get) {
            case "Algorithm_Dijkstra":
                algoName = "Dijkstra's";
                break;
            case 'Algorithm_APlus':
                algoName = "A*";
                break;
            case "Algorithm_Greedy_Best_First":
                algoName = "Greedy";
                break;
            case "Algorithm_Swarm":
                algoName = "Swarm";
                break;
            case "Algorithm_Convergent_Swarm":
                algoName = "Convergent Swarm";
                break;
            case "Algorithm_Bidrectional_Swarm":
                algoName = "Bidrectional Swarm";
                break;
            case "Algorithm_Breadth_First":
                algoName = "BFS";
                break;
            case "Algorithm_Depth_First":
                algoName = "DFS";
                break;
            default:
                algoName = "";
                break;
        }

        setButtonName(`Visualize ${algoName}!`);
    }, [algoContext.get])

    const resetButton = () => {
        setMyVariant('success');
        sysStatus.set("IDLE");
    }

    const handler = () => {
        if (sysStatus.get !== "IDLE") {
            return;
        }

        bomb.set(bomb.get ? "False" : "True"); // For showing listening to Context
        if (algoContext.get === "") {
            setButtonName("Pick an Algorithm");
        } else {
            sysStatus.set("RUNNING");
            setMyVariant('danger');
            setTimeout(() => resetButton(), 10000);
        }
    }

    return (
        <Nav.Item xs={1}>
            <Button id="navButton" variant={myVariant} size="lg" onClick={handler}>{buttonName}</Button>
        </Nav.Item>
    )
};

export default NavButton