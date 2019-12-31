import Examples from "./Examples";
import LazyLoadingExample from "./Examples/LazyLoadingExample";
import HooksExample from "./Examples/HooksExample";
import DynamicImport from "./Examples/DynamicImportExample";

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
