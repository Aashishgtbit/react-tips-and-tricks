import React from "react";

import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";
import "./style.scss";
import AsyncComponent from "../AsyncComponent";

const CodeHighlighter = props => {
    const { codeString } = props;
    const SyntaxHighlighter = () =>
        import(
            /* webpackChunkName: "react-syntax-highlighter-chunk" */
            "react-syntax-highlighter/dist/esm/prism-light"
        );

    return (
        <>
            <div className="demo-heading"> Demo : </div>
            <div className="wrapper-code-demo">
                <AsyncComponent
                  moduleProvider={SyntaxHighlighter}
                  style={prism}
                  language="jsx"
                >
                    {codeString}
                </AsyncComponent>
            </div>
        </>
    );
};

export default CodeHighlighter;
