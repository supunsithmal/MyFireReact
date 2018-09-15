import { SHOW_NEW_DEVICE } from "./types";

export const showNewDevice = isOpen => dispatch => {
  dispatch({
    type: SHOW_NEW_DEVICE,
    payload: isOpen
  });
};
