// package: holdem.pb
// file: protobuf/holdem/recv_gd_ready_start_all.proto

import * as jspb from "google-protobuf";

export class ServerMessageGdReadyStartAll extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getWaitDeadline(): number;
  setWaitDeadline(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdReadyStartAll.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdReadyStartAll): ServerMessageGdReadyStartAll.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdReadyStartAll, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdReadyStartAll;
  static deserializeBinaryFromReader(message: ServerMessageGdReadyStartAll, reader: jspb.BinaryReader): ServerMessageGdReadyStartAll;
}

export namespace ServerMessageGdReadyStartAll {
  export type AsObject = {
    seatId: number,
    waitDeadline: number,
  }
}

