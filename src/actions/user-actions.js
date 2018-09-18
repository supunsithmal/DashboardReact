import { ADD_NEW_USER, FETCH_USERS } from "../constants/types";

export const addUser = user => dispatch => {
  console.log("Adding new user", user);
  dispatch({
    type: ADD_NEW_USER,
    payload: user
  });
};

export const fetchUsers = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      console.log("Dispatching users");
      dispatch({
        type: FETCH_USERS,
        payload: data
      });
    });
};
