import * as userActions from "../constants/types";

const initialState = {
  id: "",
  user: {
    fname: "",
    lname: "",
    email: ""
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.ADD_NEW_USER:
      state.user = action.payload;
      break;

    default:
      break;
  }
  return { ...state };
};

export default userReducer;
