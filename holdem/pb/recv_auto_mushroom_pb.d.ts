// package: holdem.pb
// file: protobuf/holdem/recv_auto_mushroom.proto

import * as jspb from "google-protobuf";

export class ServerMessageAutoMushroom extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getEnable(): boolean;
  setEnable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageAutoMushroom.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageAutoMushroom): ServerMessageAutoMushroom.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageAutoMushroom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageAutoMushroom;
  static deserializeBinaryFromReader(message: ServerMessageAutoMushroom, reader: jspb.BinaryReader): ServerMessageAutoMushroom;
}

export namespace ServerMessageAutoMushroom {
  export type AsObject = {
    seatId: number,
    enable: boolean,
  }
}

