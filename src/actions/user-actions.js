import { ADD_NEW_USER, FETCH_USERS } from "../constants/types";

export const addUser = user => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(data => {
      console.log("Dispatching created user", data);
      dispatch({
        type: ADD_NEW_USER,
        payload: data.user
      });
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
