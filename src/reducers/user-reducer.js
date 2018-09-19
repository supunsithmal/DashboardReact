import * as userActions from "../constants/userActionTypes";

const initialState = {
  item: {
    id: "",
    name: "",
    phone: "",
    email: ""
  },
  items: [],
  progress: { loading: false, loaded: false, failed: false }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActions.CREATE_USER_PENDING:
      state.progress.loading = true;
      state.progress.loaded = false;
      state.progress.failed = false;
      break;

    case userActions.CREATE_USER_FULFILLED:
      state.item = action.payload;
      let user = action.payload.data.user;
      user.id = action.payload.data.id;
      state.items.push(user);
      state.progress.loading = false;
      state.progress.loaded = true;
      state.progress.failed = false;
      break;

    case userActions.CREATE_USER_REJECTED:
      state.progress.loading = false;
      state.progress.loaded = false;
      state.progress.failed = true;
      break;

    case userActions.GET_USER_LIST_PENDING:
      state.progress.loading = true;
      state.progress.loaded = false;
      state.progress.failed = false;
      break;

    case userActions.GET_USER_LIST_FULFILLED:
      state.progress.loading = false;
      state.progress.loaded = true;
      state.progress.failed = false;
      state.items = action.payload.data;
      break;

    case userActions.GET_USER_LIST_REJECTED:
      state.progress.loading = false;
      state.progress.loaded = false;
      state.progress.failed = true;
      break;

    default:
      break;
  }
  return { ...state };
};

export default userReducer;
