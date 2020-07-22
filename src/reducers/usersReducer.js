import { USERS } from "../constants";

const usersReducer = (state = [], action) => {
  if (action.type === USERS.LOAD_SUCCESS) {
    return [...state, ...action.users];
  }
  return state;
};

export default usersReducer;
