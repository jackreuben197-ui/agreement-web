// package: holdem.pb
// file: protobuf/holdem/recv_hand_clear.proto

import * as jspb from "google-protobuf";
import * as protobuf_holdem_define_pb from "../../protobuf/holdem/define_pb";

export class ServerMessageHandClear extends jspb.Message {
  getHandNum(): number;
  setHandNum(value: number): void;

  hasNextHandChange(): boolean;
  clearNextHandChange(): void;
  getNextHandChange(): protobuf_holdem_define_pb.NextHandInfoChange | undefined;
  setNextHandChange(value?: protobuf_holdem_define_pb.NextHandInfoChange): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageHandClear.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageHandClear): ServerMessageHandClear.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageHandClear, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageHandClear;
  static deserializeBinaryFromReader(message: ServerMessageHandClear, reader: jspb.BinaryReader): ServerMessageHandClear;
}

export namespace ServerMessageHandClear {
  export type AsObject = {
    handNum: number,
    nextHandChange?: protobuf_holdem_define_pb.NextHandInfoChange.AsObject,
  }
}

