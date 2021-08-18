import { call, put } from "redux-saga/effects";

type resultType = {
  config: any;
  data: any;
  headers: any;
  request: any;
  status: any;
  statusText: any;
};

export const createRequestSaga = function (type: string, request: any) {
  const SUCCEESS: string = `${type}_SUCCESS`;
  const FAILRUE: string = `${type}_FAILURE`;

  return function* (action: any) {
    try {
      const result: resultType = yield call(request, action.payload);
      console.log(result);
      yield put({
        type: SUCCEESS,
        payload: result.data,
        meta: result,
      });
    } catch (e) {
      yield put({ type: FAILRUE, payload: e, error: true });
    }
  };
};
