import { USERS } from "../constants";

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case USERS.LOAD_FAIL:
      return action.error;
    case USERS.LOAD:
    case USERS.LOAD_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default errorReducer;
