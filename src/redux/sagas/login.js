import { put, takeLatest, call } from "redux-saga/effects";
import { getApi, postApi } from "../../shared";
import { APIS } from "../../utils/api-urls";
import { API } from "../../utils/constants";
import { types as actionTypes } from "../ducks/login";

function* sendOTP(action) {
  try {
    const response = yield call(
      postApi,
      API.global,
      APIS.SEND_OTP,
      action.payload
    );
    if (response.status === 200) {
      yield put({ type: actionTypes.SEND_OTP_SUCCESS, data: response.data });
    } else {
      yield put({ type: actionTypes.SEND_OTP_FAIL, data: response.data });
    }
  } catch (e) {
    yield put({ type: actionTypes.SEND_OTP_FAIL, data: e });
  }
}
export function* sendOTPWatcher() {
  yield takeLatest(actionTypes.SEND_OTP, sendOTP);
}

function* verifyOTP(action) {
  try {
    const response = yield call(
      postApi,
      API.global,
      APIS.SEND_OTP,
      action.payload
    );
    if (response.status === 200) {
      yield put({ type: actionTypes.SEND_OTP_SUCCESS, data: response.data });
    } else {
      yield put({ type: actionTypes.SEND_OTP_FAIL, data: response.data });
    }
  } catch (e) {
    yield put({ type: actionTypes.SEND_OTP_FAIL, data: e });
  }
}
export function* verifyOTPWatcher() {
  yield takeLatest(actionTypes.VERIFY_OTP, verifyOTP);
}

function* getUserProfileData(action) {
  try {
    const response = yield call(
      getApi,
      API.global,
      APIS.GET_USER_PROFILE_DATA,
      action.payload
    );
    if (response.status === 200) {
      yield put({
        type: actionTypes.GET_USER_PROFILE_DATA_SUCCESS,
        data: response.data,
      });
    } else {
      yield put({
        type: actionTypes.GET_USER_PROFILE_DATA_FAIL,
        data: response.data,
      });
    }
  } catch (e) {
    yield put({ type: actionTypes.GET_USER_PROFILE_DATA_FAIL, data: e });
  }
}
export function* getUserProfileDataWatcher() {
  yield takeLatest(actionTypes.GET_USER_PROFILE_DATA, getUserProfileData);
}
