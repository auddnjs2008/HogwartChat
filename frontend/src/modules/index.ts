import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import auth, { authSaga } from "./auth";
import socketRedux, { socketSaga } from "./socket";

const rootReducer = combineReducers({
  auth,
  socketRedux,
});

export function* rootSaga() {
  yield all([authSaga(), socketSaga()]);
}

export default rootReducer;
