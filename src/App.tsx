import React from "react";
import pokemon from "./Images/gen-1.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Bryant Ferguson Header</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <img
                src={pokemon}
                alt="A picture of the generation 1 pokemon starters"
            />
            <ul>
                <li>Charmander</li>
                <li>Squirtle</li>
                <li>Bulbasaur</li>
            </ul>
            <p>Bryant Ferguson was here!</p>
            <p>Hello World!</p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div id="d1"></div>
                    </Col>
                    <Col>
                        <div id="d2"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
