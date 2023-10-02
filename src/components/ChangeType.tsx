import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    // eslint-disable-next-line prefer-const
    const [type, setType] = useState<QuestionType>("short_answer_question");

    function switchType(): void {
        // Set visible to be the logical opposite of its previous value
        type === "short_answer_question"
            ? setType("multiple_choice_question")
            : setType("short_answer_question");
    }

    // Only includes <div>Hello!</div> if `visible` is true
    return (
        <div>
            <Button onClick={switchType}>Change Type</Button>
            {type === "multiple_choice_question" ? (
                <div>Multiple Choice</div>
            ) : (
                <div> Short Answer</div>
            )}
        </div>
    );
}
