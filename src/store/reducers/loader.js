import { SET_LOADER } from "../actionTypes";

export default (state = false, action) => {
  switch (action.type) {
    case SET_LOADER:
      return action.x;
    default:
      return state;
  }
};
