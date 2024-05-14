// package: holdem.pb
// file: protobuf/holdem/recv_g_anti_cheat_room_video.proto

import * as jspb from "google-protobuf";

export class ServerMessageAntiCheatRoomVideo extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageAntiCheatRoomVideo.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageAntiCheatRoomVideo): ServerMessageAntiCheatRoomVideo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageAntiCheatRoomVideo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageAntiCheatRoomVideo;
  static deserializeBinaryFromReader(message: ServerMessageAntiCheatRoomVideo, reader: jspb.BinaryReader): ServerMessageAntiCheatRoomVideo;
}

export namespace ServerMessageAntiCheatRoomVideo {
  export type AsObject = {
    code: number,
    data: string,
  }
}

