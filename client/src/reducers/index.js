import { combineReducers } from "redux";
import { reducer as alertReducer } from "./alert";
import { reducer as authReducer } from "./auth";

export const reducer = combineReducers({
  alert: alertReducer,
  auth: authReducer,
});
