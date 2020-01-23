import React from "react";
// import Examples from "./Examples";
// import LazyLoadingExample from "./Examples/LazyLoadingExample";
// import HooksExample from "./Examples/HooksExample";
// import DynamicImport from "./Examples/DynamicImportExample";

// lazily import route components .
const Examples = React.lazy(() =>
    import(/* webpackChunkName : "HomePage" */ "./Examples")
);
const LazyLoadingExample = React.lazy(() =>
    import(
        /* webpackChunkName : "LazyLoadingExample" */ "./Examples/LazyLoadingExample"
    )
);
const HooksExample = React.lazy(() =>
    import(/* webpackChunkName : "HooksExample" */ "./Examples/HooksExample")
);
const DynamicImport = React.lazy(() =>
    import(
        /* webpackChunkName : "DynamicImportExample" */ "./Examples/DynamicImportExample"
    )
);

const routesConfig = [
    {
        path: "/",
        component: Examples,
        name: "Examples"
    },
    {
        path: "/lazy-load",
        component: LazyLoadingExample,
        name: "LazyLoadingExample"
    },
    {
        path: "/dynamic-import",
        component: DynamicImport,
        name: "DynamicImportExample"
    },
    {
        path: "/hooks",
        component: HooksExample,
        name: "HooksExample"
    }
];

export default routesConfig;
