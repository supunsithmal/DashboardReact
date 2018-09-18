import * as userActions from "../constants/types";

const initialState = {
  id: "",
  user: {
    name: "",
    phone: "",
    email: ""
  },
  users: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.ADD_NEW_USER:
      state.user = action.payload;
      break;

    case userActions.FETCH_USERS:
      state.users = action.payload;
      break;

    default:
      break;
  }
  return { ...state };
};

export default userReducer;
