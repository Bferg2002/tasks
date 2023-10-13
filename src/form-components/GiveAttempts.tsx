import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsRemaining, setAttemptsRemaining] = useState<number>(3);
    const [attemptsRequesting, setAttemptsRequesting] = useState<string>("0");

    function decreaseAttemptsRemaining(): void {
        setAttemptsRemaining(attemptsRemaining - 1);
    }

    function increaseAttemptsRemaining(): void {
        setAttemptsRemaining(attemptsRemaining + Number(attemptsRequesting));
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <span>Attempts Left: {attemptsRemaining} </span>
            <div>
                <Button
                    onClick={decreaseAttemptsRemaining}
                    disabled={attemptsRemaining <= 0}
                >
                    Use
                </Button>

                <Button onClick={increaseAttemptsRemaining}>Gain</Button>

                <Form.Group controlId="formMovieReleased">
                    <Form.Label>Number Of Attempts Requested:</Form.Label>
                    <Form.Control
                        type="number"
                        value={attemptsRequesting}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setAttemptsRequesting(event.target.value)}
                    />
                </Form.Group>
            </div>
        </div>
    );
}
