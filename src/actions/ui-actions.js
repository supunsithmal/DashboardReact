import { SHOW_NEW_USER_ALERT } from "../constants/types";

export function showNewUserDialog(isOpen) {
  return {
    type: SHOW_NEW_USER_ALERT,
    payload: isOpen
  };
}
