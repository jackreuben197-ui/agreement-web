// package: holdem.pb
// file: protobuf/holdem/recv_ft_fantasy_action.proto

import * as jspb from "google-protobuf";
import * as protobuf_holdem_define_pb from "../../protobuf/holdem/define_pb";
import * as protobuf_holdem_define_ft_pb from "../../protobuf/holdem/define_ft_pb";

export class ServerMessageFtFantasyAction extends jspb.Message {
  getRound(): protobuf_holdem_define_pb.Def.RoundMap[keyof protobuf_holdem_define_pb.Def.RoundMap];
  setRound(value: protobuf_holdem_define_pb.Def.RoundMap[keyof protobuf_holdem_define_pb.Def.RoundMap]): void;

  clearOperatorList(): void;
  getOperatorList(): Array<protobuf_holdem_define_ft_pb.OperatorFT>;
  setOperatorList(value: Array<protobuf_holdem_define_ft_pb.OperatorFT>): void;
  addOperator(value?: protobuf_holdem_define_ft_pb.OperatorFT, index?: number): protobuf_holdem_define_ft_pb.OperatorFT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtFantasyAction.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtFantasyAction): ServerMessageFtFantasyAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtFantasyAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtFantasyAction;
  static deserializeBinaryFromReader(message: ServerMessageFtFantasyAction, reader: jspb.BinaryReader): ServerMessageFtFantasyAction;
}

export namespace ServerMessageFtFantasyAction {
  export type AsObject = {
    round: protobuf_holdem_define_pb.Def.RoundMap[keyof protobuf_holdem_define_pb.Def.RoundMap],
    operatorList: Array<protobuf_holdem_define_ft_pb.OperatorFT.AsObject>,
  }
}

