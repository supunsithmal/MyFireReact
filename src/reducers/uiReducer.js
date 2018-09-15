import { SHOW_NEW_DEVICE } from "../actions/types";

const initialState = {
  isNewDeviceShow: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_NEW_DEVICE:
      return { ...state, isNewDeviceShow: action.payload };
    default:
      return state;
  }
}
