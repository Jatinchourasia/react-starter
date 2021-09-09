import { combineReducers } from "redux";
import usersReducer from "./reducer";

const rootReducer = combineReducers({
  userState: usersReducer,
});

export default rootReducer;
