// package: holdem.pb
// file: protobuf/holdem/recv_gd_ready_start_others.proto

import * as jspb from "google-protobuf";

export class ServerMessageGdReadyStartOthers extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdReadyStartOthers.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdReadyStartOthers): ServerMessageGdReadyStartOthers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdReadyStartOthers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdReadyStartOthers;
  static deserializeBinaryFromReader(message: ServerMessageGdReadyStartOthers, reader: jspb.BinaryReader): ServerMessageGdReadyStartOthers;
}

export namespace ServerMessageGdReadyStartOthers {
  export type AsObject = {
    seatId: number,
  }
}

