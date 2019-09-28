import { combineReducers } from "redux";

import counterReducer from "./counterReducer";
import loginReducer from "./loginReducer";
import signupReducer from "./signupReducer";

const rootReducer = combineReducers({
  counterReducer,
  loginReducer,
  signupReducer
});

export default rootReducer;
