import { all } from "redux-saga/effects";
import {
  getUserProfileDataWatcher,
  sendOTPWatcher,
  verifyOTPWatcher,
} from "./login";
import { getLinkedLoansWatcher } from "./home";
export default function* rootSaga() {
  yield all([
    sendOTPWatcher(),
    getUserProfileDataWatcher(),
    verifyOTPWatcher(),
    getLinkedLoansWatcher(),
  ]);
}
