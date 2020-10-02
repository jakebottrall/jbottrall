import { combineReducers } from "redux";

import loader from "./loader";
import page from "./page";
import snackbars from "./snackbars";

const rootReducer = combineReducers({
  page,
  loader,
  snackbars,
});

export default rootReducer;
