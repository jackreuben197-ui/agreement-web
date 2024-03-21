// package: holdem.pb
// file: protobuf/holdem/define_mj.proto

import * as jspb from "google-protobuf";
import * as protobuf_holdem_define_pb from "../../protobuf/holdem/define_pb";

export class DefMJ extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefMJ.AsObject;
  static toObject(includeInstance: boolean, msg: DefMJ): DefMJ.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DefMJ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefMJ;
  static deserializeBinaryFromReader(message: DefMJ, reader: jspb.BinaryReader): DefMJ;
}

export namespace DefMJ {
  export type AsObject = {
  }

  export interface WaitTypeMap {
    WT_NONE: 0;
    WT_NORMAL: 1;
    WT_EXCHANGE: 2;
    WT_VOIDSUIT: 3;
  }

  export const WaitType: WaitTypeMap;

  export interface TileTypeMap {
    TT_NONE: 0;
    TT_CHARACTOR: 1;
    TT_DOT: 2;
    TT_BAMBOO: 3;
    TT_WIND: 4;
    TT_DRAGON: 5;
    TT_FLOWER: 6;
  }

  export const TileType: TileTypeMap;

  export interface ActionMjMap {
    NONE: 0;
    DISCARD: 1;
    MELDEDKONG1: 2;
    CONCEALEDKONG: 3;
    CHOW: 4;
    PUNG: 5;
    MELDEDKONG3: 6;
    WIN: 7;
    DRAW: 8;
  }

  export const ActionMj: ActionMjMap;

  export interface WinLoseReasonMap {
    WLRNONE: 0;
    WR_SELFDRAW: 1;
    WR_DISCARD: 2;
    WR_KONG_DISCARD: 3;
    WR_DRAW_CHECK: 4;
    WR_VS_CHECK: 5;
    WR_KONG_AWD: 6;
    WR_KONG_AWD_R: 7;
    WR_KONG_AWD_RROB: 8;
    LR_SELF_DRAW: 9;
    LR_DISCARD: 10;
    LR_KONG_DISCARD: 11;
    LR_DRAW_CHECK: 12;
    LR_VS_CHECK: 13;
    LR_KONG_AWD: 14;
    LR_KONG_AWD_R: 15;
    LR_KONG_AWD_RROB: 16;
    WLR_DRAW: 17;
  }

  export const WinLoseReason: WinLoseReasonMap;

  export interface WinTypeMap {
    WNT_NONE: 0;
    WNT_BASEHAND: 1;
    WNT_ALLPUNGS: 2;
    WNT_FULLFLUSH: 3;
    WNT_OUTSIDEHAND: 4;
    WNT_SEVENPAIRS: 5;
    WNT_FFALLPUNGS: 6;
    WNT_SINGLETILEALLPUNGS: 7;
    WNT_EYESPAIRS: 8;
    WNT_DRAGONSEVENPAIRS: 9;
    WNT_FFSEVENPAIRS: 10;
    WNT_FFSINGLETILEALLPUNGS: 11;
    WNT_FFOUTSIDEHAND: 12;
    WNT_FFDRAGONSEVENPAIRS: 13;
    WNT_BLESSOFHEAVEN: 14;
    WNT_BLESSOFEARTH: 15;
    WNT_TILEHOG: 16;
    WNT_MKONGCOUNT: 17;
    WNT_CKONGCOUNT: 18;
    WNT_ROBKONG: 19;
    WNT_OUTWITHREPLACEMENTTILE: 20;
    WNT_OUTWITHREPLACEMENTTILEDISCARD: 21;
  }

  export const WinType: WinTypeMap;
}

export class Tile extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tile.AsObject;
  static toObject(includeInstance: boolean, msg: Tile): Tile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Tile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tile;
  static deserializeBinaryFromReader(message: Tile, reader: jspb.BinaryReader): Tile;
}

export namespace Tile {
  export type AsObject = {
    index: number,
    value: number,
  }
}

export class ValidAction extends jspb.Message {
  getAction(): DefMJ.ActionMjMap[keyof DefMJ.ActionMjMap];
  setAction(value: DefMJ.ActionMjMap[keyof DefMJ.ActionMjMap]): void;

