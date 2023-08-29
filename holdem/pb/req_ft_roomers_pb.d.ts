// package: holdem.pb
// file: protobuf/holdem/req_ft_roomers.proto

import * as jspb from "google-protobuf";
import * as protobuf_holdem_define_pb from "../../protobuf/holdem/define_pb";

export class ClientMessageFtRoomers extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): protobuf_holdem_define_pb.Room | undefined;
  setRoom(value?: protobuf_holdem_define_pb.Room): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageFtRoomers.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageFtRoomers): ClientMessageFtRoomers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageFtRoomers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageFtRoomers;
  static deserializeBinaryFromReader(message: ClientMessageFtRoomers, reader: jspb.BinaryReader): ClientMessageFtRoomers;
}

export namespace ClientMessageFtRoomers {
  export type AsObject = {
    room?: protobuf_holdem_define_pb.Room.AsObject,
  }
}

export class ServerMessageFtRoomers extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtRoomers.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtRoomers): ServerMessageFtRoomers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtRoomers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtRoomers;
  static deserializeBinaryFromReader(message: ServerMessageFtRoomers, reader: jspb.BinaryReader): ServerMessageFtRoomers;
}

export namespace ServerMessageFtRoomers {
  export type AsObject = {
    status: number,
  }
}

