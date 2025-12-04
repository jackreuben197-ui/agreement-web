// package: holdem.pb
// file: protobuf/holdem/recv_g_jackpot_template_change.proto

import * as jspb from "google-protobuf";

export class ServerMessageJackpotTemplateChange extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageJackpotTemplateChange.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageJackpotTemplateChange): ServerMessageJackpotTemplateChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageJackpotTemplateChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageJackpotTemplateChange;
  static deserializeBinaryFromReader(message: ServerMessageJackpotTemplateChange, reader: jspb.BinaryReader): ServerMessageJackpotTemplateChange;
}

export namespace ServerMessageJackpotTemplateChange {
  export type AsObject = {
    id: number,
  }
}

