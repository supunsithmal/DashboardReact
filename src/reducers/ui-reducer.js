import { SHOW_NEW_USER_ALERT } from "../constants/types";

const initialState = {
  isNewUserDialogOpened: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_NEW_USER_ALERT:
      return {
        ...state,
        isNewUserDialogOpened: action.payload
      };

    default:
      return state;
  }
}
