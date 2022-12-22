import { put, takeLatest, call } from "redux-saga/effects";
import { getApi } from "../../shared";
import { APIS } from "../../utils/api-urls";
import { API } from "../../utils/constants";
import { types as actionTypes } from "../ducks/home";

function* getLinkedLoans(action) {
  try {
    const response = yield call(
      getApi,
      API.global,
      APIS.LINKED_LOANS,
      action.data
    );
    if (response.status === 200) {
      yield put({
        type: actionTypes.GET_LINKED_LOANS_SUCCESS,
        data: response.data,
      });
    } else {
      yield put({
        type: actionTypes.GET_LINKED_LOANS_FAIL,
        data: response.data,
      });
    }
  } catch (e) {
    yield put({ type: actionTypes.GET_LINKED_LOANS_FAIL, data: e });
  }
}

export function* getLinkedLoansWatcher() {
  yield takeLatest(actionTypes.GET_LINKED_LOANS, getLinkedLoans);
}
