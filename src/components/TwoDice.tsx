import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setDice1] = useState<number>(1);
    const [rightDie, setDice2] = useState<number>(6);

    function ifSameNumber(): string {
        if (leftDie === rightDie) {
            if (rightDie === 1) {
                return "You Lose!";
            } else {
                return "You Win!";
            }
        }
        //returns an empty string for when the dice are not equal
        return "";
    }

    return (
        <div>
            <span>
                <Button onClick={() => setDice1(d6)}>Roll Left</Button>
                <span data-testid="left-die"> {leftDie} </span>
            </span>
            <span>
                <Button onClick={() => setDice2(d6)}>Roll Right</Button>
                <span data-testid="right-die"> {rightDie} </span>
            </span>
            <span>{ifSameNumber()}</span>
        </div>
    );
}