  clearTilesList(): void;
  getTilesList(): Array<number>;
  setTilesList(value: Array<number>): void;
  addTiles(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidAction.AsObject;
  static toObject(includeInstance: boolean, msg: ValidAction): ValidAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidAction;
  static deserializeBinaryFromReader(message: ValidAction, reader: jspb.BinaryReader): ValidAction;
}

export namespace ValidAction {
  export type AsObject = {
    action: DefMJ.ActionMjMap[keyof DefMJ.ActionMjMap],
    tilesList: Array<number>,
  }
}

export class RoomInfoMJ extends jspb.Message {
  getScheduleStartTime(): number;
  setScheduleStartTime(value: number): void;

  getSchedulePlayDuration(): number;
  setSchedulePlayDuration(value: number): void;

  getStartTime(): number;
  setStartTime(value: number): void;

  getCurrentMinStack(): number;
  setCurrentMinStack(value: number): void;

  getCurrentMinRate(): number;
  setCurrentMinRate(value: number): void;

  getCurrentMaxRate(): number;
  setCurrentMaxRate(value: number): void;

  getCurrentMaxWinrate(): number;
  setCurrentMaxWinrate(value: number): void;

  getPtLevel(): number;
  setPtLevel(value: number): void;

  getUniqueId(): string;
  setUniqueId(value: string): void;

  getRoomType(): number;
  setRoomType(value: number): void;

  getLimitIp(): boolean;
  setLimitIp(value: boolean): void;

  getLimitGps(): boolean;
  setLimitGps(value: boolean): void;

  getOpDuration(): number;
  setOpDuration(value: number): void;

  getSeatedMessaging(): boolean;
  setSeatedMessaging(value: boolean): void;

  getAntiCheatType(): number;
  setAntiCheatType(value: number): void;

  getAntiCheatVideoType(): number;
  setAntiCheatVideoType(value: number): void;

  getPersonalType(): number;
  setPersonalType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomInfoMJ.AsObject;
  static toObject(includeInstance: boolean, msg: RoomInfoMJ): RoomInfoMJ.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoomInfoMJ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomInfoMJ;
  static deserializeBinaryFromReader(message: RoomInfoMJ, reader: jspb.BinaryReader): RoomInfoMJ;
}

export namespace RoomInfoMJ {
  export type AsObject = {
    scheduleStartTime: number,
    schedulePlayDuration: number,
    startTime: number,
    currentMinStack: number,
    currentMinRate: number,
    currentMaxRate: number,
    currentMaxWinrate: number,
    ptLevel: number,
    uniqueId: string,
    roomType: number,
    limitIp: boolean,
    limitGps: boolean,
    opDuration: number,
    seatedMessaging: boolean,
    antiCheatType: number,
    antiCheatVideoType: number,
    personalType: number,
  }
}

export class MatchInfoMJ extends jspb.Message {
  getMatchNum(): number;
  setMatchNum(value: number): void;

  getDealerSeatId(): number;
  setDealerSeatId(value: number): void;

  getWallAscIndex(): number;
  setWallAscIndex(value: number): void;

  getWallDescIndex(): number;
  setWallDescIndex(value: number): void;

  getWallTileLength(): number;
  setWallTileLength(value: number): void;

  clearDiceNumList(): void;
  getDiceNumList(): Array<number>;
  setDiceNumList(value: Array<number>): void;
  addDiceNum(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchInfoMJ.AsObject;
  static toObject(includeInstance: boolean, msg: MatchInfoMJ): MatchInfoMJ.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchInfoMJ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchInfoMJ;
  static deserializeBinaryFromReader(message: MatchInfoMJ, reader: jspb.BinaryReader): MatchInfoMJ;
}

export namespace MatchInfoMJ {
  export type AsObject = {
    matchNum: number,
    dealerSeatId: number,
    wallAscIndex: number,
    wallDescIndex: number,
    wallTileLength: number,
    diceNumList: Array<number>,
  }
}

export class PlayerStartInfoMJ extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  clearHandTilesList(): void;
  getHandTilesList(): Array<Tile>;
  setHandTilesList(value: Array<Tile>): void;
  addHandTiles(value?: Tile, index?: number): Tile;

  hasLastTile(): boolean;
  clearLastTile(): void;
  getLastTile(): Tile | undefined;
  setLastTile(value?: Tile): void;

  getChip(): number;
  setChip(value: number): void;

  getWaitType(): DefMJ.WaitTypeMap[keyof DefMJ.WaitTypeMap];
  setWaitType(value: DefMJ.WaitTypeMap[keyof DefMJ.WaitTypeMap]): void;

  getWaitDeadline(): number;
  setWaitDeadline(value: number): void;

