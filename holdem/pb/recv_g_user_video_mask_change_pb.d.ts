// package: holdem.pb
// file: protobuf/holdem/recv_g_user_video_mask_change.proto

import * as jspb from "google-protobuf";

export class ServerMessageUserVideoMaskChange extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getUserRid(): number;
  setUserRid(value: number): void;

  getVideoMaskId(): number;
  setVideoMaskId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageUserVideoMaskChange.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageUserVideoMaskChange): ServerMessageUserVideoMaskChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageUserVideoMaskChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageUserVideoMaskChange;
  static deserializeBinaryFromReader(message: ServerMessageUserVideoMaskChange, reader: jspb.BinaryReader): ServerMessageUserVideoMaskChange;
}

export namespace ServerMessageUserVideoMaskChange {
  export type AsObject = {
    userId: number,
    userRid: number,
    videoMaskId: number,
  }
}

