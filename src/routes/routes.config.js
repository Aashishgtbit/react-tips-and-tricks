import connectHome from "./Home";
import Examples from "./Examples";

const routesConfig = [
    {
        path: "/",
        component: connectHome,
        name: "Landing"
    },
    {
        path: "/examples",
        component: Examples,
        name: "Examples"
    }
];

export default routesConfig;
