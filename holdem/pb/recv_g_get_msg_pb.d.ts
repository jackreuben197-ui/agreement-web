// package: holdem.pb
// file: protobuf/holdem/recv_g_get_msg.proto

import * as jspb from "google-protobuf";

export class ServerMessageGlobalGetMsg extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  getExtra(): Uint8Array | string;
  getExtra_asU8(): Uint8Array;
  getExtra_asB64(): string;
  setExtra(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGlobalGetMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGlobalGetMsg): ServerMessageGlobalGetMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGlobalGetMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGlobalGetMsg;
  static deserializeBinaryFromReader(message: ServerMessageGlobalGetMsg, reader: jspb.BinaryReader): ServerMessageGlobalGetMsg;
}

export namespace ServerMessageGlobalGetMsg {
  export type AsObject = {
    message: string,
    extra: Uint8Array | string,
  }
}