  clearValidActionsList(): void;
  getValidActionsList(): Array<ValidAction>;
  setValidActionsList(value: Array<ValidAction>): void;
  addValidActions(value?: ValidAction, index?: number): ValidAction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerStartInfoMJ.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerStartInfoMJ): PlayerStartInfoMJ.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerStartInfoMJ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerStartInfoMJ;
  static deserializeBinaryFromReader(message: PlayerStartInfoMJ, reader: jspb.BinaryReader): PlayerStartInfoMJ;
}

export namespace PlayerStartInfoMJ {
  export type AsObject = {
    seatId: number,
    handTilesList: Array<Tile.AsObject>,
    lastTile?: Tile.AsObject,
    chip: number,
    waitType: DefMJ.WaitTypeMap[keyof DefMJ.WaitTypeMap],
    waitDeadline: number,
    validActionsList: Array<ValidAction.AsObject>,
  }
}

export class PlayerMJ extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getUserRid(): number;
  setUserRid(value: number): void;

  clearHandTilesList(): void;
  getHandTilesList(): Array<Tile>;
  setHandTilesList(value: Array<Tile>): void;
  addHandTiles(value?: Tile, index?: number): Tile;

  hasLastTile(): boolean;
  clearLastTile(): void;
  getLastTile(): Tile | undefined;
  setLastTile(value?: Tile): void;

  getVoidSuit(): DefMJ.TileTypeMap[keyof DefMJ.TileTypeMap];
  setVoidSuit(value: DefMJ.TileTypeMap[keyof DefMJ.TileTypeMap]): void;

  clearDiscardTilesList(): void;
  getDiscardTilesList(): Array<Tile>;
  setDiscardTilesList(value: Array<Tile>): void;
  addDiscardTiles(value?: Tile, index?: number): Tile;

  clearMkongList(): void;
  getMkongList(): Array<number>;
  setMkongList(value: Array<number>): void;
  addMkong(value: number, index?: number): number;

  clearCkongList(): void;
  getCkongList(): Array<number>;
  setCkongList(value: Array<number>): void;
  addCkong(value: number, index?: number): number;

  clearChowList(): void;
  getChowList(): Array<number>;
  setChowList(value: Array<number>): void;
  addChow(value: number, index?: number): number;

  clearFlowersList(): void;
  getFlowersList(): Array<number>;
  setFlowersList(value: Array<number>): void;
  addFlowers(value: number, index?: number): number;

  clearPungList(): void;
  getPungList(): Array<number>;
  setPungList(value: Array<number>): void;
  addPung(value: number, index?: number): number;

  getName(): string;
  setName(value: string): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  getSex(): number;
  setSex(value: number): void;

  getChip(): number;
  setChip(value: number): void;

  getKeepSeatLeftTime(): number;
  setKeepSeatLeftTime(value: number): void;

  getIsAutoop(): boolean;
  setIsAutoop(value: boolean): void;

  getVip(): number;
  setVip(value: number): void;

  getKeepSeatDeadline(): number;
  setKeepSeatDeadline(value: number): void;

  getKeepSeatReason(): protobuf_holdem_define_pb.Def.KeepSeatReasonMap[keyof protobuf_holdem_define_pb.Def.KeepSeatReasonMap];
  setKeepSeatReason(value: protobuf_holdem_define_pb.Def.KeepSeatReasonMap[keyof protobuf_holdem_define_pb.Def.KeepSeatReasonMap]): void;

  getStatus(): protobuf_holdem_define_pb.Def.CanPlayStatusMap[keyof protobuf_holdem_define_pb.Def.CanPlayStatusMap];
  setStatus(value: protobuf_holdem_define_pb.Def.CanPlayStatusMap[keyof protobuf_holdem_define_pb.Def.CanPlayStatusMap]): void;

  getUserSubscriptionId(): number;
  setUserSubscriptionId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerMJ.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerMJ): PlayerMJ.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerMJ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerMJ;
  static deserializeBinaryFromReader(message: PlayerMJ, reader: jspb.BinaryReader): PlayerMJ;
}

