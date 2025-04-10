// package: holdem.pb
// file: protobuf/holdem/recv_g_cache_data_update.proto

import * as jspb from "google-protobuf";

export class ServerMessageCacheDataUpdate extends jspb.Message {
  clearJackpotTemplateIdsList(): void;
  getJackpotTemplateIdsList(): Array<number>;
  setJackpotTemplateIdsList(value: Array<number>): void;
  addJackpotTemplateIds(value: number, index?: number): number;

  clearRoomTemplateIdsList(): void;
  getRoomTemplateIdsList(): Array<number>;
  setRoomTemplateIdsList(value: Array<number>): void;
  addRoomTemplateIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageCacheDataUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageCacheDataUpdate): ServerMessageCacheDataUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageCacheDataUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageCacheDataUpdate;
  static deserializeBinaryFromReader(message: ServerMessageCacheDataUpdate, reader: jspb.BinaryReader): ServerMessageCacheDataUpdate;
}

export namespace ServerMessageCacheDataUpdate {
  export type AsObject = {
    jackpotTemplateIdsList: Array<number>,
    roomTemplateIdsList: Array<number>,
  }
}

