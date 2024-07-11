// package: holdem.pb
// file: protobuf/holdem/recv_gd_wait_ready_start.proto

import * as jspb from "google-protobuf";

export class ServerMessageGdWaitReadyStart extends jspb.Message {
  getWaitDeadline(): number;
  setWaitDeadline(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdWaitReadyStart.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdWaitReadyStart): ServerMessageGdWaitReadyStart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdWaitReadyStart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdWaitReadyStart;
  static deserializeBinaryFromReader(message: ServerMessageGdWaitReadyStart, reader: jspb.BinaryReader): ServerMessageGdWaitReadyStart;
}

export namespace ServerMessageGdWaitReadyStart {
  export type AsObject = {
    waitDeadline: number,
  }
}

