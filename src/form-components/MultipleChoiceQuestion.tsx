import React, { useState } from "react";
import { Form } from "react-bootstrap";
export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedAnswer, setSelectedAnswer] = useState<string>(options[0]);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Questions</h3>
            <Form.Group controlId="favoriteColors">
                <Form.Label>Favorite Letter?</Form.Label>
                <Form.Select value={selectedAnswer} onChange={updateChoice}>
                    {options.map((anOption: string) => (
                        <option key={anOption} value={anOption}>
                            {anOption}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {selectedAnswer === expectedAnswer ? (
                <span> Correct Choice ✔️ </span>
            ) : (
                <span> Incorrect Choice❌ </span>
            )}
        </div>
    );
}
