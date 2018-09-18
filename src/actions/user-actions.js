import { ADD_NEW_USER } from "../constants/types";

export const addUser = user => dispatch => {
  console.log("Adding new user", user);
  dispatch({
    type: ADD_NEW_USER,
    payload: user
  });
};
