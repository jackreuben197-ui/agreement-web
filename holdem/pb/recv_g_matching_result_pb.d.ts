// package: holdem.pb
// file: protobuf/holdem/recv_g_matching_result.proto

import * as jspb from "google-protobuf";

export class ServerMessageMatchingResult extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getRoomId(): number;
  setRoomId(value: number): void;

  getBringIn(): number;
  setBringIn(value: number): void;

  getClubId(): number;
  setClubId(value: number): void;

  getToRoomId(): number;
  setToRoomId(value: number): void;

  getDeposit(): number;
  setDeposit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMatchingResult.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMatchingResult): ServerMessageMatchingResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMatchingResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMatchingResult;
  static deserializeBinaryFromReader(message: ServerMessageMatchingResult, reader: jspb.BinaryReader): ServerMessageMatchingResult;
}

export namespace ServerMessageMatchingResult {
  export type AsObject = {
    status: number,
    roomId: number,
    bringIn: number,
    clubId: number,
    toRoomId: number,
    deposit: number,
  }
}

