import { LOGIN } from "../constants";

const loginAction = loginUser => ({
    type: LOGIN,
    payload: loginUser
});

export default loginAction;
