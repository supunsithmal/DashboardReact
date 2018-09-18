import * as userActions from "../constants/types";

const initialState = {
  id: "",
  item: {
    name: "",
    phone: "",
    email: ""
  },
  items: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.ADD_NEW_USER:
      state.item = action.payload;
      break;

    case userActions.FETCH_USERS:
      state.items = action.payload;
      break;

    default:
      break;
  }
  return { ...state };
};

export default userReducer;
