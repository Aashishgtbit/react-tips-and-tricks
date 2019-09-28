import { LOGIN } from "../constants";

const userAuthInitialState = {
  email: "",
  password: ""
};

const loginReducer = (state = userAuthInitialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password
      };
    default:
      return state;
  }
};

export default loginReducer;
