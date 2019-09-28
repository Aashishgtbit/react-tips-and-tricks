import { SIGNUP } from "../constants";

const signupAction = signupUser => ({
    type: SIGNUP,
    payload: signupUser
});

export default signupAction;
