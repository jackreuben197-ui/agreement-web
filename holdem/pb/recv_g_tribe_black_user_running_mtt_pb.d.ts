// package: holdem.pb
// file: protobuf/holdem/recv_g_tribe_black_user_running_mtt.proto

import * as jspb from "google-protobuf";

export class ServerMessageTribeUserRunningMtt extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getTribeId(): number;
  setTribeId(value: number): void;

  getTribeRid(): number;
  setTribeRid(value: number): void;

  getTribeName(): number;
  setTribeName(value: number): void;

  clearMatchIdsList(): void;
  getMatchIdsList(): Array<number>;
  setMatchIdsList(value: Array<number>): void;
  addMatchIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageTribeUserRunningMtt.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageTribeUserRunningMtt): ServerMessageTribeUserRunningMtt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageTribeUserRunningMtt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageTribeUserRunningMtt;
  static deserializeBinaryFromReader(message: ServerMessageTribeUserRunningMtt, reader: jspb.BinaryReader): ServerMessageTribeUserRunningMtt;
}

export namespace ServerMessageTribeUserRunningMtt {
  export type AsObject = {
    userId: number,
    tribeId: number,
    tribeRid: number,
    tribeName: number,
    matchIdsList: Array<number>,
  }
}

