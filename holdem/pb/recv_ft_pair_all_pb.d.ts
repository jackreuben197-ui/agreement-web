// package: holdem.pb
// file: protobuf/holdem/recv_ft_pair_all.proto

import * as jspb from "google-protobuf";

export class ServerMessageFtPairAll extends jspb.Message {
  getOperatorSeatId(): number;
  setOperatorSeatId(value: number): void;

  getHandGroupIndex(): number;
  setHandGroupIndex(value: number): void;

  getPublicCardsGroupIndex(): number;
  setPublicCardsGroupIndex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtPairAll.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtPairAll): ServerMessageFtPairAll.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtPairAll, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtPairAll;
  static deserializeBinaryFromReader(message: ServerMessageFtPairAll, reader: jspb.BinaryReader): ServerMessageFtPairAll;
}

export namespace ServerMessageFtPairAll {
  export type AsObject = {
    operatorSeatId: number,
    handGroupIndex: number,
    publicCardsGroupIndex: number,
  }
}

