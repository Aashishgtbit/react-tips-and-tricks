import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./style.scss";

const CodeHighlighter = props => {
    const { codeString } = props;

    return (
        <>
            <div className="demo-heading"> Demo : </div>
            <div className="wrapper-code-demo">
                <SyntaxHighlighter language="javascript" style={docco}>
                    {codeString}
                </SyntaxHighlighter>
            </div>
        </>
    );
};

export default CodeHighlighter;
