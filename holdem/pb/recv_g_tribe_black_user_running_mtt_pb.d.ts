// package: holdem.pb
// file: protobuf/holdem/recv_g_tribe_black_user_running_mtt.proto

import * as jspb from "google-protobuf";

export class ServerMessageTribeBlackUserRunningMtt extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getTribeId(): number;
  setTribeId(value: number): void;

  getTribeRid(): number;
  setTribeRid(value: number): void;

  getTribeName(): string;
  setTribeName(value: string): void;

  clearMatchIdsList(): void;
  getMatchIdsList(): Array<number>;
  setMatchIdsList(value: Array<number>): void;
  addMatchIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageTribeBlackUserRunningMtt.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageTribeBlackUserRunningMtt): ServerMessageTribeBlackUserRunningMtt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageTribeBlackUserRunningMtt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageTribeBlackUserRunningMtt;
  static deserializeBinaryFromReader(message: ServerMessageTribeBlackUserRunningMtt, reader: jspb.BinaryReader): ServerMessageTribeBlackUserRunningMtt;
}

export namespace ServerMessageTribeBlackUserRunningMtt {
  export type AsObject = {
    userId: number,
    tribeId: number,
    tribeRid: number,
    tribeName: string,
    matchIdsList: Array<number>,
  }
}

