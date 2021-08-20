import { eventChannel, Buffer, buffers, EventChannel } from "redux-saga";
import socket from "./socket";

type Subscribe = {
  eventType: string;
  buffer: Buffer<any>;
  text: string | undefined;
};

export function createSocketChannel(params: Subscribe): EventChannel<any> {
  return eventChannel<string>((emit) => {
    const emitter = (message: string) => emit(message);
    params.eventType.includes("Recieve")
      ? socket.on(params.eventType, emitter)
      : socket.emit(params.eventType, params.text);
    return function unsubscribe() {
      socket.off(params.eventType, emitter);
    };
  }, params.buffer || buffers.none());
}

export function closeChannel(channel: EventChannel<any>) {
  if (channel) {
    channel.close();
  }
}
