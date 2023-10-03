import React, { useState } from "react";
import { Button } from "react-bootstrap";

//Birthday (April), Black Friday, Christmas, Thanksgiving, Halloween
type Holiday = "🎂" | "🛍️" | "🎄" | "🦃" | "🎃";

const advanceByAlphabet: Record<Holiday, Holiday> = {
    "🎂": "🛍️",
    "🛍️": "🎄",
    "🎄": "🎃",
    "🎃": "🦃",
    "🦃": "🎂"
};

const advanceByYear: Record<Holiday, Holiday> = {
    "🎂": "🎃",
    "🎃": "🦃",
    "🦃": "🛍️",
    "🛍️": "🎄",
    "🎄": "🎂"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, changeHoliday] = useState<Holiday>("🎂");
    return (
        <div>
            <Button
                onClick={() => {
                    const newHoliday: Holiday = advanceByAlphabet[holiday];
                    changeHoliday(newHoliday);
                }}
            >
                Advance by Alphabet
            </Button>

            <Button
                onClick={() => {
                    const newHoliday: Holiday = advanceByYear[holiday];
                    changeHoliday(newHoliday);
                }}
            >
                Advance by Year
            </Button>

            <p>Holiday: {holiday}</p>
        </div>
    );
}
