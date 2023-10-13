import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateUserAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setUserAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formMovieName">
                <Form.Label>Check Answer:</Form.Label>
                <Form.Control
                    type="text"
                    value={userAnswer}
                    onChange={updateUserAnswer}
                />{" "}
                {userAnswer === expectedAnswer ? <div>✔️</div> : <div>❌</div>}{" "}
            </Form.Group>
        </div>
    );
}
