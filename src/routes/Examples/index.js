import React from "react";
import DynamicImportExample from "./DynamicImportExample";
import HooksExample from "./HooksExample";
import LazyLoadingExample from "./LazyLoadingExample";

export default function Examples() {
    return (
        <div className="wrapper-example">
            <DynamicImportExample />
            <HooksExample />
            <LazyLoadingExample />
        </div>
    );
}
