import { eventChannel, buffers } from "redux-saga";
import socket from "../socket";

// 기본 matcher, buffer

const defaultBuffer = buffers.none();

//소켓 이벤트채널 생성 팩토리 함수
export const createSocketChannel = (
  eventType: string,
  buffer = defaultBuffer
) => {
  return eventChannel((emit) => {
    const emitter = (message: string) => {
      emit(message);
    };
    socket.on(eventType, emitter);
    return () => {
      socket.off(eventType, emitter);
    };
  }, buffer);
};
