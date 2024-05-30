// package: holdem.pb
// file: protobuf/holdem/recv_th_jackpot_gold_change.proto

import * as jspb from "google-protobuf";
import * as protobuf_holdem_define_pb from "../../protobuf/holdem/define_pb";

export class ServerMessageJackpotGoldChange extends jspb.Message {
  getJackpotId(): number;
  setJackpotId(value: number): void;

  getJackpotGold(): number;
  setJackpotGold(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageJackpotGoldChange.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageJackpotGoldChange): ServerMessageJackpotGoldChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageJackpotGoldChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageJackpotGoldChange;
  static deserializeBinaryFromReader(message: ServerMessageJackpotGoldChange, reader: jspb.BinaryReader): ServerMessageJackpotGoldChange;
}

export namespace ServerMessageJackpotGoldChange {
  export type AsObject = {
    jackpotId: number,
    jackpotGold: number,
  }
}