export namespace PlayerMJ {
  export type AsObject = {
    seatId: number,
    userRid: number,
    handTilesList: Array<Tile.AsObject>,
    lastTile?: Tile.AsObject,
    voidSuit: DefMJ.TileTypeMap[keyof DefMJ.TileTypeMap],
    discardTilesList: Array<Tile.AsObject>,
    mkongList: Array<number>,
    ckongList: Array<number>,
    chowList: Array<number>,
    flowersList: Array<number>,
    pungList: Array<number>,
    name: string,
    avatar: string,
    sex: number,
    chip: number,
    keepSeatLeftTime: number,
    isAutoop: boolean,
    vip: number,
    keepSeatDeadline: number,
    keepSeatReason: protobuf_holdem_define_pb.Def.KeepSeatReasonMap[keyof protobuf_holdem_define_pb.Def.KeepSeatReasonMap],
    status: protobuf_holdem_define_pb.Def.CanPlayStatusMap[keyof protobuf_holdem_define_pb.Def.CanPlayStatusMap],
    userSubscriptionId: number,
  }
}

export class MyGameInfoMJ extends jspb.Message {
  getChip(): number;
  setChip(value: number): void;

  getSeatId(): number;
  setSeatId(value: number): void;

  getIsAutoop(): boolean;
  setIsAutoop(value: boolean): void;

  getName(): string;
  setName(value: string): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  getSex(): number;
  setSex(value: number): void;

  getUserSubscriptionId(): number;
  setUserSubscriptionId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MyGameInfoMJ.AsObject;
  static toObject(includeInstance: boolean, msg: MyGameInfoMJ): MyGameInfoMJ.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MyGameInfoMJ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MyGameInfoMJ;
  static deserializeBinaryFromReader(message: MyGameInfoMJ, reader: jspb.BinaryReader): MyGameInfoMJ;
}

export namespace MyGameInfoMJ {
  export type AsObject = {
    chip: number,
    seatId: number,
    isAutoop: boolean,
    name: string,
    avatar: string,
    sex: number,
    userSubscriptionId: number,
  }
}

export class PlayerVoidSuit extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getTt(): DefMJ.TileTypeMap[keyof DefMJ.TileTypeMap];
  setTt(value: DefMJ.TileTypeMap[keyof DefMJ.TileTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerVoidSuit.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerVoidSuit): PlayerVoidSuit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerVoidSuit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerVoidSuit;
  static deserializeBinaryFromReader(message: PlayerVoidSuit, reader: jspb.BinaryReader): PlayerVoidSuit;
}

export namespace PlayerVoidSuit {
  export type AsObject = {
    seatId: number,
    tt: DefMJ.TileTypeMap[keyof DefMJ.TileTypeMap],
  }
}

export class OperatorMJ extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getDelayTimes(): number;
  setDelayTimes(value: number): void;

  getOpDeadline(): number;
  setOpDeadline(value: number): void;

  getActionType(): DefMJ.WaitTypeMap[keyof DefMJ.WaitTypeMap];
  setActionType(value: DefMJ.WaitTypeMap[keyof DefMJ.WaitTypeMap]): void;

  clearValidActionsList(): void;
  getValidActionsList(): Array<ValidAction>;
  setValidActionsList(value: Array<ValidAction>): void;
  addValidActions(value?: ValidAction, index?: number): ValidAction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperatorMJ.AsObject;
  static toObject(includeInstance: boolean, msg: OperatorMJ): OperatorMJ.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperatorMJ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperatorMJ;
  static deserializeBinaryFromReader(message: OperatorMJ, reader: jspb.BinaryReader): OperatorMJ;
}

export namespace OperatorMJ {
  export type AsObject = {
    seatId: number,
    delayTimes: number,
    opDeadline: number,
    actionType: DefMJ.WaitTypeMap[keyof DefMJ.WaitTypeMap],
    validActionsList: Array<ValidAction.AsObject>,
  }
}

export class PlayerSummaryMJ extends jspb.Message {
  getUserRid(): number;
  setUserRid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  getSex(): number;
  setSex(value: number): void;

  getHandNum(): number;
  setHandNum(value: number): void;

  getBringInTotal(): number;
  setBringInTotal(value: number): void;

  getBringOutTotal(): number;
  setBringOutTotal(value: number): void;

  getChip(): number;
  setChip(value: number): void;

  getWin(): number;
  setWin(value: number): void;

  getStatus(): protobuf_holdem_define_pb.Def.CanPlayStatusMap[keyof protobuf_holdem_define_pb.Def.CanPlayStatusMap];
  setStatus(value: protobuf_holdem_define_pb.Def.CanPlayStatusMap[keyof protobuf_holdem_define_pb.Def.CanPlayStatusMap]): void;

  getIsOnline(): boolean;
  setIsOnline(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerSummaryMJ.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerSummaryMJ): PlayerSummaryMJ.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerSummaryMJ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerSummaryMJ;
  static deserializeBinaryFromReader(message: PlayerSummaryMJ, reader: jspb.BinaryReader): PlayerSummaryMJ;
}

