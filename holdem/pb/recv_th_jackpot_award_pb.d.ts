// package: holdem.pb
// file: protobuf/holdem/recv_th_jackpot_award.proto

import * as jspb from "google-protobuf";

export class ServerMessageJackpotAward extends jspb.Message {
  getHandNum(): number;
  setHandNum(value: number): void;

  getUserRid(): number;
  setUserRid(value: number): void;

  getNickname(): string;
  setNickname(value: string): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  getAward(): number;
  setAward(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageJackpotAward.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageJackpotAward): ServerMessageJackpotAward.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageJackpotAward, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageJackpotAward;
  static deserializeBinaryFromReader(message: ServerMessageJackpotAward, reader: jspb.BinaryReader): ServerMessageJackpotAward;
}

export namespace ServerMessageJackpotAward {
  export type AsObject = {
    handNum: number,
    userRid: number,
    nickname: string,
    avatar: string,
    award: number,
  }
}

