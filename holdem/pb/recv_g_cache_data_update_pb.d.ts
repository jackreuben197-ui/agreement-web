// package: holdem.pb
// file: protobuf/holdem/recv_g_cache_data_update.proto

import * as jspb from "google-protobuf";

export class ServerMessageCacheDataUpdate extends jspb.Message {
  clearCreateJackpotTemplateIdsList(): void;
  getCreateJackpotTemplateIdsList(): Array<number>;
  setCreateJackpotTemplateIdsList(value: Array<number>): void;
  addCreateJackpotTemplateIds(value: number, index?: number): number;

  clearUpdateJackpotTemplateIdsList(): void;
  getUpdateJackpotTemplateIdsList(): Array<number>;
  setUpdateJackpotTemplateIdsList(value: Array<number>): void;
  addUpdateJackpotTemplateIds(value: number, index?: number): number;

  clearDeleteJackpotTemplateIdsList(): void;
  getDeleteJackpotTemplateIdsList(): Array<number>;
  setDeleteJackpotTemplateIdsList(value: Array<number>): void;
  addDeleteJackpotTemplateIds(value: number, index?: number): number;

  clearCreateRoomTemplateIdsList(): void;
  getCreateRoomTemplateIdsList(): Array<number>;
  setCreateRoomTemplateIdsList(value: Array<number>): void;
  addCreateRoomTemplateIds(value: number, index?: number): number;

  clearUpdateRoomTemplateIdsList(): void;
  getUpdateRoomTemplateIdsList(): Array<number>;
  setUpdateRoomTemplateIdsList(value: Array<number>): void;
  addUpdateRoomTemplateIds(value: number, index?: number): number;

  clearDeleteRoomTemplateIdsList(): void;
  getDeleteRoomTemplateIdsList(): Array<number>;
  setDeleteRoomTemplateIdsList(value: Array<number>): void;
  addDeleteRoomTemplateIds(value: number, index?: number): number;

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
    createJackpotTemplateIdsList: Array<number>,
    updateJackpotTemplateIdsList: Array<number>,
    deleteJackpotTemplateIdsList: Array<number>,
    createRoomTemplateIdsList: Array<number>,
    updateRoomTemplateIdsList: Array<number>,
    deleteRoomTemplateIdsList: Array<number>,
  }
}