export namespace PlayerSummaryMJ {
  export type AsObject = {
    userRid: number,
    name: string,
    avatar: string,
    sex: number,
    handNum: number,
    bringInTotal: number,
    bringOutTotal: number,
    chip: number,
    win: number,
    status: protobuf_holdem_define_pb.Def.CanPlayStatusMap[keyof protobuf_holdem_define_pb.Def.CanPlayStatusMap],
    isOnline: boolean,
  }
}

export class PlayerChipChangeMJ extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getChange(): number;
  setChange(value: number): void;

  getChips(): number;
  setChips(value: number): void;

  getAuto(): boolean;
  setAuto(value: boolean): void;

  getReason(): protobuf_holdem_define_pb.Def.ChipChangeReasonMap[keyof protobuf_holdem_define_pb.Def.ChipChangeReasonMap];
  setReason(value: protobuf_holdem_define_pb.Def.ChipChangeReasonMap[keyof protobuf_holdem_define_pb.Def.ChipChangeReasonMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerChipChangeMJ.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerChipChangeMJ): PlayerChipChangeMJ.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerChipChangeMJ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerChipChangeMJ;
  static deserializeBinaryFromReader(message: PlayerChipChangeMJ, reader: jspb.BinaryReader): PlayerChipChangeMJ;
}

export namespace PlayerChipChangeMJ {
  export type AsObject = {
    seatId: number,
    change: number,
    chips: number,
    auto: boolean,
    reason: protobuf_holdem_define_pb.Def.ChipChangeReasonMap[keyof protobuf_holdem_define_pb.Def.ChipChangeReasonMap],
  }
}

export class ResultMJ extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getChip(): number;
  setChip(value: number): void;

  getTotalWinLose(): number;
  setTotalWinLose(value: number): void;

  getHand(): string;
  setHand(value: string): void;

  clearResultDetailList(): void;
  getResultDetailList(): Array<ResultDetailMJ>;
  setResultDetailList(value: Array<ResultDetailMJ>): void;
  addResultDetail(value?: ResultDetailMJ, index?: number): ResultDetailMJ;

  getStandUp(): boolean;
  setStandUp(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResultMJ.AsObject;
  static toObject(includeInstance: boolean, msg: ResultMJ): ResultMJ.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResultMJ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResultMJ;
  static deserializeBinaryFromReader(message: ResultMJ, reader: jspb.BinaryReader): ResultMJ;
}

export namespace ResultMJ {
  export type AsObject = {
    seatId: number,
    chip: number,
    totalWinLose: number,
    hand: string,
    resultDetailList: Array<ResultDetailMJ.AsObject>,
    standUp: boolean,
  }
}

export class ResultDetailMJ extends jspb.Message {
  getReason(): DefMJ.WinLoseReasonMap[keyof DefMJ.WinLoseReasonMap];
  setReason(value: DefMJ.WinLoseReasonMap[keyof DefMJ.WinLoseReasonMap]): void;

  getWinLose(): number;
  setWinLose(value: number): void;

  getWinPt(): number;
  setWinPt(value: number): void;

  clearWinTypesList(): void;
  getWinTypesList(): Array<DefMJ.WinTypeMap[keyof DefMJ.WinTypeMap]>;
  setWinTypesList(value: Array<DefMJ.WinTypeMap[keyof DefMJ.WinTypeMap]>): void;
  addWinTypes(value: DefMJ.WinTypeMap[keyof DefMJ.WinTypeMap], index?: number): DefMJ.WinTypeMap[keyof DefMJ.WinTypeMap];

  hasWinTile(): boolean;
  clearWinTile(): void;
  getWinTile(): Tile | undefined;
  setWinTile(value?: Tile): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResultDetailMJ.AsObject;
  static toObject(includeInstance: boolean, msg: ResultDetailMJ): ResultDetailMJ.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResultDetailMJ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResultDetailMJ;
  static deserializeBinaryFromReader(message: ResultDetailMJ, reader: jspb.BinaryReader): ResultDetailMJ;
}

export namespace ResultDetailMJ {
  export type AsObject = {
    reason: DefMJ.WinLoseReasonMap[keyof DefMJ.WinLoseReasonMap],
    winLose: number,
    winPt: number,
    winTypesList: Array<DefMJ.WinTypeMap[keyof DefMJ.WinTypeMap]>,
    winTile?: Tile.AsObject,
  }
}

