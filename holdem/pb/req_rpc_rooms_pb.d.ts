// package: holdem.pb
// file: protobuf/holdem/req_rpc_rooms.proto

import * as jspb from "google-protobuf";
import * as protobuf_holdem_define_pb from "../../protobuf/holdem/define_pb";

export class ClientMessageRpcRooms extends jspb.Message {
  clearRoomIdList(): void;
  getRoomIdList(): Array<number>;
  setRoomIdList(value: Array<number>): void;
  addRoomId(value: number, index?: number): number;

  getRpcId(): number;
  setRpcId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageRpcRooms.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageRpcRooms): ClientMessageRpcRooms.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageRpcRooms, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageRpcRooms;
  static deserializeBinaryFromReader(message: ClientMessageRpcRooms, reader: jspb.BinaryReader): ClientMessageRpcRooms;
}

export namespace ClientMessageRpcRooms {
  export type AsObject = {
    roomIdList: Array<number>,
    rpcId: number,
  }
}

export class ServerMessageRpcRooms extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getRpcId(): number;
  setRpcId(value: number): void;

  clearRoomsList(): void;
  getRoomsList(): Array<protobuf_holdem_define_pb.RoomRecord>;
  setRoomsList(value: Array<protobuf_holdem_define_pb.RoomRecord>): void;
  addRooms(value?: protobuf_holdem_define_pb.RoomRecord, index?: number): protobuf_holdem_define_pb.RoomRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageRpcRooms.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageRpcRooms): ServerMessageRpcRooms.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageRpcRooms, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageRpcRooms;
  static deserializeBinaryFromReader(message: ServerMessageRpcRooms, reader: jspb.BinaryReader): ServerMessageRpcRooms;
}

export namespace ServerMessageRpcRooms {
  export type AsObject = {
    status: number,
    rpcId: number,
    roomsList: Array<protobuf_holdem_define_pb.RoomRecord.AsObject>,
  }
}

