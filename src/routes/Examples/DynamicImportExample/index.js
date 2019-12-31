import React, { useState, useCallback } from "react";
import "./style.scss";
// Dynamic import example .

export default function DynamicImport() {
    const a = 10;
    const b = 20;
    const [sum, setSum] = useState(0);

    const addData = useCallback(() => {
        // Dynamic import syntax .
        import("lodash").then(_ => {
            setSum(_.add(a, b));
        });
    }, []);

    return (
        <div className="wrapper-dynamic-import">
            <h2> Dynamic Import Example</h2>
            <button onClick={addData} type="button">
                Add
            </button>
            <div>
                sum is
                {sum}
            </div>
        </div>
    );
}
