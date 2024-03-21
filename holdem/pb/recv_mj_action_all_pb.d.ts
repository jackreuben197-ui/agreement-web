// package: holdem.pb
// file: protobuf/holdem/recv_mj_action_all.proto

import * as jspb from "google-protobuf";
import * as protobuf_holdem_define_mj_pb from "../../protobuf/holdem/define_mj_pb";

export class ServerMessageMjActionAll extends jspb.Message {
  getOperatorSeatId(): number;
  setOperatorSeatId(value: number): void;

  getAct(): protobuf_holdem_define_mj_pb.DefMJ.ActionMjMap[keyof protobuf_holdem_define_mj_pb.DefMJ.ActionMjMap];
  setAct(value: protobuf_holdem_define_mj_pb.DefMJ.ActionMjMap[keyof protobuf_holdem_define_mj_pb.DefMJ.ActionMjMap]): void;

  clearTilesList(): void;
  getTilesList(): Array<protobuf_holdem_define_mj_pb.Tile>;
  setTilesList(value: Array<protobuf_holdem_define_mj_pb.Tile>): void;
  addTiles(value?: protobuf_holdem_define_mj_pb.Tile, index?: number): protobuf_holdem_define_mj_pb.Tile;

  getTargetSeatId(): number;
  setTargetSeatId(value: number): void;

  hasTargetTile(): boolean;
  clearTargetTile(): void;
  getTargetTile(): protobuf_holdem_define_mj_pb.Tile | undefined;
  setTargetTile(value?: protobuf_holdem_define_mj_pb.Tile): void;

  hasOp(): boolean;
  clearOp(): void;
  getOp(): protobuf_holdem_define_mj_pb.OperatorMJ | undefined;
  setOp(value?: protobuf_holdem_define_mj_pb.OperatorMJ): void;

  getWaitDeadline(): number;
  setWaitDeadline(value: number): void;

  getWallAscIndex(): number;
  setWallAscIndex(value: number): void;

  getWallDescIndex(): number;
  setWallDescIndex(value: number): void;

  clearErjsList(): void;
  getErjsList(): Array<protobuf_holdem_define_mj_pb.ExternalResultMJ>;
  setErjsList(value: Array<protobuf_holdem_define_mj_pb.ExternalResultMJ>): void;
  addErjs(value?: protobuf_holdem_define_mj_pb.ExternalResultMJ, index?: number): protobuf_holdem_define_mj_pb.ExternalResultMJ;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjActionAll.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjActionAll): ServerMessageMjActionAll.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjActionAll, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjActionAll;
  static deserializeBinaryFromReader(message: ServerMessageMjActionAll, reader: jspb.BinaryReader): ServerMessageMjActionAll;
}

export namespace ServerMessageMjActionAll {
  export type AsObject = {
    operatorSeatId: number,
    act: protobuf_holdem_define_mj_pb.DefMJ.ActionMjMap[keyof protobuf_holdem_define_mj_pb.DefMJ.ActionMjMap],
    tilesList: Array<protobuf_holdem_define_mj_pb.Tile.AsObject>,
    targetSeatId: number,
    targetTile?: protobuf_holdem_define_mj_pb.Tile.AsObject,
    op?: protobuf_holdem_define_mj_pb.OperatorMJ.AsObject,
    waitDeadline: number,
    wallAscIndex: number,
    wallDescIndex: number,
    erjsList: Array<protobuf_holdem_define_mj_pb.ExternalResultMJ.AsObject>,
  }
}

