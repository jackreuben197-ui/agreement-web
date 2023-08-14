// package: holdem.pb
// file: protobuf/holdem/req_user_playing.proto

import * as jspb from "google-protobuf";

export class ClientMessageUserPlaying extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageUserPlaying.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageUserPlaying): ClientMessageUserPlaying.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageUserPlaying, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageUserPlaying;
  static deserializeBinaryFromReader(message: ClientMessageUserPlaying, reader: jspb.BinaryReader): ClientMessageUserPlaying;
}

export namespace ClientMessageUserPlaying {
  export type AsObject = {
  }
}

export class ServerMessageUserPlaying extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  clearRoomIdList(): void;
  getRoomIdList(): Array<number>;
  setRoomIdList(value: Array<number>): void;
  addRoomId(value: number, index?: number): number;

  clearMatchIdList(): void;
  getMatchIdList(): Array<number>;
  setMatchIdList(value: Array<number>): void;
  addMatchId(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageUserPlaying.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageUserPlaying): ServerMessageUserPlaying.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageUserPlaying, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageUserPlaying;
  static deserializeBinaryFromReader(message: ServerMessageUserPlaying, reader: jspb.BinaryReader): ServerMessageUserPlaying;
}

export namespace ServerMessageUserPlaying {
  export type AsObject = {
    status: number,
    roomIdList: Array<number>,
    matchIdList: Array<number>,
  }
}

