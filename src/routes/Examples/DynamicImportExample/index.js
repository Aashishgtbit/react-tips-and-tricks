import React, { useState, useCallback } from "react";
import "./style.scss";
// import AsyncComponent from "../../../components/AsyncComponent";
import CODE_EXAMPLES from "../../../utils/appConstants";

import CodeHighlighter from "../../../components/CodeHighlighter";

// console.log("CodeHighlighter :", CodeHighlighter);
// Dynamic import example .

export default function DynamicImport() {
    const a = 10;
    const b = 20;
    const [sum, setSum] = useState(0);

    const addData = useCallback(() => {
        // Dynamic import syntax .
        import(/* webpackChunkName: "lodashChunk" */ "lodash/add").then(add => {
            setSum(add.default(a, b));
        });
    }, []);

    return (
        <div className="wrapper-dynamic-import">
            <h2> Dynamic Import Example</h2>
            <div>
                <button onClick={addData} type="button">
                    Add
                </button>
            </div>
            <div>
                sum is
                {sum}
            </div>
            {/* <AsyncComponent
              moduleProvider={CodeHighlighter}
              codeString={CODE_EXAMPLES.dynamicImport}
            /> */}
            <CodeHighlighter codeString={CODE_EXAMPLES.dynamicImport} />
        </div>
    );
}
