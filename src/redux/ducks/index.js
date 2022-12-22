import { combineReducers } from "redux";
import { types as actionTypes } from "../ducks/conf";
import loginState from "./login";
import confState from "./conf";
import homeState from "./home";

const appReducer = combineReducers({
  loginState,
  confState,
  homeState,
});
const rootReducer = (state, action) => {
  if (action.type === actionTypes.LOGOUT_USER) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};
export default rootReducer;

//WHITELIST WHAT TO PERSIST (INCLUDE THE REDUCER FORM COMBINED REDUCER )
export const whitelisted = [
  "confState",
  // "inviteDetails"
];
