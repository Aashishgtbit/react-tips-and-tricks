import connectHome from "./Home";
import connectAbout from "./About";
import Login from "./Login";
import Signup from "./Signup";
import NotFound from "./NotFound";

const routesConfig = [
    {
        path: "/",
        component: connectHome,
        name: "Landing"
    },
    {
        path: "/about",
        component: connectAbout,
        name: "About us "
    },
    {
        path: "/login",
        component: Login,
        name: "Login"
    },
    {
        path: "/signup",
        component: Signup,
        name: "Signup"
    },
    {
        component: NotFound,
        name: "Page not Found "
    }
];

export default routesConfig;
