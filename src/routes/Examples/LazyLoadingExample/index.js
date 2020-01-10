import React, { Suspense } from "react";
// import { Alert } from "reactstrap";
import Loader from "../../../components/Loader";
import "./style.scss";
import CodeHighlighter from "../../../components/CodeHighlighter";
import CODE_EXAMPLES from "../../../utils/appConstants";

export default function LazyLoadingExample() {
    const Alert = React.lazy(() =>
        import(
            /* webpackChunkName : "reactstrapChunk" */ "reactstrap/lib/Alert"
        )
    );
    return (
        <div className="wrapper-lazy-load">
            <h2> Lazy loading Example</h2>
            <Suspense fallback={<Loader />}>
                <Alert color="success">This is Example of Lazy Loading</Alert>
            </Suspense>
            <CodeHighlighter codeString={CODE_EXAMPLES.lazyLoadExampleCode} />
        </div>
    );
}
