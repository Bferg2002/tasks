import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    id="edit-switch"
                    label="Please Enter Name"
                    type="switch"
                    checked={editMode}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setEditMode(event.target.checked)
                    }
                />
            </div>
            <div>
                {editMode ? (
                    <Form.Group>
                        <Form.Label>Your Name:</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => setName(event.target.value)}
                        />
                    </Form.Group>
                ) : (
                    <div></div> //condition for when edit mode is false
                )}
            </div>
            <div>
                {editMode ? (
                    <Form.Check
                        id="student-check"
                        type="checkbox"
                        label="Student?"
                        checked={student}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setStudent(event.target.checked)}
                    />
                ) : (
                    <div></div> //condition for when edit mode is false
                )}
            </div>
            <div>
                {!editMode && student ? (
                    <span>{name} is a Student.</span>
                ) : !editMode && !student ? (
                    <span>{name} is not a Student.</span>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}
