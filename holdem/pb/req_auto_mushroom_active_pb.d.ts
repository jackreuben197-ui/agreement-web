// package: holdem.pb
// file: protobuf/holdem/req_auto_mushroom_active.proto

import * as jspb from "google-protobuf";
import * as protobuf_holdem_define_pb from "../../protobuf/holdem/define_pb";

export class ClientMessageAutoMushroomActive extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): protobuf_holdem_define_pb.Room | undefined;
  setRoom(value?: protobuf_holdem_define_pb.Room): void;

  getEnable(): boolean;
  setEnable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageAutoMushroomActive.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageAutoMushroomActive): ClientMessageAutoMushroomActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageAutoMushroomActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageAutoMushroomActive;
  static deserializeBinaryFromReader(message: ClientMessageAutoMushroomActive, reader: jspb.BinaryReader): ClientMessageAutoMushroomActive;
}

export namespace ClientMessageAutoMushroomActive {
  export type AsObject = {
    room?: protobuf_holdem_define_pb.Room.AsObject,
    enable: boolean,
  }
}

export class ServerMessageAutoMushroomActive extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageAutoMushroomActive.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageAutoMushroomActive): ServerMessageAutoMushroomActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageAutoMushroomActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageAutoMushroomActive;
  static deserializeBinaryFromReader(message: ServerMessageAutoMushroomActive, reader: jspb.BinaryReader): ServerMessageAutoMushroomActive;
}

export namespace ServerMessageAutoMushroomActive {
  export type AsObject = {
    status: number,
  }
}

