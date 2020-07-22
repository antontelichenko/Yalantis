import { combineReducers } from "redux";

import loadingReducer from "./loadingReducer";
import usersReducer from "./usersReducer";
import errorReducer from "./errorReducers";

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  users: usersReducer,
  error: errorReducer,
});

export default rootReducer;
