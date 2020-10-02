import { SET_PAGE } from "../actionTypes";

export default (state = "Armax", action) => {
  switch (action.type) {
    case SET_PAGE:
      document.title = `${action.page} || Armax`;
      return action.page;
    default:
      return state;
  }
};
