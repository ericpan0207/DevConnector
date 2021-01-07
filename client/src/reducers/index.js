import { combineReducers } from "redux";
import { reducer as alertReducer } from "./alert";
import { reducer as authReducer } from "./auth";
import { reducer as profileReducer } from "./profile";
import { reducer as postReducer } from "./post";

export const reducer = combineReducers({
  alert: alertReducer,
  auth: authReducer,
  profile: profileReducer,
  post: postReducer,
});
