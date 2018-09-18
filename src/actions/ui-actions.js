import { SHOW_NEW_USER_ALERT } from "../constants/types";

export const showNewUserDialog = isOpen => dispatch => {
  console.log("Show New User", isOpen);

  dispatch({
    type: SHOW_NEW_USER_ALERT,
    payload: isOpen
  });
};
