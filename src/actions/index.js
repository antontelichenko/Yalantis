import { USERS } from "../constants";

const loadUsers = () => ({
  type: USERS.LOAD,
});

const setUsers = (users) => ({
  type: USERS.LOAD_SUCCESS,
  users,
});

const setError = (error) => ({
  type: USERS.LOAD_FAIL,
  error,
});

export { loadUsers, setUsers, setError };
