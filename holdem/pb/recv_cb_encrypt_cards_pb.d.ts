// package: holdem.pb
// file: protobuf/holdem/recv_cb_encrypt_cards.proto

import * as jspb from "google-protobuf";
import * as protobuf_holdem_define_cb_pb from "../../protobuf/holdem/define_cb_pb";

export class ServerMessageCBEncryptCards extends jspb.Message {
  getGameNum(): number;
  setGameNum(value: number): void;

  hasCutUser(): boolean;
  clearCutUser(): void;
  getCutUser(): protobuf_holdem_define_cb_pb.CBUser | undefined;
  setCutUser(value?: protobuf_holdem_define_cb_pb.CBUser): void;

  getCutOffset(): number;
  setCutOffset(value: number): void;

  clearCardsList(): void;
  getCardsList(): Array<string>;
  setCardsList(value: Array<string>): void;
  addCards(value: string, index?: number): string;

  getCutType(): number;
  setCutType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageCBEncryptCards.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageCBEncryptCards): ServerMessageCBEncryptCards.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageCBEncryptCards, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageCBEncryptCards;
  static deserializeBinaryFromReader(message: ServerMessageCBEncryptCards, reader: jspb.BinaryReader): ServerMessageCBEncryptCards;
}

export namespace ServerMessageCBEncryptCards {
  export type AsObject = {
    gameNum: number,
    cutUser?: protobuf_holdem_define_cb_pb.CBUser.AsObject,
    cutOffset: number,
    cardsList: Array<string>,
    cutType: number,
  }
}

