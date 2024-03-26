// package: holdem.pb
// file: protobuf/holdem/recv_th_entrypt_cards.proto

import * as jspb from "google-protobuf";
import * as protobuf_holdem_define_pb from "../../protobuf/holdem/define_pb";

export class ServerMessageEntryptCards extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getCutOffset(): number;
  setCutOffset(value: number): void;

  clearCardsList(): void;
  getCardsList(): Array<string>;
  setCardsList(value: Array<string>): void;
  addCards(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageEntryptCards.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageEntryptCards): ServerMessageEntryptCards.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageEntryptCards, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageEntryptCards;
  static deserializeBinaryFromReader(message: ServerMessageEntryptCards, reader: jspb.BinaryReader): ServerMessageEntryptCards;
}

export namespace ServerMessageEntryptCards {
  export type AsObject = {
    seatId: number,
    cutOffset: number,
    cardsList: Array<string>,
  }
}

