import {
  GET_USER_LIST,
  CREATE_USER,
  CREATE_USER_FULFILLED
} from "../constants/userActionTypes";
import API from "../services/API";

export function addUser(user) {
  return {
    type: CREATE_USER,
    payload: API.post("/users", user)
  };
}

export function fetchUsers() {
  return {
    type: GET_USER_LIST,
    payload: API.get("/users")
  };
}
