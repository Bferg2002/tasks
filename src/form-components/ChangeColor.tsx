import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    // This is the State (Model)
    const [color, setColor] = useState<string>("grey");

    // This is the Control
    function updatecolor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    // This is the View
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updatecolor}
                id="color-grey"
                label="grey"
                value="grey"
                style={{ backgroundColor: "grey" }}
                checked={color === "grey"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updatecolor}
                id="color-pink"
                label="pink"
                value="pink"
                style={{ backgroundColor: "pink" }}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updatecolor}
                id="color-cyan"
                label="cyan"
                value="cyan"
                style={{ backgroundColor: "cyan" }}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updatecolor}
                id="color-yellow"
                label="yellow"
                value="yellow"
                style={{ backgroundColor: "yellow" }}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updatecolor}
                id="color-red"
                label="red"
                value="red"
                style={{ backgroundColor: "red" }}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updatecolor}
                id="color-purple"
                label="purple"
                value="purple"
                style={{ backgroundColor: "purple" }}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updatecolor}
                id="color-black"
                label="black"
                value="black"
                style={{ backgroundColor: "black" }}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updatecolor}
                id="color-orange"
                label="orange"
                value="orange"
                style={{ backgroundColor: "orange" }}
            />
            <br></br>
            <span> You have chosen: </span>
            <span
                style={{
                    background: color
                }}
                data-testid="colored-box"
            >
                {color}
            </span>
        </div>
    );
}
