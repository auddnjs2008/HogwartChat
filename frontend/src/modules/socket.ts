import { SagaIterator } from "@redux-saga/types";
import { buffers, EventChannel, Buffer } from "@redux-saga/core";
import { take, call, CallEffect, ChannelTakeEffect } from "redux-saga/effects";
import * as Eff from "redux-saga/effects";
import { closeChannel, createSocketChannel } from "../lib/createSocketChannel";
import { createAction, handleActions } from "redux-actions";

const takeEvery: any = Eff.takeEvery;
const fork: any = Eff.fork;
const SEND_CHAT = "socket/SEND_CHAT";
const RECEIVE_CHAT = "socket/RECEIVE_CHAT";
type Subscribe = {
  eventType: string;
  buffer: Buffer<any>;
  text: string | undefined;
};

export const sendChat = createAction(SEND_CHAT);
export const receiveChat = createAction(RECEIVE_CHAT);

const initialState = {};

const socketRedux = handleActions(
  {
    [SEND_CHAT]: (state) => ({ ...state }),
    [RECEIVE_CHAT]: (state) => ({ ...state }),
  },
  initialState
);

function onMessageCall(params: Subscribe): CallEffect<any> {
  return call(createSocketChannel, params);
}

function* onRecieveMessage() {
  let channel: EventChannel<any>;
  const buffer = buffers.sliding(1);
  channel = yield onMessageCall({
    eventType: "Hall_Recieve",
    buffer,
    text: "",
  });
  while (true) {
    try {
      const message: ChannelTakeEffect<any> = yield take(channel);
      console.log(message);
    } catch (e) {
      alert(e.message);
    } finally {
      closeChannel(channel);
    }
  }
}
function* onSendMessage(action: any) {
  let channel: EventChannel<any>;
  const buffer = buffers.sliding(10);
  channel = yield onMessageCall({
    eventType: "Hall_Send",
    buffer,
    text: action.payload.message,
  });
  while (true) {
    try {
      const message: ChannelTakeEffect<any> = yield take(channel);
      console.log(message);
    } catch (e) {
      alert(e.message);
    } finally {
      closeChannel(channel);
    }
  }
}

export function* socketSaga(): any {
  yield takeEvery(RECEIVE_CHAT, onRecieveMessage);
  yield takeEvery(SEND_CHAT, onSendMessage);
}

export default socketRedux;
