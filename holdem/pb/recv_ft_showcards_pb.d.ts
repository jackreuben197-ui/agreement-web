// package: holdem.pb
// file: protobuf/holdem/recv_ft_showcards.proto

import * as jspb from "google-protobuf";
import * as protobuf_holdem_define_ft_pb from "../../protobuf/holdem/define_ft_pb";

export class ServerMessageFtShowcards extends jspb.Message {
  clearPlayerCardsGroupList(): void;
  getPlayerCardsGroupList(): Array<protobuf_holdem_define_ft_pb.PlayerCardsGroup>;
  setPlayerCardsGroupList(value: Array<protobuf_holdem_define_ft_pb.PlayerCardsGroup>): void;
  addPlayerCardsGroup(value?: protobuf_holdem_define_ft_pb.PlayerCardsGroup, index?: number): protobuf_holdem_define_ft_pb.PlayerCardsGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtShowcards.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtShowcards): ServerMessageFtShowcards.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtShowcards, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtShowcards;
  static deserializeBinaryFromReader(message: ServerMessageFtShowcards, reader: jspb.BinaryReader): ServerMessageFtShowcards;
}

export namespace ServerMessageFtShowcards {
  export type AsObject = {
    playerCardsGroupList: Array<protobuf_holdem_define_ft_pb.PlayerCardsGroup.AsObject>,
  }
}

