import { SIGNUP } from "../constants";

const userAuthInitialState = {
  name: "",
  email: "",
  organisation: "",
  password: ""
};

const signupReducer = (state = userAuthInitialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        organisation: action.payload.organisation,
        password: action.payload.password
      };
    default:
      return state;
  }
};

export default signupReducer;
