import { combineReducers } from "redux";

import loader from "./loader";
import snackbars from "./snackbars";

const rootReducer = combineReducers({
  loader,
  snackbars,
});

export default rootReducer;
