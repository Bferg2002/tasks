import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startQuiz(): void {
        setInProgress(true);
        setNumAttempts(numAttempts - 1);
    }

    function stopQuiz(): void {
        setInProgress(false);
    }

    function mulligan(): void {
        setNumAttempts(numAttempts + 1);
    }
    return (
        <span>
            <Button
                onClick={startQuiz}
                disabled={numAttempts === 0 || inProgress}
            >
                Start Quiz
            </Button>{" "}
            Attempts Left: {numAttempts}
            <Button onClick={stopQuiz} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={inProgress}>
                Mulligan
            </Button>
        </span>
    );
}
