import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import { loginUser, registerUser } from "../lib/api/user";
import { createRequestSaga } from "../lib/sagas";

const LOGIN = "auth/LOGIN";
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
const LOGIN_FAILRUE = "auth/LOGIN_FAILURE";

const REGISTER = "auth/REGISTER";
const REGISTER_SUCCESS = "auth/REGISTER_SUCCESS";
const REGISTER_FAILRUE = "auth/REGISTER_FAILRUE";

export const login = createAction(LOGIN);
export const register = createAction(REGISTER);

// 사가 생성
const loginSaga = createRequestSaga(LOGIN, loginUser);
const registerSaga = createRequestSaga(REGISTER, registerUser);

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(REGISTER, registerSaga);
}

const initialState = {
  id: "",
  name: "",
  dormitory: "",
  autherror: null,
};

const auth = handleActions(
  {
    [LOGIN_SUCCESS]: (state, action: any) => ({
      ...state,
      ...action.payload.user[0],
    }),
    [LOGIN_FAILRUE]: (state, action: any) => ({
      ...state,
      autherror: action.payload,
    }),
    [REGISTER_SUCCESS]: (state, action: any) => ({
      ...state,
      ...action.payload.user,
    }),
    [REGISTER_FAILRUE]: (state, action: any) => ({
      ...state,
      autherror: action.payload,
    }),
  },
  initialState
);

export default auth;
