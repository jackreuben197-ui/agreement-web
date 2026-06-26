import * as jspb from "google-protobuf";
export interface CodeMap {
  NONE: 0;
  MSG_D_REGISTER: 1;
  MSG_D_HEARTBEAT: 2;
  MSG_S_ERROR: 99;
  MSG_S_NOTIFICATION_ROOM_READY: 101;
  MSG_S_USER_BAN: 102;
  MSG_S_NOTIFICATION_SYSTEM_MAINTAIN: 103;
  MSG_S_ROOM_READY_FOR_ENTER: 104;
  MSG_S_MTT_READY_FOR_APPLY: 105;
  MSG_S_USER_KICKED_FROM_CLUB: 106;
  MSG_S_NOTIFICATION_MTT_WILL_START: 107;
  MSG_S_SYSTEM_MESSAGE: 108;
  MSG_S_GET_MESSAGE: 109;
  MSG_S_USER_GAME_WATCH: 110;
  MSG_S_FRIEND_ROOM_BRING_IN_APPLY_TO_ADMIN: 111;
  MSG_S_FRIEND_ROOM_BRING_IN_APPLY_TO_USER: 112;
  MSG_S_CLUB_ROOM_BRING_IN_APPLY_TO_ADMIN: 113;
  MSG_S_CLUB_ROOM_BRING_IN_APPLY_TO_USER: 114;
  MSG_S_CLUB_ROOM_BRING_IN_APPLY_AUDIT: 116;
  MSG_S_ADMIN_ROOM_USER_STANDUP: 117;
  MSG_S_ADMIN_ROOM_USER_LEAVE: 118;
  MSG_S_ROOM_DELAY_APPLY_TO_ADMIN: 119;
  MSG_S_CLUB_ROOM_DELAY_APPLY_AUDIT: 120;
  MSG_S_USER_IS_BLOCKED: 121;
  MSG_S_CLUB_USER_IS_BLOCKED: 122;
  MSG_S_TODO_LIST: 123;
  MSG_S_USER_DEVICE_IS_BLOCKED: 124;
  MSG_S_OFFLINE_TICKETS: 125;
  MSG_S_SNATCH_TREASURE_HRL: 126;
  MSG_S_SNATCH_TREASURE_WIN_POPUP: 127;
  MSG_S_JACKPOT_MARQUEE: 128;
  MSG_S_MATCHING_RESULT: 129;
  MSG_S_SELF_PROFIT_PAY: 130;
  MSG_S_LIMIT_HAND_NUMBER: 131;
  MSG_S_ROOM_USER_SEND_DIAMOND: 132;
  MSG_S_USER_ORDER_AUDIT: 133;
  MSG_S_USER_WHEEL_HAND_NUM: 134;
  MSG_S_CACHE_DATA_UPDATE: 135;
  MSG_S_SUPPORT_MESSAGE: 136;
  MSG_S_USER_IS_MUTE: 137;
  MSG_S_USER_DIAMOND_CHANGE: 138;
  MSG_S_TRIBE_BLACK_USER_MTT: 139;
  MSG_S_ROOM_CHANGE_NOTIFY: 140;
  MSG_S_USER_GOLD_CHANGE: 141;
  MSG_S_TRIBE_BLACK_USER: 142;
  MSG_S_USER_TRADER_ORDER_NOTIFY: 143;
  MSG_S_ROOM_MTT_SETTLE_NOTIFY: 144;
  MSG_S_USER_USDT_ORDER_NOTIFY: 145;
  MSG_S_FRIEND_ROOM_CREATOR_SETTLE: 146;
  MSG_S_MTT_AWARD_NOTIFY: 147;
  MSG_S_USER_JOIN_CLUB: 148;
  MSG_S_CLUB_ROOM_MTT_SETTLE_NOTIFY: 149;
  MSG_S_USER_CLUB_ROLE_CHANGE: 150;
  MSG_S_USER_MTT_CHANGE_NOTIFY: 151;
  MSG_S_USER_SNG_CHANGE_NOTIFY: 152;
  MSG_S_MTT_SERIES_NOTIFY: 153;
  MSG_D_USER_PLAYING: 201;
  MSG_R_ROOMS: 202;
  MSG_R_QUICK_JOIN: 203;
  MSG_R_MTT_DETAIL: 204;
  MSG_R_JOIN_MATCHING: 205;
  MSG_R_ROOMS_SIMPLE: 206;
  MSG_S_UTIL_FACE_RECOGNIZE: 901;
  MSG_S_UTIL_ANTI_CHEAT_ROOM_VIDEO: 902;
  MSG_D_ENTER_ROOM: 1002;
  MSG_D_SEATED: 1003;
  MSG_D_ADD_ON: 1004;
  MSG_D_BRING_IN: 1005;
  MSG_D_ACTION: 1006;
  MSG_D_AUTO_OP_ACTIVE: 1007;
  MSG_D_SET_AUTO_ON_TABLE: 1008;
  MSG_D_STANDUP_ACTIVE: 1009;
  MSG_D_LEAVE: 1010;
  MSG_D_KEEP_SEAT_ACTIVE: 1011;
  MSG_D_SHOWDOWN: 1012;
  MSG_D_SHOW_PUBLIC_CARDS: 1013;
  MSG_D_ADD_TIME: 1014;
  MSG_D_BUY_INSURANCE_ACTIVE: 1015;
  MSG_D_AGREE_POST: 1016;
  MSG_D_STORE_CHIPS: 1017;
  MSG_D_PUBLIC_REPLAY: 1018;
  MSG_D_BROADCAST_MSG: 1019;
  MSG_D_PRIVATE_MSG: 1020;
  MSG_D_ROOMERS: 1021;
  MSG_D_AGREE_SECOND_PCS_ACTIVE: 1022;
  MSG_D_OBSERVERS: 1023;
  MSG_D_SQUID_IN_ACTIVE: 1024;
  MSG_D_SYNC_ENTER: 1025;
  MSG_D_VIEW_PLAYER_CARDS: 1026;
  MSG_D_PLAYER_JACKPOT_SUMMARY: 1027;
  MSG_D_CHAT_MEMBERS: 1028;
  MSG_D_VIEW_PLAYER_CARDS_NUM: 1029;
  MSG_D_ROOM_INSURANCE: 1030;
  MSG_S_SHOW_PUBLIC_CARDS_OTHERS: 1100;
  MSG_S_SHOWCARDS: 1101;
  MSG_S_SEATED_OTHERS: 1102;
  MSG_S_START_INFO: 1103;
  MSG_S_PUBLIC_CARDS: 1104;
  MSG_S_SIDE_POTS: 1105;
  MSG_S_CHIPS_CHANGE: 1107;
  MSG_S_ACTION_ALL: 1108;
  MSG_S_AUTO_OP: 1109;
  MSG_S_STANDUP: 1110;
  MSG_S_KEEP_SEAT: 1111;
  MSG_S_WINNER: 1112;
  MSG_S_ADD_TIME_OTHERS: 1113;
  MSG_S_LEAVE_NOTIFICATION: 1114;
  MSG_S_INSURANCE_TRIGGED: 1115;
  MSG_S_BUY_INSURANCE: 1116;
  MSG_S_POST_STATUS_CHANGE: 1117;
  MSG_S_BRING_IN_OR_STORE_FAIL: 1118;
  MSG_S_HAND_CLEAR: 1119;
  MSG_S_UP_BLIND: 1120;
  MSG_S_GET_MSG: 1121;
  MSG_S_AGREE_SECOND_PCS_TRIGGED: 1122;
  MSG_S_AGREE_SECOND_PCS: 1123;
  MSG_S_SYNC_HAND: 1124;
  MSG_S_SQUID_IN: 1125;
  MSG_S_NEXT_CHANGE: 1126;
  MSG_S_SHOW_VIEW_CARDS: 1127;
  MSG_S_ENCRYPT_CARDS: 1128;
  MSG_S_JACKPOT_GOLD_CHANGE: 1129;
  MSG_S_JACKPOT_AWARD: 1130;
  MSG_S_INSURANCE_OUTS_CARDS: 1131;
  MSG_S_FORCE_VIDEO: 1132;
  MSG_S_VIDEO_MASK_CHANGE: 1133;
  MSG_S_WAIT_CHECK_AUTO_ADD_TIME: 1134;
  MSG_D_FT_ENTER_ROOM: 1202;
  MSG_D_FT_SEATED: 1203;
  MSG_D_FT_BRING_IN: 1204;
  MSG_D_FT_ACTION: 1205;
  MSG_D_FT_AUTO_OP_ACTIVE: 1206;
  MSG_D_FT_STANDUP_ACTIVE: 1207;
  MSG_D_FT_LEAVE: 1208;
  MSG_D_FT_KEEP_SEAT_ACTIVE: 1209;
  MSG_D_FT_ADD_TIME: 1210;
  MSG_D_FT_PUBLIC_REPLAY: 1211;
  MSG_D_FT_BROADCAST_MSG: 1212;
  MSG_D_FT_PRIVATE_MSG: 1213;
  MSG_D_FT_ROOMERS: 1214;
  MSG_D_FT_SET_AUTO_ON_TABLE: 1215;
  MSG_D_FT_PAIR: 1216;
  MSG_D_FT_OBSERVERS: 1217;
  MSG_D_FT_SYNC_ENTER: 1218;
  MSG_D_FT_CHAT_MEMBERS: 1219;
  MSG_S_FT_SEATED_OTHERS: 1301;
  MSG_S_FT_START_INFO: 1302;
  MSG_S_FT_PUBLIC_CARDS: 1303;
  MSG_S_FT_CHIPS_CHANGE: 1304;
  MSG_S_FT_ACTION_ALL: 1305;
  MSG_S_FT_AUTO_OP: 1306;
  MSG_S_FT_STANDUP: 1307;
  MSG_S_FT_KEEP_SEAT: 1308;
  MSG_S_FT_WINNER: 1309;
  MSG_S_FT_ADD_TIME_OTHERS: 1310;
  MSG_S_FT_LEAVE_NOTIFICATION: 1311;
  MSG_S_FT_BRING_IN_FAIL: 1313;
  MSG_S_FT_HAND_CLEAR: 1314;
  MSG_S_FT_GET_MSG: 1315;
  MSG_S_FT_PAIR_ALL: 1316;
  MSG_S_FT_VIDEO_MASK_CHANGE: 1317;
  MSG_D_CB_ENTER_ROOM: 2001;
  MSG_D_CB_PLAY: 2002;
  MSG_D_CB_CANCEL_PLAY: 2003;
  MSG_D_CB_LEAVE: 2004;
  MSG_D_CB_CHAT: 2005;
  MSG_D_CB_TOP: 2006;
  MSG_D_CB_WAYMAP: 2007;
  MSG_D_CB_LAST_GAMES: 2008;
  MSG_D_CB_BRING_IN: 2009;
  MSG_D_CB_WAYMAP_SPEC: 2010;
  MSG_D_CB_ONLINE: 2011;
  MSG_D_CB_SYNC_ENTER: 2012;
  MSG_S_CB_GAME_START: 2100;
  MSG_S_CB_GAME_PLAY_INFO: 2101;
  MSG_S_CB_GAME_PLAY_END: 2102;
  MSG_S_CB_GAME_RESULT: 2103;
  MSG_S_CB_WAYMAP_UPDATE: 2104;
  MSG_S_CB_ROOM_CLOSE: 2105;
  MSG_S_CB_CHAT_OTHERS: 2106;
  MSG_S_CB_LEAVE_NOTIFICATION: 2107;
  MSG_S_CB_STANDUP_NOTIFICATION: 2108;
  MSG_S_CB_ENCRYPT_CARDS: 2109;
  MSG_D_MJ_ENTER_ROOM: 3001;
  MSG_D_MJ_SEATED: 3002;
  MSG_D_MJ_BRING_IN: 3003;
  MSG_D_MJ_EXCHANGE_TILES: 3004;
  MSG_D_MJ_VOID_SUIT: 3005;
  MSG_D_MJ_ACTION: 3006;
  MSG_D_MJ_AUTO_OP_ACTIVE: 3007;
  MSG_D_MJ_STANDUP_ACTIVE: 3008;
  MSG_D_MJ_LEAVE: 3009;
  MSG_D_MJ_KEEP_SEAT_ACTIVE: 3010;
  MSG_D_MJ_ADD_TIME: 3011;
  MSG_D_MJ_BROADCAST_MSG: 3012;
  MSG_D_MJ_PRIVATE_MSG: 3013;
  MSG_D_MJ_ROOMERS: 3014;
  MSG_D_MJ_SET_AUTO_ON_TABLE: 3015;
  MSG_D_MJ_OBSERVERS: 3016;
  MSG_D_MJ_SYNC_ENTER: 3017;
  MSG_D_MJ_REPLAY: 3018;
  MSG_D_MJ_CHAT_MEMBERS: 3019;
  MSG_D_MJ_RAISE: 3020;
  MSG_D_MJ_REJECT_BRING_IN: 3021;
  MSG_S_MJ_SEATED_OTHERS: 3051;
  MSG_S_MJ_START_INFO: 3052;
  MSG_S_MJ_EXCHANGE_TILES_COMPLETE: 3053;
  MSG_S_MJ_VOID_SUIT_COMPLETE: 3054;
  MSG_S_MJ_CHIPS_CHANGE: 3055;
  MSG_S_MJ_ACTION_ALL: 3056;
  MSG_S_MJ_AUTO_OP: 3057;
  MSG_S_MJ_STANDUP: 3058;
  MSG_S_MJ_KEEP_SEAT: 3059;
  MSG_S_MJ_RESULT: 3060;
  MSG_S_MJ_ADD_TIME_OTHERS: 3061;
  MSG_S_MJ_LEAVE_NOTIFICATION: 3062;
  MSG_S_MJ_BRING_IN_FAIL: 3063;
  MSG_S_MJ_HAND_CLEAR: 3064;
  MSG_S_MJ_GET_MSG: 3065;
  MSG_S_MJ_WAIT_TURN_ACTION: 3066;
  MSG_S_MJ_ACTION_FAIL: 3067;
  MSG_S_MJ_PREPARE: 3068;
  MSG_S_MJ_RAISE_COMPLETE: 3069;
  MSG_S_MJ_FOLLOW_DEALER: 3070;
  MSG_S_MJ_NEED_BRING_IN: 3071;
  MSG_S_MJ_NEED_BRING_IN_COMPLETE: 3072;
  MSG_S_MJ_VIDEO_MASK_CHANGE: 3073;
  MSG_S_MJ_UP_BLIND: 3074;
  MSG_S_MJ_SYNC_HAND: 3075;
  MSG_D_GD_ENTER_ROOM: 4001;
  MSG_D_GD_SEATED: 4002;
  MSG_D_GD_BRING_IN: 4003;
  MSG_D_GD_READY_START: 4004;
  MSG_D_GD_WINRATE_ADD: 4005;
  MSG_D_GD_TRIBUTE_GIVE: 4006;
  MSG_D_GD_TRIBUTE_RETURN: 4007;
  MSG_D_GD_ACTION: 4008;
  MSG_D_GD_AUTO_OP_ACTIVE: 4009;
  MSG_D_GD_STANDUP_ACTIVE: 4010;
  MSG_D_GD_LEAVE: 4011;
  MSG_D_GD_KEEP_SEAT_ACTIVE: 4012;
  MSG_D_GD_ADD_TIME: 4013;
  MSG_D_GD_BROADCAST_MSG: 4014;
  MSG_D_GD_PRIVATE_MSG: 4015;
  MSG_D_GD_ROOMERS: 4016;
  MSG_D_GD_SET_AUTO_ON_TABLE: 4017;
  MSG_D_GD_OBSERVERS: 4018;
  MSG_D_GD_SYNC_ENTER: 4019;
  MSG_D_GD_REPLAY: 4020;
  MSG_D_GD_CHAT_MEMBERS: 4021;
  MSG_S_GD_SEATED_OTHERS: 4101;
  MSG_S_GD_START_INFO: 4102;
  MSG_S_GD_WINRATE_ADD_COMPLETE: 4103;
  MSG_S_GD_TRIBUTE_GIVE_COMPLETE: 4104;
  MSG_S_GD_TRIBUTE_RETURN_COMPLETE: 4105;
  MSG_S_GD_CHIPS_CHANGE: 4106;
  MSG_S_GD_ACTION_ALL: 4107;
  MSG_S_GD_AUTO_OP: 4108;
  MSG_S_GD_STANDUP: 4109;
  MSG_S_GD_KEEP_SEAT: 4110;
  MSG_S_GD_RESULT: 4111;
  MSG_S_GD_ADD_TIME_OTHERS: 4112;
  MSG_S_GD_LEAVE_NOTIFICATION: 4113;
  MSG_S_GD_BRING_IN_FAIL: 4114;
  MSG_S_GD_HAND_CLEAR: 4115;
  MSG_S_GD_GET_MSG: 4116;
  MSG_S_GD_READY_START_ALL: 4117;
  MSG_S_GD_WAIT_READY_START: 4118;
  MSG_S_GD_VIDEO_MASK_CHANGE: 4119;
}

export const Code: CodeMap;

export class DefCB extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefCB.AsObject;
  static toObject(includeInstance: boolean, msg: DefCB): DefCB.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DefCB, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefCB;
  static deserializeBinaryFromReader(message: DefCB, reader: jspb.BinaryReader): DefCB;
}

export namespace DefCB {
  export type AsObject = {
  }

  export interface HistorySlotMap {
    HS_NONE: 0;
    HS_RESULT: 30;
    HS_COWBOY: 1;
    HS_DRAW: 2;
    HS_BEAUTY: 3;
    HS_STA_FLUSH_STAFLUSH: 4;
    HS_PAIR: 5;
    HS_PAIR_ACE: 6;
    HS_HC_ONE_PAIR: 7;
    HS_TWO_PAIR: 8;
    HS_STA_FLUSH_THREE: 9;
    HS_FULL_HOUSE: 10;
    HS_FOUR_STAFLUSH_ROYALFLUSH: 11;
    HS_FLUSH: 12;
    HS_STA: 13;
    HS_STAFLUSH: 14;
  }

  export const HistorySlot: HistorySlotMap;

  export interface HistoryResultMap {
    HR_NONE: 0;
    HR_YES: 1;
    HR_NO: 2;
    HR_DRAW: 3;
    HR_COWBOY: 4;
    HR_BEAUTY: 5;
  }

  export const HistoryResult: HistoryResultMap;

  export interface PlaySlotMap {
    PS_NONE: 0;
    PS_COWBOY: 1;
    PS_DRAW: 2;
    PS_BEAUTY: 3;
    PS_STA_FLUSH_STAFLUSH: 4;
    PS_PAIR: 5;
    PS_PAIR_ACE: 6;
    PS_HC_ONE_PAIR: 7;
    PS_TWO_PAIR: 8;
    PS_STA_FLUSH_THREE: 9;
    PS_FULL_HOUSE: 10;
    PS_FOUR_STAFLUSH_ROYALFLUSH: 11;
    PS_FLUSH: 12;
    PS_STA: 13;
    PS_STAFLUSH: 14;
  }

  export const PlaySlot: PlaySlotMap;

  export interface RoomCloseReasonMap {
    CR_NONE: 0;
    CR_NORMAL: 1;
    CR_FORCE: 2;
    CR_ERROR: 3;
    CR_EXPLOSION: 4;
  }

  export const RoomCloseReason: RoomCloseReasonMap;

  export interface WayPointColorMap {
    WPC_NONE: 0;
    WPC_BLUE: 1;
    WPC_RED: 2;
    WPC_GREEN: 3;
  }

  export const WayPointColor: WayPointColorMap;

  export interface ConsumeTypeMap {
    CT_NONE: 0;
    CT_MSG_1: 1;
    CT_MSG_2: 2;
    CT_MSG_3: 3;
    CT_MSG_4: 4;
    CT_EMOJI_1: 5;
    CT_EMOJI_2: 6;
    CT_EMOJI_3: 7;
    CT_EMOJI_4: 8;
  }

  export const ConsumeType: ConsumeTypeMap;

  export interface LeaveReasonMap {
    LR_NONE: 0;
    LR_ACTIVE: 1;
    LR_FORCE: 2;
    LR_GAMEOVER: 3;
    LR_OFFLINE: 4;
    LR_STAND_UP: 5;
  }

  export const LeaveReason: LeaveReasonMap;

  export interface OrderByTypeMap {
    OT_ORDER_BY_NONE: 0;
    OT_ORDER_BY_PLAY: 1;
    OT_ORDER_BY_WALLET: 2;
    OT_ORDER_BY_RATE: 3;
  }

  export const OrderByType: OrderByTypeMap;
}

export class CBRoom extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): void;

  getName(): string;
  setName(value: string): void;

  clearSettingsList(): void;
  getSettingsList(): Array<CBSetting>;
  setSettingsList(value: Array<CBSetting>): void;
  addSettings(value?: CBSetting, index?: number): CBSetting;

  clearMaxAmountsList(): void;
  getMaxAmountsList(): Array<CBPlaySummary>;
  setMaxAmountsList(value: Array<CBPlaySummary>): void;
  addMaxAmounts(value?: CBPlaySummary, index?: number): CBPlaySummary;

  getStartTime(): number;
  setStartTime(value: number): void;

  getDuration(): number;
  setDuration(value: number): void;

  getGameDuration(): number;
  setGameDuration(value: number): void;

  getBringInMinLimit(): number;
  setBringInMinLimit(value: number): void;

  getPlayBetMinLimit(): number;
  setPlayBetMinLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CBRoom.AsObject;
  static toObject(includeInstance: boolean, msg: CBRoom): CBRoom.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CBRoom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CBRoom;
  static deserializeBinaryFromReader(message: CBRoom, reader: jspb.BinaryReader): CBRoom;
}

export namespace CBRoom {
  export type AsObject = {
    roomId: number,
    name: string,
    settingsList: Array<CBSetting.AsObject>,
    maxAmountsList: Array<CBPlaySummary.AsObject>,
    startTime: number,
    duration: number,
    gameDuration: number,
    bringInMinLimit: number,
    playBetMinLimit: number,
  }
}

export class CBGame extends jspb.Message {
  getFirstCard(): number;
  setFirstCard(value: number): void;

  getGameNum(): number;
  setGameNum(value: number): void;

  getGamePast(): number;
  setGamePast(value: number): void;

  hasGameResult(): boolean;
  clearGameResult(): void;
  getGameResult(): CBGameResult | undefined;
  setGameResult(value?: CBGameResult): void;

  getPlayable(): boolean;
  setPlayable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CBGame.AsObject;
  static toObject(includeInstance: boolean, msg: CBGame): CBGame.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CBGame, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CBGame;
  static deserializeBinaryFromReader(message: CBGame, reader: jspb.BinaryReader): CBGame;
}

export namespace CBGame {
  export type AsObject = {
    firstCard: number,
    gameNum: number,
    gamePast: number,
    gameResult?: CBGameResult.AsObject,
    playable: boolean,
  }
}

export class CBGameResult extends jspb.Message {
  clearResultSlotsList(): void;
  getResultSlotsList(): Array<DefCB.PlaySlotMap[keyof DefCB.PlaySlotMap]>;
  setResultSlotsList(value: Array<DefCB.PlaySlotMap[keyof DefCB.PlaySlotMap]>): void;
  addResultSlots(value: DefCB.PlaySlotMap[keyof DefCB.PlaySlotMap], index?: number): DefCB.PlaySlotMap[keyof DefCB.PlaySlotMap];

  clearPublicCardsList(): void;
  getPublicCardsList(): Array<number>;
  setPublicCardsList(value: Array<number>): void;
  addPublicCards(value: number, index?: number): number;

  hasResultCowboy(): boolean;
  clearResultCowboy(): void;
  getResultCowboy(): CBHandResult | undefined;
  setResultCowboy(value?: CBHandResult): void;

  hasResultBeauty(): boolean;
  clearResultBeauty(): void;
  getResultBeauty(): CBHandResult | undefined;
  setResultBeauty(value?: CBHandResult): void;

  clearSummaryList(): void;
  getSummaryList(): Array<CBPlaySummary>;
  setSummaryList(value: Array<CBPlaySummary>): void;
  addSummary(value?: CBPlaySummary, index?: number): CBPlaySummary;

  clearPublicCardsSelectedList(): void;
  getPublicCardsSelectedList(): Array<boolean>;
  setPublicCardsSelectedList(value: Array<boolean>): void;
  addPublicCardsSelected(value: boolean, index?: number): boolean;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CBGameResult.AsObject;
  static toObject(includeInstance: boolean, msg: CBGameResult): CBGameResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CBGameResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CBGameResult;
  static deserializeBinaryFromReader(message: CBGameResult, reader: jspb.BinaryReader): CBGameResult;
}

export namespace CBGameResult {
  export type AsObject = {
    resultSlotsList: Array<DefCB.PlaySlotMap[keyof DefCB.PlaySlotMap]>,
    publicCardsList: Array<number>,
    resultCowboy?: CBHandResult.AsObject,
    resultBeauty?: CBHandResult.AsObject,
    summaryList: Array<CBPlaySummary.AsObject>,
    publicCardsSelectedList: Array<boolean>,
  }
}

export class CBSetting extends jspb.Message {
  getSlot(): DefCB.PlaySlotMap[keyof DefCB.PlaySlotMap];
  setSlot(value: DefCB.PlaySlotMap[keyof DefCB.PlaySlotMap]): void;

  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CBSetting.AsObject;
  static toObject(includeInstance: boolean, msg: CBSetting): CBSetting.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CBSetting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CBSetting;
  static deserializeBinaryFromReader(message: CBSetting, reader: jspb.BinaryReader): CBSetting;
}

export namespace CBSetting {
  export type AsObject = {
    slot: DefCB.PlaySlotMap[keyof DefCB.PlaySlotMap],
    value: number,
  }
}

export class CBPlaySummary extends jspb.Message {
  getSlot(): DefCB.PlaySlotMap[keyof DefCB.PlaySlotMap];
  setSlot(value: DefCB.PlaySlotMap[keyof DefCB.PlaySlotMap]): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CBPlaySummary.AsObject;
  static toObject(includeInstance: boolean, msg: CBPlaySummary): CBPlaySummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CBPlaySummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CBPlaySummary;
  static deserializeBinaryFromReader(message: CBPlaySummary, reader: jspb.BinaryReader): CBPlaySummary;
}

export namespace CBPlaySummary {
  export type AsObject = {
    slot: DefCB.PlaySlotMap[keyof DefCB.PlaySlotMap],
    amount: number,
  }
}

export class CBPlayResult extends jspb.Message {
  getSlot(): DefCB.PlaySlotMap[keyof DefCB.PlaySlotMap];
  setSlot(value: DefCB.PlaySlotMap[keyof DefCB.PlaySlotMap]): void;

  getAmount(): number;
  setAmount(value: number): void;

  getWin(): number;
  setWin(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CBPlayResult.AsObject;
  static toObject(includeInstance: boolean, msg: CBPlayResult): CBPlayResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CBPlayResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CBPlayResult;
  static deserializeBinaryFromReader(message: CBPlayResult, reader: jspb.BinaryReader): CBPlayResult;
}

export namespace CBPlayResult {
  export type AsObject = {
    slot: DefCB.PlaySlotMap[keyof DefCB.PlaySlotMap],
    amount: number,
    win: number,
  }
}

export class CBSlotUserPlaySummary extends jspb.Message {
  getSlot(): DefCB.PlaySlotMap[keyof DefCB.PlaySlotMap];
  setSlot(value: DefCB.PlaySlotMap[keyof DefCB.PlaySlotMap]): void;

  clearUserSummaryList(): void;
  getUserSummaryList(): Array<CBUserPlaySummary>;
  setUserSummaryList(value: Array<CBUserPlaySummary>): void;
  addUserSummary(value?: CBUserPlaySummary, index?: number): CBUserPlaySummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CBSlotUserPlaySummary.AsObject;
  static toObject(includeInstance: boolean, msg: CBSlotUserPlaySummary): CBSlotUserPlaySummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CBSlotUserPlaySummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CBSlotUserPlaySummary;
  static deserializeBinaryFromReader(message: CBSlotUserPlaySummary, reader: jspb.BinaryReader): CBSlotUserPlaySummary;
}

export namespace CBSlotUserPlaySummary {
  export type AsObject = {
    slot: DefCB.PlaySlotMap[keyof DefCB.PlaySlotMap],
    userSummaryList: Array<CBUserPlaySummary.AsObject>,
  }
}

export class CBUserPlaySummary extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  getWin(): number;
  setWin(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CBUserPlaySummary.AsObject;
  static toObject(includeInstance: boolean, msg: CBUserPlaySummary): CBUserPlaySummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CBUserPlaySummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CBUserPlaySummary;
  static deserializeBinaryFromReader(message: CBUserPlaySummary, reader: jspb.BinaryReader): CBUserPlaySummary;
}

export namespace CBUserPlaySummary {
  export type AsObject = {
    userId: number,
    name: string,
    avatar: string,
    amount: number,
    win: number,
  }
}

export class CBHandResult extends jspb.Message {
  clearCardsList(): void;
  getCardsList(): Array<number>;
  setCardsList(value: Array<number>): void;
  addCards(value: number, index?: number): number;

  getHandValueType(): number;
  setHandValueType(value: number): void;

  clearSelectedList(): void;
  getSelectedList(): Array<boolean>;
  setSelectedList(value: Array<boolean>): void;
  addSelected(value: boolean, index?: number): boolean;

  clearPublicCardsSelectedList(): void;
  getPublicCardsSelectedList(): Array<boolean>;
  setPublicCardsSelectedList(value: Array<boolean>): void;
  addPublicCardsSelected(value: boolean, index?: number): boolean;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CBHandResult.AsObject;
  static toObject(includeInstance: boolean, msg: CBHandResult): CBHandResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CBHandResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CBHandResult;
  static deserializeBinaryFromReader(message: CBHandResult, reader: jspb.BinaryReader): CBHandResult;
}

export namespace CBHandResult {
  export type AsObject = {
    cardsList: Array<number>,
    handValueType: number,
    selectedList: Array<boolean>,
    publicCardsSelectedList: Array<boolean>,
  }
}

export class CBGameHistorySummary extends jspb.Message {
  clearPublicCardsList(): void;
  getPublicCardsList(): Array<number>;
  setPublicCardsList(value: Array<number>): void;
  addPublicCards(value: number, index?: number): number;

  clearCowboyList(): void;
  getCowboyList(): Array<number>;
  setCowboyList(value: Array<number>): void;
  addCowboy(value: number, index?: number): number;

  clearBeautyList(): void;
  getBeautyList(): Array<number>;
  setBeautyList(value: Array<number>): void;
  addBeauty(value: number, index?: number): number;

  getTotal(): number;
  setTotal(value: number): void;

  clearResultSlotsList(): void;
  getResultSlotsList(): Array<DefCB.PlaySlotMap[keyof DefCB.PlaySlotMap]>;
  setResultSlotsList(value: Array<DefCB.PlaySlotMap[keyof DefCB.PlaySlotMap]>): void;
  addResultSlots(value: DefCB.PlaySlotMap[keyof DefCB.PlaySlotMap], index?: number): DefCB.PlaySlotMap[keyof DefCB.PlaySlotMap];

  clearMyPlayList(): void;
  getMyPlayList(): Array<CBPlayResult>;
  setMyPlayList(value: Array<CBPlayResult>): void;
  addMyPlay(value?: CBPlayResult, index?: number): CBPlayResult;

  getMyWin(): number;
  setMyWin(value: number): void;

  getGameNum(): number;
  setGameNum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CBGameHistorySummary.AsObject;
  static toObject(includeInstance: boolean, msg: CBGameHistorySummary): CBGameHistorySummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CBGameHistorySummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CBGameHistorySummary;
  static deserializeBinaryFromReader(message: CBGameHistorySummary, reader: jspb.BinaryReader): CBGameHistorySummary;
}

export namespace CBGameHistorySummary {
  export type AsObject = {
    publicCardsList: Array<number>,
    cowboyList: Array<number>,
    beautyList: Array<number>,
    total: number,
    resultSlotsList: Array<DefCB.PlaySlotMap[keyof DefCB.PlaySlotMap]>,
    myPlayList: Array<CBPlayResult.AsObject>,
    myWin: number,
    gameNum: number,
  }
}

export class CBHistoryItem extends jspb.Message {
  getSlot(): DefCB.HistorySlotMap[keyof DefCB.HistorySlotMap];
  setSlot(value: DefCB.HistorySlotMap[keyof DefCB.HistorySlotMap]): void;

  clearResultList(): void;
  getResultList(): Array<DefCB.HistoryResultMap[keyof DefCB.HistoryResultMap]>;
  setResultList(value: Array<DefCB.HistoryResultMap[keyof DefCB.HistoryResultMap]>): void;
  addResult(value: DefCB.HistoryResultMap[keyof DefCB.HistoryResultMap], index?: number): DefCB.HistoryResultMap[keyof DefCB.HistoryResultMap];

  getNotOccurTimes(): number;
  setNotOccurTimes(value: number): void;

  getOccurTimes(): number;
  setOccurTimes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CBHistoryItem.AsObject;
  static toObject(includeInstance: boolean, msg: CBHistoryItem): CBHistoryItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CBHistoryItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CBHistoryItem;
  static deserializeBinaryFromReader(message: CBHistoryItem, reader: jspb.BinaryReader): CBHistoryItem;
}

export namespace CBHistoryItem {
  export type AsObject = {
    slot: DefCB.HistorySlotMap[keyof DefCB.HistorySlotMap],
    resultList: Array<DefCB.HistoryResultMap[keyof DefCB.HistoryResultMap]>,
    notOccurTimes: number,
    occurTimes: number,
  }
}

export class CBHistorySimpleItem extends jspb.Message {
  getSlot(): DefCB.HistorySlotMap[keyof DefCB.HistorySlotMap];
  setSlot(value: DefCB.HistorySlotMap[keyof DefCB.HistorySlotMap]): void;

  getOccurTimes(): number;
  setOccurTimes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CBHistorySimpleItem.AsObject;
  static toObject(includeInstance: boolean, msg: CBHistorySimpleItem): CBHistorySimpleItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CBHistorySimpleItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CBHistorySimpleItem;
  static deserializeBinaryFromReader(message: CBHistorySimpleItem, reader: jspb.BinaryReader): CBHistorySimpleItem;
}

export namespace CBHistorySimpleItem {
  export type AsObject = {
    slot: DefCB.HistorySlotMap[keyof DefCB.HistorySlotMap],
    occurTimes: number,
  }
}

export class CBWayPointMove extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getColor(): DefCB.WayPointColorMap[keyof DefCB.WayPointColorMap];
  setColor(value: DefCB.WayPointColorMap[keyof DefCB.WayPointColorMap]): void;

  getMoveX(): number;
  setMoveX(value: number): void;

  getMoveY(): number;
  setMoveY(value: number): void;

  getHandValueType(): number;
  setHandValueType(value: number): void;

  getDrawNum(): number;
  setDrawNum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CBWayPointMove.AsObject;
  static toObject(includeInstance: boolean, msg: CBWayPointMove): CBWayPointMove.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CBWayPointMove, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CBWayPointMove;
  static deserializeBinaryFromReader(message: CBWayPointMove, reader: jspb.BinaryReader): CBWayPointMove;
}

export namespace CBWayPointMove {
  export type AsObject = {
    index: number,
    color: DefCB.WayPointColorMap[keyof DefCB.WayPointColorMap],
    moveX: number,
    moveY: number,
    handValueType: number,
    drawNum: number,
  }
}

export class CBWayPointStatic extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getColor(): DefCB.WayPointColorMap[keyof DefCB.WayPointColorMap];
  setColor(value: DefCB.WayPointColorMap[keyof DefCB.WayPointColorMap]): void;

  getPosX(): number;
  setPosX(value: number): void;

  getPosY(): number;
  setPosY(value: number): void;

  getHandValueType(): number;
  setHandValueType(value: number): void;

  getDrawNum(): number;
  setDrawNum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CBWayPointStatic.AsObject;
  static toObject(includeInstance: boolean, msg: CBWayPointStatic): CBWayPointStatic.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CBWayPointStatic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CBWayPointStatic;
  static deserializeBinaryFromReader(message: CBWayPointStatic, reader: jspb.BinaryReader): CBWayPointStatic;
}

export namespace CBWayPointStatic {
  export type AsObject = {
    index: number,
    color: DefCB.WayPointColorMap[keyof DefCB.WayPointColorMap],
    posX: number,
    posY: number,
    handValueType: number,
    drawNum: number,
  }
}

export class CBWayPointPreview extends jspb.Message {
  getBmColor(): DefCB.WayPointColorMap[keyof DefCB.WayPointColorMap];
  setBmColor(value: DefCB.WayPointColorMap[keyof DefCB.WayPointColorMap]): void;

  getSmColor(): DefCB.WayPointColorMap[keyof DefCB.WayPointColorMap];
  setSmColor(value: DefCB.WayPointColorMap[keyof DefCB.WayPointColorMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CBWayPointPreview.AsObject;
  static toObject(includeInstance: boolean, msg: CBWayPointPreview): CBWayPointPreview.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CBWayPointPreview, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CBWayPointPreview;
  static deserializeBinaryFromReader(message: CBWayPointPreview, reader: jspb.BinaryReader): CBWayPointPreview;
}

export namespace CBWayPointPreview {
  export type AsObject = {
    bmColor: DefCB.WayPointColorMap[keyof DefCB.WayPointColorMap],
    smColor: DefCB.WayPointColorMap[keyof DefCB.WayPointColorMap],
  }
}

export class CBWayPointMap extends jspb.Message {
  getWidth(): number;
  setWidth(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  clearSequenceList(): void;
  getSequenceList(): Array<CBWayPointMove>;
  setSequenceList(value: Array<CBWayPointMove>): void;
  addSequence(value?: CBWayPointMove, index?: number): CBWayPointMove;

  clearAdditionalList(): void;
  getAdditionalList(): Array<CBWayPointStatic>;
  setAdditionalList(value: Array<CBWayPointStatic>): void;
  addAdditional(value?: CBWayPointStatic, index?: number): CBWayPointStatic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CBWayPointMap.AsObject;
  static toObject(includeInstance: boolean, msg: CBWayPointMap): CBWayPointMap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CBWayPointMap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CBWayPointMap;
  static deserializeBinaryFromReader(message: CBWayPointMap, reader: jspb.BinaryReader): CBWayPointMap;
}

export namespace CBWayPointMap {
  export type AsObject = {
    width: number,
    height: number,
    sequenceList: Array<CBWayPointMove.AsObject>,
    additionalList: Array<CBWayPointStatic.AsObject>,
  }
}

export class CBUserPlay extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CBUserPlay.AsObject;
  static toObject(includeInstance: boolean, msg: CBUserPlay): CBUserPlay.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CBUserPlay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CBUserPlay;
  static deserializeBinaryFromReader(message: CBUserPlay, reader: jspb.BinaryReader): CBUserPlay;
}

export namespace CBUserPlay {
  export type AsObject = {
    userId: number,
    name: string,
    avatar: string,
    amount: number,
  }
}

export class CBUser extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CBUser.AsObject;
  static toObject(includeInstance: boolean, msg: CBUser): CBUser.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CBUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CBUser;
  static deserializeBinaryFromReader(message: CBUser, reader: jspb.BinaryReader): CBUser;
}

export namespace CBUser {
  export type AsObject = {
    userId: number,
    name: string,
    avatar: string,
  }
}

export class DefFT extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefFT.AsObject;
  static toObject(includeInstance: boolean, msg: DefFT): DefFT.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DefFT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefFT;
  static deserializeBinaryFromReader(message: DefFT, reader: jspb.BinaryReader): DefFT;
}

export namespace DefFT {
  export type AsObject = {
  }

  export interface ActionTypeMap {
    AT_NONE: 0;
    AT_GROUP: 1;
    AT_PAIR: 2;
  }

  export const ActionType: ActionTypeMap;
}

export class RoomInfoFT extends jspb.Message {
  getScheduleStartTime(): number;
  setScheduleStartTime(value: number): void;

  getSchedulePlayDuration(): number;
  setSchedulePlayDuration(value: number): void;

  getStartTime(): number;
  setStartTime(value: number): void;

  getCurrentMinstack(): number;
  setCurrentMinstack(value: number): void;

  getCurrentMinRate(): number;
  setCurrentMinRate(value: number): void;

  getCurrentMaxRate(): number;
  setCurrentMaxRate(value: number): void;

  getLimitIp(): boolean;
  setLimitIp(value: boolean): void;

  getLimitGps(): boolean;
  setLimitGps(value: boolean): void;

  getDelaySeeCard(): boolean;
  setDelaySeeCard(value: boolean): void;

  getOpDuration(): number;
  setOpDuration(value: number): void;

  getUniqueId(): string;
  setUniqueId(value: string): void;

  getSeatedMessaging(): boolean;
  setSeatedMessaging(value: boolean): void;

  getRoomType(): number;
  setRoomType(value: number): void;

  getAntiCheatType(): number;
  setAntiCheatType(value: number): void;

  getAntiCheatVideoType(): number;
  setAntiCheatVideoType(value: number): void;

  getPtLevel(): number;
  setPtLevel(value: number): void;

  getPersonalType(): number;
  setPersonalType(value: number): void;

  getMode(): Def.RoomModeMap[keyof Def.RoomModeMap];
  setMode(value: Def.RoomModeMap[keyof Def.RoomModeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomInfoFT.AsObject;
  static toObject(includeInstance: boolean, msg: RoomInfoFT): RoomInfoFT.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoomInfoFT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomInfoFT;
  static deserializeBinaryFromReader(message: RoomInfoFT, reader: jspb.BinaryReader): RoomInfoFT;
}

export namespace RoomInfoFT {
  export type AsObject = {
    scheduleStartTime: number,
    schedulePlayDuration: number,
    startTime: number,
    currentMinstack: number,
    currentMinRate: number,
    currentMaxRate: number,
    limitIp: boolean,
    limitGps: boolean,
    delaySeeCard: boolean,
    opDuration: number,
    uniqueId: string,
    seatedMessaging: boolean,
    roomType: number,
    antiCheatType: number,
    antiCheatVideoType: number,
    ptLevel: number,
    personalType: number,
    mode: Def.RoomModeMap[keyof Def.RoomModeMap],
  }
}

export class HandInfoFT extends jspb.Message {
  getHandNum(): number;
  setHandNum(value: number): void;

  getBuSeatId(): number;
  setBuSeatId(value: number): void;

  clearPublicCardsGroupList(): void;
  getPublicCardsGroupList(): Array<CardsGroup>;
  setPublicCardsGroupList(value: Array<CardsGroup>): void;
  addPublicCardsGroup(value?: CardsGroup, index?: number): CardsGroup;

  clearResultsList(): void;
  getResultsList(): Array<ResultFT>;
  setResultsList(value: Array<ResultFT>): void;
  addResults(value?: ResultFT, index?: number): ResultFT;

  getResultTime(): number;
  setResultTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandInfoFT.AsObject;
  static toObject(includeInstance: boolean, msg: HandInfoFT): HandInfoFT.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HandInfoFT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandInfoFT;
  static deserializeBinaryFromReader(message: HandInfoFT, reader: jspb.BinaryReader): HandInfoFT;
}

export namespace HandInfoFT {
  export type AsObject = {
    handNum: number,
    buSeatId: number,
    publicCardsGroupList: Array<CardsGroup.AsObject>,
    resultsList: Array<ResultFT.AsObject>,
    resultTime: number,
  }
}

export class CardsGroup extends jspb.Message {
  clearCardsList(): void;
  getCardsList(): Array<number>;
  setCardsList(value: Array<number>): void;
  addCards(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CardsGroup.AsObject;
  static toObject(includeInstance: boolean, msg: CardsGroup): CardsGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CardsGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CardsGroup;
  static deserializeBinaryFromReader(message: CardsGroup, reader: jspb.BinaryReader): CardsGroup;
}

export namespace CardsGroup {
  export type AsObject = {
    cardsList: Array<number>,
  }
}

export class HandCardIndexGroup extends jspb.Message {
  clearIndexList(): void;
  getIndexList(): Array<number>;
  setIndexList(value: Array<number>): void;
  addIndex(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandCardIndexGroup.AsObject;
  static toObject(includeInstance: boolean, msg: HandCardIndexGroup): HandCardIndexGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HandCardIndexGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandCardIndexGroup;
  static deserializeBinaryFromReader(message: HandCardIndexGroup, reader: jspb.BinaryReader): HandCardIndexGroup;
}

export namespace HandCardIndexGroup {
  export type AsObject = {
    indexList: Array<number>,
  }
}

export class PlayerCardsGroup extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  clearHandCardsGroupList(): void;
  getHandCardsGroupList(): Array<CardsGroup>;
  setHandCardsGroupList(value: Array<CardsGroup>): void;
  addHandCardsGroup(value?: CardsGroup, index?: number): CardsGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerCardsGroup.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerCardsGroup): PlayerCardsGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerCardsGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerCardsGroup;
  static deserializeBinaryFromReader(message: PlayerCardsGroup, reader: jspb.BinaryReader): PlayerCardsGroup;
}

export namespace PlayerCardsGroup {
  export type AsObject = {
    seatId: number,
    handCardsGroupList: Array<CardsGroup.AsObject>,
  }
}

export class PlayerFT extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getUserRid(): number;
  setUserRid(value: number): void;

  clearCardsList(): void;
  getCardsList(): Array<number>;
  setCardsList(value: Array<number>): void;
  addCards(value: number, index?: number): number;

  clearCardIndexGroupsList(): void;
  getCardIndexGroupsList(): Array<HandCardIndexGroup>;
  setCardIndexGroupsList(value: Array<HandCardIndexGroup>): void;
  addCardIndexGroups(value?: HandCardIndexGroup, index?: number): HandCardIndexGroup;

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

  getKeepSeatReason(): Def.KeepSeatReasonMap[keyof Def.KeepSeatReasonMap];
  setKeepSeatReason(value: Def.KeepSeatReasonMap[keyof Def.KeepSeatReasonMap]): void;

  getFantasy(): boolean;
  setFantasy(value: boolean): void;

  getStatus(): Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap];
  setStatus(value: Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap]): void;

  clearGroupPairedList(): void;
  getGroupPairedList(): Array<number>;
  setGroupPairedList(value: Array<number>): void;
  addGroupPaired(value: number, index?: number): number;

  getFantasyConNum(): number;
  setFantasyConNum(value: number): void;

  getUserSubscriptionId(): number;
  setUserSubscriptionId(value: number): void;

  getGroupConfirm(): boolean;
  setGroupConfirm(value: boolean): void;

  getPairConfirm(): boolean;
  setPairConfirm(value: boolean): void;

  getIpAddr(): string;
  setIpAddr(value: string): void;

  getVideoMaskId(): number;
  setVideoMaskId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerFT.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerFT): PlayerFT.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerFT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerFT;
  static deserializeBinaryFromReader(message: PlayerFT, reader: jspb.BinaryReader): PlayerFT;
}

export namespace PlayerFT {
  export type AsObject = {
    seatId: number,
    userRid: number,
    cardsList: Array<number>,
    cardIndexGroupsList: Array<HandCardIndexGroup.AsObject>,
    name: string,
    avatar: string,
    sex: number,
    chip: number,
    keepSeatLeftTime: number,
    isAutoop: boolean,
    vip: number,
    keepSeatDeadline: number,
    keepSeatReason: Def.KeepSeatReasonMap[keyof Def.KeepSeatReasonMap],
    fantasy: boolean,
    status: Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap],
    groupPairedList: Array<number>,
    fantasyConNum: number,
    userSubscriptionId: number,
    groupConfirm: boolean,
    pairConfirm: boolean,
    ipAddr: string,
    videoMaskId: number,
  }
}

export class MyGameInfoFT extends jspb.Message {
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

  getWantSeat(): Def.WantSeatTypeMap[keyof Def.WantSeatTypeMap];
  setWantSeat(value: Def.WantSeatTypeMap[keyof Def.WantSeatTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MyGameInfoFT.AsObject;
  static toObject(includeInstance: boolean, msg: MyGameInfoFT): MyGameInfoFT.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MyGameInfoFT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MyGameInfoFT;
  static deserializeBinaryFromReader(message: MyGameInfoFT, reader: jspb.BinaryReader): MyGameInfoFT;
}

export namespace MyGameInfoFT {
  export type AsObject = {
    chip: number,
    seatId: number,
    isAutoop: boolean,
    name: string,
    avatar: string,
    sex: number,
    userSubscriptionId: number,
    wantSeat: Def.WantSeatTypeMap[keyof Def.WantSeatTypeMap],
  }
}

export class OperatorFT extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getDelayTimes(): number;
  setDelayTimes(value: number): void;

  getOpDeadline(): number;
  setOpDeadline(value: number): void;

  getFantasy(): boolean;
  setFantasy(value: boolean): void;

  getActionType(): DefFT.ActionTypeMap[keyof DefFT.ActionTypeMap];
  setActionType(value: DefFT.ActionTypeMap[keyof DefFT.ActionTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperatorFT.AsObject;
  static toObject(includeInstance: boolean, msg: OperatorFT): OperatorFT.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperatorFT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperatorFT;
  static deserializeBinaryFromReader(message: OperatorFT, reader: jspb.BinaryReader): OperatorFT;
}

export namespace OperatorFT {
  export type AsObject = {
    seatId: number,
    delayTimes: number,
    opDeadline: number,
    fantasy: boolean,
    actionType: DefFT.ActionTypeMap[keyof DefFT.ActionTypeMap],
  }
}

export class PlayerStartInfoFT extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  clearCardsList(): void;
  getCardsList(): Array<number>;
  setCardsList(value: Array<number>): void;
  addCards(value: number, index?: number): number;

  getChip(): number;
  setChip(value: number): void;

  getFantasy(): boolean;
  setFantasy(value: boolean): void;

  getNeedGroup(): boolean;
  setNeedGroup(value: boolean): void;

  getWaitDeadline(): number;
  setWaitDeadline(value: number): void;

  getFantasyConNum(): number;
  setFantasyConNum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerStartInfoFT.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerStartInfoFT): PlayerStartInfoFT.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerStartInfoFT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerStartInfoFT;
  static deserializeBinaryFromReader(message: PlayerStartInfoFT, reader: jspb.BinaryReader): PlayerStartInfoFT;
}

export namespace PlayerStartInfoFT {
  export type AsObject = {
    seatId: number,
    cardsList: Array<number>,
    chip: number,
    fantasy: boolean,
    needGroup: boolean,
    waitDeadline: number,
    fantasyConNum: number,
  }
}

export class PlayerChipChangeFT extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getChange(): number;
  setChange(value: number): void;

  getChips(): number;
  setChips(value: number): void;

  getAuto(): boolean;
  setAuto(value: boolean): void;

  getReason(): Def.ChipChangeReasonMap[keyof Def.ChipChangeReasonMap];
  setReason(value: Def.ChipChangeReasonMap[keyof Def.ChipChangeReasonMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerChipChangeFT.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerChipChangeFT): PlayerChipChangeFT.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerChipChangeFT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerChipChangeFT;
  static deserializeBinaryFromReader(message: PlayerChipChangeFT, reader: jspb.BinaryReader): PlayerChipChangeFT;
}

export namespace PlayerChipChangeFT {
  export type AsObject = {
    seatId: number,
    change: number,
    chips: number,
    auto: boolean,
    reason: Def.ChipChangeReasonMap[keyof Def.ChipChangeReasonMap],
  }
}

export class GroupResultFT extends jspb.Message {
  clearWinCardsList(): void;
  getWinCardsList(): Array<WinCard>;
  setWinCardsList(value: Array<WinCard>): void;
  addWinCards(value?: WinCard, index?: number): WinCard;

  getHandValueType(): number;
  setHandValueType(value: number): void;

  getIsNuts(): boolean;
  setIsNuts(value: boolean): void;

  getBonusPt(): number;
  setBonusPt(value: number): void;

  getFantasy(): boolean;
  setFantasy(value: boolean): void;

  clearMyCardsList(): void;
  getMyCardsList(): Array<number>;
  setMyCardsList(value: Array<number>): void;
  addMyCards(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GroupResultFT.AsObject;
  static toObject(includeInstance: boolean, msg: GroupResultFT): GroupResultFT.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GroupResultFT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GroupResultFT;
  static deserializeBinaryFromReader(message: GroupResultFT, reader: jspb.BinaryReader): GroupResultFT;
}

export namespace GroupResultFT {
  export type AsObject = {
    winCardsList: Array<WinCard.AsObject>,
    handValueType: number,
    isNuts: boolean,
    bonusPt: number,
    fantasy: boolean,
    myCardsList: Array<number>,
  }
}

export class BoardsDetailFT extends jspb.Message {
  getTargetSeatId(): number;
  setTargetSeatId(value: number): void;

  clearBoardsPtList(): void;
  getBoardsPtList(): Array<number>;
  setBoardsPtList(value: Array<number>): void;
  addBoardsPt(value: number, index?: number): number;

  getFullWinBonusPt(): number;
  setFullWinBonusPt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoardsDetailFT.AsObject;
  static toObject(includeInstance: boolean, msg: BoardsDetailFT): BoardsDetailFT.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoardsDetailFT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoardsDetailFT;
  static deserializeBinaryFromReader(message: BoardsDetailFT, reader: jspb.BinaryReader): BoardsDetailFT;
}

export namespace BoardsDetailFT {
  export type AsObject = {
    targetSeatId: number,
    boardsPtList: Array<number>,
    fullWinBonusPt: number,
  }
}

export class ResultFT extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  clearGroupResultList(): void;
  getGroupResultList(): Array<GroupResultFT>;
  setGroupResultList(value: Array<GroupResultFT>): void;
  addGroupResult(value?: GroupResultFT, index?: number): GroupResultFT;

  getBoardsPt(): number;
  setBoardsPt(value: number): void;

  getBonusPt(): number;
  setBonusPt(value: number): void;

  getBonusComparePt(): number;
  setBonusComparePt(value: number): void;

  getChip(): number;
  setChip(value: number): void;

  getWinLosePt(): number;
  setWinLosePt(value: number): void;

  getWinLoseChip(): number;
  setWinLoseChip(value: number): void;

  getFee(): number;
  setFee(value: number): void;

  getFantasy(): boolean;
  setFantasy(value: boolean): void;

  getNextFantasy(): boolean;
  setNextFantasy(value: boolean): void;

  getStandUp(): boolean;
  setStandUp(value: boolean): void;

  clearBoardsDetailList(): void;
  getBoardsDetailList(): Array<BoardsDetailFT>;
  setBoardsDetailList(value: Array<BoardsDetailFT>): void;
  addBoardsDetail(value?: BoardsDetailFT, index?: number): BoardsDetailFT;

  getUserRid(): number;
  setUserRid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResultFT.AsObject;
  static toObject(includeInstance: boolean, msg: ResultFT): ResultFT.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResultFT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResultFT;
  static deserializeBinaryFromReader(message: ResultFT, reader: jspb.BinaryReader): ResultFT;
}

export namespace ResultFT {
  export type AsObject = {
    seatId: number,
    groupResultList: Array<GroupResultFT.AsObject>,
    boardsPt: number,
    bonusPt: number,
    bonusComparePt: number,
    chip: number,
    winLosePt: number,
    winLoseChip: number,
    fee: number,
    fantasy: boolean,
    nextFantasy: boolean,
    standUp: boolean,
    boardsDetailList: Array<BoardsDetailFT.AsObject>,
    userRid: number,
  }
}

export class PlayerSummaryFT extends jspb.Message {
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

  getStatus(): Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap];
  setStatus(value: Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap]): void;

  getIsOnline(): boolean;
  setIsOnline(value: boolean): void;

  getFantasyCount(): number;
  setFantasyCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerSummaryFT.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerSummaryFT): PlayerSummaryFT.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerSummaryFT, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerSummaryFT;
  static deserializeBinaryFromReader(message: PlayerSummaryFT, reader: jspb.BinaryReader): PlayerSummaryFT;
}

export namespace PlayerSummaryFT {
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
    status: Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap],
    isOnline: boolean,
    fantasyCount: number,
  }
}

export class DefGD extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DefGD.AsObject;
  static toObject(includeInstance: boolean, msg: DefGD): DefGD.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DefGD, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DefGD;
  static deserializeBinaryFromReader(message: DefGD, reader: jspb.BinaryReader): DefGD;
}

export namespace DefGD {
  export type AsObject = {
  }

  export interface WinTypeMap {
    WNT_NONE: 0;
    WNT_FIRST: 1;
    WNT_SECOND: 2;
    WNT_THIRD: 3;
    WNT_FOURTH: 4;
  }

  export const WinType: WinTypeMap;

  export interface WaitTypeMap {
    WT_NONE: 0;
    WT_START: 1;
    WT_WINRATE: 2;
    WT_TRIBUTE_GIVE: 3;
    WT_TRIBUTE_RETURN: 4;
    WT_TURN: 5;
  }

  export const WaitType: WaitTypeMap;

  export interface ActionGdMap {
    ACT_NONE: 0;
    ACT_DISCARD: 1;
    ACT_PASS: 2;
  }

  export const ActionGd: ActionGdMap;

  export interface CardsTypeMap {
    NONE: 0;
    SINGLE: 1;
    PAIR: 2;
    TRIPS: 4;
    TWOTRIPS: 5;
    TREEPAIR: 3;
    THREEWITHTWO: 6;
    STRAIGHT: 7;
    BOMB: 8;
    STRAIGHTFLUSH: 9;
    JOKERBOMB: 10;
  }

  export const CardsType: CardsTypeMap;
}

export class Card extends jspb.Message {
  getIndex(): number;
  setIndex(value: number): void;

  getCard(): number;
  setCard(value: number): void;

  getReplaceCard(): number;
  setReplaceCard(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Card.AsObject;
  static toObject(includeInstance: boolean, msg: Card): Card.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Card, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Card;
  static deserializeBinaryFromReader(message: Card, reader: jspb.BinaryReader): Card;
}

export namespace Card {
  export type AsObject = {
    index: number,
    card: number,
    replaceCard: number,
  }
}

export class ValidCards extends jspb.Message {
  getCardsType(): DefGD.CardsTypeMap[keyof DefGD.CardsTypeMap];
  setCardsType(value: DefGD.CardsTypeMap[keyof DefGD.CardsTypeMap]): void;

  clearCardsList(): void;
  getCardsList(): Array<Card>;
  setCardsList(value: Array<Card>): void;
  addCards(value?: Card, index?: number): Card;

  getUniqueId(): string;
  setUniqueId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidCards.AsObject;
  static toObject(includeInstance: boolean, msg: ValidCards): ValidCards.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ValidCards, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidCards;
  static deserializeBinaryFromReader(message: ValidCards, reader: jspb.BinaryReader): ValidCards;
}

export namespace ValidCards {
  export type AsObject = {
    cardsType: DefGD.CardsTypeMap[keyof DefGD.CardsTypeMap],
    cardsList: Array<Card.AsObject>,
    uniqueId: string,
  }
}

export class RoomInfoGD extends jspb.Message {
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

  getLimitIp(): boolean;
  setLimitIp(value: boolean): void;

  getLimitGps(): boolean;
  setLimitGps(value: boolean): void;

  getOpDuration(): number;
  setOpDuration(value: number): void;

  getUniqueId(): string;
  setUniqueId(value: string): void;

  getSeatedMessaging(): boolean;
  setSeatedMessaging(value: boolean): void;

  getRoomType(): number;
  setRoomType(value: number): void;

  getAntiCheatType(): number;
  setAntiCheatType(value: number): void;

  getAntiCheatVideoType(): number;
  setAntiCheatVideoType(value: number): void;

  getPersonalType(): number;
  setPersonalType(value: number): void;

  getLevelType(): number;
  setLevelType(value: number): void;

  getMode(): Def.RoomModeMap[keyof Def.RoomModeMap];
  setMode(value: Def.RoomModeMap[keyof Def.RoomModeMap]): void;

  getBombFour(): number;
  setBombFour(value: number): void;

  getBombFive(): number;
  setBombFive(value: number): void;

  getStraightFlush(): number;
  setStraightFlush(value: number): void;

  getBombSix(): number;
  setBombSix(value: number): void;

  getBombSeven(): number;
  setBombSeven(value: number): void;

  getBombEight(): number;
  setBombEight(value: number): void;

  getBombNine(): number;
  setBombNine(value: number): void;

  getBombTen(): number;
  setBombTen(value: number): void;

  getJokerBomb(): number;
  setJokerBomb(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomInfoGD.AsObject;
  static toObject(includeInstance: boolean, msg: RoomInfoGD): RoomInfoGD.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoomInfoGD, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomInfoGD;
  static deserializeBinaryFromReader(message: RoomInfoGD, reader: jspb.BinaryReader): RoomInfoGD;
}

export namespace RoomInfoGD {
  export type AsObject = {
    scheduleStartTime: number,
    schedulePlayDuration: number,
    startTime: number,
    currentMinStack: number,
    currentMinRate: number,
    currentMaxRate: number,
    currentMaxWinrate: number,
    ptLevel: number,
    limitIp: boolean,
    limitGps: boolean,
    opDuration: number,
    uniqueId: string,
    seatedMessaging: boolean,
    roomType: number,
    antiCheatType: number,
    antiCheatVideoType: number,
    personalType: number,
    levelType: number,
    mode: Def.RoomModeMap[keyof Def.RoomModeMap],
    bombFour: number,
    bombFive: number,
    straightFlush: number,
    bombSix: number,
    bombSeven: number,
    bombEight: number,
    bombNine: number,
    bombTen: number,
    jokerBomb: number,
  }
}

export class MatchInfoGD extends jspb.Message {
  getMatchNum(): number;
  setMatchNum(value: number): void;

  getDealerSeatId(): number;
  setDealerSeatId(value: number): void;

  getWaitDeadline(): number;
  setWaitDeadline(value: number): void;

  getWaitType(): DefGD.WaitTypeMap[keyof DefGD.WaitTypeMap];
  setWaitType(value: DefGD.WaitTypeMap[keyof DefGD.WaitTypeMap]): void;

  getCurrentInitWinrate(): number;
  setCurrentInitWinrate(value: number): void;

  getLevelCard(): number;
  setLevelCard(value: number): void;

  getLevelGroup(): number;
  setLevelGroup(value: number): void;

  clearDiscardCardsList(): void;
  getDiscardCardsList(): Array<Card>;
  setDiscardCardsList(value: Array<Card>): void;
  addDiscardCards(value?: Card, index?: number): Card;

  getLevelCardGroup1(): number;
  setLevelCardGroup1(value: number): void;

  getLevelCardGroup2(): number;
  setLevelCardGroup2(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MatchInfoGD.AsObject;
  static toObject(includeInstance: boolean, msg: MatchInfoGD): MatchInfoGD.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MatchInfoGD, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MatchInfoGD;
  static deserializeBinaryFromReader(message: MatchInfoGD, reader: jspb.BinaryReader): MatchInfoGD;
}

export namespace MatchInfoGD {
  export type AsObject = {
    matchNum: number,
    dealerSeatId: number,
    waitDeadline: number,
    waitType: DefGD.WaitTypeMap[keyof DefGD.WaitTypeMap],
    currentInitWinrate: number,
    levelCard: number,
    levelGroup: number,
    discardCardsList: Array<Card.AsObject>,
    levelCardGroup1: number,
    levelCardGroup2: number,
  }
}

export class PlayerStartInfoGD extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  clearCardsList(): void;
  getCardsList(): Array<Card>;
  setCardsList(value: Array<Card>): void;
  addCards(value?: Card, index?: number): Card;

  getChip(): number;
  setChip(value: number): void;

  hasOp(): boolean;
  clearOp(): void;
  getOp(): OperatorGD | undefined;
  setOp(value?: OperatorGD): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerStartInfoGD.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerStartInfoGD): PlayerStartInfoGD.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerStartInfoGD, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerStartInfoGD;
  static deserializeBinaryFromReader(message: PlayerStartInfoGD, reader: jspb.BinaryReader): PlayerStartInfoGD;
}

export namespace PlayerStartInfoGD {
  export type AsObject = {
    seatId: number,
    cardsList: Array<Card.AsObject>,
    chip: number,
    op?: OperatorGD.AsObject,
  }
}

export class PlayerGD extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getUserRid(): number;
  setUserRid(value: number): void;

  clearCardsList(): void;
  getCardsList(): Array<Card>;
  setCardsList(value: Array<Card>): void;
  addCards(value?: Card, index?: number): Card;

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

  getKeepSeatReason(): Def.KeepSeatReasonMap[keyof Def.KeepSeatReasonMap];
  setKeepSeatReason(value: Def.KeepSeatReasonMap[keyof Def.KeepSeatReasonMap]): void;

  getStatus(): Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap];
  setStatus(value: Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap]): void;

  getUserSubscriptionId(): number;
  setUserSubscriptionId(value: number): void;

  getHandCardsLength(): number;
  setHandCardsLength(value: number): void;

  getAddRate(): boolean;
  setAddRate(value: boolean): void;

  hasTributeCard(): boolean;
  clearTributeCard(): void;
  getTributeCard(): TributeCard | undefined;
  setTributeCard(value?: TributeCard): void;

  getRank(): DefGD.WinTypeMap[keyof DefGD.WinTypeMap];
  setRank(value: DefGD.WinTypeMap[keyof DefGD.WinTypeMap]): void;

  getTotalWinLose(): number;
  setTotalWinLose(value: number): void;

  getReadyStart(): boolean;
  setReadyStart(value: boolean): void;

  getLastAction(): DefGD.ActionGdMap[keyof DefGD.ActionGdMap];
  setLastAction(value: DefGD.ActionGdMap[keyof DefGD.ActionGdMap]): void;

  hasLastDiscard(): boolean;
  clearLastDiscard(): void;
  getLastDiscard(): ValidCards | undefined;
  setLastDiscard(value?: ValidCards): void;

  getGold(): number;
  setGold(value: number): void;

  getIpAddr(): string;
  setIpAddr(value: string): void;

  getVideoMaskId(): number;
  setVideoMaskId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerGD.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerGD): PlayerGD.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerGD, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerGD;
  static deserializeBinaryFromReader(message: PlayerGD, reader: jspb.BinaryReader): PlayerGD;
}

export namespace PlayerGD {
  export type AsObject = {
    seatId: number,
    userRid: number,
    cardsList: Array<Card.AsObject>,
    name: string,
    avatar: string,
    sex: number,
    chip: number,
    keepSeatLeftTime: number,
    isAutoop: boolean,
    vip: number,
    keepSeatDeadline: number,
    keepSeatReason: Def.KeepSeatReasonMap[keyof Def.KeepSeatReasonMap],
    status: Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap],
    userSubscriptionId: number,
    handCardsLength: number,
    addRate: boolean,
    tributeCard?: TributeCard.AsObject,
    rank: DefGD.WinTypeMap[keyof DefGD.WinTypeMap],
    totalWinLose: number,
    readyStart: boolean,
    lastAction: DefGD.ActionGdMap[keyof DefGD.ActionGdMap],
    lastDiscard?: ValidCards.AsObject,
    gold: number,
    ipAddr: string,
    videoMaskId: number,
  }
}

export class MyGameInfoGD extends jspb.Message {
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

  getWantSeat(): Def.WantSeatTypeMap[keyof Def.WantSeatTypeMap];
  setWantSeat(value: Def.WantSeatTypeMap[keyof Def.WantSeatTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MyGameInfoGD.AsObject;
  static toObject(includeInstance: boolean, msg: MyGameInfoGD): MyGameInfoGD.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MyGameInfoGD, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MyGameInfoGD;
  static deserializeBinaryFromReader(message: MyGameInfoGD, reader: jspb.BinaryReader): MyGameInfoGD;
}

export namespace MyGameInfoGD {
  export type AsObject = {
    chip: number,
    seatId: number,
    isAutoop: boolean,
    name: string,
    avatar: string,
    sex: number,
    userSubscriptionId: number,
    wantSeat: Def.WantSeatTypeMap[keyof Def.WantSeatTypeMap],
  }
}

export class OperatorGD extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getDelayTimes(): number;
  setDelayTimes(value: number): void;

  getOpDeadline(): number;
  setOpDeadline(value: number): void;

  getWaitType(): DefGD.WaitTypeMap[keyof DefGD.WaitTypeMap];
  setWaitType(value: DefGD.WaitTypeMap[keyof DefGD.WaitTypeMap]): void;

  clearValidActionsList(): void;
  getValidActionsList(): Array<DefGD.ActionGdMap[keyof DefGD.ActionGdMap]>;
  setValidActionsList(value: Array<DefGD.ActionGdMap[keyof DefGD.ActionGdMap]>): void;
  addValidActions(value: DefGD.ActionGdMap[keyof DefGD.ActionGdMap], index?: number): DefGD.ActionGdMap[keyof DefGD.ActionGdMap];

  clearDiscardCardsList(): void;
  getDiscardCardsList(): Array<ValidCards>;
  setDiscardCardsList(value: Array<ValidCards>): void;
  addDiscardCards(value?: ValidCards, index?: number): ValidCards;

  getRefuseTribute(): boolean;
  setRefuseTribute(value: boolean): void;

  clearTributeCardsList(): void;
  getTributeCardsList(): Array<Card>;
  setTributeCardsList(value: Array<Card>): void;
  addTributeCards(value?: Card, index?: number): Card;

  getFirst(): boolean;
  setFirst(value: boolean): void;

  getFollow(): boolean;
  setFollow(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OperatorGD.AsObject;
  static toObject(includeInstance: boolean, msg: OperatorGD): OperatorGD.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OperatorGD, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OperatorGD;
  static deserializeBinaryFromReader(message: OperatorGD, reader: jspb.BinaryReader): OperatorGD;
}

export namespace OperatorGD {
  export type AsObject = {
    seatId: number,
    delayTimes: number,
    opDeadline: number,
    waitType: DefGD.WaitTypeMap[keyof DefGD.WaitTypeMap],
    validActionsList: Array<DefGD.ActionGdMap[keyof DefGD.ActionGdMap]>,
    discardCardsList: Array<ValidCards.AsObject>,
    refuseTribute: boolean,
    tributeCardsList: Array<Card.AsObject>,
    first: boolean,
    follow: boolean,
  }
}

export class PlayerChipChangeGD extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getChange(): number;
  setChange(value: number): void;

  getChips(): number;
  setChips(value: number): void;

  getAuto(): boolean;
  setAuto(value: boolean): void;

  getReason(): Def.ChipChangeReasonMap[keyof Def.ChipChangeReasonMap];
  setReason(value: Def.ChipChangeReasonMap[keyof Def.ChipChangeReasonMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerChipChangeGD.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerChipChangeGD): PlayerChipChangeGD.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerChipChangeGD, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerChipChangeGD;
  static deserializeBinaryFromReader(message: PlayerChipChangeGD, reader: jspb.BinaryReader): PlayerChipChangeGD;
}

export namespace PlayerChipChangeGD {
  export type AsObject = {
    seatId: number,
    change: number,
    chips: number,
    auto: boolean,
    reason: Def.ChipChangeReasonMap[keyof Def.ChipChangeReasonMap],
  }
}

export class ResultGD extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getChip(): number;
  setChip(value: number): void;

  getTotalWinLose(): number;
  setTotalWinLose(value: number): void;

  getRank(): DefGD.WinTypeMap[keyof DefGD.WinTypeMap];
  setRank(value: DefGD.WinTypeMap[keyof DefGD.WinTypeMap]): void;

  getStandUp(): boolean;
  setStandUp(value: boolean): void;

  getUserRid(): number;
  setUserRid(value: number): void;

  clearCardsList(): void;
  getCardsList(): Array<Card>;
  setCardsList(value: Array<Card>): void;
  addCards(value?: Card, index?: number): Card;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResultGD.AsObject;
  static toObject(includeInstance: boolean, msg: ResultGD): ResultGD.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResultGD, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResultGD;
  static deserializeBinaryFromReader(message: ResultGD, reader: jspb.BinaryReader): ResultGD;
}

export namespace ResultGD {
  export type AsObject = {
    seatId: number,
    chip: number,
    totalWinLose: number,
    rank: DefGD.WinTypeMap[keyof DefGD.WinTypeMap],
    standUp: boolean,
    userRid: number,
    cardsList: Array<Card.AsObject>,
  }
}

export class PlayerSummaryGD extends jspb.Message {
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

  getStatus(): Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap];
  setStatus(value: Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap]): void;

  getIsOnline(): boolean;
  setIsOnline(value: boolean): void;

  getFirstCount(): number;
  setFirstCount(value: number): void;

  getSecondCount(): number;
  setSecondCount(value: number): void;

  getThirdCount(): number;
  setThirdCount(value: number): void;

  getFourthCount(): number;
  setFourthCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerSummaryGD.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerSummaryGD): PlayerSummaryGD.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerSummaryGD, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerSummaryGD;
  static deserializeBinaryFromReader(message: PlayerSummaryGD, reader: jspb.BinaryReader): PlayerSummaryGD;
}

export namespace PlayerSummaryGD {
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
    status: Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap],
    isOnline: boolean,
    firstCount: number,
    secondCount: number,
    thirdCount: number,
    fourthCount: number,
  }
}

export class TributeCard extends jspb.Message {
  getFromSeatId(): number;
  setFromSeatId(value: number): void;

  getToSeatId(): number;
  setToSeatId(value: number): void;

  hasCard(): boolean;
  clearCard(): void;
  getCard(): Card | undefined;
  setCard(value?: Card): void;

  getRefuse(): boolean;
  setRefuse(value: boolean): void;

  getGive(): boolean;
  setGive(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TributeCard.AsObject;
  static toObject(includeInstance: boolean, msg: TributeCard): TributeCard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TributeCard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TributeCard;
  static deserializeBinaryFromReader(message: TributeCard, reader: jspb.BinaryReader): TributeCard;
}

export namespace TributeCard {
  export type AsObject = {
    fromSeatId: number,
    toSeatId: number,
    card?: Card.AsObject,
    refuse: boolean,
    give: boolean,
  }
}

export class PlayerGoldGD extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getGold(): number;
  setGold(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerGoldGD.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerGoldGD): PlayerGoldGD.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerGoldGD, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerGoldGD;
  static deserializeBinaryFromReader(message: PlayerGoldGD, reader: jspb.BinaryReader): PlayerGoldGD;
}

export namespace PlayerGoldGD {
  export type AsObject = {
    seatId: number,
    gold: number,
  }
}

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
    WT_TURN: 1;
    WT_CLAIM: 2;
    WT_EXCHANGE: 3;
    WT_VOIDSUIT: 4;
    WT_RAISE: 5;
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
    TT_JOKER: 7;
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
    PASS: 9;
    JOKERKONG: 10;
  }

  export const ActionMj: ActionMjMap;

  export interface WinLoseReasonMap {
    WLRNONE: 0;
    WR_SELFDRAW: 1;
    WR_DISCARD: 2;
    WR_DRAW_CHECK: 4;
    WR_VS_CHECK: 5;
    WR_MELDEDKONG1_AWD: 6;
    WR_MELDEDKONG1_AWD_R: 7;
    WR_MELDEDKONG1_AWD_RROB: 8;
    LR_SELF_DRAW: 9;
    LR_DISCARD: 10;
    LR_DRAW_CHECK: 12;
    LR_VS_CHECK: 13;
    LR_MELDEDKONG1_AWD: 14;
    LR_MELDEDKONG1_AWD_R: 15;
    LR_MELDEDKONG1_AWD_RROB: 16;
    WLR_DRAW: 17;
    WR_CONCEALEDKONG_AWD: 18;
    WR_CONCEALEDKONG_AWD_R: 19;
    WR_MELDEDKONG3_AWD: 21;
    WR_MELDEDKONG3_AWD_R: 22;
    LR_CONCEALEDKONG_AWD: 24;
    LR_CONCEALEDKONG_AWD_R: 25;
    LR_MELDEDKONG3_AWD: 27;
    LR_MELDEDKONG3_AWD_R: 28;
    WR_KONG_TRANSFER: 29;
    WR_KONG_TRANSFER_R: 30;
    WR_RAISE: 31;
    WR_FOLLOW_DEALER: 32;
    LR_KONG_TRANSFER: 33;
    LR_KONG_TRANSFER_R: 34;
    LR_RAISE: 35;
    LR_FOLLOW_DEALER: 36;
    WR_ONE_MATCH_MORE_WIN: 37;
    LR_ONE_MATCH_MORE_WIN: 38;
    WR_SIMPLE_HORSE: 39;
    LR_SIMPLE_HORSE: 40;
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
    WNT_SELFDRAWN: 22;
    WNT_LASTTILEDRAW: 23;
    WNT_LASTTILECLAIM: 24;
    WNT_CHICKENHAND: 25;
    WNT_PURESTRAIGHT: 26;
    WNT_THIRTEENORPHANS: 27;
    WNT_MELDEDHAND: 28;
    WNT_CONCEALED: 29;
    WNT_FFFOURKONGS: 30;
    WNT_EYESTHREEDRAGONSEVENPAIRS: 31;
    WNT_FOURKONGS: 32;
    WNT_NINEGATES1: 33;
    WNT_NINEGATES2: 34;
    WNT_EYESDOUBLEDRAGONSEVENPAIRS: 35;
    WNT_PURETERMINALCHOWS: 36;
    WNT_THREEDRAGONSEVENPAIRS: 37;
    WNT_DOUBLEDRAGONSEVENPAIRS: 38;
    WNT_SINGLETILEALLPUNGSJOKER: 39;
    WNT_EYESSEVENPAIRS: 40;
    WNT_FOURCONCEALEDPUNGS: 41;
    WNT_FOURPURIFYSHIFTEDPUNGS: 42;
    WNT_THREEKONGS: 43;
    WNT_ALLEVENPUNGS: 44;
    WNT_THREEPURIFYSHIFTEDPUNGS: 45;
    WNT_THREECONCEALEDPUNGS: 46;
    WNT_ALLSIMPLE: 47;
    WNT_NOJOKER: 48;
    WNT_DOUBLEPUNGS: 49;
    WNT_SHORTSTRAIGHT: 50;
    WNT_HALFFLUSH: 51;
  }

  export const WinType: WinTypeMap;

  export interface ActionFailReasonMap {
    AFRNONE: 0;
    AFRMAX: 1;
    AFRROBKONG: 2;
  }

  export const ActionFailReason: ActionFailReasonMap;

  export interface ExtraReasonMap {
    ER_NONE: 0;
    ER_ROBKONG: 1;
    ER_OUTWITHREPLACEMENTTILEDISCARD: 2;
    ER_12: 3;
  }

  export const ExtraReason: ExtraReasonMap;

  export interface ExchangeModeMap {
    EXMODE_LEFT: 0;
    EXMODE_RIGHT: 1;
    EXMODE_OPPOSITE: 2;
  }

  export const ExchangeMode: ExchangeModeMap;

  export interface ActionAllTypeMap {
    AAT_NONE: 0;
    AAT_CLAIM: 1;
    AAT_READY_HAND: 2;
    AAT_ACTION: 3;
  }

  export const ActionAllType: ActionAllTypeMap;
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

  getMode(): Def.RoomModeMap[keyof Def.RoomModeMap];
  setMode(value: Def.RoomModeMap[keyof Def.RoomModeMap]): void;

  clearRuleMjList(): void;
  getRuleMjList(): Array<RuleUnit>;
  setRuleMjList(value: Array<RuleUnit>): void;
  addRuleMj(value?: RuleUnit, index?: number): RuleUnit;

  getStraddleOn(): number;
  setStraddleOn(value: number): void;

  getStraddleMax(): number;
  setStraddleMax(value: number): void;

  getInsuranceOpDuration(): number;
  setInsuranceOpDuration(value: number): void;

  getSecondPcsOpDuration(): number;
  setSecondPcsOpDuration(value: number): void;

  getSecondPcsUserLimit(): number;
  setSecondPcsUserLimit(value: number): void;

  getDelayViewCardOn(): number;
  setDelayViewCardOn(value: number): void;

  getPostOn(): number;
  setPostOn(value: number): void;

  getMuckOn(): number;
  setMuckOn(value: number): void;

  getBombpot(): number;
  setBombpot(value: number): void;

  getKongTransfer(): number;
  setKongTransfer(value: number): void;

  getKongWinOfDiscard(): number;
  setKongWinOfDiscard(value: number): void;

  getSelfDrawnType(): number;
  setSelfDrawnType(value: number): void;

  hasWinTypeRule(): boolean;
  clearWinTypeRule(): void;
  getWinTypeRule(): WinTypeRule | undefined;
  setWinTypeRule(value?: WinTypeRule): void;

  getKongWinOfDiscardType(): number;
  setKongWinOfDiscardType(value: number): void;

  getJoker(): number;
  setJoker(value: number): void;

  getWinWay(): number;
  setWinWay(value: number): void;

  getSingleHolder(): number;
  setSingleHolder(value: number): void;

  getRobKongHolder(): number;
  setRobKongHolder(value: number): void;

  getRobKong(): number;
  setRobKong(value: number): void;

  getWallType(): number;
  setWallType(value: number): void;

  getFollowDealer(): number;
  setFollowDealer(value: number): void;

  getRaise(): number;
  setRaise(value: number): void;

  getJokerCount(): number;
  setJokerCount(value: number): void;

  getOneMatchMoreWin(): number;
  setOneMatchMoreWin(value: number): void;

  getSimpleHorseMode(): number;
  setSimpleHorseMode(value: number): void;

  getSimpleHorseCount(): number;
  setSimpleHorseCount(value: number): void;

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
    mode: Def.RoomModeMap[keyof Def.RoomModeMap],
    ruleMjList: Array<RuleUnit.AsObject>,
    straddleOn: number,
    straddleMax: number,
    insuranceOpDuration: number,
    secondPcsOpDuration: number,
    secondPcsUserLimit: number,
    delayViewCardOn: number,
    postOn: number,
    muckOn: number,
    bombpot: number,
    kongTransfer: number,
    kongWinOfDiscard: number,
    selfDrawnType: number,
    winTypeRule?: WinTypeRule.AsObject,
    kongWinOfDiscardType: number,
    joker: number,
    winWay: number,
    singleHolder: number,
    robKongHolder: number,
    robKong: number,
    wallType: number,
    followDealer: number,
    raise: number,
    jokerCount: number,
    oneMatchMoreWin: number,
    simpleHorseMode: number,
    simpleHorseCount: number,
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

  getWaitDeadline(): number;
  setWaitDeadline(value: number): void;

  getWallLeft(): number;
  setWallLeft(value: number): void;

  getWaitType(): DefMJ.WaitTypeMap[keyof DefMJ.WaitTypeMap];
  setWaitType(value: DefMJ.WaitTypeMap[keyof DefMJ.WaitTypeMap]): void;

  getDraw(): boolean;
  setDraw(value: boolean): void;

  getFinal(): boolean;
  setFinal(value: boolean): void;

  hasLastDiscard(): boolean;
  clearLastDiscard(): void;
  getLastDiscard(): Tile | undefined;
  setLastDiscard(value?: Tile): void;

  getJoker(): number;
  setJoker(value: number): void;

  hasRandomForJoker(): boolean;
  clearRandomForJoker(): void;
  getRandomForJoker(): Tile | undefined;
  setRandomForJoker(value?: Tile): void;

  getJokerCount(): number;
  setJokerCount(value: number): void;

  getWinWay(): number;
  setWinWay(value: number): void;

  getRaise(): boolean;
  setRaise(value: boolean): void;

  getFollowDealer(): boolean;
  setFollowDealer(value: boolean): void;

  getRealJokerValue(): number;
  setRealJokerValue(value: number): void;

  clearHorseTilesList(): void;
  getHorseTilesList(): Array<number>;
  setHorseTilesList(value: Array<number>): void;
  addHorseTiles(value: number, index?: number): number;

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
    waitDeadline: number,
    wallLeft: number,
    waitType: DefMJ.WaitTypeMap[keyof DefMJ.WaitTypeMap],
    draw: boolean,
    pb_final: boolean,
    lastDiscard?: Tile.AsObject,
    joker: number,
    randomForJoker?: Tile.AsObject,
    jokerCount: number,
    winWay: number,
    raise: boolean,
    followDealer: boolean,
    realJokerValue: number,
    horseTilesList: Array<number>,
  }
}

export class ExchangeFlower extends jspb.Message {
  clearFlowersList(): void;
  getFlowersList(): Array<Tile>;
  setFlowersList(value: Array<Tile>): void;
  addFlowers(value?: Tile, index?: number): Tile;

  clearTilesList(): void;
  getTilesList(): Array<Tile>;
  setTilesList(value: Array<Tile>): void;
  addTiles(value?: Tile, index?: number): Tile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExchangeFlower.AsObject;
  static toObject(includeInstance: boolean, msg: ExchangeFlower): ExchangeFlower.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExchangeFlower, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExchangeFlower;
  static deserializeBinaryFromReader(message: ExchangeFlower, reader: jspb.BinaryReader): ExchangeFlower;
}

export namespace ExchangeFlower {
  export type AsObject = {
    flowersList: Array<Tile.AsObject>,
    tilesList: Array<Tile.AsObject>,
  }
}

export class PlayerPrepareMJ extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getChip(): number;
  setChip(value: number): void;

  getWaitType(): DefMJ.WaitTypeMap[keyof DefMJ.WaitTypeMap];
  setWaitType(value: DefMJ.WaitTypeMap[keyof DefMJ.WaitTypeMap]): void;

  getWaitDeadline(): number;
  setWaitDeadline(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerPrepareMJ.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerPrepareMJ): PlayerPrepareMJ.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerPrepareMJ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerPrepareMJ;
  static deserializeBinaryFromReader(message: PlayerPrepareMJ, reader: jspb.BinaryReader): PlayerPrepareMJ;
}

export namespace PlayerPrepareMJ {
  export type AsObject = {
    seatId: number,
    chip: number,
    waitType: DefMJ.WaitTypeMap[keyof DefMJ.WaitTypeMap],
    waitDeadline: number,
  }
}

export class PlayerStartInfoMJ extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  clearOrderTilesList(): void;
  getOrderTilesList(): Array<Tile>;
  setOrderTilesList(value: Array<Tile>): void;
  addOrderTiles(value?: Tile, index?: number): Tile;

  clearExchangeTilesList(): void;
  getExchangeTilesList(): Array<ExchangeFlower>;
  setExchangeTilesList(value: Array<ExchangeFlower>): void;
  addExchangeTiles(value?: ExchangeFlower, index?: number): ExchangeFlower;

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

  clearFlowersList(): void;
  getFlowersList(): Array<number>;
  setFlowersList(value: Array<number>): void;
  addFlowers(value: number, index?: number): number;

  getHandTileLength(): number;
  setHandTileLength(value: number): void;

  clearReadyTilesList(): void;
  getReadyTilesList(): Array<ReadyTile>;
  setReadyTilesList(value: Array<ReadyTile>): void;
  addReadyTiles(value?: ReadyTile, index?: number): ReadyTile;

  getDefaultVoid(): DefMJ.TileTypeMap[keyof DefMJ.TileTypeMap];
  setDefaultVoid(value: DefMJ.TileTypeMap[keyof DefMJ.TileTypeMap]): void;

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
    orderTilesList: Array<Tile.AsObject>,
    exchangeTilesList: Array<ExchangeFlower.AsObject>,
    lastTile?: Tile.AsObject,
    chip: number,
    waitType: DefMJ.WaitTypeMap[keyof DefMJ.WaitTypeMap],
    waitDeadline: number,
    validActionsList: Array<ValidAction.AsObject>,
    flowersList: Array<number>,
    handTileLength: number,
    readyTilesList: Array<ReadyTile.AsObject>,
    defaultVoid: DefMJ.TileTypeMap[keyof DefMJ.TileTypeMap],
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

  getHandTileLength(): number;
  setHandTileLength(value: number): void;

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

  getKeepSeatReason(): Def.KeepSeatReasonMap[keyof Def.KeepSeatReasonMap];
  setKeepSeatReason(value: Def.KeepSeatReasonMap[keyof Def.KeepSeatReasonMap]): void;

  getStatus(): Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap];
  setStatus(value: Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap]): void;

  getUserSubscriptionId(): number;
  setUserSubscriptionId(value: number): void;

  getWin(): boolean;
  setWin(value: boolean): void;

  getTotalWinLose(): number;
  setTotalWinLose(value: number): void;

  clearResultDetailList(): void;
  getResultDetailList(): Array<ResultDetailMJ>;
  setResultDetailList(value: Array<ResultDetailMJ>): void;
  addResultDetail(value?: ResultDetailMJ, index?: number): ResultDetailMJ;

  clearReadyTilesList(): void;
  getReadyTilesList(): Array<ReadyTile>;
  setReadyTilesList(value: Array<ReadyTile>): void;
  addReadyTiles(value?: ReadyTile, index?: number): ReadyTile;

  getRaise(): number;
  setRaise(value: number): void;

  clearJkongList(): void;
  getJkongList(): Array<number>;
  setJkongList(value: Array<number>): void;
  addJkong(value: number, index?: number): number;

  getDefaultVoid(): DefMJ.TileTypeMap[keyof DefMJ.TileTypeMap];
  setDefaultVoid(value: DefMJ.TileTypeMap[keyof DefMJ.TileTypeMap]): void;

  clearClaimActionsList(): void;
  getClaimActionsList(): Array<ClaimAction>;
  setClaimActionsList(value: Array<ClaimAction>): void;
  addClaimActions(value?: ClaimAction, index?: number): ClaimAction;

  getNeedBringIn(): boolean;
  setNeedBringIn(value: boolean): void;

  getLoseAll(): boolean;
  setLoseAll(value: boolean): void;

  getNeedBringInDeadline(): number;
  setNeedBringInDeadline(value: number): void;

  getIsOffline(): boolean;
  setIsOffline(value: boolean): void;

  getIpAddr(): string;
  setIpAddr(value: string): void;

  getVideoMaskId(): number;
  setVideoMaskId(value: number): void;

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
    handTileLength: number,
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
    keepSeatReason: Def.KeepSeatReasonMap[keyof Def.KeepSeatReasonMap],
    status: Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap],
    userSubscriptionId: number,
    win: boolean,
    totalWinLose: number,
    resultDetailList: Array<ResultDetailMJ.AsObject>,
    readyTilesList: Array<ReadyTile.AsObject>,
    raise: number,
    jkongList: Array<number>,
    defaultVoid: DefMJ.TileTypeMap[keyof DefMJ.TileTypeMap],
    claimActionsList: Array<ClaimAction.AsObject>,
    needBringIn: boolean,
    loseAll: boolean,
    needBringInDeadline: number,
    isOffline: boolean,
    ipAddr: string,
    videoMaskId: number,
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

  getWantSeat(): Def.WantSeatTypeMap[keyof Def.WantSeatTypeMap];
  setWantSeat(value: Def.WantSeatTypeMap[keyof Def.WantSeatTypeMap]): void;

  getMttCurrentRank(): number;
  setMttCurrentRank(value: number): void;

  getMttRemaindDelayTimes(): number;
  setMttRemaindDelayTimes(value: number): void;

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
    wantSeat: Def.WantSeatTypeMap[keyof Def.WantSeatTypeMap],
    mttCurrentRank: number,
    mttRemaindDelayTimes: number,
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

export class PlayerRaise extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getRaise(): number;
  setRaise(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerRaise.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerRaise): PlayerRaise.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerRaise, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerRaise;
  static deserializeBinaryFromReader(message: PlayerRaise, reader: jspb.BinaryReader): PlayerRaise;
}

export namespace PlayerRaise {
  export type AsObject = {
    seatId: number,
    raise: number,
  }
}

export class ClaimValidAction extends jspb.Message {
  clearValidActionsList(): void;
  getValidActionsList(): Array<ValidAction>;
  setValidActionsList(value: Array<ValidAction>): void;
  addValidActions(value?: ValidAction, index?: number): ValidAction;

  hasTargetTile(): boolean;
  clearTargetTile(): void;
  getTargetTile(): Tile | undefined;
  setTargetTile(value?: Tile): void;

  getTargetSeatId(): number;
  setTargetSeatId(value: number): void;

  getTargetAciton(): DefMJ.ActionMjMap[keyof DefMJ.ActionMjMap];
  setTargetAciton(value: DefMJ.ActionMjMap[keyof DefMJ.ActionMjMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimValidAction.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimValidAction): ClaimValidAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClaimValidAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimValidAction;
  static deserializeBinaryFromReader(message: ClaimValidAction, reader: jspb.BinaryReader): ClaimValidAction;
}

export namespace ClaimValidAction {
  export type AsObject = {
    validActionsList: Array<ValidAction.AsObject>,
    targetTile?: Tile.AsObject,
    targetSeatId: number,
    targetAciton: DefMJ.ActionMjMap[keyof DefMJ.ActionMjMap],
  }
}

export class TurnValidAction extends jspb.Message {
  clearValidActionsList(): void;
  getValidActionsList(): Array<ValidAction>;
  setValidActionsList(value: Array<ValidAction>): void;
  addValidActions(value?: ValidAction, index?: number): ValidAction;

  getLastAction(): DefMJ.ActionMjMap[keyof DefMJ.ActionMjMap];
  setLastAction(value: DefMJ.ActionMjMap[keyof DefMJ.ActionMjMap]): void;

  getAscDraw(): boolean;
  setAscDraw(value: boolean): void;

  hasLastTile(): boolean;
  clearLastTile(): void;
  getLastTile(): Tile | undefined;
  setLastTile(value?: Tile): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TurnValidAction.AsObject;
  static toObject(includeInstance: boolean, msg: TurnValidAction): TurnValidAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TurnValidAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TurnValidAction;
  static deserializeBinaryFromReader(message: TurnValidAction, reader: jspb.BinaryReader): TurnValidAction;
}

export namespace TurnValidAction {
  export type AsObject = {
    validActionsList: Array<ValidAction.AsObject>,
    lastAction: DefMJ.ActionMjMap[keyof DefMJ.ActionMjMap],
    ascDraw: boolean,
    lastTile?: Tile.AsObject,
  }
}

export class OperatorMJ extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getDelayTimes(): number;
  setDelayTimes(value: number): void;

  getOpDeadline(): number;
  setOpDeadline(value: number): void;

  getWaitType(): DefMJ.WaitTypeMap[keyof DefMJ.WaitTypeMap];
  setWaitType(value: DefMJ.WaitTypeMap[keyof DefMJ.WaitTypeMap]): void;

  hasClaimAction(): boolean;
  clearClaimAction(): void;
  getClaimAction(): ClaimValidAction | undefined;
  setClaimAction(value?: ClaimValidAction): void;

  hasTurnAction(): boolean;
  clearTurnAction(): void;
  getTurnAction(): TurnValidAction | undefined;
  setTurnAction(value?: TurnValidAction): void;

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
    waitType: DefMJ.WaitTypeMap[keyof DefMJ.WaitTypeMap],
    claimAction?: ClaimValidAction.AsObject,
    turnAction?: TurnValidAction.AsObject,
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

  getStatus(): Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap];
  setStatus(value: Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap]): void;

  getIsOnline(): boolean;
  setIsOnline(value: boolean): void;

  getWinSelfDrawCount(): number;
  setWinSelfDrawCount(value: number): void;

  getWinDiscardCount(): number;
  setWinDiscardCount(value: number): void;

  getLoseDiscardCount(): number;
  setLoseDiscardCount(value: number): void;

  getConcealedKongCount(): number;
  setConcealedKongCount(value: number): void;

  getExposedKongCount(): number;
  setExposedKongCount(value: number): void;

  getLoseKongCount(): number;
  setLoseKongCount(value: number): void;

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
    status: Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap],
    isOnline: boolean,
    winSelfDrawCount: number,
    winDiscardCount: number,
    loseDiscardCount: number,
    concealedKongCount: number,
    exposedKongCount: number,
    loseKongCount: number,
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

  getReason(): Def.ChipChangeReasonMap[keyof Def.ChipChangeReasonMap];
  setReason(value: Def.ChipChangeReasonMap[keyof Def.ChipChangeReasonMap]): void;

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
    reason: Def.ChipChangeReasonMap[keyof Def.ChipChangeReasonMap],
  }
}

export class ExternalResultMJ extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getChip(): number;
  setChip(value: number): void;

  clearResultDetailList(): void;
  getResultDetailList(): Array<ResultDetailMJ>;
  setResultDetailList(value: Array<ResultDetailMJ>): void;
  addResultDetail(value?: ResultDetailMJ, index?: number): ResultDetailMJ;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalResultMJ.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalResultMJ): ExternalResultMJ.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExternalResultMJ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalResultMJ;
  static deserializeBinaryFromReader(message: ExternalResultMJ, reader: jspb.BinaryReader): ExternalResultMJ;
}

export namespace ExternalResultMJ {
  export type AsObject = {
    seatId: number,
    chip: number,
    resultDetailList: Array<ResultDetailMJ.AsObject>,
  }
}

export class ClaimAction extends jspb.Message {
  getStartValue(): number;
  setStartValue(value: number): void;

  hasTargetTile(): boolean;
  clearTargetTile(): void;
  getTargetTile(): Tile | undefined;
  setTargetTile(value?: Tile): void;

  getTargetSeatId(): number;
  setTargetSeatId(value: number): void;

  getTargetAciton(): DefMJ.ActionMjMap[keyof DefMJ.ActionMjMap];
  setTargetAciton(value: DefMJ.ActionMjMap[keyof DefMJ.ActionMjMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimAction.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimAction): ClaimAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClaimAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimAction;
  static deserializeBinaryFromReader(message: ClaimAction, reader: jspb.BinaryReader): ClaimAction;
}

export namespace ClaimAction {
  export type AsObject = {
    startValue: number,
    targetTile?: Tile.AsObject,
    targetSeatId: number,
    targetAciton: DefMJ.ActionMjMap[keyof DefMJ.ActionMjMap],
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

  getUserRid(): number;
  setUserRid(value: number): void;

  clearHandTilesList(): void;
  getHandTilesList(): Array<Tile>;
  setHandTilesList(value: Array<Tile>): void;
  addHandTiles(value?: Tile, index?: number): Tile;

  clearClaimActionsList(): void;
  getClaimActionsList(): Array<ClaimAction>;
  setClaimActionsList(value: Array<ClaimAction>): void;
  addClaimActions(value?: ClaimAction, index?: number): ClaimAction;

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
    userRid: number,
    handTilesList: Array<Tile.AsObject>,
    claimActionsList: Array<ClaimAction.AsObject>,
  }
}

export class SourceMJ extends jspb.Message {
  getSeatedId(): number;
  setSeatedId(value: number): void;

  getWinLose(): number;
  setWinLose(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceMJ.AsObject;
  static toObject(includeInstance: boolean, msg: SourceMJ): SourceMJ.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SourceMJ, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceMJ;
  static deserializeBinaryFromReader(message: SourceMJ, reader: jspb.BinaryReader): SourceMJ;
}

export namespace SourceMJ {
  export type AsObject = {
    seatedId: number,
    winLose: number,
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
  getWinTypesList(): Array<WinTypeWithPoint>;
  setWinTypesList(value: Array<WinTypeWithPoint>): void;
  addWinTypes(value?: WinTypeWithPoint, index?: number): WinTypeWithPoint;

  hasWinTile(): boolean;
  clearWinTile(): void;
  getWinTile(): Tile | undefined;
  setWinTile(value?: Tile): void;

  clearSourceList(): void;
  getSourceList(): Array<SourceMJ>;
  setSourceList(value: Array<SourceMJ>): void;
  addSource(value?: SourceMJ, index?: number): SourceMJ;

  getExtraReason(): DefMJ.ExtraReasonMap[keyof DefMJ.ExtraReasonMap];
  setExtraReason(value: DefMJ.ExtraReasonMap[keyof DefMJ.ExtraReasonMap]): void;

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
    winTypesList: Array<WinTypeWithPoint.AsObject>,
    winTile?: Tile.AsObject,
    sourceList: Array<SourceMJ.AsObject>,
    extraReason: DefMJ.ExtraReasonMap[keyof DefMJ.ExtraReasonMap],
  }
}

export class WinTypeWithPoint extends jspb.Message {
  getWinType(): DefMJ.WinTypeMap[keyof DefMJ.WinTypeMap];
  setWinType(value: DefMJ.WinTypeMap[keyof DefMJ.WinTypeMap]): void;

  getPoint(): number;
  setPoint(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WinTypeWithPoint.AsObject;
  static toObject(includeInstance: boolean, msg: WinTypeWithPoint): WinTypeWithPoint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WinTypeWithPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WinTypeWithPoint;
  static deserializeBinaryFromReader(message: WinTypeWithPoint, reader: jspb.BinaryReader): WinTypeWithPoint;
}

export namespace WinTypeWithPoint {
  export type AsObject = {
    winType: DefMJ.WinTypeMap[keyof DefMJ.WinTypeMap],
    point: number,
    count: number,
  }
}

export class ReadyTile extends jspb.Message {
  getTile(): number;
  setTile(value: number): void;

  getWinPt(): number;
  setWinPt(value: number): void;

  getLeft(): number;
  setLeft(value: number): void;

  clearWinTypesList(): void;
  getWinTypesList(): Array<WinTypeWithPoint>;
  setWinTypesList(value: Array<WinTypeWithPoint>): void;
  addWinTypes(value?: WinTypeWithPoint, index?: number): WinTypeWithPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadyTile.AsObject;
  static toObject(includeInstance: boolean, msg: ReadyTile): ReadyTile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadyTile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadyTile;
  static deserializeBinaryFromReader(message: ReadyTile, reader: jspb.BinaryReader): ReadyTile;
}

export namespace ReadyTile {
  export type AsObject = {
    tile: number,
    winPt: number,
    left: number,
    winTypesList: Array<WinTypeWithPoint.AsObject>,
  }
}

export class NeedBringInPlayer extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NeedBringInPlayer.AsObject;
  static toObject(includeInstance: boolean, msg: NeedBringInPlayer): NeedBringInPlayer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NeedBringInPlayer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NeedBringInPlayer;
  static deserializeBinaryFromReader(message: NeedBringInPlayer, reader: jspb.BinaryReader): NeedBringInPlayer;
}

export namespace NeedBringInPlayer {
  export type AsObject = {
    seatId: number,
  }
}

export class NeedBringInResult extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getReject(): boolean;
  setReject(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NeedBringInResult.AsObject;
  static toObject(includeInstance: boolean, msg: NeedBringInResult): NeedBringInResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NeedBringInResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NeedBringInResult;
  static deserializeBinaryFromReader(message: NeedBringInResult, reader: jspb.BinaryReader): NeedBringInResult;
}

export namespace NeedBringInResult {
  export type AsObject = {
    seatId: number,
    reject: boolean,
  }
}

export class Def extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Def.AsObject;
  static toObject(includeInstance: boolean, msg: Def): Def.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Def, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Def;
  static deserializeBinaryFromReader(message: Def, reader: jspb.BinaryReader): Def;
}

export namespace Def {
  export type AsObject = {
  }

  export interface ActionMap {
    NONE: 0;
    ANTE: 1;
    SB: 2;
    BB: 3;
    STRADDLE: 4;
    BET: 5;
    CALL: 6;
    FOLD: 7;
    CHECK: 8;
    RAISE: 9;
    ALLIN: 10;
    POST: 11;
    READY: 12;
    POSTANTE: 13;
  }

  export const Action: ActionMap;

  export interface CanPlayStatusMap {
    DISABLE: 0;
    NORMAL: 1;
    NEED_POST: 2;
    AGREE_POST: 3;
    KEEP_SEAT: 4;
  }

  export const CanPlayStatus: CanPlayStatusMap;

  export interface GameStatusMap {
    NOT_START: 0;
    WAIT_HAND_START: 1;
    HAND_STARTED: 2;
    HAND_PREFLOP: 3;
    HAND_FLOP: 4;
    HAND_TURN: 5;
    HAND_RIVER: 6;
    HAND_END: 7;
    CANCEL: 8;
    COMPLETE: 9;
    UNKNOWN: 10;
  }

  export const GameStatus: GameStatusMap;

  export interface RoundMap {
    UNDEFINED: 0;
    PREFLOP: 1;
    FLOP: 2;
    TURN: 3;
    RIVER: 4;
  }

  export const Round: RoundMap;

  export interface KeepSeatReasonMap {
    KSR_NONE: 0;
    KSR_TAKE_SEAT: 1;
    KSR_ACTIVE: 2;
    KSR_NOCHIP: 3;
    KSR_DELAY_LEAVE: 4;
  }

  export const KeepSeatReason: KeepSeatReasonMap;

  export interface StandUpReasonMap {
    SUR_NONE: 0;
    SUR_NOCHIP: 1;
    SUR_ACTIVE: 2;
    SUR_GAME_END: 3;
    SUR_FORCE: 4;
    SUR_EXCHANGE: 5;
    SUR_AUTO_EXCEED_MAX_TIMES: 6;
    SUR_KEEPSEAT_TIMEOUT: 7;
    SUR_ACTIVE_LEAVE: 8;
    SUR_AUTO_CHANGE_ROOM: 9;
    SUR_MANUAL_CHANGE_ROOM: 10;
  }

  export const StandUpReason: StandUpReasonMap;

  export interface LeaveReasonMap {
    LR_NONE: 0;
    LR_NOCHIP: 1;
    LR_ACTIVE: 2;
    LR_GAME_END: 3;
    LR_FORCE: 4;
    LR_EXCHANGE: 5;
    LR_AUTO_EXCEED_MAX_TIMES: 6;
    LR_OFFLINE: 7;
    LR_AUTO_CHANGE_ROOM: 8;
    LR_PLAYER_NOT_ENOUGH: 9;
  }

  export const LeaveReason: LeaveReasonMap;

  export interface ChipChangeReasonMap {
    CC_NONE: 0;
    CC_STORE_CHIP: 1;
    CC_AUTO_ON_TABLE: 2;
    CC_MTT_ADD_ON: 3;
    CC_MTT_STORE_RETURN: 4;
    CC_MTT_ADD_ON_PLUS_MODE1: 5;
    CC_MTT_ADD_ON_PLUS_MODE2: 6;
    CC_MUSHROOM_SPLIT: 7;
    CC_SQUID_SPLIT: 8;
  }

  export const ChipChangeReason: ChipChangeReasonMap;

  export interface ActionShortcutMap {
    SC_1_2: 0;
    SC_1_3: 1;
    SC_1_4: 2;
    SC_2_3: 3;
    SC_3_4: 4;
    SC_3_5: 5;
    SC_1_1: 6;
    SC_15_10: 7;
  }

  export const ActionShortcut: ActionShortcutMap;

  export interface MTTPropBuyTypeMap {
    MTTPBT_NOT_SUPPORT: 0;
    MTTPBT_ONLY: 1;
    MTTPBT_MIX: 2;
  }

  export const MTTPropBuyType: MTTPropBuyTypeMap;

  export interface ConsumeTypeMap {
    CT_NONE: 0;
    CT_MSG_1: 1;
    CT_MSG_2: 2;
    CT_MSG_3: 3;
    CT_MSG_4: 4;
    CT_EMOJI_1: 5;
    CT_EMOJI_2: 6;
    CT_EMOJI_3: 7;
    CT_EMOJI_4: 8;
    CT_DELAY_1: 9;
    CT_DELAY_2: 10;
    CT_DELAY_3: 11;
    CT_DELAY_4: 12;
    CT_VC_1: 13;
    CT_VC_2: 14;
    CT_DELAY_5: 15;
    CT_DELAY_6: 16;
  }

  export const ConsumeType: ConsumeTypeMap;

  export interface GameTypeMap {
    HOLDEM: 0;
    OMAHA4: 1;
    OMAHA5: 2;
    OMAHA6: 3;
  }

  export const GameType: GameTypeMap;

  export interface PokerTypeMap {
    STANDARD: 0;
    SIXPLUS_FIX: 2;
  }

  export const PokerType: PokerTypeMap;

  export interface LimitBetTypeMap {
    NO_LIMIT: 0;
    POT_LIMIT: 1;
    AOF: 2;
  }

  export const LimitBetType: LimitBetTypeMap;

  export interface AddOnModeMap {
    ADDON_NONE: 0;
    PLUS_MODE1: 1;
    PLUS_MODE2: 2;
    ADDON_NORMAL: 3;
  }

  export const AddOnMode: AddOnModeMap;

  export interface EHCTypeMap {
    EHC_NONE: 0;
    EHC_MUSHROOM: 1;
    EHC_LUCKYCARDS: 2;
    EHC_SQUID: 3;
  }

  export const EHCType: EHCTypeMap;

  export interface IIReasonMap {
    IIR_NONE: 0;
    IIR_ZERO_OUTS: 1;
    IIR_NO_ODDS_FOUND: 2;
    IIR_NO_ODDS_TABLE_FOUND: 3;
    IIR_LEADER_LIMIT: 4;
    IIR_EV_LIMIT: 5;
  }

  export const IIReason: IIReasonMap;

  export interface PropBuyTypeMap {
    NOT_SUPPORT: 0;
    ONLY_PROP: 1;
    MIX: 2;
  }

  export const PropBuyType: PropBuyTypeMap;

  export interface DealDelayTypeMap {
    UNKOWN: 0;
    GG: 1;
    HH: 2;
  }

  export const DealDelayType: DealDelayTypeMap;

  export interface BroadcastMsgTypeMap {
    BC_MSG_NONE: 0;
    BC_MSG_EMOJI: 1;
    BC_MSG_BULLET: 2;
    BC_MSG_AVATAR: 3;
    BC_MSG_THROW: 4;
  }

  export const BroadcastMsgType: BroadcastMsgTypeMap;

  export interface MatchingResultStatusMap {
    MR_STATUS_NONE: 0;
    MR_STATUS_SUCCESS: 1;
    MR_STATUS_TIME_OUT: 2;
    MR_STATUS_LESS_GOLD: 3;
  }

  export const MatchingResultStatus: MatchingResultStatusMap;

  export interface RoomModeMap {
    RM_NORMAL: 0;
    RM_MATCHING: 1;
    RM_MATCHING_WAITING: 2;
  }

  export const RoomMode: RoomModeMap;

  export interface IsuranceModeMap {
    IM_NORMAL: 0;
    IM_WPK: 1;
    IM_EV: 2;
    IM_NEW_NORMAL: 3;
  }

  export const IsuranceMode: IsuranceModeMap;

  export interface UserQuitClubReasonMap {
    UQCR_QUIT: 0;
    UQCR_KICKOUT: 1;
    UQCR_CLOSECLUB: 2;
  }

  export const UserQuitClubReason: UserQuitClubReasonMap;

  export interface WantSeatTypeMap {
    WST_BOTH: 0;
    WST_YES: 1;
    WST_NO: 2;
  }

  export const WantSeatType: WantSeatTypeMap;

  export interface SeriesListTypeMap {
    SLT_0: 0;
    SLT_1: 1;
    SLT_2: 2;
    SLT_3: 3;
  }

  export const SeriesListType: SeriesListTypeMap;
}

export class Room extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): void;

  getMatchId(): number;
  setMatchId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Room.AsObject;
  static toObject(includeInstance: boolean, msg: Room): Room.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Room, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Room;
  static deserializeBinaryFromReader(message: Room, reader: jspb.BinaryReader): Room;
}

export namespace Room {
  export type AsObject = {
    roomId: number,
    matchId: number,
  }
}

export class Operator extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  clearActionsList(): void;
  getActionsList(): Array<ActionLimit>;
  setActionsList(value: Array<ActionLimit>): void;
  addActions(value?: ActionLimit, index?: number): ActionLimit;

  clearInsuranceLimitList(): void;
  getInsuranceLimitList(): Array<InsurancePotLimit>;
  setInsuranceLimitList(value: Array<InsurancePotLimit>): void;
  addInsuranceLimit(value?: InsurancePotLimit, index?: number): InsurancePotLimit;

  getLeftOpTime(): number;
  setLeftOpTime(value: number): void;

  getDelayTimes(): number;
  setDelayTimes(value: number): void;

  clearShortcutsList(): void;
  getShortcutsList(): Array<ActionShortcutLimit>;
  setShortcutsList(value: Array<ActionShortcutLimit>): void;
  addShortcuts(value?: ActionShortcutLimit, index?: number): ActionShortcutLimit;

  getIsInsurance(): boolean;
  setIsInsurance(value: boolean): void;

  getIsAgreeSecondPc(): boolean;
  setIsAgreeSecondPc(value: boolean): void;

  getOpDeadline(): number;
  setOpDeadline(value: number): void;

  clearInvalidInsurancePotsList(): void;
  getInvalidInsurancePotsList(): Array<InsurancePotInvalid>;
  setInvalidInsurancePotsList(value: Array<InsurancePotInvalid>): void;
  addInvalidInsurancePots(value?: InsurancePotInvalid, index?: number): InsurancePotInvalid;

  clearCardsList(): void;
  getCardsList(): Array<number>;
  setCardsList(value: Array<number>): void;
  addCards(value: number, index?: number): number;

  clearPlayerCardsList(): void;
  getPlayerCardsList(): Array<PlayerCards>;
  setPlayerCardsList(value: Array<PlayerCards>): void;
  addPlayerCards(value?: PlayerCards, index?: number): PlayerCards;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Operator.AsObject;
  static toObject(includeInstance: boolean, msg: Operator): Operator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Operator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Operator;
  static deserializeBinaryFromReader(message: Operator, reader: jspb.BinaryReader): Operator;
}

export namespace Operator {
  export type AsObject = {
    seatId: number,
    actionsList: Array<ActionLimit.AsObject>,
    insuranceLimitList: Array<InsurancePotLimit.AsObject>,
    leftOpTime: number,
    delayTimes: number,
    shortcutsList: Array<ActionShortcutLimit.AsObject>,
    isInsurance: boolean,
    isAgreeSecondPc: boolean,
    opDeadline: number,
    invalidInsurancePotsList: Array<InsurancePotInvalid.AsObject>,
    cardsList: Array<number>,
    playerCardsList: Array<PlayerCards.AsObject>,
  }
}

export class RoomInfo extends jspb.Message {
  getAnte(): number;
  setAnte(value: number): void;

  getSmallBlind(): number;
  setSmallBlind(value: number): void;

  getScheduleStartTime(): number;
  setScheduleStartTime(value: number): void;

  getSchedulePlayDuration(): number;
  setSchedulePlayDuration(value: number): void;

  getStartTime(): number;
  setStartTime(value: number): void;

  getCurrentMinRate(): number;
  setCurrentMinRate(value: number): void;

  getCurrentMaxRate(): number;
  setCurrentMaxRate(value: number): void;

  getLimitIp(): boolean;
  setLimitIp(value: boolean): void;

  getLimitGps(): boolean;
  setLimitGps(value: boolean): void;

  getInsurance(): boolean;
  setInsurance(value: boolean): void;

  getLimitPoolRateAllLv(): boolean;
  setLimitPoolRateAllLv(value: boolean): void;

  getLimitMinPoolRate(): number;
  setLimitMinPoolRate(value: number): void;

  getLimitRetainMinRate(): number;
  setLimitRetainMinRate(value: number): void;

  getLimitTotalHandNumAllLv(): boolean;
  setLimitTotalHandNumAllLv(value: boolean): void;

  getLimitTotalHandNum(): number;
  setLimitTotalHandNum(value: number): void;

  getDelaySeeCard(): boolean;
  setDelaySeeCard(value: boolean): void;

  getStraddle(): boolean;
  setStraddle(value: boolean): void;

  getOpDuration(): number;
  setOpDuration(value: number): void;

  getRetainType(): RoomInfo.RetainTypeMap[keyof RoomInfo.RetainTypeMap];
  setRetainType(value: RoomInfo.RetainTypeMap[keyof RoomInfo.RetainTypeMap]): void;

  getMuck(): boolean;
  setMuck(value: boolean): void;

  getUniqueId(): string;
  setUniqueId(value: string): void;

  getIsAgreeSecondPcs(): boolean;
  setIsAgreeSecondPcs(value: boolean): void;

  getIgnorePreflop(): boolean;
  setIgnorePreflop(value: boolean): void;

  getIsAlwaysSecondPcs(): boolean;
  setIsAlwaysSecondPcs(value: boolean): void;

  getMushroomBase(): number;
  setMushroomBase(value: number): void;

  getDeposit(): number;
  setDeposit(value: number): void;

  clearLuckycardsList(): void;
  getLuckycardsList(): Array<Luckycards>;
  setLuckycardsList(value: Array<Luckycards>): void;
  addLuckycards(value?: Luckycards, index?: number): Luckycards;

  getAnteMin(): number;
  setAnteMin(value: number): void;

  getAnteMax(): number;
  setAnteMax(value: number): void;

  getSeatedMessaging(): boolean;
  setSeatedMessaging(value: boolean): void;

  getRoomType(): number;
  setRoomType(value: number): void;

  getAntiCheatType(): number;
  setAntiCheatType(value: number): void;

  getAntiCheatVideoType(): number;
  setAntiCheatVideoType(value: number): void;

  getSquidBase(): number;
  setSquidBase(value: number): void;

  getPersonalType(): number;
  setPersonalType(value: number): void;

  getWinTotal(): number;
  setWinTotal(value: number): void;

  getCallTimeCount(): number;
  setCallTimeCount(value: number): void;

  getJackpot(): number;
  setJackpot(value: number): void;

  getJackpotGold(): number;
  setJackpotGold(value: number): void;

  getJackpotParentGold(): number;
  setJackpotParentGold(value: number): void;

  getMode(): Def.RoomModeMap[keyof Def.RoomModeMap];
  setMode(value: Def.RoomModeMap[keyof Def.RoomModeMap]): void;

  getRandomAnte(): string;
  setRandomAnte(value: string): void;

  getCriticalHit(): number;
  setCriticalHit(value: number): void;

  getAutoChangeRoomLimitHand(): number;
  setAutoChangeRoomLimitHand(value: number): void;

  getInsuranceMode(): Def.IsuranceModeMap[keyof Def.IsuranceModeMap];
  setInsuranceMode(value: Def.IsuranceModeMap[keyof Def.IsuranceModeMap]): void;

  getWheelTemplateId(): number;
  setWheelTemplateId(value: number): void;

  getSquidTotalLimit(): number;
  setSquidTotalLimit(value: number): void;

  getLimitRetainMaxRate(): number;
  setLimitRetainMaxRate(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RoomInfo): RoomInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoomInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomInfo;
  static deserializeBinaryFromReader(message: RoomInfo, reader: jspb.BinaryReader): RoomInfo;
}

export namespace RoomInfo {
  export type AsObject = {
    ante: number,
    smallBlind: number,
    scheduleStartTime: number,
    schedulePlayDuration: number,
    startTime: number,
    currentMinRate: number,
    currentMaxRate: number,
    limitIp: boolean,
    limitGps: boolean,
    insurance: boolean,
    limitPoolRateAllLv: boolean,
    limitMinPoolRate: number,
    limitRetainMinRate: number,
    limitTotalHandNumAllLv: boolean,
    limitTotalHandNum: number,
    delaySeeCard: boolean,
    straddle: boolean,
    opDuration: number,
    retainType: RoomInfo.RetainTypeMap[keyof RoomInfo.RetainTypeMap],
    muck: boolean,
    uniqueId: string,
    isAgreeSecondPcs: boolean,
    ignorePreflop: boolean,
    isAlwaysSecondPcs: boolean,
    mushroomBase: number,
    deposit: number,
    luckycardsList: Array<Luckycards.AsObject>,
    anteMin: number,
    anteMax: number,
    seatedMessaging: boolean,
    roomType: number,
    antiCheatType: number,
    antiCheatVideoType: number,
    squidBase: number,
    personalType: number,
    winTotal: number,
    callTimeCount: number,
    jackpot: number,
    jackpotGold: number,
    jackpotParentGold: number,
    mode: Def.RoomModeMap[keyof Def.RoomModeMap],
    randomAnte: string,
    criticalHit: number,
    autoChangeRoomLimitHand: number,
    insuranceMode: Def.IsuranceModeMap[keyof Def.IsuranceModeMap],
    wheelTemplateId: number,
    squidTotalLimit: number,
    limitRetainMaxRate: number,
  }

  export interface RetainTypeMap {
    RT_DISABLE: 0;
    RT_AUTO: 1;
    RT_MANUAL: 2;
  }

  export const RetainType: RetainTypeMap;
}

export class Luckycards extends jspb.Message {
  clearCardsList(): void;
  getCardsList(): Array<number>;
  setCardsList(value: Array<number>): void;
  addCards(value: number, index?: number): number;

  clearAwardsList(): void;
  getAwardsList(): Array<number>;
  setAwardsList(value: Array<number>): void;
  addAwards(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Luckycards.AsObject;
  static toObject(includeInstance: boolean, msg: Luckycards): Luckycards.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Luckycards, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Luckycards;
  static deserializeBinaryFromReader(message: Luckycards, reader: jspb.BinaryReader): Luckycards;
}

export namespace Luckycards {
  export type AsObject = {
    cardsList: Array<number>,
    awardsList: Array<number>,
  }
}

export class HandInfo extends jspb.Message {
  getHandNum(): number;
  setHandNum(value: number): void;

  getBuSeatId(): number;
  setBuSeatId(value: number): void;

  getSbSeatId(): number;
  setSbSeatId(value: number): void;

  getBbSeatId(): number;
  setBbSeatId(value: number): void;

  clearPublicCardsList(): void;
  getPublicCardsList(): Array<number>;
  setPublicCardsList(value: Array<number>): void;
  addPublicCards(value: number, index?: number): number;

  getAllBet(): number;
  setAllBet(value: number): void;

  clearPotsList(): void;
  getPotsList(): Array<SidePot>;
  setPotsList(value: Array<SidePot>): void;
  addPots(value?: SidePot, index?: number): SidePot;

  getRoundBet(): number;
  setRoundBet(value: number): void;

  getInsurancePool(): number;
  setInsurancePool(value: number): void;

  clearExtPublicCardsList(): void;
  getExtPublicCardsList(): Array<number>;
  setExtPublicCardsList(value: Array<number>): void;
  addExtPublicCards(value: number, index?: number): number;

  clearSecondPublicCardsList(): void;
  getSecondPublicCardsList(): Array<number>;
  setSecondPublicCardsList(value: Array<number>): void;
  addSecondPublicCards(value: number, index?: number): number;

  hasPools(): boolean;
  clearPools(): void;
  getPools(): ExternalPools | undefined;
  setPools(value?: ExternalPools): void;

  getInSquid(): boolean;
  setInSquid(value: boolean): void;

  clearSecondPotsList(): void;
  getSecondPotsList(): Array<SidePot>;
  setSecondPotsList(value: Array<SidePot>): void;
  addSecondPots(value?: SidePot, index?: number): SidePot;

  getConRounds(): number;
  setConRounds(value: number): void;

  clearDealOrderList(): void;
  getDealOrderList(): Array<number>;
  setDealOrderList(value: Array<number>): void;
  addDealOrder(value: number, index?: number): number;

  getCriticalHitOpen(): boolean;
  setCriticalHitOpen(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandInfo.AsObject;
  static toObject(includeInstance: boolean, msg: HandInfo): HandInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HandInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandInfo;
  static deserializeBinaryFromReader(message: HandInfo, reader: jspb.BinaryReader): HandInfo;
}

export namespace HandInfo {
  export type AsObject = {
    handNum: number,
    buSeatId: number,
    sbSeatId: number,
    bbSeatId: number,
    publicCardsList: Array<number>,
    allBet: number,
    potsList: Array<SidePot.AsObject>,
    roundBet: number,
    insurancePool: number,
    extPublicCardsList: Array<number>,
    secondPublicCardsList: Array<number>,
    pools?: ExternalPools.AsObject,
    inSquid: boolean,
    secondPotsList: Array<SidePot.AsObject>,
    conRounds: number,
    dealOrderList: Array<number>,
    criticalHitOpen: boolean,
  }
}

export class MTTInfo extends jspb.Message {
  getUpBlindInterval(): number;
  setUpBlindInterval(value: number): void;

  getBlindType(): number;
  setBlindType(value: number): void;

  getRebuyTimes(): number;
  setRebuyTimes(value: number): void;

  getMaxRebuyBlindLevel(): number;
  setMaxRebuyBlindLevel(value: number): void;

  getRebuyScore(): number;
  setRebuyScore(value: number): void;

  getAddOn(): boolean;
  setAddOn(value: boolean): void;

  getStartAddOnBlindLevel(): number;
  setStartAddOnBlindLevel(value: number): void;

  getEndAddOnBlindLevel(): number;
  setEndAddOnBlindLevel(value: number): void;

  getAddOnScore(): number;
  setAddOnScore(value: number): void;

  getHuntMode(): boolean;
  setHuntMode(value: boolean): void;

  getHunterBonus(): number;
  setHunterBonus(value: number): void;

  getHunterFee(): number;
  setHunterFee(value: number): void;

  getPoolFee(): number;
  setPoolFee(value: number): void;

  getServiceFee(): number;
  setServiceFee(value: number): void;

  getPartialBringIn(): boolean;
  setPartialBringIn(value: boolean): void;

  getMoneySync(): boolean;
  setMoneySync(value: boolean): void;

  getPartialBringInReturnBlindLevel(): number;
  setPartialBringInReturnBlindLevel(value: number): void;

  getBuyPropId(): number;
  setBuyPropId(value: number): void;

  getPropBuyType(): Def.MTTPropBuyTypeMap[keyof Def.MTTPropBuyTypeMap];
  setPropBuyType(value: Def.MTTPropBuyTypeMap[keyof Def.MTTPropBuyTypeMap]): void;

  getAddOnPlusMode1(): boolean;
  setAddOnPlusMode1(value: boolean): void;

  getAddOnPlusMode1Limit(): number;
  setAddOnPlusMode1Limit(value: number): void;

  getAddOnPlusMode1MaxTimes(): number;
  setAddOnPlusMode1MaxTimes(value: number): void;

  getAddOnPlusMode2(): boolean;
  setAddOnPlusMode2(value: boolean): void;

  getAddOnPlusMode2EndBl(): number;
  setAddOnPlusMode2EndBl(value: number): void;

  getAddOnPlusMode2MaxTimes(): number;
  setAddOnPlusMode2MaxTimes(value: number): void;

  getBuyRatio(): number;
  setBuyRatio(value: number): void;

  getSngId(): number;
  setSngId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MTTInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MTTInfo): MTTInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MTTInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MTTInfo;
  static deserializeBinaryFromReader(message: MTTInfo, reader: jspb.BinaryReader): MTTInfo;
}

export namespace MTTInfo {
  export type AsObject = {
    upBlindInterval: number,
    blindType: number,
    rebuyTimes: number,
    maxRebuyBlindLevel: number,
    rebuyScore: number,
    addOn: boolean,
    startAddOnBlindLevel: number,
    endAddOnBlindLevel: number,
    addOnScore: number,
    huntMode: boolean,
    hunterBonus: number,
    hunterFee: number,
    poolFee: number,
    serviceFee: number,
    partialBringIn: boolean,
    moneySync: boolean,
    partialBringInReturnBlindLevel: number,
    buyPropId: number,
    propBuyType: Def.MTTPropBuyTypeMap[keyof Def.MTTPropBuyTypeMap],
    addOnPlusMode1: boolean,
    addOnPlusMode1Limit: number,
    addOnPlusMode1MaxTimes: number,
    addOnPlusMode2: boolean,
    addOnPlusMode2EndBl: number,
    addOnPlusMode2MaxTimes: number,
    buyRatio: number,
    sngId: number,
  }
}

export class MTTProgress extends jspb.Message {
  getUpBlindLeftTime(): number;
  setUpBlindLeftTime(value: number): void;

  getNextAnte(): number;
  setNextAnte(value: number): void;

  getNextSmallBlind(): number;
  setNextSmallBlind(value: number): void;

  getStartCountDown(): number;
  setStartCountDown(value: number): void;

  getBlindLevel(): number;
  setBlindLevel(value: number): void;

  getCanAddOn(): boolean;
  setCanAddOn(value: boolean): void;

  getAddonMode(): Def.AddOnModeMap[keyof Def.AddOnModeMap];
  setAddonMode(value: Def.AddOnModeMap[keyof Def.AddOnModeMap]): void;

  getIsBubbleWait(): boolean;
  setIsBubbleWait(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MTTProgress.AsObject;
  static toObject(includeInstance: boolean, msg: MTTProgress): MTTProgress.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MTTProgress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MTTProgress;
  static deserializeBinaryFromReader(message: MTTProgress, reader: jspb.BinaryReader): MTTProgress;
}

export namespace MTTProgress {
  export type AsObject = {
    upBlindLeftTime: number,
    nextAnte: number,
    nextSmallBlind: number,
    startCountDown: number,
    blindLevel: number,
    canAddOn: boolean,
    addonMode: Def.AddOnModeMap[keyof Def.AddOnModeMap],
    isBubbleWait: boolean,
  }
}

export class MyGameInfo extends jspb.Message {
  getChip(): number;
  setChip(value: number): void;

  getSeatId(): number;
  setSeatId(value: number): void;

  getMttCurrentRank(): number;
  setMttCurrentRank(value: number): void;

  getRebuyTimes(): number;
  setRebuyTimes(value: number): void;

  getAddon(): boolean;
  setAddon(value: boolean): void;

  getHunterKill(): number;
  setHunterKill(value: number): void;

  getHunterKillAward(): number;
  setHunterKillAward(value: number): void;

  getHunterRank(): number;
  setHunterRank(value: number): void;

  getStoreChips(): number;
  setStoreChips(value: number): void;

  getIsAutoop(): boolean;
  setIsAutoop(value: boolean): void;

  getRoundActioned(): boolean;
  setRoundActioned(value: boolean): void;

  getAddonPlusMode1Times(): number;
  setAddonPlusMode1Times(value: number): void;

  getAddonPlusMode2Times(): number;
  setAddonPlusMode2Times(value: number): void;

  getHunterKillAwardOther(): number;
  setHunterKillAwardOther(value: number): void;

  getHunterHeadValue(): number;
  setHunterHeadValue(value: number): void;

  getName(): string;
  setName(value: string): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  getSex(): number;
  setSex(value: number): void;

  getUserSubscriptionId(): number;
  setUserSubscriptionId(value: number): void;

  getWinTotal(): number;
  setWinTotal(value: number): void;

  getCallTimeCount(): number;
  setCallTimeCount(value: number): void;

  getCallTimeStay(): boolean;
  setCallTimeStay(value: boolean): void;

  getTotalChips(): number;
  setTotalChips(value: number): void;

  getAutoChangeRoomHand(): number;
  setAutoChangeRoomHand(value: number): void;

  getLastStoreHandNum(): number;
  setLastStoreHandNum(value: number): void;

  getWantSeat(): Def.WantSeatTypeMap[keyof Def.WantSeatTypeMap];
  setWantSeat(value: Def.WantSeatTypeMap[keyof Def.WantSeatTypeMap]): void;

  getAlreadySeated(): boolean;
  setAlreadySeated(value: boolean): void;

  getSquidRoundSeated(): boolean;
  setSquidRoundSeated(value: boolean): void;

  getWillStandup(): boolean;
  setWillStandup(value: boolean): void;

  getMttRemaindDelayTimes(): number;
  setMttRemaindDelayTimes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MyGameInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MyGameInfo): MyGameInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MyGameInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MyGameInfo;
  static deserializeBinaryFromReader(message: MyGameInfo, reader: jspb.BinaryReader): MyGameInfo;
}

export namespace MyGameInfo {
  export type AsObject = {
    chip: number,
    seatId: number,
    mttCurrentRank: number,
    rebuyTimes: number,
    addon: boolean,
    hunterKill: number,
    hunterKillAward: number,
    hunterRank: number,
    storeChips: number,
    isAutoop: boolean,
    roundActioned: boolean,
    addonPlusMode1Times: number,
    addonPlusMode2Times: number,
    hunterKillAwardOther: number,
    hunterHeadValue: number,
    name: string,
    avatar: string,
    sex: number,
    userSubscriptionId: number,
    winTotal: number,
    callTimeCount: number,
    callTimeStay: boolean,
    totalChips: number,
    autoChangeRoomHand: number,
    lastStoreHandNum: number,
    wantSeat: Def.WantSeatTypeMap[keyof Def.WantSeatTypeMap],
    alreadySeated: boolean,
    squidRoundSeated: boolean,
    willStandup: boolean,
    mttRemaindDelayTimes: number,
  }
}

export class ActionLimit extends jspb.Message {
  getAction(): Def.ActionMap[keyof Def.ActionMap];
  setAction(value: Def.ActionMap[keyof Def.ActionMap]): void;

  getMin(): number;
  setMin(value: number): void;

  getMax(): number;
  setMax(value: number): void;

  getStraddleLevel(): number;
  setStraddleLevel(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionLimit.AsObject;
  static toObject(includeInstance: boolean, msg: ActionLimit): ActionLimit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionLimit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionLimit;
  static deserializeBinaryFromReader(message: ActionLimit, reader: jspb.BinaryReader): ActionLimit;
}

export namespace ActionLimit {
  export type AsObject = {
    action: Def.ActionMap[keyof Def.ActionMap],
    min: number,
    max: number,
    straddleLevel: number,
  }
}

export class ActionShortcutLimit extends jspb.Message {
  getSc(): Def.ActionShortcutMap[keyof Def.ActionShortcutMap];
  setSc(value: Def.ActionShortcutMap[keyof Def.ActionShortcutMap]): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionShortcutLimit.AsObject;
  static toObject(includeInstance: boolean, msg: ActionShortcutLimit): ActionShortcutLimit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActionShortcutLimit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionShortcutLimit;
  static deserializeBinaryFromReader(message: ActionShortcutLimit, reader: jspb.BinaryReader): ActionShortcutLimit;
}

export namespace ActionShortcutLimit {
  export type AsObject = {
    sc: Def.ActionShortcutMap[keyof Def.ActionShortcutMap],
    amount: number,
  }
}

export class SidePot extends jspb.Message {
  getPotId(): number;
  setPotId(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  clearSeatIdsList(): void;
  getSeatIdsList(): Array<number>;
  setSeatIdsList(value: Array<number>): void;
  addSeatIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SidePot.AsObject;
  static toObject(includeInstance: boolean, msg: SidePot): SidePot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SidePot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SidePot;
  static deserializeBinaryFromReader(message: SidePot, reader: jspb.BinaryReader): SidePot;
}

export namespace SidePot {
  export type AsObject = {
    potId: number,
    amount: number,
    seatIdsList: Array<number>,
  }
}

export class InsurancePotLimit extends jspb.Message {
  getPotId(): number;
  setPotId(value: number): void;

  getPotAmount(): number;
  setPotAmount(value: number): void;

  getBet(): number;
  setBet(value: number): void;

  getMax(): number;
  setMax(value: number): void;

  getMin(): number;
  setMin(value: number): void;

  getInsuranced(): number;
  setInsuranced(value: number): void;

  getOuts(): number;
  setOuts(value: number): void;

  clearOutsDetailList(): void;
  getOutsDetailList(): Array<UserOuts>;
  setOutsDetailList(value: Array<UserOuts>): void;
  addOutsDetail(value?: UserOuts, index?: number): UserOuts;

  getPotUserCount(): number;
  setPotUserCount(value: number): void;

  getPotLeaderCount(): number;
  setPotLeaderCount(value: number): void;

  clearCantBuyOutsList(): void;
  getCantBuyOutsList(): Array<OutsCard>;
  setCantBuyOutsList(value: Array<OutsCard>): void;
  addCantBuyOuts(value?: OutsCard, index?: number): OutsCard;

  getOdds(): number;
  setOdds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsurancePotLimit.AsObject;
  static toObject(includeInstance: boolean, msg: InsurancePotLimit): InsurancePotLimit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InsurancePotLimit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InsurancePotLimit;
  static deserializeBinaryFromReader(message: InsurancePotLimit, reader: jspb.BinaryReader): InsurancePotLimit;
}

export namespace InsurancePotLimit {
  export type AsObject = {
    potId: number,
    potAmount: number,
    bet: number,
    max: number,
    min: number,
    insuranced: number,
    outs: number,
    outsDetailList: Array<UserOuts.AsObject>,
    potUserCount: number,
    potLeaderCount: number,
    cantBuyOutsList: Array<OutsCard.AsObject>,
    odds: number,
  }
}

export class InsurancePotInvalid extends jspb.Message {
  getPotId(): number;
  setPotId(value: number): void;

  getPotAmount(): number;
  setPotAmount(value: number): void;

  getOuts(): number;
  setOuts(value: number): void;

  getPotUserCount(): number;
  setPotUserCount(value: number): void;

  getReason(): Def.IIReasonMap[keyof Def.IIReasonMap];
  setReason(value: Def.IIReasonMap[keyof Def.IIReasonMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsurancePotInvalid.AsObject;
  static toObject(includeInstance: boolean, msg: InsurancePotInvalid): InsurancePotInvalid.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InsurancePotInvalid, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InsurancePotInvalid;
  static deserializeBinaryFromReader(message: InsurancePotInvalid, reader: jspb.BinaryReader): InsurancePotInvalid;
}

export namespace InsurancePotInvalid {
  export type AsObject = {
    potId: number,
    potAmount: number,
    outs: number,
    potUserCount: number,
    reason: Def.IIReasonMap[keyof Def.IIReasonMap],
  }
}

export class OutsCard extends jspb.Message {
  getCard(): number;
  setCard(value: number): void;

  getIsEqual(): boolean;
  setIsEqual(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutsCard.AsObject;
  static toObject(includeInstance: boolean, msg: OutsCard): OutsCard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OutsCard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutsCard;
  static deserializeBinaryFromReader(message: OutsCard, reader: jspb.BinaryReader): OutsCard;
}

export namespace OutsCard {
  export type AsObject = {
    card: number,
    isEqual: boolean,
  }
}

export class UserOuts extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  clearOutsCardsList(): void;
  getOutsCardsList(): Array<OutsCard>;
  setOutsCardsList(value: Array<OutsCard>): void;
  addOutsCards(value?: OutsCard, index?: number): OutsCard;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserOuts.AsObject;
  static toObject(includeInstance: boolean, msg: UserOuts): UserOuts.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserOuts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserOuts;
  static deserializeBinaryFromReader(message: UserOuts, reader: jspb.BinaryReader): UserOuts;
}

export namespace UserOuts {
  export type AsObject = {
    seatId: number,
    outsCardsList: Array<OutsCard.AsObject>,
  }
}

export class PotInsuranceBuy extends jspb.Message {
  getRound(): Def.RoundMap[keyof Def.RoundMap];
  setRound(value: Def.RoundMap[keyof Def.RoundMap]): void;

  getPotId(): number;
  setPotId(value: number): void;

  getActiveAmount(): number;
  setActiveAmount(value: number): void;

  clearActiveOutsList(): void;
  getActiveOutsList(): Array<number>;
  setActiveOutsList(value: Array<number>): void;
  addActiveOuts(value: number, index?: number): number;

  getPassiveAmount(): number;
  setPassiveAmount(value: number): void;

  clearPassiveOutsList(): void;
  getPassiveOutsList(): Array<number>;
  setPassiveOutsList(value: Array<number>): void;
  addPassiveOuts(value: number, index?: number): number;

  getInsurEv(): number;
  setInsurEv(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PotInsuranceBuy.AsObject;
  static toObject(includeInstance: boolean, msg: PotInsuranceBuy): PotInsuranceBuy.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PotInsuranceBuy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PotInsuranceBuy;
  static deserializeBinaryFromReader(message: PotInsuranceBuy, reader: jspb.BinaryReader): PotInsuranceBuy;
}

export namespace PotInsuranceBuy {
  export type AsObject = {
    round: Def.RoundMap[keyof Def.RoundMap],
    potId: number,
    activeAmount: number,
    activeOutsList: Array<number>,
    passiveAmount: number,
    passiveOutsList: Array<number>,
    insurEv: number,
  }
}

export class PlayerCards extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  clearCardsList(): void;
  getCardsList(): Array<number>;
  setCardsList(value: Array<number>): void;
  addCards(value: number, index?: number): number;

  getUserRid(): number;
  setUserRid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerCards.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerCards): PlayerCards.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerCards, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerCards;
  static deserializeBinaryFromReader(message: PlayerCards, reader: jspb.BinaryReader): PlayerCards;
}

export namespace PlayerCards {
  export type AsObject = {
    seatId: number,
    cardsList: Array<number>,
    userRid: number,
    name: string,
    avatar: string,
  }
}

export class PlayerStartInfo extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  clearCardsList(): void;
  getCardsList(): Array<number>;
  setCardsList(value: Array<number>): void;
  addCards(value: number, index?: number): number;

  getAnte(): number;
  setAnte(value: number): void;

  getAction(): Def.ActionMap[keyof Def.ActionMap];
  setAction(value: Def.ActionMap[keyof Def.ActionMap]): void;

  getRoundBet(): number;
  setRoundBet(value: number): void;

  getChip(): number;
  setChip(value: number): void;

  getStoreChips(): number;
  setStoreChips(value: number): void;

  getDeposit(): number;
  setDeposit(value: number): void;

  getCostMushroom(): number;
  setCostMushroom(value: number): void;

  getInMushroom(): boolean;
  setInMushroom(value: boolean): void;

  getSquidEscaped(): boolean;
  setSquidEscaped(value: boolean): void;

  getSquidCount(): number;
  setSquidCount(value: number): void;

  getInSquid(): boolean;
  setInSquid(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerStartInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerStartInfo): PlayerStartInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerStartInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerStartInfo;
  static deserializeBinaryFromReader(message: PlayerStartInfo, reader: jspb.BinaryReader): PlayerStartInfo;
}

export namespace PlayerStartInfo {
  export type AsObject = {
    seatId: number,
    cardsList: Array<number>,
    ante: number,
    action: Def.ActionMap[keyof Def.ActionMap],
    roundBet: number,
    chip: number,
    storeChips: number,
    deposit: number,
    costMushroom: number,
    inMushroom: boolean,
    squidEscaped: boolean,
    squidCount: number,
    inSquid: boolean,
  }
}

export class GPS extends jspb.Message {
  getLongitude(): string;
  setLongitude(value: string): void;

  getLatitude(): string;
  setLatitude(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GPS.AsObject;
  static toObject(includeInstance: boolean, msg: GPS): GPS.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GPS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GPS;
  static deserializeBinaryFromReader(message: GPS, reader: jspb.BinaryReader): GPS;
}

export namespace GPS {
  export type AsObject = {
    longitude: string,
    latitude: string,
  }
}

export class Player extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getUserRid(): number;
  setUserRid(value: number): void;

  getAction(): Def.ActionMap[keyof Def.ActionMap];
  setAction(value: Def.ActionMap[keyof Def.ActionMap]): void;

  clearCardsList(): void;
  getCardsList(): Array<number>;
  setCardsList(value: Array<number>): void;
  addCards(value: number, index?: number): number;

  getName(): string;
  setName(value: string): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  getSex(): number;
  setSex(value: number): void;

  getChip(): number;
  setChip(value: number): void;

  getHandBet(): number;
  setHandBet(value: number): void;

  getRoundBet(): number;
  setRoundBet(value: number): void;

  getStatus(): Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap];
  setStatus(value: Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap]): void;

  getKeepSeatLeftTime(): number;
  setKeepSeatLeftTime(value: number): void;

  getBuyInsuranceStep(): number;
  setBuyInsuranceStep(value: number): void;

  clearBuyInsuranceList(): void;
  getBuyInsuranceList(): Array<PotInsuranceBuy>;
  setBuyInsuranceList(value: Array<PotInsuranceBuy>): void;
  addBuyInsurance(value?: PotInsuranceBuy, index?: number): PotInsuranceBuy;

  getIsAutoop(): boolean;
  setIsAutoop(value: boolean): void;

  getRoundActioned(): boolean;
  setRoundActioned(value: boolean): void;

  getHunterKill(): number;
  setHunterKill(value: number): void;

  getHunterKillAward(): number;
  setHunterKillAward(value: number): void;

  getHunterKillAwardOther(): number;
  setHunterKillAwardOther(value: number): void;

  getHunterHeadValue(): number;
  setHunterHeadValue(value: number): void;

  getVip(): number;
  setVip(value: number): void;

  getKeepSeatDeadline(): number;
  setKeepSeatDeadline(value: number): void;

  getKeepSeatReason(): Def.KeepSeatReasonMap[keyof Def.KeepSeatReasonMap];
  setKeepSeatReason(value: Def.KeepSeatReasonMap[keyof Def.KeepSeatReasonMap]): void;

  getDeposit(): number;
  setDeposit(value: number): void;

  getInMushroom(): boolean;
  setInMushroom(value: boolean): void;

  getCostMushroom(): number;
  setCostMushroom(value: number): void;

  hasWinCardsInfo(): boolean;
  clearWinCardsInfo(): void;
  getWinCardsInfo(): AllInWinCardsInfo | undefined;
  setWinCardsInfo(value?: AllInWinCardsInfo): void;

  getSquidEscaped(): boolean;
  setSquidEscaped(value: boolean): void;

  getUserSubscriptionId(): number;
  setUserSubscriptionId(value: number): void;

  getSquidCount(): number;
  setSquidCount(value: number): void;

  getInSquid(): boolean;
  setInSquid(value: boolean): void;

  getIpAddr(): string;
  setIpAddr(value: string): void;

  getVideoMaskId(): number;
  setVideoMaskId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Player.AsObject;
  static toObject(includeInstance: boolean, msg: Player): Player.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Player, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Player;
  static deserializeBinaryFromReader(message: Player, reader: jspb.BinaryReader): Player;
}

export namespace Player {
  export type AsObject = {
    seatId: number,
    userRid: number,
    action: Def.ActionMap[keyof Def.ActionMap],
    cardsList: Array<number>,
    name: string,
    avatar: string,
    sex: number,
    chip: number,
    handBet: number,
    roundBet: number,
    status: Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap],
    keepSeatLeftTime: number,
    buyInsuranceStep: number,
    buyInsuranceList: Array<PotInsuranceBuy.AsObject>,
    isAutoop: boolean,
    roundActioned: boolean,
    hunterKill: number,
    hunterKillAward: number,
    hunterKillAwardOther: number,
    hunterHeadValue: number,
    vip: number,
    keepSeatDeadline: number,
    keepSeatReason: Def.KeepSeatReasonMap[keyof Def.KeepSeatReasonMap],
    deposit: number,
    inMushroom: boolean,
    costMushroom: number,
    winCardsInfo?: AllInWinCardsInfo.AsObject,
    squidEscaped: boolean,
    userSubscriptionId: number,
    squidCount: number,
    inSquid: boolean,
    ipAddr: string,
    videoMaskId: number,
  }
}

export class Result extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getWin(): number;
  setWin(value: number): void;

  getHandValueType(): number;
  setHandValueType(value: number): void;

  clearWinCardsList(): void;
  getWinCardsList(): Array<WinCard>;
  setWinCardsList(value: Array<WinCard>): void;
  addWinCards(value?: WinCard, index?: number): WinCard;

  clearMyCardsList(): void;
  getMyCardsList(): Array<number>;
  setMyCardsList(value: Array<number>): void;
  addMyCards(value: number, index?: number): number;

  getChip(): number;
  setChip(value: number): void;

  getInsurance(): number;
  setInsurance(value: number): void;

  getInsuranceWin(): number;
  setInsuranceWin(value: number): void;

  getFee(): number;
  setFee(value: number): void;

  getMttHunterKillPlus(): number;
  setMttHunterKillPlus(value: number): void;

  getMttHunterKill(): number;
  setMttHunterKill(value: number): void;

  getMttHunterKillAward(): number;
  setMttHunterKillAward(value: number): void;

  getHandBet(): number;
  setHandBet(value: number): void;

  getStoreChips(): number;
  setStoreChips(value: number): void;

  getMttHunterKillAwardPlus(): number;
  setMttHunterKillAwardPlus(value: number): void;

  getMuck(): boolean;
  setMuck(value: boolean): void;

  getHandValueType2(): number;
  setHandValueType2(value: number): void;

  clearWinCards2List(): void;
  getWinCards2List(): Array<WinCard>;
  setWinCards2List(value: Array<WinCard>): void;
  addWinCards2(value?: WinCard, index?: number): WinCard;

  clearSplitResultsList(): void;
  getSplitResultsList(): Array<SplitedResult>;
  setSplitResultsList(value: Array<SplitedResult>): void;
  addSplitResults(value?: SplitedResult, index?: number): SplitedResult;

  getMttHunterKillAwardOther(): number;
  setMttHunterKillAwardOther(value: number): void;

  getMttHunterKillAwardOtherPlus(): number;
  setMttHunterKillAwardOtherPlus(value: number): void;

  getStandUp(): boolean;
  setStandUp(value: boolean): void;

  clearEhcsList(): void;
  getEhcsList(): Array<ExternalHandChange>;
  setEhcsList(value: Array<ExternalHandChange>): void;
  addEhcs(value?: ExternalHandChange, index?: number): ExternalHandChange;

  getDeposit(): number;
  setDeposit(value: number): void;

  getSquidEscaped(): boolean;
  setSquidEscaped(value: boolean): void;

  getWinTotal(): number;
  setWinTotal(value: number): void;

  getCallTimeCount(): number;
  setCallTimeCount(value: number): void;

  getCallTimeStay(): boolean;
  setCallTimeStay(value: boolean): void;

  getSquidCount(): number;
  setSquidCount(value: number): void;

  getAutoChangeRoomHand(): number;
  setAutoChangeRoomHand(value: number): void;

  getTotalChips(): number;
  setTotalChips(value: number): void;

  getInPool(): boolean;
  setInPool(value: boolean): void;

  getJawd(): number;
  setJawd(value: number): void;

  getJackpotFee(): number;
  setJackpotFee(value: number): void;

  clearUserInsuranceResultList(): void;
  getUserInsuranceResultList(): Array<UserInsuranceResult>;
  setUserInsuranceResultList(value: Array<UserInsuranceResult>): void;
  addUserInsuranceResult(value?: UserInsuranceResult, index?: number): UserInsuranceResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Result.AsObject;
  static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Result;
  static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
}

export namespace Result {
  export type AsObject = {
    seatId: number,
    win: number,
    handValueType: number,
    winCardsList: Array<WinCard.AsObject>,
    myCardsList: Array<number>,
    chip: number,
    insurance: number,
    insuranceWin: number,
    fee: number,
    mttHunterKillPlus: number,
    mttHunterKill: number,
    mttHunterKillAward: number,
    handBet: number,
    storeChips: number,
    mttHunterKillAwardPlus: number,
    muck: boolean,
    handValueType2: number,
    winCards2List: Array<WinCard.AsObject>,
    splitResultsList: Array<SplitedResult.AsObject>,
    mttHunterKillAwardOther: number,
    mttHunterKillAwardOtherPlus: number,
    standUp: boolean,
    ehcsList: Array<ExternalHandChange.AsObject>,
    deposit: number,
    squidEscaped: boolean,
    winTotal: number,
    callTimeCount: number,
    callTimeStay: boolean,
    squidCount: number,
    autoChangeRoomHand: number,
    totalChips: number,
    inPool: boolean,
    jawd: number,
    jackpotFee: number,
    userInsuranceResultList: Array<UserInsuranceResult.AsObject>,
  }
}

export class ExternalHandChange extends jspb.Message {
  getEhcType(): Def.EHCTypeMap[keyof Def.EHCTypeMap];
  setEhcType(value: Def.EHCTypeMap[keyof Def.EHCTypeMap]): void;

  getIn(): number;
  setIn(value: number): void;

  getOut(): number;
  setOut(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalHandChange.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalHandChange): ExternalHandChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExternalHandChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalHandChange;
  static deserializeBinaryFromReader(message: ExternalHandChange, reader: jspb.BinaryReader): ExternalHandChange;
}

export namespace ExternalHandChange {
  export type AsObject = {
    ehcType: Def.EHCTypeMap[keyof Def.EHCTypeMap],
    pb_in: number,
    out: number,
  }
}

export class SquidDetail extends jspb.Message {
  getUserRid(): number;
  setUserRid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  getPunishFee(): number;
  setPunishFee(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SquidDetail.AsObject;
  static toObject(includeInstance: boolean, msg: SquidDetail): SquidDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SquidDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SquidDetail;
  static deserializeBinaryFromReader(message: SquidDetail, reader: jspb.BinaryReader): SquidDetail;
}

export namespace SquidDetail {
  export type AsObject = {
    userRid: number,
    name: string,
    avatar: string,
    punishFee: number,
  }
}

export class ExternalPools extends jspb.Message {
  getMushroomPool(): number;
  setMushroomPool(value: number): void;

  getSquidPool(): number;
  setSquidPool(value: number): void;

  clearSquidDetailsList(): void;
  getSquidDetailsList(): Array<SquidDetail>;
  setSquidDetailsList(value: Array<SquidDetail>): void;
  addSquidDetails(value?: SquidDetail, index?: number): SquidDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExternalPools.AsObject;
  static toObject(includeInstance: boolean, msg: ExternalPools): ExternalPools.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExternalPools, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExternalPools;
  static deserializeBinaryFromReader(message: ExternalPools, reader: jspb.BinaryReader): ExternalPools;
}

export namespace ExternalPools {
  export type AsObject = {
    mushroomPool: number,
    squidPool: number,
    squidDetailsList: Array<SquidDetail.AsObject>,
  }
}

export class SplitedResult extends jspb.Message {
  getWin(): number;
  setWin(value: number): void;

  getIsWinner(): boolean;
  setIsWinner(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SplitedResult.AsObject;
  static toObject(includeInstance: boolean, msg: SplitedResult): SplitedResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SplitedResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SplitedResult;
  static deserializeBinaryFromReader(message: SplitedResult, reader: jspb.BinaryReader): SplitedResult;
}

export namespace SplitedResult {
  export type AsObject = {
    win: number,
    isWinner: boolean,
  }
}

export class WinCard extends jspb.Message {
  getCard(): number;
  setCard(value: number): void;

  getIsPublic(): boolean;
  setIsPublic(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WinCard.AsObject;
  static toObject(includeInstance: boolean, msg: WinCard): WinCard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WinCard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WinCard;
  static deserializeBinaryFromReader(message: WinCard, reader: jspb.BinaryReader): WinCard;
}

export namespace WinCard {
  export type AsObject = {
    card: number,
    isPublic: boolean,
  }
}

export class PostStatusChange extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getOldPostStatus(): Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap];
  setOldPostStatus(value: Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap]): void;

  getCurrentPostStatus(): Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap];
  setCurrentPostStatus(value: Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostStatusChange.AsObject;
  static toObject(includeInstance: boolean, msg: PostStatusChange): PostStatusChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostStatusChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostStatusChange;
  static deserializeBinaryFromReader(message: PostStatusChange, reader: jspb.BinaryReader): PostStatusChange;
}

export namespace PostStatusChange {
  export type AsObject = {
    seatId: number,
    oldPostStatus: Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap],
    currentPostStatus: Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap],
  }
}

export class PlayerChipChange extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getChange(): number;
  setChange(value: number): void;

  getChips(): number;
  setChips(value: number): void;

  getStoreChips(): number;
  setStoreChips(value: number): void;

  getAuto(): boolean;
  setAuto(value: boolean): void;

  getReason(): Def.ChipChangeReasonMap[keyof Def.ChipChangeReasonMap];
  setReason(value: Def.ChipChangeReasonMap[keyof Def.ChipChangeReasonMap]): void;

  getMttHunterHeadPlus(): number;
  setMttHunterHeadPlus(value: number): void;

  getDepositChange(): number;
  setDepositChange(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerChipChange.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerChipChange): PlayerChipChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerChipChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerChipChange;
  static deserializeBinaryFromReader(message: PlayerChipChange, reader: jspb.BinaryReader): PlayerChipChange;
}

export namespace PlayerChipChange {
  export type AsObject = {
    seatId: number,
    change: number,
    chips: number,
    storeChips: number,
    auto: boolean,
    reason: Def.ChipChangeReasonMap[keyof Def.ChipChangeReasonMap],
    mttHunterHeadPlus: number,
    depositChange: number,
  }
}

export class Roomer extends jspb.Message {
  getUserRid(): number;
  setUserRid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  getSex(): number;
  setSex(value: number): void;

  getVip(): number;
  setVip(value: number): void;

  getIsOnline(): boolean;
  setIsOnline(value: boolean): void;

  getIpAddr(): string;
  setIpAddr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Roomer.AsObject;
  static toObject(includeInstance: boolean, msg: Roomer): Roomer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Roomer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Roomer;
  static deserializeBinaryFromReader(message: Roomer, reader: jspb.BinaryReader): Roomer;
}

export namespace Roomer {
  export type AsObject = {
    userRid: number,
    name: string,
    avatar: string,
    sex: number,
    vip: number,
    isOnline: boolean,
    ipAddr: string,
  }
}

export class PlayerSummary extends jspb.Message {
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

  getStatus(): Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap];
  setStatus(value: Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap]): void;

  getVip(): number;
  setVip(value: number): void;

  getIsOnline(): boolean;
  setIsOnline(value: boolean): void;

  getStoreChips(): number;
  setStoreChips(value: number): void;

  getMushroomCount(): number;
  setMushroomCount(value: number): void;

  getMushroomAmount(): number;
  setMushroomAmount(value: number): void;

  getPoolRate(): number;
  setPoolRate(value: number): void;

  getSquidInTotal(): number;
  setSquidInTotal(value: number): void;

  getSquidOutTotal(): number;
  setSquidOutTotal(value: number): void;

  getSquidCount(): number;
  setSquidCount(value: number): void;

  getSquidPunishTotal(): number;
  setSquidPunishTotal(value: number): void;

  getDeposit(): number;
  setDeposit(value: number): void;

  getIpAddr(): string;
  setIpAddr(value: string): void;

  getPoolCount(): number;
  setPoolCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerSummary.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerSummary): PlayerSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerSummary;
  static deserializeBinaryFromReader(message: PlayerSummary, reader: jspb.BinaryReader): PlayerSummary;
}

export namespace PlayerSummary {
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
    status: Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap],
    vip: number,
    isOnline: boolean,
    storeChips: number,
    mushroomCount: number,
    mushroomAmount: number,
    poolRate: number,
    squidInTotal: number,
    squidOutTotal: number,
    squidCount: number,
    squidPunishTotal: number,
    deposit: number,
    ipAddr: string,
    poolCount: number,
  }
}

export class PlayerAllInShowCardWinCardsLength extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getWinCardsCount(): number;
  setWinCardsCount(value: number): void;

  getLeftCardsCount(): number;
  setLeftCardsCount(value: number): void;

  clearWinCardsList(): void;
  getWinCardsList(): Array<number>;
  setWinCardsList(value: Array<number>): void;
  addWinCards(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerAllInShowCardWinCardsLength.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerAllInShowCardWinCardsLength): PlayerAllInShowCardWinCardsLength.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerAllInShowCardWinCardsLength, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerAllInShowCardWinCardsLength;
  static deserializeBinaryFromReader(message: PlayerAllInShowCardWinCardsLength, reader: jspb.BinaryReader): PlayerAllInShowCardWinCardsLength;
}

export namespace PlayerAllInShowCardWinCardsLength {
  export type AsObject = {
    seatId: number,
    winCardsCount: number,
    leftCardsCount: number,
    winCardsList: Array<number>,
  }
}

export class SecondPublicCardsPlayerAllInShowCardSummary extends jspb.Message {
  getRnd(): Def.RoundMap[keyof Def.RoundMap];
  setRnd(value: Def.RoundMap[keyof Def.RoundMap]): void;

  clearAllinUsersList(): void;
  getAllinUsersList(): Array<PlayerAllInShowCardWinCardsLength>;
  setAllinUsersList(value: Array<PlayerAllInShowCardWinCardsLength>): void;
  addAllinUsers(value?: PlayerAllInShowCardWinCardsLength, index?: number): PlayerAllInShowCardWinCardsLength;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecondPublicCardsPlayerAllInShowCardSummary.AsObject;
  static toObject(includeInstance: boolean, msg: SecondPublicCardsPlayerAllInShowCardSummary): SecondPublicCardsPlayerAllInShowCardSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecondPublicCardsPlayerAllInShowCardSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecondPublicCardsPlayerAllInShowCardSummary;
  static deserializeBinaryFromReader(message: SecondPublicCardsPlayerAllInShowCardSummary, reader: jspb.BinaryReader): SecondPublicCardsPlayerAllInShowCardSummary;
}

export namespace SecondPublicCardsPlayerAllInShowCardSummary {
  export type AsObject = {
    rnd: Def.RoundMap[keyof Def.RoundMap],
    allinUsersList: Array<PlayerAllInShowCardWinCardsLength.AsObject>,
  }
}

export class AllInWinCardsInfo extends jspb.Message {
  getWcCount(): number;
  setWcCount(value: number): void;

  getLcCount(): number;
  setLcCount(value: number): void;

  getWcCount2(): number;
  setWcCount2(value: number): void;

  getLcCount2(): number;
  setLcCount2(value: number): void;

  getFlopWcCount(): number;
  setFlopWcCount(value: number): void;

  getFlopLcCount(): number;
  setFlopLcCount(value: number): void;

  getTurnWcCount(): number;
  setTurnWcCount(value: number): void;

  getTurnLcCount(): number;
  setTurnLcCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllInWinCardsInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AllInWinCardsInfo): AllInWinCardsInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AllInWinCardsInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllInWinCardsInfo;
  static deserializeBinaryFromReader(message: AllInWinCardsInfo, reader: jspb.BinaryReader): AllInWinCardsInfo;
}

export namespace AllInWinCardsInfo {
  export type AsObject = {
    wcCount: number,
    lcCount: number,
    wcCount2: number,
    lcCount2: number,
    flopWcCount: number,
    flopLcCount: number,
    turnWcCount: number,
    turnLcCount: number,
  }
}

export class UserPlayStatus extends jspb.Message {
  getMuted(): boolean;
  setMuted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserPlayStatus.AsObject;
  static toObject(includeInstance: boolean, msg: UserPlayStatus): UserPlayStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserPlayStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserPlayStatus;
  static deserializeBinaryFromReader(message: UserPlayStatus, reader: jspb.BinaryReader): UserPlayStatus;
}

export namespace UserPlayStatus {
  export type AsObject = {
    muted: boolean,
  }
}

export class RoomWithType extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): void;

  getMatchId(): number;
  setMatchId(value: number): void;

  getRoomType(): number;
  setRoomType(value: number): void;

  getAntiCheatType(): number;
  setAntiCheatType(value: number): void;

  getAntiCheatVideoType(): number;
  setAntiCheatVideoType(value: number): void;

  hasUserPlayStatus(): boolean;
  clearUserPlayStatus(): void;
  getUserPlayStatus(): UserPlayStatus | undefined;
  setUserPlayStatus(value?: UserPlayStatus): void;

  getBombpot(): number;
  setBombpot(value: number): void;

  getMode(): Def.RoomModeMap[keyof Def.RoomModeMap];
  setMode(value: Def.RoomModeMap[keyof Def.RoomModeMap]): void;

  getMatchingBeginTime(): number;
  setMatchingBeginTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomWithType.AsObject;
  static toObject(includeInstance: boolean, msg: RoomWithType): RoomWithType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoomWithType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomWithType;
  static deserializeBinaryFromReader(message: RoomWithType, reader: jspb.BinaryReader): RoomWithType;
}

export namespace RoomWithType {
  export type AsObject = {
    roomId: number,
    matchId: number,
    roomType: number,
    antiCheatType: number,
    antiCheatVideoType: number,
    userPlayStatus?: UserPlayStatus.AsObject,
    bombpot: number,
    mode: Def.RoomModeMap[keyof Def.RoomModeMap],
    matchingBeginTime: number,
  }
}

export class RoomRecord extends jspb.Message {
  getRid(): number;
  setRid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getRoomType(): number;
  setRoomType(value: number): void;

  getGameType(): number;
  setGameType(value: number): void;

  getPokerType(): number;
  setPokerType(value: number): void;

  getLimitBetType(): number;
  setLimitBetType(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getAnte(): number;
  setAnte(value: number): void;

  getSb(): number;
  setSb(value: number): void;

  getOpDuration(): number;
  setOpDuration(value: number): void;

  getNoUserWaitDuration(): number;
  setNoUserWaitDuration(value: number): void;

  getKeepSeatDuration(): number;
  setKeepSeatDuration(value: number): void;

  getTotalBringIn(): number;
  setTotalBringIn(value: number): void;

  getTotalBringOut(): number;
  setTotalBringOut(value: number): void;

  getTotalChip(): number;
  setTotalChip(value: number): void;

  getMinRate(): number;
  setMinRate(value: number): void;

  getMaxRate(): number;
  setMaxRate(value: number): void;

  getMinPlayers(): number;
  setMinPlayers(value: number): void;

  getAutostartMinPlayers(): number;
  setAutostartMinPlayers(value: number): void;

  getStraddleOn(): number;
  setStraddleOn(value: number): void;

  getStraddleMax(): number;
  setStraddleMax(value: number): void;

  getInsuranceOn(): number;
  setInsuranceOn(value: number): void;

  getInsuranceOpDuration(): number;
  setInsuranceOpDuration(value: number): void;

  getSecondPcsOn(): number;
  setSecondPcsOn(value: number): void;

  getSecondPcsOpDuration(): number;
  setSecondPcsOpDuration(value: number): void;

  getSecondPcsUserLimit(): number;
  setSecondPcsUserLimit(value: number): void;

  getDelayViewCardOn(): number;
  setDelayViewCardOn(value: number): void;

  getPostOn(): number;
  setPostOn(value: number): void;

  getMuckOn(): number;
  setMuckOn(value: number): void;

  getLimitIpOn(): number;
  setLimitIpOn(value: number): void;

  getLimitGpsOn(): number;
  setLimitGpsOn(value: number): void;

  getLimitGpsDistance(): number;
  setLimitGpsDistance(value: number): void;

  getLimitDelayTimes(): number;
  setLimitDelayTimes(value: number): void;

  getLimitAutoCheckTimes(): number;
  setLimitAutoCheckTimes(value: number): void;

  getLimitAutoFoldTimes(): number;
  setLimitAutoFoldTimes(value: number): void;

  getSeatCount(): number;
  setSeatCount(value: number): void;

  getEmptySeat(): number;
  setEmptySeat(value: number): void;

  getRoomers(): number;
  setRoomers(value: number): void;

  getEnterTime(): number;
  setEnterTime(value: number): void;

  getPlayDuration(): number;
  setPlayDuration(value: number): void;

  getNoUserCloseDuration(): number;
  setNoUserCloseDuration(value: number): void;

  getRetainMinRate(): number;
  setRetainMinRate(value: number): void;

  getScheduleStartTime(): number;
  setScheduleStartTime(value: number): void;

  getStartTime(): number;
  setStartTime(value: number): void;

  getEndTime(): number;
  setEndTime(value: number): void;

  getSettlementType(): number;
  setSettlementType(value: number): void;

  getHandNum(): number;
  setHandNum(value: number): void;

  getTribeId(): number;
  setTribeId(value: number): void;

  getEndReason(): string;
  setEndReason(value: string): void;

  getHcTotalHandLv(): number;
  setHcTotalHandLv(value: number): void;

  getHcTotalHand(): number;
  setHcTotalHand(value: number): void;

  getHcPoolRateLv(): number;
  setHcPoolRateLv(value: number): void;

  getHcPoolRate(): number;
  setHcPoolRate(value: number): void;

  getServiceId(): string;
  setServiceId(value: string): void;

  getCreateTime(): number;
  setCreateTime(value: number): void;

  getUpdateTime(): number;
  setUpdateTime(value: number): void;

  clearInsuranceOddsList(): void;
  getInsuranceOddsList(): Array<InsuranceOddsForPotsUserCount>;
  setInsuranceOddsList(value: Array<InsuranceOddsForPotsUserCount>): void;
  addInsuranceOdds(value?: InsuranceOddsForPotsUserCount, index?: number): InsuranceOddsForPotsUserCount;

  getVoiceprintVerifyOn(): number;
  setVoiceprintVerifyOn(value: number): void;

  getVoiceprintVerifyLimitTimes(): number;
  setVoiceprintVerifyLimitTimes(value: number): void;

  getVoiceprintVerifyDuration(): number;
  setVoiceprintVerifyDuration(value: number): void;

  getVoiceprintVerifyIntervalDuration(): number;
  setVoiceprintVerifyIntervalDuration(value: number): void;

  getParticipationStatus(): number;
  setParticipationStatus(value: number): void;

  getTableclothTag(): string;
  setTableclothTag(value: string): void;

  getClubId(): number;
  setClubId(value: number): void;

  getOriginType(): number;
  setOriginType(value: number): void;

  getLimitBringIn(): number;
  setLimitBringIn(value: number): void;

  getInvitationCode(): string;
  setInvitationCode(value: string): void;

  getShareTable(): number;
  setShareTable(value: number): void;

  getTemplateId(): number;
  setTemplateId(value: number): void;

  getPrivateRoom(): number;
  setPrivateRoom(value: number): void;

  getRoomPassword(): string;
  setRoomPassword(value: string): void;

  getGoldType(): number;
  setGoldType(value: number): void;

  getRealTimeVoiceOn(): number;
  setRealTimeVoiceOn(value: number): void;

  getAntiCheatType(): number;
  setAntiCheatType(value: number): void;

  getAntiCheatTimelimit(): number;
  setAntiCheatTimelimit(value: number): void;

  getDealDelay(): number;
  setDealDelay(value: number): void;

  getAntiCheatVideoType(): number;
  setAntiCheatVideoType(value: number): void;

  getVideoVerifyCount(): number;
  setVideoVerifyCount(value: number): void;

  getCreatorRandomId(): number;
  setCreatorRandomId(value: number): void;

  clearMultiLangNamesList(): void;
  getMultiLangNamesList(): Array<MultiLangName>;
  setMultiLangNamesList(value: Array<MultiLangName>): void;
  addMultiLangNames(value?: MultiLangName, index?: number): MultiLangName;

  getAntiCheatFeeType(): number;
  setAntiCheatFeeType(value: number): void;

  getAntiCheatOrderType(): number;
  setAntiCheatOrderType(value: number): void;

  getAntiCheatOrderMicType(): number;
  setAntiCheatOrderMicType(value: number): void;

  getSelectOuts(): number;
  setSelectOuts(value: number): void;

  getBringinLimitType(): number;
  setBringinLimitType(value: number): void;

  getBombpot(): number;
  setBombpot(value: number): void;

  getMushroomMode(): number;
  setMushroomMode(value: number): void;

  getMushroomBase(): number;
  setMushroomBase(value: number): void;

  getMushroomStatic(): number;
  setMushroomStatic(value: number): void;

  getRandomAnte(): string;
  setRandomAnte(value: string): void;

  clearLuckycardsNumList(): void;
  getLuckycardsNumList(): Array<Luckycards>;
  setLuckycardsNumList(value: Array<Luckycards>): void;
  addLuckycardsNum(value?: Luckycards, index?: number): Luckycards;

  getVideoEffectType(): number;
  setVideoEffectType(value: number): void;

  getVideoVerifyType(): number;
  setVideoVerifyType(value: number): void;

  getVideoQualityType(): number;
  setVideoQualityType(value: number): void;

  getSeatedMessaging(): number;
  setSeatedMessaging(value: number): void;

  getChatType(): number;
  setChatType(value: number): void;

  getAutoOnTableSwitch(): number;
  setAutoOnTableSwitch(value: number): void;

  getRetainType(): number;
  setRetainType(value: number): void;

  hasRoomAdmin(): boolean;
  clearRoomAdmin(): void;
  getRoomAdmin(): RoomAdmin | undefined;
  setRoomAdmin(value?: RoomAdmin): void;

  getPersonalType(): number;
  setPersonalType(value: number): void;

  getRandomSeat(): number;
  setRandomSeat(value: number): void;

  getSquidBase(): number;
  setSquidBase(value: number): void;

  getForceShowCard(): number;
  setForceShowCard(value: number): void;

  getOnlyIos(): number;
  setOnlyIos(value: number): void;

  getViewPlayerCards(): number;
  setViewPlayerCards(value: number): void;

  getCut(): number;
  setCut(value: number): void;

  getEncryptCards(): number;
  setEncryptCards(value: number): void;

  getMinPlayerChipRate(): number;
  setMinPlayerChipRate(value: number): void;

  getMaxBringinTotalRate(): number;
  setMaxBringinTotalRate(value: number): void;

  getBringinEqualLeader(): number;
  setBringinEqualLeader(value: number): void;

  getCalltimeLimit(): number;
  setCalltimeLimit(value: number): void;

  getCalltimeWinLine(): number;
  setCalltimeWinLine(value: number): void;

  getJackpot(): number;
  setJackpot(value: number): void;

  getJackpotId(): number;
  setJackpotId(value: number): void;

  getJackpotGold(): number;
  setJackpotGold(value: number): void;

  hasJackpotConfig(): boolean;
  clearJackpotConfig(): void;
  getJackpotConfig(): RoomJackpotConfig | undefined;
  setJackpotConfig(value?: RoomJackpotConfig): void;

  clearSubConfigsList(): void;
  getSubConfigsList(): Array<SubRoomConfig>;
  setSubConfigsList(value: Array<SubRoomConfig>): void;
  addSubConfigs(value?: SubRoomConfig, index?: number): SubRoomConfig;

  getSquidMax(): number;
  setSquidMax(value: number): void;

  getSquidMostGet(): number;
  setSquidMostGet(value: number): void;

  getSquidBetGet(): number;
  setSquidBetGet(value: number): void;

  getSquidHead(): number;
  setSquidHead(value: number): void;

  getSquidTail(): number;
  setSquidTail(value: number): void;

  getRounds(): number;
  setRounds(value: number): void;

  getMode(): Def.RoomModeMap[keyof Def.RoomModeMap];
  setMode(value: Def.RoomModeMap[keyof Def.RoomModeMap]): void;

  hasModeSetting(): boolean;
  clearModeSetting(): void;
  getModeSetting(): ModeSetting | undefined;
  setModeSetting(value?: ModeSetting): void;

  getEnterRoomType(): number;
  setEnterRoomType(value: number): void;

  getJackpotParentGold(): number;
  setJackpotParentGold(value: number): void;

  getIsWhitelist(): boolean;
  setIsWhitelist(value: boolean): void;

  getCriticalHit(): number;
  setCriticalHit(value: number): void;

  getKongTransfer(): number;
  setKongTransfer(value: number): void;

  getKongWinOfDiscard(): number;
  setKongWinOfDiscard(value: number): void;

  getSelfDrawnType(): number;
  setSelfDrawnType(value: number): void;

  hasWinTypeRule(): boolean;
  clearWinTypeRule(): void;
  getWinTypeRule(): WinTypeRule | undefined;
  setWinTypeRule(value?: WinTypeRule): void;

  getKongWinOfDiscardType(): number;
  setKongWinOfDiscardType(value: number): void;

  getJoker(): number;
  setJoker(value: number): void;

  getWinWay(): number;
  setWinWay(value: number): void;

  getSingleHolder(): number;
  setSingleHolder(value: number): void;

  getRobKongHolder(): number;
  setRobKongHolder(value: number): void;

  getRobKong(): number;
  setRobKong(value: number): void;

  getWallType(): number;
  setWallType(value: number): void;

  getFollowDealer(): number;
  setFollowDealer(value: number): void;

  getRaise(): number;
  setRaise(value: number): void;

  getRaiseOpDuration(): number;
  setRaiseOpDuration(value: number): void;

  getJokerCount(): number;
  setJokerCount(value: number): void;

  getOneMatchMoreWin(): number;
  setOneMatchMoreWin(value: number): void;

  getAutoChangeRoomLimitHand(): number;
  setAutoChangeRoomLimitHand(value: number): void;

  getCalltime(): number;
  setCalltime(value: number): void;

  clearRuleUnitList(): void;
  getRuleUnitList(): Array<RuleUnit>;
  setRuleUnitList(value: Array<RuleUnit>): void;
  addRuleUnit(value?: RuleUnit, index?: number): RuleUnit;

  getSimpleHorseMode(): number;
  setSimpleHorseMode(value: number): void;

  getSimpleHorseCount(): number;
  setSimpleHorseCount(value: number): void;

  getSquidForceShowCard(): number;
  setSquidForceShowCard(value: number): void;

  hasSettleSetting(): boolean;
  clearSettleSetting(): void;
  getSettleSetting(): SettleSetting | undefined;
  setSettleSetting(value?: SettleSetting): void;

  getSquidMode(): number;
  setSquidMode(value: number): void;

  getSquidExtraCount(): number;
  setSquidExtraCount(value: number): void;

  getQuickChangeRoom(): number;
  setQuickChangeRoom(value: number): void;

  getNotEnoughCloseDuration(): number;
  setNotEnoughCloseDuration(value: number): void;

  getPlayDurationType(): number;
  setPlayDurationType(value: number): void;

  getPlayHandsLimit(): number;
  setPlayHandsLimit(value: number): void;

  getInsuranceMode(): Def.IsuranceModeMap[keyof Def.IsuranceModeMap];
  setInsuranceMode(value: Def.IsuranceModeMap[keyof Def.IsuranceModeMap]): void;

  getRetainMaxRate(): number;
  setRetainMaxRate(value: number): void;

  getWheelTemplateId(): number;
  setWheelTemplateId(value: number): void;

  getAllInMute(): number;
  setAllInMute(value: number): void;

  clearSquidCountRateList(): void;
  getSquidCountRateList(): Array<SquidCountRateConfig>;
  setSquidCountRateList(value: Array<SquidCountRateConfig>): void;
  addSquidCountRate(value?: SquidCountRateConfig, index?: number): SquidCountRateConfig;

  getDepositPercent(): number;
  setDepositPercent(value: number): void;

  getInsuranceForceBuyRatio(): number;
  setInsuranceForceBuyRatio(value: number): void;

  getBombDoubleType(): number;
  setBombDoubleType(value: number): void;

  getBombSixBeginReward(): number;
  setBombSixBeginReward(value: number): void;

  getPassAceThreeTime(): number;
  setPassAceThreeTime(value: number): void;

  getDoubleLowLevelUpType(): number;
  setDoubleLowLevelUpType(value: number): void;

  getSquidLeaveMode(): number;
  setSquidLeaveMode(value: number): void;

  getPowerSaving(): number;
  setPowerSaving(value: number): void;

  getSquidPlayerCount(): number;
  setSquidPlayerCount(value: number): void;

  clearUsersList(): void;
  getUsersList(): Array<RoomUserInfo>;
  setUsersList(value: Array<RoomUserInfo>): void;
  addUsers(value?: RoomUserInfo, index?: number): RoomUserInfo;

  clearRelateClubIdsList(): void;
  getRelateClubIdsList(): Array<number>;
  setRelateClubIdsList(value: Array<number>): void;
  addRelateClubIds(value: number, index?: number): number;

  clearRelateTribeClubListList(): void;
  getRelateTribeClubListList(): Array<RoomTribeClubRelate>;
  setRelateTribeClubListList(value: Array<RoomTribeClubRelate>): void;
  addRelateTribeClubList(value?: RoomTribeClubRelate, index?: number): RoomTribeClubRelate;

  getCurrency(): string;
  setCurrency(value: string): void;

  hasCowboyConfig(): boolean;
  clearCowboyConfig(): void;
  getCowboyConfig(): CowboyConfig | undefined;
  setCowboyConfig(value?: CowboyConfig): void;

  getMicSeatSwitch(): number;
  setMicSeatSwitch(value: number): void;

  getMicMiddleSwitch(): number;
  setMicMiddleSwitch(value: number): void;

  getVideoSeatSwitch(): number;
  setVideoSeatSwitch(value: number): void;

  getVideoMiddleSwitch(): number;
  setVideoMiddleSwitch(value: number): void;

  getPowerSavingSeatSwitch(): number;
  setPowerSavingSeatSwitch(value: number): void;

  getPowerSavingMiddleSwitch(): number;
  setPowerSavingMiddleSwitch(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomRecord.AsObject;
  static toObject(includeInstance: boolean, msg: RoomRecord): RoomRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoomRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomRecord;
  static deserializeBinaryFromReader(message: RoomRecord, reader: jspb.BinaryReader): RoomRecord;
}

export namespace RoomRecord {
  export type AsObject = {
    rid: number,
    name: string,
    roomType: number,
    gameType: number,
    pokerType: number,
    limitBetType: number,
    status: number,
    ante: number,
    sb: number,
    opDuration: number,
    noUserWaitDuration: number,
    keepSeatDuration: number,
    totalBringIn: number,
    totalBringOut: number,
    totalChip: number,
    minRate: number,
    maxRate: number,
    minPlayers: number,
    autostartMinPlayers: number,
    straddleOn: number,
    straddleMax: number,
    insuranceOn: number,
    insuranceOpDuration: number,
    secondPcsOn: number,
    secondPcsOpDuration: number,
    secondPcsUserLimit: number,
    delayViewCardOn: number,
    postOn: number,
    muckOn: number,
    limitIpOn: number,
    limitGpsOn: number,
    limitGpsDistance: number,
    limitDelayTimes: number,
    limitAutoCheckTimes: number,
    limitAutoFoldTimes: number,
    seatCount: number,
    emptySeat: number,
    roomers: number,
    enterTime: number,
    playDuration: number,
    noUserCloseDuration: number,
    retainMinRate: number,
    scheduleStartTime: number,
    startTime: number,
    endTime: number,
    settlementType: number,
    handNum: number,
    tribeId: number,
    endReason: string,
    hcTotalHandLv: number,
    hcTotalHand: number,
    hcPoolRateLv: number,
    hcPoolRate: number,
    serviceId: string,
    createTime: number,
    updateTime: number,
    insuranceOddsList: Array<InsuranceOddsForPotsUserCount.AsObject>,
    voiceprintVerifyOn: number,
    voiceprintVerifyLimitTimes: number,
    voiceprintVerifyDuration: number,
    voiceprintVerifyIntervalDuration: number,
    participationStatus: number,
    tableclothTag: string,
    clubId: number,
    originType: number,
    limitBringIn: number,
    invitationCode: string,
    shareTable: number,
    templateId: number,
    privateRoom: number,
    roomPassword: string,
    goldType: number,
    realTimeVoiceOn: number,
    antiCheatType: number,
    antiCheatTimelimit: number,
    dealDelay: number,
    antiCheatVideoType: number,
    videoVerifyCount: number,
    creatorRandomId: number,
    multiLangNamesList: Array<MultiLangName.AsObject>,
    antiCheatFeeType: number,
    antiCheatOrderType: number,
    antiCheatOrderMicType: number,
    selectOuts: number,
    bringinLimitType: number,
    bombpot: number,
    mushroomMode: number,
    mushroomBase: number,
    mushroomStatic: number,
    randomAnte: string,
    luckycardsNumList: Array<Luckycards.AsObject>,
    videoEffectType: number,
    videoVerifyType: number,
    videoQualityType: number,
    seatedMessaging: number,
    chatType: number,
    autoOnTableSwitch: number,
    retainType: number,
    roomAdmin?: RoomAdmin.AsObject,
    personalType: number,
    randomSeat: number,
    squidBase: number,
    forceShowCard: number,
    onlyIos: number,
    viewPlayerCards: number,
    cut: number,
    encryptCards: number,
    minPlayerChipRate: number,
    maxBringinTotalRate: number,
    bringinEqualLeader: number,
    calltimeLimit: number,
    calltimeWinLine: number,
    jackpot: number,
    jackpotId: number,
    jackpotGold: number,
    jackpotConfig?: RoomJackpotConfig.AsObject,
    subConfigsList: Array<SubRoomConfig.AsObject>,
    squidMax: number,
    squidMostGet: number,
    squidBetGet: number,
    squidHead: number,
    squidTail: number,
    rounds: number,
    mode: Def.RoomModeMap[keyof Def.RoomModeMap],
    modeSetting?: ModeSetting.AsObject,
    enterRoomType: number,
    jackpotParentGold: number,
    isWhitelist: boolean,
    criticalHit: number,
    kongTransfer: number,
    kongWinOfDiscard: number,
    selfDrawnType: number,
    winTypeRule?: WinTypeRule.AsObject,
    kongWinOfDiscardType: number,
    joker: number,
    winWay: number,
    singleHolder: number,
    robKongHolder: number,
    robKong: number,
    wallType: number,
    followDealer: number,
    raise: number,
    raiseOpDuration: number,
    jokerCount: number,
    oneMatchMoreWin: number,
    autoChangeRoomLimitHand: number,
    calltime: number,
    ruleUnitList: Array<RuleUnit.AsObject>,
    simpleHorseMode: number,
    simpleHorseCount: number,
    squidForceShowCard: number,
    settleSetting?: SettleSetting.AsObject,
    squidMode: number,
    squidExtraCount: number,
    quickChangeRoom: number,
    notEnoughCloseDuration: number,
    playDurationType: number,
    playHandsLimit: number,
    insuranceMode: Def.IsuranceModeMap[keyof Def.IsuranceModeMap],
    retainMaxRate: number,
    wheelTemplateId: number,
    allInMute: number,
    squidCountRateList: Array<SquidCountRateConfig.AsObject>,
    depositPercent: number,
    insuranceForceBuyRatio: number,
    bombDoubleType: number,
    bombSixBeginReward: number,
    passAceThreeTime: number,
    doubleLowLevelUpType: number,
    squidLeaveMode: number,
    powerSaving: number,
    squidPlayerCount: number,
    usersList: Array<RoomUserInfo.AsObject>,
    relateClubIdsList: Array<number>,
    relateTribeClubListList: Array<RoomTribeClubRelate.AsObject>,
    currency: string,
    cowboyConfig?: CowboyConfig.AsObject,
    micSeatSwitch: number,
    micMiddleSwitch: number,
    videoSeatSwitch: number,
    videoMiddleSwitch: number,
    powerSavingSeatSwitch: number,
    powerSavingMiddleSwitch: number,
  }
}

export class SquidCountRateConfig extends jspb.Message {
  getCount(): number;
  setCount(value: number): void;

  getRate(): number;
  setRate(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SquidCountRateConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SquidCountRateConfig): SquidCountRateConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SquidCountRateConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SquidCountRateConfig;
  static deserializeBinaryFromReader(message: SquidCountRateConfig, reader: jspb.BinaryReader): SquidCountRateConfig;
}

export namespace SquidCountRateConfig {
  export type AsObject = {
    count: number,
    rate: number,
  }
}

export class SettleSetting extends jspb.Message {
  getType(): number;
  setType(value: number): void;

  getFeePermillage(): number;
  setFeePermillage(value: number): void;

  getMaxPerHand(): number;
  setMaxPerHand(value: number): void;

  getWinProfitPercent(): number;
  setWinProfitPercent(value: number): void;

  getCapType(): number;
  setCapType(value: number): void;

  getSecCaps(): string;
  setSecCaps(value: string): void;

  getHandFeeType(): number;
  setHandFeeType(value: number): void;

  getPreflopFree(): number;
  setPreflopFree(value: number): void;

  getFewPlayerHalfOff(): number;
  setFewPlayerHalfOff(value: number): void;

  getFreePotsValue(): number;
  setFreePotsValue(value: number): void;

  getWinDivideValue(): number;
  setWinDivideValue(value: number): void;

  getAboveDivideFee(): number;
  setAboveDivideFee(value: number): void;

  getBelowDivideRatio(): number;
  setBelowDivideRatio(value: number): void;

  getJackpotRatio(): number;
  setJackpotRatio(value: number): void;

  getJackpotRatioHand(): number;
  setJackpotRatioHand(value: number): void;

  getSettleProfitType(): number;
  setSettleProfitType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SettleSetting.AsObject;
  static toObject(includeInstance: boolean, msg: SettleSetting): SettleSetting.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SettleSetting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SettleSetting;
  static deserializeBinaryFromReader(message: SettleSetting, reader: jspb.BinaryReader): SettleSetting;
}

export namespace SettleSetting {
  export type AsObject = {
    type: number,
    feePermillage: number,
    maxPerHand: number,
    winProfitPercent: number,
    capType: number,
    secCaps: string,
    handFeeType: number,
    preflopFree: number,
    fewPlayerHalfOff: number,
    freePotsValue: number,
    winDivideValue: number,
    aboveDivideFee: number,
    belowDivideRatio: number,
    jackpotRatio: number,
    jackpotRatioHand: number,
    settleProfitType: number,
  }
}

export class ModeSetting extends jspb.Message {
  getDeposit(): number;
  setDeposit(value: number): void;

  getMinUsers(): number;
  setMinUsers(value: number): void;

  getTime(): number;
  setTime(value: number): void;

  getTimeOutType(): number;
  setTimeOutType(value: number): void;

  getDepositTo(): number;
  setDepositTo(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModeSetting.AsObject;
  static toObject(includeInstance: boolean, msg: ModeSetting): ModeSetting.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ModeSetting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModeSetting;
  static deserializeBinaryFromReader(message: ModeSetting, reader: jspb.BinaryReader): ModeSetting;
}

export namespace ModeSetting {
  export type AsObject = {
    deposit: number,
    minUsers: number,
    time: number,
    timeOutType: number,
    depositTo: number,
  }
}

export class InsuranceOdds extends jspb.Message {
  getOuts(): number;
  setOuts(value: number): void;

  getOdds(): number;
  setOdds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsuranceOdds.AsObject;
  static toObject(includeInstance: boolean, msg: InsuranceOdds): InsuranceOdds.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InsuranceOdds, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InsuranceOdds;
  static deserializeBinaryFromReader(message: InsuranceOdds, reader: jspb.BinaryReader): InsuranceOdds;
}

export namespace InsuranceOdds {
  export type AsObject = {
    outs: number,
    odds: number,
  }
}

export class InsuranceOddsForPotsUserCount extends jspb.Message {
  getPotUserCount(): number;
  setPotUserCount(value: number): void;

  clearOddsList(): void;
  getOddsList(): Array<InsuranceOdds>;
  setOddsList(value: Array<InsuranceOdds>): void;
  addOdds(value?: InsuranceOdds, index?: number): InsuranceOdds;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsuranceOddsForPotsUserCount.AsObject;
  static toObject(includeInstance: boolean, msg: InsuranceOddsForPotsUserCount): InsuranceOddsForPotsUserCount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InsuranceOddsForPotsUserCount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InsuranceOddsForPotsUserCount;
  static deserializeBinaryFromReader(message: InsuranceOddsForPotsUserCount, reader: jspb.BinaryReader): InsuranceOddsForPotsUserCount;
}

export namespace InsuranceOddsForPotsUserCount {
  export type AsObject = {
    potUserCount: number,
    oddsList: Array<InsuranceOdds.AsObject>,
  }
}

export class MultiLangName extends jspb.Message {
  getLang(): string;
  setLang(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiLangName.AsObject;
  static toObject(includeInstance: boolean, msg: MultiLangName): MultiLangName.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiLangName, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiLangName;
  static deserializeBinaryFromReader(message: MultiLangName, reader: jspb.BinaryReader): MultiLangName;
}

export namespace MultiLangName {
  export type AsObject = {
    lang: string,
    name: string,
  }
}

export class RoomAdmin extends jspb.Message {
  getDisbandRoom(): number;
  setDisbandRoom(value: number): void;

  getUserStandUp(): number;
  setUserStandUp(value: number): void;

  getUserLeave(): number;
  setUserLeave(value: number): void;

  getViewVideo(): number;
  setViewVideo(value: number): void;

  getVideoVerify(): number;
  setVideoVerify(value: number): void;

  getIsAdmin(): boolean;
  setIsAdmin(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomAdmin.AsObject;
  static toObject(includeInstance: boolean, msg: RoomAdmin): RoomAdmin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoomAdmin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomAdmin;
  static deserializeBinaryFromReader(message: RoomAdmin, reader: jspb.BinaryReader): RoomAdmin;
}

export namespace RoomAdmin {
  export type AsObject = {
    disbandRoom: number,
    userStandUp: number,
    userLeave: number,
    viewVideo: number,
    videoVerify: number,
    isAdmin: boolean,
  }
}

export class MTTRecord extends jspb.Message {
  getMatchId(): number;
  setMatchId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getType(): number;
  setType(value: number): void;

  getGameType(): Def.GameTypeMap[keyof Def.GameTypeMap];
  setGameType(value: Def.GameTypeMap[keyof Def.GameTypeMap]): void;

  getPokerType(): Def.PokerTypeMap[keyof Def.PokerTypeMap];
  setPokerType(value: Def.PokerTypeMap[keyof Def.PokerTypeMap]): void;

  getLimitBetType(): Def.LimitBetTypeMap[keyof Def.LimitBetTypeMap];
  setLimitBetType(value: Def.LimitBetTypeMap[keyof Def.LimitBetTypeMap]): void;

  getRankType(): number;
  setRankType(value: number): void;

  getEnterTime(): string;
  setEnterTime(value: string): void;

  getStartTime(): string;
  setStartTime(value: string): void;

  getEndTime(): string;
  setEndTime(value: string): void;

  getHunterOn(): number;
  setHunterOn(value: number): void;

  getHunterBonus(): number;
  setHunterBonus(value: number): void;

  getPartialOn(): number;
  setPartialOn(value: number): void;

  getParitalReturnBl(): number;
  setParitalReturnBl(value: number): void;

  getStraddleOn(): number;
  setStraddleOn(value: number): void;

  getStraddleMax(): number;
  setStraddleMax(value: number): void;

  getMuckOn(): number;
  setMuckOn(value: number): void;

  getRooms(): number;
  setRooms(value: number): void;

  getMaxRoomId(): number;
  setMaxRoomId(value: number): void;

  getDelayViewCardOn(): number;
  setDelayViewCardOn(value: number): void;

  getLimitMin(): number;
  setLimitMin(value: number): void;

  getLimitDelayTimes(): number;
  setLimitDelayTimes(value: number): void;

  getLimitAutoCheckTimes(): number;
  setLimitAutoCheckTimes(value: number): void;

  getLimitAutoFoldTimes(): number;
  setLimitAutoFoldTimes(value: number): void;

  getParticipants(): number;
  setParticipants(value: number): void;

  getAlive(): number;
  setAlive(value: number): void;

  getAwardNum(): number;
  setAwardNum(value: number): void;

  getMoneySync(): number;
  setMoneySync(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getSeatCount(): number;
  setSeatCount(value: number): void;

  getFinalSeatCount(): number;
  setFinalSeatCount(value: number): void;

  getNoUserWaitDuration(): number;
  setNoUserWaitDuration(value: number): void;

  getInitialScore(): number;
  setInitialScore(value: number): void;

  getBlindtableType(): number;
  setBlindtableType(value: number): void;

  getUpblindInterval(): number;
  setUpblindInterval(value: number): void;

  getApplyStartTime(): string;
  setApplyStartTime(value: string): void;

  getOpDuration(): number;
  setOpDuration(value: number): void;

  getMaxDelayApplyBl(): number;
  setMaxDelayApplyBl(value: number): void;

  getRebuyTimes(): number;
  setRebuyTimes(value: number): void;

  getMaxRebuyBl(): number;
  setMaxRebuyBl(value: number): void;

  getLimitTotalBuyTimes(): number;
  setLimitTotalBuyTimes(value: number): void;

  getTotalBuyTimes(): number;
  setTotalBuyTimes(value: number): void;

  getTotalBuyinTimes(): number;
  setTotalBuyinTimes(value: number): void;

  getTotalRebuyTimes(): number;
  setTotalRebuyTimes(value: number): void;

  getAddonBeginBl(): number;
  setAddonBeginBl(value: number): void;

  getAddonEndBl(): number;
  setAddonEndBl(value: number): void;

  getAddonScore(): number;
  setAddonScore(value: number): void;

  getTotalAddonTimes(): number;
  setTotalAddonTimes(value: number): void;

  getApplyFeePool(): number;
  setApplyFeePool(value: number): void;

  getApplyFeeService(): number;
  setApplyFeeService(value: number): void;

  getApplyFeeHunter(): number;
  setApplyFeeHunter(value: number): void;

  getPrizeType(): number;
  setPrizeType(value: number): void;

  getPrizeBasePool(): number;
  setPrizeBasePool(value: number): void;

  getTribeId(): number;
  setTribeId(value: number): void;

  getCreateTime(): string;
  setCreateTime(value: string): void;

  getUpdateTime(): string;
  setUpdateTime(value: string): void;

  getBuyPropId(): number;
  setBuyPropId(value: number): void;

  getPropBuyType(): Def.PropBuyTypeMap[keyof Def.PropBuyTypeMap];
  setPropBuyType(value: Def.PropBuyTypeMap[keyof Def.PropBuyTypeMap]): void;

  getGameIcon(): string;
  setGameIcon(value: string): void;

  getVoiceprintVerifyOn(): number;
  setVoiceprintVerifyOn(value: number): void;

  getVoiceprintVerifyDuration(): number;
  setVoiceprintVerifyDuration(value: number): void;

  getAddonplusM1On(): number;
  setAddonplusM1On(value: number): void;

  getAddonplusM1MaxTimes(): number;
  setAddonplusM1MaxTimes(value: number): void;

  getAddonplusM1Limit(): number;
  setAddonplusM1Limit(value: number): void;

  getTotalAddonplusM1Times(): number;
  setTotalAddonplusM1Times(value: number): void;

  getAddonplusM2On(): number;
  setAddonplusM2On(value: number): void;

  getAddonplusM2MaxTimes(): number;
  setAddonplusM2MaxTimes(value: number): void;

  getAddonplusM2MaxBl(): number;
  setAddonplusM2MaxBl(value: number): void;

  getTotalAddonplusM2Times(): number;
  setTotalAddonplusM2Times(value: number): void;

  getBuyRatio(): number;
  setBuyRatio(value: number): void;

  getPreBuyinBonus(): number;
  setPreBuyinBonus(value: number): void;

  getTableclothTag(): string;
  setTableclothTag(value: string): void;

  getLimitTag(): string;
  setLimitTag(value: string): void;

  getBonustableType(): number;
  setBonustableType(value: number): void;

  getBuyinFreeTimes(): number;
  setBuyinFreeTimes(value: number): void;

  getRebuyFreeTimes(): number;
  setRebuyFreeTimes(value: number): void;

  getMultiRatioFreeTimes(): number;
  setMultiRatioFreeTimes(value: number): void;

  getAddonFreeTimes(): number;
  setAddonFreeTimes(value: number): void;

  getBuyinFreeInclSvr(): number;
  setBuyinFreeInclSvr(value: number): void;

  getRebuyFreeInclSvr(): number;
  setRebuyFreeInclSvr(value: number): void;

  getMultiRatioFreeInclSvr(): number;
  setMultiRatioFreeInclSvr(value: number): void;

  getAddonFreeInclSvr(): number;
  setAddonFreeInclSvr(value: number): void;

  getAwardReplacePropId(): number;
  setAwardReplacePropId(value: number): void;

  getAwardReplacePropValue(): number;
  setAwardReplacePropValue(value: number): void;

  getAwardExtraBuyTimes(): number;
  setAwardExtraBuyTimes(value: number): void;

  getAwardExtraAddCount(): number;
  setAwardExtraAddCount(value: number): void;

  getAwardExtraPropId(): number;
  setAwardExtraPropId(value: number): void;

  getAwardExtraGoldValue(): number;
  setAwardExtraGoldValue(value: number): void;

  getAwardExtraGoldBuy(): number;
  setAwardExtraGoldBuy(value: number): void;

  getAwardExtraTicketBuy(): number;
  setAwardExtraTicketBuy(value: number): void;

  getAwardExtraFreeBuy(): number;
  setAwardExtraFreeBuy(value: number): void;

  getBreakBasePool(): number;
  setBreakBasePool(value: number): void;

  getTotalExtraBuyTimes(): number;
  setTotalExtraBuyTimes(value: number): void;

  getAwardExtraPropValue(): number;
  setAwardExtraPropValue(value: number): void;

  getRebuyTicketLimitTimes(): number;
  setRebuyTicketLimitTimes(value: number): void;

  getAddonTicketLimitTimes(): number;
  setAddonTicketLimitTimes(value: number): void;

  getCreatorId(): number;
  setCreatorId(value: number): void;

  getShareMtt(): number;
  setShareMtt(value: number): void;

  getTemplateId(): number;
  setTemplateId(value: number): void;

  getGoldType(): number;
  setGoldType(value: number): void;

  getDealDelay(): number;
  setDealDelay(value: number): void;

  getBombpot(): number;
  setBombpot(value: number): void;

  getAntiCheatType(): number;
  setAntiCheatType(value: number): void;

  getAntiCheatTimelimit(): number;
  setAntiCheatTimelimit(value: number): void;

  getAntiCheatVideoType(): number;
  setAntiCheatVideoType(value: number): void;

  getPopupMessage(): string;
  setPopupMessage(value: string): void;

  getVideoVerifyType(): number;
  setVideoVerifyType(value: number): void;

  getAntiCheatOrderType(): number;
  setAntiCheatOrderType(value: number): void;

  getAntiCheatOrderMicType(): number;
  setAntiCheatOrderMicType(value: number): void;

  getSngId(): number;
  setSngId(value: number): void;

  getSngInvitationCode(): string;
  setSngInvitationCode(value: string): void;

  getForceVideoTimingAward(): number;
  setForceVideoTimingAward(value: number): void;

  getForceVideoTimingFinals(): number;
  setForceVideoTimingFinals(value: number): void;

  getForceVideoClose(): number;
  setForceVideoClose(value: number): void;

  getForceVideoCloseTime(): number;
  setForceVideoCloseTime(value: number): void;

  getForceVideoStartTime(): number;
  setForceVideoStartTime(value: number): void;

  getForceCloseTime(): number;
  setForceCloseTime(value: number): void;

  getChatType(): number;
  setChatType(value: number): void;

  getForceVideoTimingReorg(): number;
  setForceVideoTimingReorg(value: number): void;

  getForceVideoTimingUpBlind(): number;
  setForceVideoTimingUpBlind(value: number): void;

  getForceVideoTimingUpBlindTimes(): number;
  setForceVideoTimingUpBlindTimes(value: number): void;

  getDelayTimeType(): number;
  setDelayTimeType(value: number): void;

  clearBlindLevelDelayTimeTableList(): void;
  getBlindLevelDelayTimeTableList(): Array<MTTBlindLevelDelayTime>;
  setBlindLevelDelayTimeTableList(value: Array<MTTBlindLevelDelayTime>): void;
  addBlindLevelDelayTimeTable(value?: MTTBlindLevelDelayTime, index?: number): MTTBlindLevelDelayTime;

  getMaxDelayTimes(): number;
  setMaxDelayTimes(value: number): void;

  getAutoDelayTime(): number;
  setAutoDelayTime(value: number): void;

  getMjTotalHands(): number;
  setMjTotalHands(value: number): void;

  getMjShuffleHands(): number;
  setMjShuffleHands(value: number): void;

  getMjBlindUpHands(): number;
  setMjBlindUpHands(value: number): void;

  getInvitationCode(): string;
  setInvitationCode(value: string): void;

  getClubId(): number;
  setClubId(value: number): void;

  getOriginType(): number;
  setOriginType(value: number): void;

  getStageFatherId(): number;
  setStageFatherId(value: number): void;

  getStageName(): string;
  setStageName(value: string): void;

  getStageBlindLevel(): number;
  setStageBlindLevel(value: number): void;

  getStageRemainRate(): number;
  setStageRemainRate(value: number): void;

  getStageFinalScoreType(): number;
  setStageFinalScoreType(value: number): void;

  getInsuranceAmount(): number;
  setInsuranceAmount(value: number): void;

  getActivityDetail(): string;
  setActivityDetail(value: string): void;

  getBreakInterval(): number;
  setBreakInterval(value: number): void;

  getBreakDuration(): number;
  setBreakDuration(value: number): void;

  getBreakRemindTime(): number;
  setBreakRemindTime(value: number): void;

  getFinalBreakDuration(): number;
  setFinalBreakDuration(value: number): void;

  getFinalBreakRemind(): number;
  setFinalBreakRemind(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MTTRecord.AsObject;
  static toObject(includeInstance: boolean, msg: MTTRecord): MTTRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MTTRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MTTRecord;
  static deserializeBinaryFromReader(message: MTTRecord, reader: jspb.BinaryReader): MTTRecord;
}

export namespace MTTRecord {
  export type AsObject = {
    matchId: number,
    name: string,
    type: number,
    gameType: Def.GameTypeMap[keyof Def.GameTypeMap],
    pokerType: Def.PokerTypeMap[keyof Def.PokerTypeMap],
    limitBetType: Def.LimitBetTypeMap[keyof Def.LimitBetTypeMap],
    rankType: number,
    enterTime: string,
    startTime: string,
    endTime: string,
    hunterOn: number,
    hunterBonus: number,
    partialOn: number,
    paritalReturnBl: number,
    straddleOn: number,
    straddleMax: number,
    muckOn: number,
    rooms: number,
    maxRoomId: number,
    delayViewCardOn: number,
    limitMin: number,
    limitDelayTimes: number,
    limitAutoCheckTimes: number,
    limitAutoFoldTimes: number,
    participants: number,
    alive: number,
    awardNum: number,
    moneySync: number,
    status: number,
    seatCount: number,
    finalSeatCount: number,
    noUserWaitDuration: number,
    initialScore: number,
    blindtableType: number,
    upblindInterval: number,
    applyStartTime: string,
    opDuration: number,
    maxDelayApplyBl: number,
    rebuyTimes: number,
    maxRebuyBl: number,
    limitTotalBuyTimes: number,
    totalBuyTimes: number,
    totalBuyinTimes: number,
    totalRebuyTimes: number,
    addonBeginBl: number,
    addonEndBl: number,
    addonScore: number,
    totalAddonTimes: number,
    applyFeePool: number,
    applyFeeService: number,
    applyFeeHunter: number,
    prizeType: number,
    prizeBasePool: number,
    tribeId: number,
    createTime: string,
    updateTime: string,
    buyPropId: number,
    propBuyType: Def.PropBuyTypeMap[keyof Def.PropBuyTypeMap],
    gameIcon: string,
    voiceprintVerifyOn: number,
    voiceprintVerifyDuration: number,
    addonplusM1On: number,
    addonplusM1MaxTimes: number,
    addonplusM1Limit: number,
    totalAddonplusM1Times: number,
    addonplusM2On: number,
    addonplusM2MaxTimes: number,
    addonplusM2MaxBl: number,
    totalAddonplusM2Times: number,
    buyRatio: number,
    preBuyinBonus: number,
    tableclothTag: string,
    limitTag: string,
    bonustableType: number,
    buyinFreeTimes: number,
    rebuyFreeTimes: number,
    multiRatioFreeTimes: number,
    addonFreeTimes: number,
    buyinFreeInclSvr: number,
    rebuyFreeInclSvr: number,
    multiRatioFreeInclSvr: number,
    addonFreeInclSvr: number,
    awardReplacePropId: number,
    awardReplacePropValue: number,
    awardExtraBuyTimes: number,
    awardExtraAddCount: number,
    awardExtraPropId: number,
    awardExtraGoldValue: number,
    awardExtraGoldBuy: number,
    awardExtraTicketBuy: number,
    awardExtraFreeBuy: number,
    breakBasePool: number,
    totalExtraBuyTimes: number,
    awardExtraPropValue: number,
    rebuyTicketLimitTimes: number,
    addonTicketLimitTimes: number,
    creatorId: number,
    shareMtt: number,
    templateId: number,
    goldType: number,
    dealDelay: number,
    bombpot: number,
    antiCheatType: number,
    antiCheatTimelimit: number,
    antiCheatVideoType: number,
    popupMessage: string,
    videoVerifyType: number,
    antiCheatOrderType: number,
    antiCheatOrderMicType: number,
    sngId: number,
    sngInvitationCode: string,
    forceVideoTimingAward: number,
    forceVideoTimingFinals: number,
    forceVideoClose: number,
    forceVideoCloseTime: number,
    forceVideoStartTime: number,
    forceCloseTime: number,
    chatType: number,
    forceVideoTimingReorg: number,
    forceVideoTimingUpBlind: number,
    forceVideoTimingUpBlindTimes: number,
    delayTimeType: number,
    blindLevelDelayTimeTableList: Array<MTTBlindLevelDelayTime.AsObject>,
    maxDelayTimes: number,
    autoDelayTime: number,
    mjTotalHands: number,
    mjShuffleHands: number,
    mjBlindUpHands: number,
    invitationCode: string,
    clubId: number,
    originType: number,
    stageFatherId: number,
    stageName: string,
    stageBlindLevel: number,
    stageRemainRate: number,
    stageFinalScoreType: number,
    insuranceAmount: number,
    activityDetail: string,
    breakInterval: number,
    breakDuration: number,
    breakRemindTime: number,
    finalBreakDuration: number,
    finalBreakRemind: number,
  }
}

export class MTTMore extends jspb.Message {
  getBl(): number;
  setBl(value: number): void;

  getSb(): number;
  setSb(value: number): void;

  getAnte(): number;
  setAnte(value: number): void;

  getNsb(): number;
  setNsb(value: number): void;

  getNante(): number;
  setNante(value: number): void;

  getNbl(): number;
  setNbl(value: number): void;

  getPrizePool(): number;
  setPrizePool(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MTTMore.AsObject;
  static toObject(includeInstance: boolean, msg: MTTMore): MTTMore.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MTTMore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MTTMore;
  static deserializeBinaryFromReader(message: MTTMore, reader: jspb.BinaryReader): MTTMore;
}

export namespace MTTMore {
  export type AsObject = {
    bl: number,
    sb: number,
    ante: number,
    nsb: number,
    nante: number,
    nbl: number,
    prizePool: number,
  }
}

export class MTTUserStatus extends jspb.Message {
  getLeftRebuyTimes(): number;
  setLeftRebuyTimes(value: number): void;

  getChip(): number;
  setChip(value: number): void;

  getStore(): number;
  setStore(value: number): void;

  getInitScore(): number;
  setInitScore(value: number): void;

  getPartialEnable(): boolean;
  setPartialEnable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MTTUserStatus.AsObject;
  static toObject(includeInstance: boolean, msg: MTTUserStatus): MTTUserStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MTTUserStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MTTUserStatus;
  static deserializeBinaryFromReader(message: MTTUserStatus, reader: jspb.BinaryReader): MTTUserStatus;
}

export namespace MTTUserStatus {
  export type AsObject = {
    leftRebuyTimes: number,
    chip: number,
    store: number,
    initScore: number,
    partialEnable: boolean,
  }
}

export class PlayerJackpotSummary extends jspb.Message {
  getUserRid(): number;
  setUserRid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  getSex(): number;
  setSex(value: number): void;

  getContributeTotal(): number;
  setContributeTotal(value: number): void;

  getAwardTotal(): number;
  setAwardTotal(value: number): void;

  getRoyalFlushCount(): number;
  setRoyalFlushCount(value: number): void;

  getStraightFlushCount(): number;
  setStraightFlushCount(value: number): void;

  getFourOfaKindCount(): number;
  setFourOfaKindCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerJackpotSummary.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerJackpotSummary): PlayerJackpotSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerJackpotSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerJackpotSummary;
  static deserializeBinaryFromReader(message: PlayerJackpotSummary, reader: jspb.BinaryReader): PlayerJackpotSummary;
}

export namespace PlayerJackpotSummary {
  export type AsObject = {
    userRid: number,
    name: string,
    avatar: string,
    sex: number,
    contributeTotal: number,
    awardTotal: number,
    royalFlushCount: number,
    straightFlushCount: number,
    fourOfaKindCount: number,
  }
}

export class RoomJackpotConfig extends jspb.Message {
  getContributePotSwitch(): number;
  setContributePotSwitch(value: number): void;

  getContributePotLimit(): number;
  setContributePotLimit(value: number): void;

  getAwardBetSwitch(): number;
  setAwardBetSwitch(value: number): void;

  getAwardBetLimit(): number;
  setAwardBetLimit(value: number): void;

  getAwardOtherSwitch(): number;
  setAwardOtherSwitch(value: number): void;

  getAwardOtherRatio(): number;
  setAwardOtherRatio(value: number): void;

  getContributeType(): number;
  setContributeType(value: number): void;

  getContributeFixedLimit(): number;
  setContributeFixedLimit(value: number): void;

  getContributeFixedRate(): number;
  setContributeFixedRate(value: number): void;

  getContributeRatio(): number;
  setContributeRatio(value: number): void;

  getContributePotRatio(): number;
  setContributePotRatio(value: number): void;

  getGamePlayRatio(): number;
  setGamePlayRatio(value: number): void;

  getBlindRatio(): number;
  setBlindRatio(value: number): void;

  getRoyalFlushSwitch(): number;
  setRoyalFlushSwitch(value: number): void;

  getRoyalFlushRatio(): number;
  setRoyalFlushRatio(value: number): void;

  getStraightFlushSwitch(): number;
  setStraightFlushSwitch(value: number): void;

  getStraightFlushRatio(): number;
  setStraightFlushRatio(value: number): void;

  getFourOfaKindSwitch(): number;
  setFourOfaKindSwitch(value: number): void;

  getFourOfaKindRatio(): number;
  setFourOfaKindRatio(value: number): void;

  getAwardRoundType(): number;
  setAwardRoundType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomJackpotConfig.AsObject;
  static toObject(includeInstance: boolean, msg: RoomJackpotConfig): RoomJackpotConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoomJackpotConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomJackpotConfig;
  static deserializeBinaryFromReader(message: RoomJackpotConfig, reader: jspb.BinaryReader): RoomJackpotConfig;
}

export namespace RoomJackpotConfig {
  export type AsObject = {
    contributePotSwitch: number,
    contributePotLimit: number,
    awardBetSwitch: number,
    awardBetLimit: number,
    awardOtherSwitch: number,
    awardOtherRatio: number,
    contributeType: number,
    contributeFixedLimit: number,
    contributeFixedRate: number,
    contributeRatio: number,
    contributePotRatio: number,
    gamePlayRatio: number,
    blindRatio: number,
    royalFlushSwitch: number,
    royalFlushRatio: number,
    straightFlushSwitch: number,
    straightFlushRatio: number,
    fourOfaKindSwitch: number,
    fourOfaKindRatio: number,
    awardRoundType: number,
  }
}

export class SubRoomConfig extends jspb.Message {
  getAnte(): number;
  setAnte(value: number): void;

  getSb(): number;
  setSb(value: number): void;

  getGameType(): number;
  setGameType(value: number): void;

  getPokerType(): number;
  setPokerType(value: number): void;

  getLimitBetType(): number;
  setLimitBetType(value: number): void;

  getBombpot(): number;
  setBombpot(value: number): void;

  getSquidBase(): number;
  setSquidBase(value: number): void;

  getRounds(): number;
  setRounds(value: number): void;

  getCriticalHit(): number;
  setCriticalHit(value: number): void;

  getPlayingPlayerCountLimit(): number;
  setPlayingPlayerCountLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubRoomConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SubRoomConfig): SubRoomConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubRoomConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubRoomConfig;
  static deserializeBinaryFromReader(message: SubRoomConfig, reader: jspb.BinaryReader): SubRoomConfig;
}

export namespace SubRoomConfig {
  export type AsObject = {
    ante: number,
    sb: number,
    gameType: number,
    pokerType: number,
    limitBetType: number,
    bombpot: number,
    squidBase: number,
    rounds: number,
    criticalHit: number,
    playingPlayerCountLimit: number,
  }
}

export class JackpotAward extends jspb.Message {
  getUserRid(): number;
  setUserRid(value: number): void;

  getNickname(): string;
  setNickname(value: string): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  getAward(): number;
  setAward(value: number): void;

  getCardsType(): number;
  setCardsType(value: number): void;

  getHandValue(): number;
  setHandValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JackpotAward.AsObject;
  static toObject(includeInstance: boolean, msg: JackpotAward): JackpotAward.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JackpotAward, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JackpotAward;
  static deserializeBinaryFromReader(message: JackpotAward, reader: jspb.BinaryReader): JackpotAward;
}

export namespace JackpotAward {
  export type AsObject = {
    userRid: number,
    nickname: string,
    avatar: string,
    award: number,
    cardsType: number,
    handValue: number,
  }
}

export class WinTypeRule extends jspb.Message {
  getOutsideHand(): number;
  setOutsideHand(value: number): void;

  getAllSimple(): number;
  setAllSimple(value: number): void;

  getEyesPair(): number;
  setEyesPair(value: number): void;

  getConcealed(): number;
  setConcealed(value: number): void;

  getBlessingOfHeavenAndEarth(): number;
  setBlessingOfHeavenAndEarth(value: number): void;

  getTdNoJokerMultiplyTwo(): number;
  setTdNoJokerMultiplyTwo(value: number): void;

  getEyesSevenPairs(): number;
  setEyesSevenPairs(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WinTypeRule.AsObject;
  static toObject(includeInstance: boolean, msg: WinTypeRule): WinTypeRule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WinTypeRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WinTypeRule;
  static deserializeBinaryFromReader(message: WinTypeRule, reader: jspb.BinaryReader): WinTypeRule;
}

export namespace WinTypeRule {
  export type AsObject = {
    outsideHand: number,
    allSimple: number,
    eyesPair: number,
    concealed: number,
    blessingOfHeavenAndEarth: number,
    tdNoJokerMultiplyTwo: number,
    eyesSevenPairs: number,
  }
}

export class RuleUnit extends jspb.Message {
  getW(): number;
  setW(value: number): void;

  getD(): number;
  setD(value: number): void;

  getP(): boolean;
  setP(value: boolean): void;

  clearFesList(): void;
  getFesList(): Array<number>;
  setFesList(value: Array<number>): void;
  addFes(value: number, index?: number): number;

  clearFisList(): void;
  getFisList(): Array<number>;
  setFisList(value: Array<number>): void;
  addFis(value: number, index?: number): number;

  getIg(): boolean;
  setIg(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RuleUnit.AsObject;
  static toObject(includeInstance: boolean, msg: RuleUnit): RuleUnit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RuleUnit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RuleUnit;
  static deserializeBinaryFromReader(message: RuleUnit, reader: jspb.BinaryReader): RuleUnit;
}

export namespace RuleUnit {
  export type AsObject = {
    w: number,
    d: number,
    p: boolean,
    fesList: Array<number>,
    fisList: Array<number>,
    ig: boolean,
  }
}

export class PlayerInsuranceOutsCards extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  clearWinCardsList(): void;
  getWinCardsList(): Array<number>;
  setWinCardsList(value: Array<number>): void;
  addWinCards(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerInsuranceOutsCards.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerInsuranceOutsCards): PlayerInsuranceOutsCards.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerInsuranceOutsCards, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerInsuranceOutsCards;
  static deserializeBinaryFromReader(message: PlayerInsuranceOutsCards, reader: jspb.BinaryReader): PlayerInsuranceOutsCards;
}

export namespace PlayerInsuranceOutsCards {
  export type AsObject = {
    seatId: number,
    winCardsList: Array<number>,
  }
}

export class PlayerInsurance extends jspb.Message {
  getUserRid(): number;
  setUserRid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  getInsurance(): number;
  setInsurance(value: number): void;

  getInsuranceBet(): number;
  setInsuranceBet(value: number): void;

  getInsuranceEv(): number;
  setInsuranceEv(value: number): void;

  getCreateTime(): number;
  setCreateTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerInsurance.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerInsurance): PlayerInsurance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlayerInsurance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerInsurance;
  static deserializeBinaryFromReader(message: PlayerInsurance, reader: jspb.BinaryReader): PlayerInsurance;
}

export namespace PlayerInsurance {
  export type AsObject = {
    userRid: number,
    name: string,
    avatar: string,
    insurance: number,
    insuranceBet: number,
    insuranceEv: number,
    createTime: number,
  }
}

export class ChangeRoomInfo extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): void;

  getRoomType(): number;
  setRoomType(value: number): void;

  getAntiCheatType(): number;
  setAntiCheatType(value: number): void;

  getAntiCheatVideoType(): number;
  setAntiCheatVideoType(value: number): void;

  getBombpot(): number;
  setBombpot(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeRoomInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeRoomInfo): ChangeRoomInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeRoomInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeRoomInfo;
  static deserializeBinaryFromReader(message: ChangeRoomInfo, reader: jspb.BinaryReader): ChangeRoomInfo;
}

export namespace ChangeRoomInfo {
  export type AsObject = {
    roomId: number,
    roomType: number,
    antiCheatType: number,
    antiCheatVideoType: number,
    bombpot: number,
  }
}

export class RoomTemplateUpdateInfo extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getUpdateType(): number;
  setUpdateType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomTemplateUpdateInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RoomTemplateUpdateInfo): RoomTemplateUpdateInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoomTemplateUpdateInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomTemplateUpdateInfo;
  static deserializeBinaryFromReader(message: RoomTemplateUpdateInfo, reader: jspb.BinaryReader): RoomTemplateUpdateInfo;
}

export namespace RoomTemplateUpdateInfo {
  export type AsObject = {
    id: number,
    updateType: number,
  }
}

export class JackpotTemplateUpdateInfo extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getClubId(): number;
  setClubId(value: number): void;

  getUpdateType(): number;
  setUpdateType(value: number): void;

  getTribeId(): number;
  setTribeId(value: number): void;

  getGold(): number;
  setGold(value: number): void;

  clearAwardListList(): void;
  getAwardListList(): Array<JackpotAwardLog>;
  setAwardListList(value: Array<JackpotAwardLog>): void;
  addAwardList(value?: JackpotAwardLog, index?: number): JackpotAwardLog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JackpotTemplateUpdateInfo.AsObject;
  static toObject(includeInstance: boolean, msg: JackpotTemplateUpdateInfo): JackpotTemplateUpdateInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JackpotTemplateUpdateInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JackpotTemplateUpdateInfo;
  static deserializeBinaryFromReader(message: JackpotTemplateUpdateInfo, reader: jspb.BinaryReader): JackpotTemplateUpdateInfo;
}

export namespace JackpotTemplateUpdateInfo {
  export type AsObject = {
    id: number,
    clubId: number,
    updateType: number,
    tribeId: number,
    gold: number,
    awardListList: Array<JackpotAwardLog.AsObject>,
  }
}

export class RoomRecordSimple extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getEmptySeat(): number;
  setEmptySeat(value: number): void;

  getPlayDuration(): number;
  setPlayDuration(value: number): void;

  getStartTime(): number;
  setStartTime(value: number): void;

  getHandNum(): number;
  setHandNum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomRecordSimple.AsObject;
  static toObject(includeInstance: boolean, msg: RoomRecordSimple): RoomRecordSimple.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoomRecordSimple, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomRecordSimple;
  static deserializeBinaryFromReader(message: RoomRecordSimple, reader: jspb.BinaryReader): RoomRecordSimple;
}

export namespace RoomRecordSimple {
  export type AsObject = {
    roomId: number,
    status: number,
    emptySeat: number,
    playDuration: number,
    startTime: number,
    handNum: number,
  }
}

export class MyWheelInfo extends jspb.Message {
  getWheelTemplateId(): number;
  setWheelTemplateId(value: number): void;

  getLotteryHandNum(): number;
  setLotteryHandNum(value: number): void;

  getUserHandNum(): number;
  setUserHandNum(value: number): void;

  getUserParticipateState(): number;
  setUserParticipateState(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MyWheelInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MyWheelInfo): MyWheelInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MyWheelInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MyWheelInfo;
  static deserializeBinaryFromReader(message: MyWheelInfo, reader: jspb.BinaryReader): MyWheelInfo;
}

export namespace MyWheelInfo {
  export type AsObject = {
    wheelTemplateId: number,
    lotteryHandNum: number,
    userHandNum: number,
    userParticipateState: number,
  }
}

export class BlackInfo extends jspb.Message {
  getTribeId(): number;
  setTribeId(value: number): void;

  getTribeRid(): number;
  setTribeRid(value: number): void;

  getTribeName(): string;
  setTribeName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlackInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BlackInfo): BlackInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BlackInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlackInfo;
  static deserializeBinaryFromReader(message: BlackInfo, reader: jspb.BinaryReader): BlackInfo;
}

export namespace BlackInfo {
  export type AsObject = {
    tribeId: number,
    tribeRid: number,
    tribeName: string,
  }
}

export class MTTBlindLevelDelayTime extends jspb.Message {
  getLevel(): number;
  setLevel(value: number): void;

  getSmallBlind(): number;
  setSmallBlind(value: number): void;

  getAnte(): number;
  setAnte(value: number): void;

  getDelayTimes(): number;
  setDelayTimes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MTTBlindLevelDelayTime.AsObject;
  static toObject(includeInstance: boolean, msg: MTTBlindLevelDelayTime): MTTBlindLevelDelayTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MTTBlindLevelDelayTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MTTBlindLevelDelayTime;
  static deserializeBinaryFromReader(message: MTTBlindLevelDelayTime, reader: jspb.BinaryReader): MTTBlindLevelDelayTime;
}

export namespace MTTBlindLevelDelayTime {
  export type AsObject = {
    level: number,
    smallBlind: number,
    ante: number,
    delayTimes: number,
  }
}

export class RoomUserInfo extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getUn(): number;
  setUn(value: number): void;

  getName(): string;
  setName(value: string): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  getSeat(): number;
  setSeat(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomUserInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RoomUserInfo): RoomUserInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoomUserInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomUserInfo;
  static deserializeBinaryFromReader(message: RoomUserInfo, reader: jspb.BinaryReader): RoomUserInfo;
}

export namespace RoomUserInfo {
  export type AsObject = {
    id: number,
    un: number,
    name: string,
    avatar: string,
    seat: number,
  }
}

export class RoomTribeClubRelate extends jspb.Message {
  getTribeId(): number;
  setTribeId(value: number): void;

  clearClubIdsList(): void;
  getClubIdsList(): Array<number>;
  setClubIdsList(value: Array<number>): void;
  addClubIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomTribeClubRelate.AsObject;
  static toObject(includeInstance: boolean, msg: RoomTribeClubRelate): RoomTribeClubRelate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoomTribeClubRelate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomTribeClubRelate;
  static deserializeBinaryFromReader(message: RoomTribeClubRelate, reader: jspb.BinaryReader): RoomTribeClubRelate;
}

export namespace RoomTribeClubRelate {
  export type AsObject = {
    tribeId: number,
    clubIdsList: Array<number>,
  }
}

export class RoomChange extends jspb.Message {
  getRid(): number;
  setRid(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getEmptySeat(): number;
  setEmptySeat(value: number): void;

  getHandNum(): number;
  setHandNum(value: number): void;

  clearUsersList(): void;
  getUsersList(): Array<RoomUserInfo>;
  setUsersList(value: Array<RoomUserInfo>): void;
  addUsers(value?: RoomUserInfo, index?: number): RoomUserInfo;

  clearRelateClubIdsList(): void;
  getRelateClubIdsList(): Array<number>;
  setRelateClubIdsList(value: Array<number>): void;
  addRelateClubIds(value: number, index?: number): number;

  clearRelateTribeClubListList(): void;
  getRelateTribeClubListList(): Array<RoomTribeClubRelate>;
  setRelateTribeClubListList(value: Array<RoomTribeClubRelate>): void;
  addRelateTribeClubList(value?: RoomTribeClubRelate, index?: number): RoomTribeClubRelate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoomChange.AsObject;
  static toObject(includeInstance: boolean, msg: RoomChange): RoomChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoomChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoomChange;
  static deserializeBinaryFromReader(message: RoomChange, reader: jspb.BinaryReader): RoomChange;
}

export namespace RoomChange {
  export type AsObject = {
    rid: number,
    status: number,
    emptySeat: number,
    handNum: number,
    usersList: Array<RoomUserInfo.AsObject>,
    relateClubIdsList: Array<number>,
    relateTribeClubListList: Array<RoomTribeClubRelate.AsObject>,
  }
}

export class CowboyConfig extends jspb.Message {
  getMaxAmountMin(): number;
  setMaxAmountMin(value: number): void;

  getMaxAmountMax(): number;
  setMaxAmountMax(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CowboyConfig.AsObject;
  static toObject(includeInstance: boolean, msg: CowboyConfig): CowboyConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CowboyConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CowboyConfig;
  static deserializeBinaryFromReader(message: CowboyConfig, reader: jspb.BinaryReader): CowboyConfig;
}

export namespace CowboyConfig {
  export type AsObject = {
    maxAmountMin: number,
    maxAmountMax: number,
  }
}

export class UserInsuranceResult extends jspb.Message {
  getRnd(): Def.RoundMap[keyof Def.RoundMap];
  setRnd(value: Def.RoundMap[keyof Def.RoundMap]): void;

  getInsurance(): number;
  setInsurance(value: number): void;

  getInsuranceWin(): number;
  setInsuranceWin(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserInsuranceResult.AsObject;
  static toObject(includeInstance: boolean, msg: UserInsuranceResult): UserInsuranceResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserInsuranceResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserInsuranceResult;
  static deserializeBinaryFromReader(message: UserInsuranceResult, reader: jspb.BinaryReader): UserInsuranceResult;
}

export namespace UserInsuranceResult {
  export type AsObject = {
    rnd: Def.RoundMap[keyof Def.RoundMap],
    insurance: number,
    insuranceWin: number,
  }
}

export class WheelTemplateUpdateInfo extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getUpdateType(): number;
  setUpdateType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WheelTemplateUpdateInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WheelTemplateUpdateInfo): WheelTemplateUpdateInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WheelTemplateUpdateInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WheelTemplateUpdateInfo;
  static deserializeBinaryFromReader(message: WheelTemplateUpdateInfo, reader: jspb.BinaryReader): WheelTemplateUpdateInfo;
}

export namespace WheelTemplateUpdateInfo {
  export type AsObject = {
    id: number,
    updateType: number,
  }
}

export class JackpotAwardLog extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getUserRid(): number;
  setUserRid(value: number): void;

  getUserName(): string;
  setUserName(value: string): void;

  getRoomId(): number;
  setRoomId(value: number): void;

  getRoomName(): string;
  setRoomName(value: string): void;

  getRoomMultiLangNames(): string;
  setRoomMultiLangNames(value: string): void;

  getGameType(): number;
  setGameType(value: number): void;

  getPokerType(): number;
  setPokerType(value: number): void;

  getLimitBetType(): number;
  setLimitBetType(value: number): void;

  getBombpot(): number;
  setBombpot(value: number): void;

  getCardsType(): number;
  setCardsType(value: number): void;

  getGoldChange(): number;
  setGoldChange(value: number): void;

  getCardData(): string;
  setCardData(value: string): void;

  getCreateTime(): number;
  setCreateTime(value: number): void;

  getJackpotId(): number;
  setJackpotId(value: number): void;

  getSmallBlind(): number;
  setSmallBlind(value: number): void;

  getAnte(): number;
  setAnte(value: number): void;

  getUserAvatar(): string;
  setUserAvatar(value: string): void;

  getMarsEarth(): number;
  setMarsEarth(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JackpotAwardLog.AsObject;
  static toObject(includeInstance: boolean, msg: JackpotAwardLog): JackpotAwardLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JackpotAwardLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JackpotAwardLog;
  static deserializeBinaryFromReader(message: JackpotAwardLog, reader: jspb.BinaryReader): JackpotAwardLog;
}

export namespace JackpotAwardLog {
  export type AsObject = {
    userId: number,
    userRid: number,
    userName: string,
    roomId: number,
    roomName: string,
    roomMultiLangNames: string,
    gameType: number,
    pokerType: number,
    limitBetType: number,
    bombpot: number,
    cardsType: number,
    goldChange: number,
    cardData: string,
    createTime: number,
    jackpotId: number,
    smallBlind: number,
    ante: number,
    userAvatar: string,
    marsEarth: number,
  }
}

export class UserMttRecord extends jspb.Message {
  getMatchId(): number;
  setMatchId(value: number): void;

  getStartTime(): number;
  setStartTime(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getUpblindInterval(): number;
  setUpblindInterval(value: number): void;

  getTotalRebuyTimes(): number;
  setTotalRebuyTimes(value: number): void;

  getApplyFeePool(): number;
  setApplyFeePool(value: number): void;

  getApplyFeeService(): number;
  setApplyFeeService(value: number): void;

  getApplyFeeHunter(): number;
  setApplyFeeHunter(value: number): void;

  getPrizeBasePool(): number;
  setPrizeBasePool(value: number): void;

  getGoldType(): number;
  setGoldType(value: number): void;

  getAntiCheatType(): number;
  setAntiCheatType(value: number): void;

  getAntiCheatVideoType(): number;
  setAntiCheatVideoType(value: number): void;

  getType(): number;
  setType(value: number): void;

  getLimitMin(): number;
  setLimitMin(value: number): void;

  getInitialScore(): number;
  setInitialScore(value: number): void;

  getTotalBuyinTimes(): number;
  setTotalBuyinTimes(value: number): void;

  getJoker(): number;
  setJoker(value: number): void;

  getJokerCount(): number;
  setJokerCount(value: number): void;

  getMjTotalHands(): number;
  setMjTotalHands(value: number): void;

  getMjBlindUpHands(): number;
  setMjBlindUpHands(value: number): void;

  getGameIcon(): string;
  setGameIcon(value: string): void;

  clearPrizesList(): void;
  getPrizesList(): Array<MTTPrize>;
  setPrizesList(value: Array<MTTPrize>): void;
  addPrizes(value?: MTTPrize, index?: number): MTTPrize;

  getIsAdmin(): boolean;
  setIsAdmin(value: boolean): void;

  getIsTop(): number;
  setIsTop(value: number): void;

  getName(): string;
  setName(value: string): void;

  getGameType(): number;
  setGameType(value: number): void;

  getPokerType(): number;
  setPokerType(value: number): void;

  getHunterOn(): number;
  setHunterOn(value: number): void;

  getParticipants(): number;
  setParticipants(value: number): void;

  getAlive(): number;
  setAlive(value: number): void;

  getApplyStartTime(): number;
  setApplyStartTime(value: number): void;

  getMaxDelayApplyBl(): number;
  setMaxDelayApplyBl(value: number): void;

  getRebuyTimes(): number;
  setRebuyTimes(value: number): void;

  getAddonBeginBl(): number;
  setAddonBeginBl(value: number): void;

  getAddonEndBl(): number;
  setAddonEndBl(value: number): void;

  getPrizeType(): number;
  setPrizeType(value: number): void;

  getPropBuyType(): number;
  setPropBuyType(value: number): void;

  getBuyinFreeTimes(): number;
  setBuyinFreeTimes(value: number): void;

  getRebuyFreeTimes(): number;
  setRebuyFreeTimes(value: number): void;

  getMultiRatioFreeTimes(): number;
  setMultiRatioFreeTimes(value: number): void;

  getAddonFreeTimes(): number;
  setAddonFreeTimes(value: number): void;

  getBuyinFreeInclSvr(): number;
  setBuyinFreeInclSvr(value: number): void;

  getRebuyFreeInclSvr(): number;
  setRebuyFreeInclSvr(value: number): void;

  getMultiRatioFreeInclSvr(): number;
  setMultiRatioFreeInclSvr(value: number): void;

  getAddonFreeInclSvr(): number;
  setAddonFreeInclSvr(value: number): void;

  getAntiCheatTimelimit(): number;
  setAntiCheatTimelimit(value: number): void;

  getVideoVerifyType(): number;
  setVideoVerifyType(value: number): void;

  getAntiCheatOrderType(): number;
  setAntiCheatOrderType(value: number): void;

  getAntiCheatOrderMicType(): number;
  setAntiCheatOrderMicType(value: number): void;

  getMttBannerUrl(): string;
  setMttBannerUrl(value: string): void;

  getForceCloseTime(): number;
  setForceCloseTime(value: number): void;

  clearRelateClubIdsList(): void;
  getRelateClubIdsList(): Array<number>;
  setRelateClubIdsList(value: Array<number>): void;
  addRelateClubIds(value: number, index?: number): number;

  clearRelateTribeClubListList(): void;
  getRelateTribeClubListList(): Array<RoomTribeClubRelate>;
  setRelateTribeClubListList(value: Array<RoomTribeClubRelate>): void;
  addRelateTribeClubList(value?: RoomTribeClubRelate, index?: number): RoomTribeClubRelate;

  getOriginType(): number;
  setOriginType(value: number): void;

  getSeriesId(): number;
  setSeriesId(value: number): void;

  getPinnedTime(): number;
  setPinnedTime(value: number): void;

  getCreateTime(): number;
  setCreateTime(value: number): void;

  getStageFatherId(): number;
  setStageFatherId(value: number): void;

  getStageName(): string;
  setStageName(value: string): void;

  getStageBlindLevel(): number;
  setStageBlindLevel(value: number): void;

  getStageRemainRate(): number;
  setStageRemainRate(value: number): void;

  getStageFinalScoreType(): number;
  setStageFinalScoreType(value: number): void;

  getInsuranceAmount(): number;
  setInsuranceAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserMttRecord.AsObject;
  static toObject(includeInstance: boolean, msg: UserMttRecord): UserMttRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserMttRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserMttRecord;
  static deserializeBinaryFromReader(message: UserMttRecord, reader: jspb.BinaryReader): UserMttRecord;
}

export namespace UserMttRecord {
  export type AsObject = {
    matchId: number,
    startTime: number,
    status: number,
    upblindInterval: number,
    totalRebuyTimes: number,
    applyFeePool: number,
    applyFeeService: number,
    applyFeeHunter: number,
    prizeBasePool: number,
    goldType: number,
    antiCheatType: number,
    antiCheatVideoType: number,
    type: number,
    limitMin: number,
    initialScore: number,
    totalBuyinTimes: number,
    joker: number,
    jokerCount: number,
    mjTotalHands: number,
    mjBlindUpHands: number,
    gameIcon: string,
    prizesList: Array<MTTPrize.AsObject>,
    isAdmin: boolean,
    isTop: number,
    name: string,
    gameType: number,
    pokerType: number,
    hunterOn: number,
    participants: number,
    alive: number,
    applyStartTime: number,
    maxDelayApplyBl: number,
    rebuyTimes: number,
    addonBeginBl: number,
    addonEndBl: number,
    prizeType: number,
    propBuyType: number,
    buyinFreeTimes: number,
    rebuyFreeTimes: number,
    multiRatioFreeTimes: number,
    addonFreeTimes: number,
    buyinFreeInclSvr: number,
    rebuyFreeInclSvr: number,
    multiRatioFreeInclSvr: number,
    addonFreeInclSvr: number,
    antiCheatTimelimit: number,
    videoVerifyType: number,
    antiCheatOrderType: number,
    antiCheatOrderMicType: number,
    mttBannerUrl: string,
    forceCloseTime: number,
    relateClubIdsList: Array<number>,
    relateTribeClubListList: Array<RoomTribeClubRelate.AsObject>,
    originType: number,
    seriesId: number,
    pinnedTime: number,
    createTime: number,
    stageFatherId: number,
    stageName: string,
    stageBlindLevel: number,
    stageRemainRate: number,
    stageFinalScoreType: number,
    insuranceAmount: number,
  }
}

export class MTTPrize extends jspb.Message {
  getRankMin(): number;
  setRankMin(value: number): void;

  getRankMax(): number;
  setRankMax(value: number): void;

  getAward(): number;
  setAward(value: number): void;

  clearGoodsList(): void;
  getGoodsList(): Array<PrizeGoods>;
  setGoodsList(value: Array<PrizeGoods>): void;
  addGoods(value?: PrizeGoods, index?: number): PrizeGoods;

  getAwardRatio(): number;
  setAwardRatio(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MTTPrize.AsObject;
  static toObject(includeInstance: boolean, msg: MTTPrize): MTTPrize.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MTTPrize, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MTTPrize;
  static deserializeBinaryFromReader(message: MTTPrize, reader: jspb.BinaryReader): MTTPrize;
}

export namespace MTTPrize {
  export type AsObject = {
    rankMin: number,
    rankMax: number,
    award: number,
    goodsList: Array<PrizeGoods.AsObject>,
    awardRatio: number,
  }
}

export class PrizeGoods extends jspb.Message {
  getI(): number;
  setI(value: number): void;

  getNa(): string;
  setNa(value: string): void;

  getV(): number;
  setV(value: number): void;

  getN(): number;
  setN(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrizeGoods.AsObject;
  static toObject(includeInstance: boolean, msg: PrizeGoods): PrizeGoods.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PrizeGoods, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrizeGoods;
  static deserializeBinaryFromReader(message: PrizeGoods, reader: jspb.BinaryReader): PrizeGoods;
}

export namespace PrizeGoods {
  export type AsObject = {
    i: number,
    na: string,
    v: number,
    n: number,
  }
}

export class UserMttRecordChange extends jspb.Message {
  getMatchId(): number;
  setMatchId(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getParticipants(): number;
  setParticipants(value: number): void;

  getSeriesId(): number;
  setSeriesId(value: number): void;

  getPinnedTime(): number;
  setPinnedTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserMttRecordChange.AsObject;
  static toObject(includeInstance: boolean, msg: UserMttRecordChange): UserMttRecordChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserMttRecordChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserMttRecordChange;
  static deserializeBinaryFromReader(message: UserMttRecordChange, reader: jspb.BinaryReader): UserMttRecordChange;
}

export namespace UserMttRecordChange {
  export type AsObject = {
    matchId: number,
    status: number,
    participants: number,
    seriesId: number,
    pinnedTime: number,
  }
}

export class UserSNGRecord extends jspb.Message {
  getSngId(): number;
  setSngId(value: number): void;

  getAntiCheatType(): number;
  setAntiCheatType(value: number): void;

  getAntiCheatVideoType(): number;
  setAntiCheatVideoType(value: number): void;

  getApplyFeePool(): number;
  setApplyFeePool(value: number): void;

  getApplyFeeService(): number;
  setApplyFeeService(value: number): void;

  getBuyStatus(): number;
  setBuyStatus(value: number): void;

  getLimitParticipants(): number;
  setLimitParticipants(value: number): void;

  getName(): string;
  setName(value: string): void;

  getBombpot(): number;
  setBombpot(value: number): void;

  getGameType(): number;
  setGameType(value: number): void;

  getLimitBetType(): number;
  setLimitBetType(value: number): void;

  getOriginType(): number;
  setOriginType(value: number): void;

  getPokerType(): number;
  setPokerType(value: number): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  getBlindtableType(): number;
  setBlindtableType(value: number): void;

  getClubId(): number;
  setClubId(value: number): void;

  getGameIcon(): string;
  setGameIcon(value: string): void;

  getGoldType(): number;
  setGoldType(value: number): void;

  getInitialScore(): number;
  setInitialScore(value: number): void;

  getInvitationCode(): string;
  setInvitationCode(value: string): void;

  getPrizeType(): number;
  setPrizeType(value: number): void;

  getTribeId(): number;
  setTribeId(value: number): void;

  getType(): number;
  setType(value: number): void;

  getUpblindInterval(): number;
  setUpblindInterval(value: number): void;

  clearPrizesList(): void;
  getPrizesList(): Array<MTTPrize>;
  setPrizesList(value: Array<MTTPrize>): void;
  addPrizes(value?: MTTPrize, index?: number): MTTPrize;

  getIsAdmin(): boolean;
  setIsAdmin(value: boolean): void;

  getStatus(): number;
  setStatus(value: number): void;

  clearRelateClubIdsList(): void;
  getRelateClubIdsList(): Array<number>;
  setRelateClubIdsList(value: Array<number>): void;
  addRelateClubIds(value: number, index?: number): number;

  clearRelateTribeClubListList(): void;
  getRelateTribeClubListList(): Array<RoomTribeClubRelate>;
  setRelateTribeClubListList(value: Array<RoomTribeClubRelate>): void;
  addRelateTribeClubList(value?: RoomTribeClubRelate, index?: number): RoomTribeClubRelate;

  getSeriesId(): number;
  setSeriesId(value: number): void;

  getPinnedTime(): number;
  setPinnedTime(value: number): void;

  getCreateTime(): number;
  setCreateTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSNGRecord.AsObject;
  static toObject(includeInstance: boolean, msg: UserSNGRecord): UserSNGRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserSNGRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSNGRecord;
  static deserializeBinaryFromReader(message: UserSNGRecord, reader: jspb.BinaryReader): UserSNGRecord;
}

export namespace UserSNGRecord {
  export type AsObject = {
    sngId: number,
    antiCheatType: number,
    antiCheatVideoType: number,
    applyFeePool: number,
    applyFeeService: number,
    buyStatus: number,
    limitParticipants: number,
    name: string,
    bombpot: number,
    gameType: number,
    limitBetType: number,
    originType: number,
    pokerType: number,
    currency: string,
    blindtableType: number,
    clubId: number,
    gameIcon: string,
    goldType: number,
    initialScore: number,
    invitationCode: string,
    prizeType: number,
    tribeId: number,
    type: number,
    upblindInterval: number,
    prizesList: Array<MTTPrize.AsObject>,
    isAdmin: boolean,
    status: number,
    relateClubIdsList: Array<number>,
    relateTribeClubListList: Array<RoomTribeClubRelate.AsObject>,
    seriesId: number,
    pinnedTime: number,
    createTime: number,
  }
}

export class UserSNGRecordChange extends jspb.Message {
  getSngId(): number;
  setSngId(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getSeriesId(): number;
  setSeriesId(value: number): void;

  getPinnedTime(): number;
  setPinnedTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserSNGRecordChange.AsObject;
  static toObject(includeInstance: boolean, msg: UserSNGRecordChange): UserSNGRecordChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserSNGRecordChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserSNGRecordChange;
  static deserializeBinaryFromReader(message: UserSNGRecordChange, reader: jspb.BinaryReader): UserSNGRecordChange;
}

export namespace UserSNGRecordChange {
  export type AsObject = {
    sngId: number,
    status: number,
    seriesId: number,
    pinnedTime: number,
  }
}

export class ServerMessageCbChatOthers extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  getExtra(): Uint8Array | string;
  getExtra_asU8(): Uint8Array;
  getExtra_asB64(): string;
  setExtra(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageCbChatOthers.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageCbChatOthers): ServerMessageCbChatOthers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageCbChatOthers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageCbChatOthers;
  static deserializeBinaryFromReader(message: ServerMessageCbChatOthers, reader: jspb.BinaryReader): ServerMessageCbChatOthers;
}

export namespace ServerMessageCbChatOthers {
  export type AsObject = {
    message: string,
    extra: Uint8Array | string,
  }
}

export class ServerMessageCbEncryptCards extends jspb.Message {
  getGameNum(): number;
  setGameNum(value: number): void;

  hasCutUser(): boolean;
  clearCutUser(): void;
  getCutUser(): CBUser | undefined;
  setCutUser(value?: CBUser): void;

  getCutOffset(): number;
  setCutOffset(value: number): void;

  clearCardsList(): void;
  getCardsList(): Array<string>;
  setCardsList(value: Array<string>): void;
  addCards(value: string, index?: number): string;

  getCutType(): number;
  setCutType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageCbEncryptCards.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageCbEncryptCards): ServerMessageCbEncryptCards.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageCbEncryptCards, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageCbEncryptCards;
  static deserializeBinaryFromReader(message: ServerMessageCbEncryptCards, reader: jspb.BinaryReader): ServerMessageCbEncryptCards;
}

export namespace ServerMessageCbEncryptCards {
  export type AsObject = {
    gameNum: number,
    cutUser?: CBUser.AsObject,
    cutOffset: number,
    cardsList: Array<string>,
    cutType: number,
  }
}

export class ServerMessageCbGamePlayEnd extends jspb.Message {
  getGameNum(): number;
  setGameNum(value: number): void;

  clearSummaryList(): void;
  getSummaryList(): Array<CBPlaySummary>;
  setSummaryList(value: Array<CBPlaySummary>): void;
  addSummary(value?: CBPlaySummary, index?: number): CBPlaySummary;

  clearUserPlayList(): void;
  getUserPlayList(): Array<CBSlotUserPlaySummary>;
  setUserPlayList(value: Array<CBSlotUserPlaySummary>): void;
  addUserPlay(value?: CBSlotUserPlaySummary, index?: number): CBSlotUserPlaySummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageCbGamePlayEnd.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageCbGamePlayEnd): ServerMessageCbGamePlayEnd.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageCbGamePlayEnd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageCbGamePlayEnd;
  static deserializeBinaryFromReader(message: ServerMessageCbGamePlayEnd, reader: jspb.BinaryReader): ServerMessageCbGamePlayEnd;
}

export namespace ServerMessageCbGamePlayEnd {
  export type AsObject = {
    gameNum: number,
    summaryList: Array<CBPlaySummary.AsObject>,
    userPlayList: Array<CBSlotUserPlaySummary.AsObject>,
  }
}

export class ServerMessageCbGamePlayInfo extends jspb.Message {
  getGameNum(): number;
  setGameNum(value: number): void;

  clearSummaryList(): void;
  getSummaryList(): Array<CBPlaySummary>;
  setSummaryList(value: Array<CBPlaySummary>): void;
  addSummary(value?: CBPlaySummary, index?: number): CBPlaySummary;

  clearUserPlayList(): void;
  getUserPlayList(): Array<CBSlotUserPlaySummary>;
  setUserPlayList(value: Array<CBSlotUserPlaySummary>): void;
  addUserPlay(value?: CBSlotUserPlaySummary, index?: number): CBSlotUserPlaySummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageCbGamePlayInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageCbGamePlayInfo): ServerMessageCbGamePlayInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageCbGamePlayInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageCbGamePlayInfo;
  static deserializeBinaryFromReader(message: ServerMessageCbGamePlayInfo, reader: jspb.BinaryReader): ServerMessageCbGamePlayInfo;
}

export namespace ServerMessageCbGamePlayInfo {
  export type AsObject = {
    gameNum: number,
    summaryList: Array<CBPlaySummary.AsObject>,
    userPlayList: Array<CBSlotUserPlaySummary.AsObject>,
  }
}

export class ServerMessageCbGameResult extends jspb.Message {
  getGameNum(): number;
  setGameNum(value: number): void;

  getFirstCard(): number;
  setFirstCard(value: number): void;

  hasGameResult(): boolean;
  clearGameResult(): void;
  getGameResult(): CBGameResult | undefined;
  setGameResult(value?: CBGameResult): void;

  clearMyPlayList(): void;
  getMyPlayList(): Array<CBPlayResult>;
  setMyPlayList(value: Array<CBPlayResult>): void;
  addMyPlay(value?: CBPlayResult, index?: number): CBPlayResult;

  getMyWin(): number;
  setMyWin(value: number): void;

  getOnline(): number;
  setOnline(value: number): void;

  clearItemsList(): void;
  getItemsList(): Array<CBHistoryItem>;
  setItemsList(value: Array<CBHistoryItem>): void;
  addItems(value?: CBHistoryItem, index?: number): CBHistoryItem;

  clearOtherUserPlaysList(): void;
  getOtherUserPlaysList(): Array<CBUserPlaySummary>;
  setOtherUserPlaysList(value: Array<CBUserPlaySummary>): void;
  addOtherUserPlays(value?: CBUserPlaySummary, index?: number): CBUserPlaySummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageCbGameResult.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageCbGameResult): ServerMessageCbGameResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageCbGameResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageCbGameResult;
  static deserializeBinaryFromReader(message: ServerMessageCbGameResult, reader: jspb.BinaryReader): ServerMessageCbGameResult;
}

export namespace ServerMessageCbGameResult {
  export type AsObject = {
    gameNum: number,
    firstCard: number,
    gameResult?: CBGameResult.AsObject,
    myPlayList: Array<CBPlayResult.AsObject>,
    myWin: number,
    online: number,
    itemsList: Array<CBHistoryItem.AsObject>,
    otherUserPlaysList: Array<CBUserPlaySummary.AsObject>,
  }
}

export class ServerMessageCbGameStart extends jspb.Message {
  getGameNum(): number;
  setGameNum(value: number): void;

  getFirstCard(): number;
  setFirstCard(value: number): void;

  getOnline(): number;
  setOnline(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageCbGameStart.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageCbGameStart): ServerMessageCbGameStart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageCbGameStart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageCbGameStart;
  static deserializeBinaryFromReader(message: ServerMessageCbGameStart, reader: jspb.BinaryReader): ServerMessageCbGameStart;
}

export namespace ServerMessageCbGameStart {
  export type AsObject = {
    gameNum: number,
    firstCard: number,
    online: number,
  }
}

export class ServerMessageCbLeaveNotification extends jspb.Message {
  getReason(): DefCB.LeaveReasonMap[keyof DefCB.LeaveReasonMap];
  setReason(value: DefCB.LeaveReasonMap[keyof DefCB.LeaveReasonMap]): void;

  getBringOut(): number;
  setBringOut(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageCbLeaveNotification.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageCbLeaveNotification): ServerMessageCbLeaveNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageCbLeaveNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageCbLeaveNotification;
  static deserializeBinaryFromReader(message: ServerMessageCbLeaveNotification, reader: jspb.BinaryReader): ServerMessageCbLeaveNotification;
}

export namespace ServerMessageCbLeaveNotification {
  export type AsObject = {
    reason: DefCB.LeaveReasonMap[keyof DefCB.LeaveReasonMap],
    bringOut: number,
  }
}

export class ServerMessageCbRoomClose extends jspb.Message {
  getReason(): DefCB.RoomCloseReasonMap[keyof DefCB.RoomCloseReasonMap];
  setReason(value: DefCB.RoomCloseReasonMap[keyof DefCB.RoomCloseReasonMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageCbRoomClose.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageCbRoomClose): ServerMessageCbRoomClose.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageCbRoomClose, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageCbRoomClose;
  static deserializeBinaryFromReader(message: ServerMessageCbRoomClose, reader: jspb.BinaryReader): ServerMessageCbRoomClose;
}

export namespace ServerMessageCbRoomClose {
  export type AsObject = {
    reason: DefCB.RoomCloseReasonMap[keyof DefCB.RoomCloseReasonMap],
  }
}

export class ServerMessageCbStandupNotification extends jspb.Message {
  getReason(): DefCB.LeaveReasonMap[keyof DefCB.LeaveReasonMap];
  setReason(value: DefCB.LeaveReasonMap[keyof DefCB.LeaveReasonMap]): void;

  getBringOut(): number;
  setBringOut(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageCbStandupNotification.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageCbStandupNotification): ServerMessageCbStandupNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageCbStandupNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageCbStandupNotification;
  static deserializeBinaryFromReader(message: ServerMessageCbStandupNotification, reader: jspb.BinaryReader): ServerMessageCbStandupNotification;
}

export namespace ServerMessageCbStandupNotification {
  export type AsObject = {
    reason: DefCB.LeaveReasonMap[keyof DefCB.LeaveReasonMap],
    bringOut: number,
  }
}

export class ServerMessageCbWaymapUpdate extends jspb.Message {
  hasBmUpdate(): boolean;
  clearBmUpdate(): void;
  getBmUpdate(): CBWayPointMove | undefined;
  setBmUpdate(value?: CBWayPointMove): void;

  hasSmUpdate(): boolean;
  clearSmUpdate(): void;
  getSmUpdate(): CBWayPointMove | undefined;
  setSmUpdate(value?: CBWayPointMove): void;

  hasPmUpdate(): boolean;
  clearPmUpdate(): void;
  getPmUpdate(): CBWayPointMove | undefined;
  setPmUpdate(value?: CBWayPointMove): void;

  clearPreviewList(): void;
  getPreviewList(): Array<CBWayPointPreview>;
  setPreviewList(value: Array<CBWayPointPreview>): void;
  addPreview(value?: CBWayPointPreview, index?: number): CBWayPointPreview;

  clearResultSlotsList(): void;
  getResultSlotsList(): Array<DefCB.PlaySlotMap[keyof DefCB.PlaySlotMap]>;
  setResultSlotsList(value: Array<DefCB.PlaySlotMap[keyof DefCB.PlaySlotMap]>): void;
  addResultSlots(value: DefCB.PlaySlotMap[keyof DefCB.PlaySlotMap], index?: number): DefCB.PlaySlotMap[keyof DefCB.PlaySlotMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageCbWaymapUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageCbWaymapUpdate): ServerMessageCbWaymapUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageCbWaymapUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageCbWaymapUpdate;
  static deserializeBinaryFromReader(message: ServerMessageCbWaymapUpdate, reader: jspb.BinaryReader): ServerMessageCbWaymapUpdate;
}

export namespace ServerMessageCbWaymapUpdate {
  export type AsObject = {
    bmUpdate?: CBWayPointMove.AsObject,
    smUpdate?: CBWayPointMove.AsObject,
    pmUpdate?: CBWayPointMove.AsObject,
    previewList: Array<CBWayPointPreview.AsObject>,
    resultSlotsList: Array<DefCB.PlaySlotMap[keyof DefCB.PlaySlotMap]>,
  }
}

export class ServerMessageFtActionAll extends jspb.Message {
  getOperatorSeatId(): number;
  setOperatorSeatId(value: number): void;

  clearCardIndexGroupsList(): void;
  getCardIndexGroupsList(): Array<HandCardIndexGroup>;
  setCardIndexGroupsList(value: Array<HandCardIndexGroup>): void;
  addCardIndexGroups(value?: HandCardIndexGroup, index?: number): HandCardIndexGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtActionAll.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtActionAll): ServerMessageFtActionAll.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtActionAll, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtActionAll;
  static deserializeBinaryFromReader(message: ServerMessageFtActionAll, reader: jspb.BinaryReader): ServerMessageFtActionAll;
}

export namespace ServerMessageFtActionAll {
  export type AsObject = {
    operatorSeatId: number,
    cardIndexGroupsList: Array<HandCardIndexGroup.AsObject>,
  }
}

export class ServerMessageFtAddTimeOthers extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getDuration(): number;
  setDuration(value: number): void;

  getTimes(): number;
  setTimes(value: number): void;

  getDeadline(): number;
  setDeadline(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtAddTimeOthers.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtAddTimeOthers): ServerMessageFtAddTimeOthers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtAddTimeOthers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtAddTimeOthers;
  static deserializeBinaryFromReader(message: ServerMessageFtAddTimeOthers, reader: jspb.BinaryReader): ServerMessageFtAddTimeOthers;
}

export namespace ServerMessageFtAddTimeOthers {
  export type AsObject = {
    seatId: number,
    duration: number,
    times: number,
    deadline: number,
  }
}

export class ServerMessageFtAutoOp extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getEnable(): boolean;
  setEnable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtAutoOp.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtAutoOp): ServerMessageFtAutoOp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtAutoOp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtAutoOp;
  static deserializeBinaryFromReader(message: ServerMessageFtAutoOp, reader: jspb.BinaryReader): ServerMessageFtAutoOp;
}

export namespace ServerMessageFtAutoOp {
  export type AsObject = {
    seatId: number,
    enable: boolean,
  }
}

export class ServerMessageFtBringInFail extends jspb.Message {
  getCurrentChip(): number;
  setCurrentChip(value: number): void;

  getSrc(): Def.ChipChangeReasonMap[keyof Def.ChipChangeReasonMap];
  setSrc(value: Def.ChipChangeReasonMap[keyof Def.ChipChangeReasonMap]): void;

  getExtErrcode(): number;
  setExtErrcode(value: number): void;

  getExtNotice(): string;
  setExtNotice(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtBringInFail.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtBringInFail): ServerMessageFtBringInFail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtBringInFail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtBringInFail;
  static deserializeBinaryFromReader(message: ServerMessageFtBringInFail, reader: jspb.BinaryReader): ServerMessageFtBringInFail;
}

export namespace ServerMessageFtBringInFail {
  export type AsObject = {
    currentChip: number,
    src: Def.ChipChangeReasonMap[keyof Def.ChipChangeReasonMap],
    extErrcode: number,
    extNotice: string,
  }
}

export class ServerMessageFtChipsChange extends jspb.Message {
  clearChangesList(): void;
  getChangesList(): Array<PlayerChipChangeFT>;
  setChangesList(value: Array<PlayerChipChangeFT>): void;
  addChanges(value?: PlayerChipChangeFT, index?: number): PlayerChipChangeFT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtChipsChange.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtChipsChange): ServerMessageFtChipsChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtChipsChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtChipsChange;
  static deserializeBinaryFromReader(message: ServerMessageFtChipsChange, reader: jspb.BinaryReader): ServerMessageFtChipsChange;
}

export namespace ServerMessageFtChipsChange {
  export type AsObject = {
    changesList: Array<PlayerChipChangeFT.AsObject>,
  }
}

export class ServerMessageFtGetMsg extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  getExtra(): Uint8Array | string;
  getExtra_asU8(): Uint8Array;
  getExtra_asB64(): string;
  setExtra(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtGetMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtGetMsg): ServerMessageFtGetMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtGetMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtGetMsg;
  static deserializeBinaryFromReader(message: ServerMessageFtGetMsg, reader: jspb.BinaryReader): ServerMessageFtGetMsg;
}

export namespace ServerMessageFtGetMsg {
  export type AsObject = {
    message: string,
    extra: Uint8Array | string,
  }
}

export class ServerMessageFtHandClear extends jspb.Message {
  getHandNum(): number;
  setHandNum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtHandClear.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtHandClear): ServerMessageFtHandClear.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtHandClear, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtHandClear;
  static deserializeBinaryFromReader(message: ServerMessageFtHandClear, reader: jspb.BinaryReader): ServerMessageFtHandClear;
}

export namespace ServerMessageFtHandClear {
  export type AsObject = {
    handNum: number,
  }
}

export class ServerMessageFtKeepSeat extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getKeep(): boolean;
  setKeep(value: boolean): void;

  getTimes(): number;
  setTimes(value: number): void;

  getLeftTime(): number;
  setLeftTime(value: number): void;

  getKeepSeatReason(): Def.KeepSeatReasonMap[keyof Def.KeepSeatReasonMap];
  setKeepSeatReason(value: Def.KeepSeatReasonMap[keyof Def.KeepSeatReasonMap]): void;

  getDeadline(): number;
  setDeadline(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtKeepSeat.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtKeepSeat): ServerMessageFtKeepSeat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtKeepSeat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtKeepSeat;
  static deserializeBinaryFromReader(message: ServerMessageFtKeepSeat, reader: jspb.BinaryReader): ServerMessageFtKeepSeat;
}

export namespace ServerMessageFtKeepSeat {
  export type AsObject = {
    seatId: number,
    keep: boolean,
    times: number,
    leftTime: number,
    keepSeatReason: Def.KeepSeatReasonMap[keyof Def.KeepSeatReasonMap],
    deadline: number,
  }
}

export class ServerMessageFtLeaveNotification extends jspb.Message {
  getReason(): Def.LeaveReasonMap[keyof Def.LeaveReasonMap];
  setReason(value: Def.LeaveReasonMap[keyof Def.LeaveReasonMap]): void;

  getChip(): number;
  setChip(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtLeaveNotification.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtLeaveNotification): ServerMessageFtLeaveNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtLeaveNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtLeaveNotification;
  static deserializeBinaryFromReader(message: ServerMessageFtLeaveNotification, reader: jspb.BinaryReader): ServerMessageFtLeaveNotification;
}

export namespace ServerMessageFtLeaveNotification {
  export type AsObject = {
    reason: Def.LeaveReasonMap[keyof Def.LeaveReasonMap],
    chip: number,
  }
}

export class ServerMessageFtPairAll extends jspb.Message {
  getOperatorSeatId(): number;
  setOperatorSeatId(value: number): void;

  clearHandGroupIndexesList(): void;
  getHandGroupIndexesList(): Array<number>;
  setHandGroupIndexesList(value: Array<number>): void;
  addHandGroupIndexes(value: number, index?: number): number;

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
    handGroupIndexesList: Array<number>,
  }
}

export class ServerMessageFtPublicCards extends jspb.Message {
  clearPublicCardsGroupList(): void;
  getPublicCardsGroupList(): Array<CardsGroup>;
  setPublicCardsGroupList(value: Array<CardsGroup>): void;
  addPublicCardsGroup(value?: CardsGroup, index?: number): CardsGroup;

  getRnd(): Def.RoundMap[keyof Def.RoundMap];
  setRnd(value: Def.RoundMap[keyof Def.RoundMap]): void;

  clearOperatorsList(): void;
  getOperatorsList(): Array<OperatorFT>;
  setOperatorsList(value: Array<OperatorFT>): void;
  addOperators(value?: OperatorFT, index?: number): OperatorFT;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtPublicCards.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtPublicCards): ServerMessageFtPublicCards.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtPublicCards, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtPublicCards;
  static deserializeBinaryFromReader(message: ServerMessageFtPublicCards, reader: jspb.BinaryReader): ServerMessageFtPublicCards;
}

export namespace ServerMessageFtPublicCards {
  export type AsObject = {
    publicCardsGroupList: Array<CardsGroup.AsObject>,
    rnd: Def.RoundMap[keyof Def.RoundMap],
    operatorsList: Array<OperatorFT.AsObject>,
  }
}

export class ServerMessageFtSeatedOthers extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getSex(): number;
  setSex(value: number): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  getName(): string;
  setName(value: string): void;

  getUserRid(): number;
  setUserRid(value: number): void;

  getChips(): number;
  setChips(value: number): void;

  getVip(): number;
  setVip(value: number): void;

  getKeepSeatLeftTime(): number;
  setKeepSeatLeftTime(value: number): void;

  getKeepSeatDeadline(): number;
  setKeepSeatDeadline(value: number): void;

  getUserSubscriptionId(): number;
  setUserSubscriptionId(value: number): void;

  getIpAddr(): string;
  setIpAddr(value: string): void;

  getVideoMaskId(): number;
  setVideoMaskId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtSeatedOthers.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtSeatedOthers): ServerMessageFtSeatedOthers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtSeatedOthers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtSeatedOthers;
  static deserializeBinaryFromReader(message: ServerMessageFtSeatedOthers, reader: jspb.BinaryReader): ServerMessageFtSeatedOthers;
}

export namespace ServerMessageFtSeatedOthers {
  export type AsObject = {
    seatId: number,
    sex: number,
    avatar: string,
    name: string,
    userRid: number,
    chips: number,
    vip: number,
    keepSeatLeftTime: number,
    keepSeatDeadline: number,
    userSubscriptionId: number,
    ipAddr: string,
    videoMaskId: number,
  }
}

export class ServerMessageFtStandup extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getReason(): Def.StandUpReasonMap[keyof Def.StandUpReasonMap];
  setReason(value: Def.StandUpReasonMap[keyof Def.StandUpReasonMap]): void;

  getBringOut(): number;
  setBringOut(value: number): void;

  getAccountChips(): number;
  setAccountChips(value: number): void;

  getFee(): number;
  setFee(value: number): void;

  getWillLeave(): boolean;
  setWillLeave(value: boolean): void;

  getMuted(): boolean;
  setMuted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtStandup.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtStandup): ServerMessageFtStandup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtStandup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtStandup;
  static deserializeBinaryFromReader(message: ServerMessageFtStandup, reader: jspb.BinaryReader): ServerMessageFtStandup;
}

export namespace ServerMessageFtStandup {
  export type AsObject = {
    seatId: number,
    reason: Def.StandUpReasonMap[keyof Def.StandUpReasonMap],
    bringOut: number,
    accountChips: number,
    fee: number,
    willLeave: boolean,
    muted: boolean,
  }
}

export class ServerMessageFtStartInfo extends jspb.Message {
  hasHandInfo(): boolean;
  clearHandInfo(): void;
  getHandInfo(): HandInfoFT | undefined;
  setHandInfo(value?: HandInfoFT): void;

  clearPlayersList(): void;
  getPlayersList(): Array<PlayerStartInfoFT>;
  setPlayersList(value: Array<PlayerStartInfoFT>): void;
  addPlayers(value?: PlayerStartInfoFT, index?: number): PlayerStartInfoFT;

  getWaitDeadline(): number;
  setWaitDeadline(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtStartInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtStartInfo): ServerMessageFtStartInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtStartInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtStartInfo;
  static deserializeBinaryFromReader(message: ServerMessageFtStartInfo, reader: jspb.BinaryReader): ServerMessageFtStartInfo;
}

export namespace ServerMessageFtStartInfo {
  export type AsObject = {
    handInfo?: HandInfoFT.AsObject,
    playersList: Array<PlayerStartInfoFT.AsObject>,
    waitDeadline: number,
  }
}

export class ServerMessageFtVideoMaskChange extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getUserRid(): number;
  setUserRid(value: number): void;

  getVideoMaskId(): number;
  setVideoMaskId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtVideoMaskChange.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtVideoMaskChange): ServerMessageFtVideoMaskChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtVideoMaskChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtVideoMaskChange;
  static deserializeBinaryFromReader(message: ServerMessageFtVideoMaskChange, reader: jspb.BinaryReader): ServerMessageFtVideoMaskChange;
}

export namespace ServerMessageFtVideoMaskChange {
  export type AsObject = {
    userId: number,
    userRid: number,
    videoMaskId: number,
  }
}

export class ServerMessageFtWinner extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<ResultFT>;
  setResultsList(value: Array<ResultFT>): void;
  addResults(value?: ResultFT, index?: number): ResultFT;

  getHandNum(): number;
  setHandNum(value: number): void;

  getRound(): Def.RoundMap[keyof Def.RoundMap];
  setRound(value: Def.RoundMap[keyof Def.RoundMap]): void;

  clearTurnPublicCardsGroupList(): void;
  getTurnPublicCardsGroupList(): Array<CardsGroup>;
  setTurnPublicCardsGroupList(value: Array<CardsGroup>): void;
  addTurnPublicCardsGroup(value?: CardsGroup, index?: number): CardsGroup;

  clearRiverPublicCardsGroupList(): void;
  getRiverPublicCardsGroupList(): Array<CardsGroup>;
  setRiverPublicCardsGroupList(value: Array<CardsGroup>): void;
  addRiverPublicCardsGroup(value?: CardsGroup, index?: number): CardsGroup;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtWinner.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtWinner): ServerMessageFtWinner.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtWinner, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtWinner;
  static deserializeBinaryFromReader(message: ServerMessageFtWinner, reader: jspb.BinaryReader): ServerMessageFtWinner;
}

export namespace ServerMessageFtWinner {
  export type AsObject = {
    resultsList: Array<ResultFT.AsObject>,
    handNum: number,
    round: Def.RoundMap[keyof Def.RoundMap],
    turnPublicCardsGroupList: Array<CardsGroup.AsObject>,
    riverPublicCardsGroupList: Array<CardsGroup.AsObject>,
  }
}

export class ServerMessageAdminRoomUserLeave extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): void;

  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageAdminRoomUserLeave.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageAdminRoomUserLeave): ServerMessageAdminRoomUserLeave.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageAdminRoomUserLeave, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageAdminRoomUserLeave;
  static deserializeBinaryFromReader(message: ServerMessageAdminRoomUserLeave, reader: jspb.BinaryReader): ServerMessageAdminRoomUserLeave;
}

export namespace ServerMessageAdminRoomUserLeave {
  export type AsObject = {
    roomId: number,
    userId: number,
  }
}

export class ServerMessageAdminRoomUserStandup extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): void;

  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageAdminRoomUserStandup.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageAdminRoomUserStandup): ServerMessageAdminRoomUserStandup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageAdminRoomUserStandup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageAdminRoomUserStandup;
  static deserializeBinaryFromReader(message: ServerMessageAdminRoomUserStandup, reader: jspb.BinaryReader): ServerMessageAdminRoomUserStandup;
}

export namespace ServerMessageAdminRoomUserStandup {
  export type AsObject = {
    roomId: number,
    userId: number,
  }
}

export class ServerMessageCacheDataUpdate extends jspb.Message {
  hasRtInfo(): boolean;
  clearRtInfo(): void;
  getRtInfo(): RoomTemplateUpdateInfo | undefined;
  setRtInfo(value?: RoomTemplateUpdateInfo): void;

  hasJtInfo(): boolean;
  clearJtInfo(): void;
  getJtInfo(): JackpotTemplateUpdateInfo | undefined;
  setJtInfo(value?: JackpotTemplateUpdateInfo): void;

  hasWtInfo(): boolean;
  clearWtInfo(): void;
  getWtInfo(): WheelTemplateUpdateInfo | undefined;
  setWtInfo(value?: WheelTemplateUpdateInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageCacheDataUpdate.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageCacheDataUpdate): ServerMessageCacheDataUpdate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageCacheDataUpdate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageCacheDataUpdate;
  static deserializeBinaryFromReader(message: ServerMessageCacheDataUpdate, reader: jspb.BinaryReader): ServerMessageCacheDataUpdate;
}

export namespace ServerMessageCacheDataUpdate {
  export type AsObject = {
    rtInfo?: RoomTemplateUpdateInfo.AsObject,
    jtInfo?: JackpotTemplateUpdateInfo.AsObject,
    wtInfo?: WheelTemplateUpdateInfo.AsObject,
  }
}

export class ServerMessageClubRoomBringInApplyAudit extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): void;

  getUserId(): number;
  setUserId(value: number): void;

  getBringIn(): number;
  setBringIn(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getClubId(): number;
  setClubId(value: number): void;

  getOriginType(): number;
  setOriginType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageClubRoomBringInApplyAudit.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageClubRoomBringInApplyAudit): ServerMessageClubRoomBringInApplyAudit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageClubRoomBringInApplyAudit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageClubRoomBringInApplyAudit;
  static deserializeBinaryFromReader(message: ServerMessageClubRoomBringInApplyAudit, reader: jspb.BinaryReader): ServerMessageClubRoomBringInApplyAudit;
}

export namespace ServerMessageClubRoomBringInApplyAudit {
  export type AsObject = {
    roomId: number,
    userId: number,
    bringIn: number,
    status: number,
    clubId: number,
    originType: number,
  }
}

export class ServerMessageClubRoomBringInApplyToAdmin extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): void;

  getUserId(): number;
  setUserId(value: number): void;

  getBringIn(): number;
  setBringIn(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getClubId(): number;
  setClubId(value: number): void;

  getOriginType(): number;
  setOriginType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageClubRoomBringInApplyToAdmin.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageClubRoomBringInApplyToAdmin): ServerMessageClubRoomBringInApplyToAdmin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageClubRoomBringInApplyToAdmin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageClubRoomBringInApplyToAdmin;
  static deserializeBinaryFromReader(message: ServerMessageClubRoomBringInApplyToAdmin, reader: jspb.BinaryReader): ServerMessageClubRoomBringInApplyToAdmin;
}

export namespace ServerMessageClubRoomBringInApplyToAdmin {
  export type AsObject = {
    roomId: number,
    userId: number,
    bringIn: number,
    status: number,
    clubId: number,
    originType: number,
  }
}

export class ServerMessageClubRoomBringInApplyToUser extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): void;

  getUserId(): number;
  setUserId(value: number): void;

  getBringIn(): number;
  setBringIn(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getClubId(): number;
  setClubId(value: number): void;

  getOriginType(): number;
  setOriginType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageClubRoomBringInApplyToUser.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageClubRoomBringInApplyToUser): ServerMessageClubRoomBringInApplyToUser.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageClubRoomBringInApplyToUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageClubRoomBringInApplyToUser;
  static deserializeBinaryFromReader(message: ServerMessageClubRoomBringInApplyToUser, reader: jspb.BinaryReader): ServerMessageClubRoomBringInApplyToUser;
}

export namespace ServerMessageClubRoomBringInApplyToUser {
  export type AsObject = {
    roomId: number,
    userId: number,
    bringIn: number,
    status: number,
    clubId: number,
    originType: number,
  }
}

export class ServerMessageClubRoomDelayApplyAudit extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getOriginType(): number;
  setOriginType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageClubRoomDelayApplyAudit.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageClubRoomDelayApplyAudit): ServerMessageClubRoomDelayApplyAudit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageClubRoomDelayApplyAudit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageClubRoomDelayApplyAudit;
  static deserializeBinaryFromReader(message: ServerMessageClubRoomDelayApplyAudit, reader: jspb.BinaryReader): ServerMessageClubRoomDelayApplyAudit;
}

export namespace ServerMessageClubRoomDelayApplyAudit {
  export type AsObject = {
    roomId: number,
    status: number,
    originType: number,
  }
}

export class ServerMessageClubRoomMttSettleNotify extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): void;

  getMatchId(): number;
  setMatchId(value: number): void;

  getClubId(): number;
  setClubId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageClubRoomMttSettleNotify.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageClubRoomMttSettleNotify): ServerMessageClubRoomMttSettleNotify.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageClubRoomMttSettleNotify, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageClubRoomMttSettleNotify;
  static deserializeBinaryFromReader(message: ServerMessageClubRoomMttSettleNotify, reader: jspb.BinaryReader): ServerMessageClubRoomMttSettleNotify;
}

export namespace ServerMessageClubRoomMttSettleNotify {
  export type AsObject = {
    roomId: number,
    matchId: number,
    clubId: number,
  }
}

export class ServerMessageClubUserIsBlocked extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageClubUserIsBlocked.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageClubUserIsBlocked): ServerMessageClubUserIsBlocked.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageClubUserIsBlocked, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageClubUserIsBlocked;
  static deserializeBinaryFromReader(message: ServerMessageClubUserIsBlocked, reader: jspb.BinaryReader): ServerMessageClubUserIsBlocked;
}

export namespace ServerMessageClubUserIsBlocked {
  export type AsObject = {
    code: number,
    data: string,
  }
}

export class ServerMessageError extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageError.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageError): ServerMessageError.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageError;
  static deserializeBinaryFromReader(message: ServerMessageError, reader: jspb.BinaryReader): ServerMessageError;
}

export namespace ServerMessageError {
  export type AsObject = {
    status: number,
    message: string,
  }
}

export class ServerMessageFriendRoomBringInApplyToAdmin extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): void;

  getUserId(): number;
  setUserId(value: number): void;

  getBringIn(): number;
  setBringIn(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getClubId(): number;
  setClubId(value: number): void;

  getOriginType(): number;
  setOriginType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFriendRoomBringInApplyToAdmin.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFriendRoomBringInApplyToAdmin): ServerMessageFriendRoomBringInApplyToAdmin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFriendRoomBringInApplyToAdmin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFriendRoomBringInApplyToAdmin;
  static deserializeBinaryFromReader(message: ServerMessageFriendRoomBringInApplyToAdmin, reader: jspb.BinaryReader): ServerMessageFriendRoomBringInApplyToAdmin;
}

export namespace ServerMessageFriendRoomBringInApplyToAdmin {
  export type AsObject = {
    roomId: number,
    userId: number,
    bringIn: number,
    status: number,
    clubId: number,
    originType: number,
  }
}

export class ServerMessageFriendRoomBringInApplyToUser extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): void;

  getUserId(): number;
  setUserId(value: number): void;

  getBringIn(): number;
  setBringIn(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getClubId(): number;
  setClubId(value: number): void;

  getOriginType(): number;
  setOriginType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFriendRoomBringInApplyToUser.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFriendRoomBringInApplyToUser): ServerMessageFriendRoomBringInApplyToUser.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFriendRoomBringInApplyToUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFriendRoomBringInApplyToUser;
  static deserializeBinaryFromReader(message: ServerMessageFriendRoomBringInApplyToUser, reader: jspb.BinaryReader): ServerMessageFriendRoomBringInApplyToUser;
}

export namespace ServerMessageFriendRoomBringInApplyToUser {
  export type AsObject = {
    roomId: number,
    userId: number,
    bringIn: number,
    status: number,
    clubId: number,
    originType: number,
  }
}

export class ServerMessageFriendRoomCreatorSettle extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): void;

  getMatchId(): number;
  setMatchId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFriendRoomCreatorSettle.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFriendRoomCreatorSettle): ServerMessageFriendRoomCreatorSettle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFriendRoomCreatorSettle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFriendRoomCreatorSettle;
  static deserializeBinaryFromReader(message: ServerMessageFriendRoomCreatorSettle, reader: jspb.BinaryReader): ServerMessageFriendRoomCreatorSettle;
}

export namespace ServerMessageFriendRoomCreatorSettle {
  export type AsObject = {
    roomId: number,
    matchId: number,
  }
}

export class ServerMessageGetMessage extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  getExtra(): Uint8Array | string;
  getExtra_asU8(): Uint8Array;
  getExtra_asB64(): string;
  setExtra(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGetMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGetMessage): ServerMessageGetMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGetMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGetMessage;
  static deserializeBinaryFromReader(message: ServerMessageGetMessage, reader: jspb.BinaryReader): ServerMessageGetMessage;
}

export namespace ServerMessageGetMessage {
  export type AsObject = {
    message: string,
    extra: Uint8Array | string,
  }
}

export class ServerMessageJackpotMarquee extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): void;

  getHandNum(): number;
  setHandNum(value: number): void;

  getUserRid(): number;
  setUserRid(value: number): void;

  getNickname(): string;
  setNickname(value: string): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  getAward(): number;
  setAward(value: number): void;

  getCardsType(): number;
  setCardsType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageJackpotMarquee.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageJackpotMarquee): ServerMessageJackpotMarquee.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageJackpotMarquee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageJackpotMarquee;
  static deserializeBinaryFromReader(message: ServerMessageJackpotMarquee, reader: jspb.BinaryReader): ServerMessageJackpotMarquee;
}

export namespace ServerMessageJackpotMarquee {
  export type AsObject = {
    roomId: number,
    handNum: number,
    userRid: number,
    nickname: string,
    avatar: string,
    award: number,
    cardsType: number,
  }
}

export class ServerMessageLimitHandNumber extends jspb.Message {
  getHandLeft(): number;
  setHandLeft(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageLimitHandNumber.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageLimitHandNumber): ServerMessageLimitHandNumber.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageLimitHandNumber, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageLimitHandNumber;
  static deserializeBinaryFromReader(message: ServerMessageLimitHandNumber, reader: jspb.BinaryReader): ServerMessageLimitHandNumber;
}

export namespace ServerMessageLimitHandNumber {
  export type AsObject = {
    handLeft: number,
  }
}

export class ServerMessageMatchingResult extends jspb.Message {
  getStatus(): Def.MatchingResultStatusMap[keyof Def.MatchingResultStatusMap];
  setStatus(value: Def.MatchingResultStatusMap[keyof Def.MatchingResultStatusMap]): void;

  getRoomId(): number;
  setRoomId(value: number): void;

  hasToRoom(): boolean;
  clearToRoom(): void;
  getToRoom(): RoomWithType | undefined;
  setToRoom(value?: RoomWithType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMatchingResult.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMatchingResult): ServerMessageMatchingResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMatchingResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMatchingResult;
  static deserializeBinaryFromReader(message: ServerMessageMatchingResult, reader: jspb.BinaryReader): ServerMessageMatchingResult;
}

export namespace ServerMessageMatchingResult {
  export type AsObject = {
    status: Def.MatchingResultStatusMap[keyof Def.MatchingResultStatusMap],
    roomId: number,
    toRoom?: RoomWithType.AsObject,
  }
}

export class ServerMessageMttAwardNotify extends jspb.Message {
  getMatchId(): number;
  setMatchId(value: number): void;

  getMatchName(): string;
  setMatchName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMttAwardNotify.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMttAwardNotify): ServerMessageMttAwardNotify.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMttAwardNotify, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMttAwardNotify;
  static deserializeBinaryFromReader(message: ServerMessageMttAwardNotify, reader: jspb.BinaryReader): ServerMessageMttAwardNotify;
}

export namespace ServerMessageMttAwardNotify {
  export type AsObject = {
    matchId: number,
    matchName: string,
  }
}

export class ServerMessageMttReadyForApply extends jspb.Message {
  getMatchId(): number;
  setMatchId(value: number): void;

  getMatchName(): string;
  setMatchName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMttReadyForApply.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMttReadyForApply): ServerMessageMttReadyForApply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMttReadyForApply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMttReadyForApply;
  static deserializeBinaryFromReader(message: ServerMessageMttReadyForApply, reader: jspb.BinaryReader): ServerMessageMttReadyForApply;
}

export namespace ServerMessageMttReadyForApply {
  export type AsObject = {
    matchId: number,
    matchName: string,
  }
}

export class ServerMessageMttSeriesNotify extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getType(): Def.SeriesListTypeMap[keyof Def.SeriesListTypeMap];
  setType(value: Def.SeriesListTypeMap[keyof Def.SeriesListTypeMap]): void;

  getTribeId(): number;
  setTribeId(value: number): void;

  getCreateTime(): number;
  setCreateTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMttSeriesNotify.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMttSeriesNotify): ServerMessageMttSeriesNotify.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMttSeriesNotify, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMttSeriesNotify;
  static deserializeBinaryFromReader(message: ServerMessageMttSeriesNotify, reader: jspb.BinaryReader): ServerMessageMttSeriesNotify;
}

export namespace ServerMessageMttSeriesNotify {
  export type AsObject = {
    id: number,
    name: string,
    type: Def.SeriesListTypeMap[keyof Def.SeriesListTypeMap],
    tribeId: number,
    createTime: number,
  }
}

export class ServerMessageNotificationMttWillStart extends jspb.Message {
  getMatchId(): number;
  setMatchId(value: number): void;

  getMatchName(): string;
  setMatchName(value: string): void;

  getStartTime(): number;
  setStartTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageNotificationMttWillStart.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageNotificationMttWillStart): ServerMessageNotificationMttWillStart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageNotificationMttWillStart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageNotificationMttWillStart;
  static deserializeBinaryFromReader(message: ServerMessageNotificationMttWillStart, reader: jspb.BinaryReader): ServerMessageNotificationMttWillStart;
}

export namespace ServerMessageNotificationMttWillStart {
  export type AsObject = {
    matchId: number,
    matchName: string,
    startTime: number,
  }
}

export class ServerMessageNotificationRoomReady extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageNotificationRoomReady.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageNotificationRoomReady): ServerMessageNotificationRoomReady.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageNotificationRoomReady, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageNotificationRoomReady;
  static deserializeBinaryFromReader(message: ServerMessageNotificationRoomReady, reader: jspb.BinaryReader): ServerMessageNotificationRoomReady;
}

export namespace ServerMessageNotificationRoomReady {
  export type AsObject = {
    room?: Room.AsObject,
  }
}

export class ServerMessageNotificationSystemMaintain extends jspb.Message {
  getStartTime(): number;
  setStartTime(value: number): void;

  getScheduleEndTime(): number;
  setScheduleEndTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageNotificationSystemMaintain.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageNotificationSystemMaintain): ServerMessageNotificationSystemMaintain.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageNotificationSystemMaintain, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageNotificationSystemMaintain;
  static deserializeBinaryFromReader(message: ServerMessageNotificationSystemMaintain, reader: jspb.BinaryReader): ServerMessageNotificationSystemMaintain;
}

export namespace ServerMessageNotificationSystemMaintain {
  export type AsObject = {
    startTime: number,
    scheduleEndTime: number,
  }
}

export class ServerMessageOfflineTickets extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageOfflineTickets.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageOfflineTickets): ServerMessageOfflineTickets.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageOfflineTickets, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageOfflineTickets;
  static deserializeBinaryFromReader(message: ServerMessageOfflineTickets, reader: jspb.BinaryReader): ServerMessageOfflineTickets;
}

export namespace ServerMessageOfflineTickets {
  export type AsObject = {
    code: number,
    data: string,
  }
}

export class ServerMessageRoomChangeNotify extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): RoomRecord | undefined;
  setRoom(value?: RoomRecord): void;

  getSendTimestamp(): number;
  setSendTimestamp(value: number): void;

  hasRoomChange(): boolean;
  clearRoomChange(): void;
  getRoomChange(): RoomChange | undefined;
  setRoomChange(value?: RoomChange): void;

  getChangeType(): number;
  setChangeType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageRoomChangeNotify.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageRoomChangeNotify): ServerMessageRoomChangeNotify.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageRoomChangeNotify, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageRoomChangeNotify;
  static deserializeBinaryFromReader(message: ServerMessageRoomChangeNotify, reader: jspb.BinaryReader): ServerMessageRoomChangeNotify;
}

export namespace ServerMessageRoomChangeNotify {
  export type AsObject = {
    room?: RoomRecord.AsObject,
    sendTimestamp: number,
    roomChange?: RoomChange.AsObject,
    changeType: number,
  }
}

export class ServerMessageRoomDelayApplyToAdmin extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): void;

  getUserId(): number;
  setUserId(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getOriginType(): number;
  setOriginType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageRoomDelayApplyToAdmin.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageRoomDelayApplyToAdmin): ServerMessageRoomDelayApplyToAdmin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageRoomDelayApplyToAdmin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageRoomDelayApplyToAdmin;
  static deserializeBinaryFromReader(message: ServerMessageRoomDelayApplyToAdmin, reader: jspb.BinaryReader): ServerMessageRoomDelayApplyToAdmin;
}

export namespace ServerMessageRoomDelayApplyToAdmin {
  export type AsObject = {
    roomId: number,
    userId: number,
    status: number,
    originType: number,
  }
}

export class ServerMessageRoomMttSettleNotify extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): void;

  getMatchId(): number;
  setMatchId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageRoomMttSettleNotify.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageRoomMttSettleNotify): ServerMessageRoomMttSettleNotify.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageRoomMttSettleNotify, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageRoomMttSettleNotify;
  static deserializeBinaryFromReader(message: ServerMessageRoomMttSettleNotify, reader: jspb.BinaryReader): ServerMessageRoomMttSettleNotify;
}

export namespace ServerMessageRoomMttSettleNotify {
  export type AsObject = {
    roomId: number,
    matchId: number,
  }
}

export class ServerMessageRoomReadyForEnter extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): void;

  getAnte(): number;
  setAnte(value: number): void;

  getSmallBlind(): number;
  setSmallBlind(value: number): void;

  getGameType(): Def.GameTypeMap[keyof Def.GameTypeMap];
  setGameType(value: Def.GameTypeMap[keyof Def.GameTypeMap]): void;

  getPokerType(): Def.PokerTypeMap[keyof Def.PokerTypeMap];
  setPokerType(value: Def.PokerTypeMap[keyof Def.PokerTypeMap]): void;

  getLimitBetType(): Def.LimitBetTypeMap[keyof Def.LimitBetTypeMap];
  setLimitBetType(value: Def.LimitBetTypeMap[keyof Def.LimitBetTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageRoomReadyForEnter.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageRoomReadyForEnter): ServerMessageRoomReadyForEnter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageRoomReadyForEnter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageRoomReadyForEnter;
  static deserializeBinaryFromReader(message: ServerMessageRoomReadyForEnter, reader: jspb.BinaryReader): ServerMessageRoomReadyForEnter;
}

export namespace ServerMessageRoomReadyForEnter {
  export type AsObject = {
    roomId: number,
    ante: number,
    smallBlind: number,
    gameType: Def.GameTypeMap[keyof Def.GameTypeMap],
    pokerType: Def.PokerTypeMap[keyof Def.PokerTypeMap],
    limitBetType: Def.LimitBetTypeMap[keyof Def.LimitBetTypeMap],
  }
}

export class ServerMessageRoomUserSendDiamond extends jspb.Message {
  getSenderId(): number;
  setSenderId(value: number): void;

  getSenderRid(): number;
  setSenderRid(value: number): void;

  getRecieveId(): number;
  setRecieveId(value: number): void;

  getRecieveRid(): number;
  setRecieveRid(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageRoomUserSendDiamond.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageRoomUserSendDiamond): ServerMessageRoomUserSendDiamond.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageRoomUserSendDiamond, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageRoomUserSendDiamond;
  static deserializeBinaryFromReader(message: ServerMessageRoomUserSendDiamond, reader: jspb.BinaryReader): ServerMessageRoomUserSendDiamond;
}

export namespace ServerMessageRoomUserSendDiamond {
  export type AsObject = {
    senderId: number,
    senderRid: number,
    recieveId: number,
    recieveRid: number,
    amount: number,
  }
}

export class ServerMessageSelfProfitPay extends jspb.Message {
  getBillId(): number;
  setBillId(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  getClubRid(): number;
  setClubRid(value: number): void;

  getClubname(): string;
  setClubname(value: string): void;

  getGoldType(): number;
  setGoldType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageSelfProfitPay.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageSelfProfitPay): ServerMessageSelfProfitPay.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageSelfProfitPay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageSelfProfitPay;
  static deserializeBinaryFromReader(message: ServerMessageSelfProfitPay, reader: jspb.BinaryReader): ServerMessageSelfProfitPay;
}

export namespace ServerMessageSelfProfitPay {
  export type AsObject = {
    billId: number,
    amount: number,
    clubRid: number,
    clubname: string,
    goldType: number,
  }
}

export class ServerMessageSnatchTreasureHrl extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageSnatchTreasureHrl.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageSnatchTreasureHrl): ServerMessageSnatchTreasureHrl.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageSnatchTreasureHrl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageSnatchTreasureHrl;
  static deserializeBinaryFromReader(message: ServerMessageSnatchTreasureHrl, reader: jspb.BinaryReader): ServerMessageSnatchTreasureHrl;
}

export namespace ServerMessageSnatchTreasureHrl {
  export type AsObject = {
    code: number,
    data: string,
  }
}

export class ServerMessageSnatchTreasureWinPopup extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageSnatchTreasureWinPopup.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageSnatchTreasureWinPopup): ServerMessageSnatchTreasureWinPopup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageSnatchTreasureWinPopup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageSnatchTreasureWinPopup;
  static deserializeBinaryFromReader(message: ServerMessageSnatchTreasureWinPopup, reader: jspb.BinaryReader): ServerMessageSnatchTreasureWinPopup;
}

export namespace ServerMessageSnatchTreasureWinPopup {
  export type AsObject = {
    code: number,
    data: string,
  }
}

export class ServerMessageSupportMessage extends jspb.Message {
  getChannel(): string;
  setChannel(value: string): void;

  getClubId(): number;
  setClubId(value: number): void;

  getUserId(): number;
  setUserId(value: number): void;

  getMsgType(): number;
  setMsgType(value: number): void;

  getText(): string;
  setText(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  getFileName(): string;
  setFileName(value: string): void;

  getFileSize(): number;
  setFileSize(value: number): void;

  getThumbUrl(): string;
  setThumbUrl(value: string): void;

  getDuration(): number;
  setDuration(value: number): void;

  getLocalTime(): number;
  setLocalTime(value: number): void;

  getTimeToken(): number;
  setTimeToken(value: number): void;

  getUserSend(): boolean;
  setUserSend(value: boolean): void;

  getSupportUserId(): number;
  setSupportUserId(value: number): void;

  getImServiceType(): number;
  setImServiceType(value: number): void;

  getTribeId(): number;
  setTribeId(value: number): void;

  getSubType(): number;
  setSubType(value: number): void;

  getExtra(): string;
  setExtra(value: string): void;

  getSeq(): number;
  setSeq(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageSupportMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageSupportMessage): ServerMessageSupportMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageSupportMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageSupportMessage;
  static deserializeBinaryFromReader(message: ServerMessageSupportMessage, reader: jspb.BinaryReader): ServerMessageSupportMessage;
}

export namespace ServerMessageSupportMessage {
  export type AsObject = {
    channel: string,
    clubId: number,
    userId: number,
    msgType: number,
    text: string,
    url: string,
    fileName: string,
    fileSize: number,
    thumbUrl: string,
    duration: number,
    localTime: number,
    timeToken: number,
    userSend: boolean,
    supportUserId: number,
    imServiceType: number,
    tribeId: number,
    subType: number,
    extra: string,
    seq: number,
  }
}

export class ServerMessageSystemMessage extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  getRotateTimes(): number;
  setRotateTimes(value: number): void;

  clearClientTypesList(): void;
  getClientTypesList(): Array<number>;
  setClientTypesList(value: Array<number>): void;
  addClientTypes(value: number, index?: number): number;

  getStartTime(): number;
  setStartTime(value: number): void;

  getEndTime(): number;
  setEndTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageSystemMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageSystemMessage): ServerMessageSystemMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageSystemMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageSystemMessage;
  static deserializeBinaryFromReader(message: ServerMessageSystemMessage, reader: jspb.BinaryReader): ServerMessageSystemMessage;
}

export namespace ServerMessageSystemMessage {
  export type AsObject = {
    message: string,
    rotateTimes: number,
    clientTypesList: Array<number>,
    startTime: number,
    endTime: number,
  }
}

export class ServerMessageTodoList extends jspb.Message {
  getNum(): number;
  setNum(value: number): void;

  getType(): number;
  setType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageTodoList.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageTodoList): ServerMessageTodoList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageTodoList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageTodoList;
  static deserializeBinaryFromReader(message: ServerMessageTodoList, reader: jspb.BinaryReader): ServerMessageTodoList;
}

export namespace ServerMessageTodoList {
  export type AsObject = {
    num: number,
    type: number,
  }
}

export class ServerMessageTribeBlackUserMtt extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getTribeId(): number;
  setTribeId(value: number): void;

  getTribeRid(): number;
  setTribeRid(value: number): void;

  getTribeName(): string;
  setTribeName(value: string): void;

  clearMatchIdsList(): void;
  getMatchIdsList(): Array<number>;
  setMatchIdsList(value: Array<number>): void;
  addMatchIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageTribeBlackUserMtt.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageTribeBlackUserMtt): ServerMessageTribeBlackUserMtt.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageTribeBlackUserMtt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageTribeBlackUserMtt;
  static deserializeBinaryFromReader(message: ServerMessageTribeBlackUserMtt, reader: jspb.BinaryReader): ServerMessageTribeBlackUserMtt;
}

export namespace ServerMessageTribeBlackUserMtt {
  export type AsObject = {
    userId: number,
    tribeId: number,
    tribeRid: number,
    tribeName: string,
    matchIdsList: Array<number>,
  }
}

export class ServerMessageTribeBlackUser extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getUserId(): number;
  setUserId(value: number): void;

  getUserRandomId(): number;
  setUserRandomId(value: number): void;

  getUserName(): string;
  setUserName(value: string): void;

  getUserAvatar(): string;
  setUserAvatar(value: string): void;

  getTribeId(): number;
  setTribeId(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getReason(): string;
  setReason(value: string): void;

  getPublicReason(): string;
  setPublicReason(value: string): void;

  getJoinStatus(): number;
  setJoinStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageTribeBlackUser.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageTribeBlackUser): ServerMessageTribeBlackUser.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageTribeBlackUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageTribeBlackUser;
  static deserializeBinaryFromReader(message: ServerMessageTribeBlackUser, reader: jspb.BinaryReader): ServerMessageTribeBlackUser;
}

export namespace ServerMessageTribeBlackUser {
  export type AsObject = {
    id: number,
    userId: number,
    userRandomId: number,
    userName: string,
    userAvatar: string,
    tribeId: number,
    status: number,
    reason: string,
    publicReason: string,
    joinStatus: number,
  }
}

export class ServerMessageUserBan extends jspb.Message {
  getStartTime(): number;
  setStartTime(value: number): void;

  getScheduleEndTime(): number;
  setScheduleEndTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageUserBan.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageUserBan): ServerMessageUserBan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageUserBan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageUserBan;
  static deserializeBinaryFromReader(message: ServerMessageUserBan, reader: jspb.BinaryReader): ServerMessageUserBan;
}

export namespace ServerMessageUserBan {
  export type AsObject = {
    startTime: number,
    scheduleEndTime: number,
  }
}

export class ServerMessageUserClubRoleChange extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getClubId(): number;
  setClubId(value: number): void;

  getUserLevel(): number;
  setUserLevel(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageUserClubRoleChange.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageUserClubRoleChange): ServerMessageUserClubRoleChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageUserClubRoleChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageUserClubRoleChange;
  static deserializeBinaryFromReader(message: ServerMessageUserClubRoleChange, reader: jspb.BinaryReader): ServerMessageUserClubRoleChange;
}

export namespace ServerMessageUserClubRoleChange {
  export type AsObject = {
    userId: number,
    clubId: number,
    userLevel: number,
  }
}

export class ServerMessageUserDeviceIsBlocked extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageUserDeviceIsBlocked.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageUserDeviceIsBlocked): ServerMessageUserDeviceIsBlocked.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageUserDeviceIsBlocked, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageUserDeviceIsBlocked;
  static deserializeBinaryFromReader(message: ServerMessageUserDeviceIsBlocked, reader: jspb.BinaryReader): ServerMessageUserDeviceIsBlocked;
}

export namespace ServerMessageUserDeviceIsBlocked {
  export type AsObject = {
    code: number,
    data: string,
  }
}

export class ServerMessageUserDiamondChange extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getDiamonds(): number;
  setDiamonds(value: number): void;

  getDiamondsLock(): number;
  setDiamondsLock(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageUserDiamondChange.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageUserDiamondChange): ServerMessageUserDiamondChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageUserDiamondChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageUserDiamondChange;
  static deserializeBinaryFromReader(message: ServerMessageUserDiamondChange, reader: jspb.BinaryReader): ServerMessageUserDiamondChange;
}

export namespace ServerMessageUserDiamondChange {
  export type AsObject = {
    userId: number,
    diamonds: number,
    diamondsLock: number,
  }
}

export class ServerMessageUserGameWatch extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getUserName(): string;
  setUserName(value: string): void;

  getRoomId(): number;
  setRoomId(value: number): void;

  getHandNum(): number;
  setHandNum(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageUserGameWatch.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageUserGameWatch): ServerMessageUserGameWatch.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageUserGameWatch, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageUserGameWatch;
  static deserializeBinaryFromReader(message: ServerMessageUserGameWatch, reader: jspb.BinaryReader): ServerMessageUserGameWatch;
}

export namespace ServerMessageUserGameWatch {
  export type AsObject = {
    id: number,
    userName: string,
    roomId: number,
    handNum: number,
    amount: number,
  }
}

export class ServerMessageUserGoldChange extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getGold(): number;
  setGold(value: number): void;

  getGoldLock(): number;
  setGoldLock(value: number): void;

  getClubId(): number;
  setClubId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageUserGoldChange.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageUserGoldChange): ServerMessageUserGoldChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageUserGoldChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageUserGoldChange;
  static deserializeBinaryFromReader(message: ServerMessageUserGoldChange, reader: jspb.BinaryReader): ServerMessageUserGoldChange;
}

export namespace ServerMessageUserGoldChange {
  export type AsObject = {
    userId: number,
    gold: number,
    goldLock: number,
    clubId: number,
  }
}

export class ServerMessageUserIsBlocked extends jspb.Message {
  getCode(): number;
  setCode(value: number): void;

  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageUserIsBlocked.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageUserIsBlocked): ServerMessageUserIsBlocked.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageUserIsBlocked, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageUserIsBlocked;
  static deserializeBinaryFromReader(message: ServerMessageUserIsBlocked, reader: jspb.BinaryReader): ServerMessageUserIsBlocked;
}

export namespace ServerMessageUserIsBlocked {
  export type AsObject = {
    code: number,
    data: string,
  }
}

export class ServerMessageUserIsMute extends jspb.Message {
  getClubId(): number;
  setClubId(value: number): void;

  getTribeId(): number;
  setTribeId(value: number): void;

  getMute(): boolean;
  setMute(value: boolean): void;

  getUserId(): number;
  setUserId(value: number): void;

  getUserRandomId(): number;
  setUserRandomId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageUserIsMute.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageUserIsMute): ServerMessageUserIsMute.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageUserIsMute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageUserIsMute;
  static deserializeBinaryFromReader(message: ServerMessageUserIsMute, reader: jspb.BinaryReader): ServerMessageUserIsMute;
}

export namespace ServerMessageUserIsMute {
  export type AsObject = {
    clubId: number,
    tribeId: number,
    mute: boolean,
    userId: number,
    userRandomId: number,
  }
}

export class ServerMessageUserJoinClub extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getClubId(): number;
  setClubId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageUserJoinClub.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageUserJoinClub): ServerMessageUserJoinClub.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageUserJoinClub, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageUserJoinClub;
  static deserializeBinaryFromReader(message: ServerMessageUserJoinClub, reader: jspb.BinaryReader): ServerMessageUserJoinClub;
}

export namespace ServerMessageUserJoinClub {
  export type AsObject = {
    userId: number,
    clubId: number,
  }
}

export class ServerMessageUserKickedFromClub extends jspb.Message {
  getKickedTime(): number;
  setKickedTime(value: number): void;

  getClubId(): number;
  setClubId(value: number): void;

  getReason(): Def.UserQuitClubReasonMap[keyof Def.UserQuitClubReasonMap];
  setReason(value: Def.UserQuitClubReasonMap[keyof Def.UserQuitClubReasonMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageUserKickedFromClub.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageUserKickedFromClub): ServerMessageUserKickedFromClub.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageUserKickedFromClub, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageUserKickedFromClub;
  static deserializeBinaryFromReader(message: ServerMessageUserKickedFromClub, reader: jspb.BinaryReader): ServerMessageUserKickedFromClub;
}

export namespace ServerMessageUserKickedFromClub {
  export type AsObject = {
    kickedTime: number,
    clubId: number,
    reason: Def.UserQuitClubReasonMap[keyof Def.UserQuitClubReasonMap],
  }
}

export class ServerMessageUserMttChangeNotify extends jspb.Message {
  hasMtt(): boolean;
  clearMtt(): void;
  getMtt(): UserMttRecord | undefined;
  setMtt(value?: UserMttRecord): void;

  getSendTimestamp(): number;
  setSendTimestamp(value: number): void;

  hasMttChange(): boolean;
  clearMttChange(): void;
  getMttChange(): UserMttRecordChange | undefined;
  setMttChange(value?: UserMttRecordChange): void;

  getChangeType(): number;
  setChangeType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageUserMttChangeNotify.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageUserMttChangeNotify): ServerMessageUserMttChangeNotify.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageUserMttChangeNotify, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageUserMttChangeNotify;
  static deserializeBinaryFromReader(message: ServerMessageUserMttChangeNotify, reader: jspb.BinaryReader): ServerMessageUserMttChangeNotify;
}

export namespace ServerMessageUserMttChangeNotify {
  export type AsObject = {
    mtt?: UserMttRecord.AsObject,
    sendTimestamp: number,
    mttChange?: UserMttRecordChange.AsObject,
    changeType: number,
  }
}

export class ServerMessageUserOrderAudit extends jspb.Message {
  getOrderNo(): string;
  setOrderNo(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  getOrderCategory(): number;
  setOrderCategory(value: number): void;

  getOrderType(): number;
  setOrderType(value: number): void;

  getCloseChat(): boolean;
  setCloseChat(value: boolean): void;

  getDelay(): number;
  setDelay(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageUserOrderAudit.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageUserOrderAudit): ServerMessageUserOrderAudit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageUserOrderAudit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageUserOrderAudit;
  static deserializeBinaryFromReader(message: ServerMessageUserOrderAudit, reader: jspb.BinaryReader): ServerMessageUserOrderAudit;
}

export namespace ServerMessageUserOrderAudit {
  export type AsObject = {
    orderNo: string,
    status: number,
    orderCategory: number,
    orderType: number,
    closeChat: boolean,
    delay: number,
  }
}

export class ServerMessageUserSngChangeNotify extends jspb.Message {
  hasSng(): boolean;
  clearSng(): void;
  getSng(): UserSNGRecord | undefined;
  setSng(value?: UserSNGRecord): void;

  getSendTimestamp(): number;
  setSendTimestamp(value: number): void;

  hasSngChange(): boolean;
  clearSngChange(): void;
  getSngChange(): UserSNGRecordChange | undefined;
  setSngChange(value?: UserSNGRecordChange): void;

  getChangeType(): number;
  setChangeType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageUserSngChangeNotify.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageUserSngChangeNotify): ServerMessageUserSngChangeNotify.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageUserSngChangeNotify, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageUserSngChangeNotify;
  static deserializeBinaryFromReader(message: ServerMessageUserSngChangeNotify, reader: jspb.BinaryReader): ServerMessageUserSngChangeNotify;
}

export namespace ServerMessageUserSngChangeNotify {
  export type AsObject = {
    sng?: UserSNGRecord.AsObject,
    sendTimestamp: number,
    sngChange?: UserSNGRecordChange.AsObject,
    changeType: number,
  }
}

export class ServerMessageUserTraderOrderNotify extends jspb.Message {
  getOrderNo(): string;
  setOrderNo(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  getRejectReason(): string;
  setRejectReason(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageUserTraderOrderNotify.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageUserTraderOrderNotify): ServerMessageUserTraderOrderNotify.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageUserTraderOrderNotify, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageUserTraderOrderNotify;
  static deserializeBinaryFromReader(message: ServerMessageUserTraderOrderNotify, reader: jspb.BinaryReader): ServerMessageUserTraderOrderNotify;
}

export namespace ServerMessageUserTraderOrderNotify {
  export type AsObject = {
    orderNo: string,
    status: number,
    rejectReason: string,
  }
}

export class ServerMessageUserUsdtOrderNotify extends jspb.Message {
  getOrderNo(): string;
  setOrderNo(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageUserUsdtOrderNotify.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageUserUsdtOrderNotify): ServerMessageUserUsdtOrderNotify.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageUserUsdtOrderNotify, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageUserUsdtOrderNotify;
  static deserializeBinaryFromReader(message: ServerMessageUserUsdtOrderNotify, reader: jspb.BinaryReader): ServerMessageUserUsdtOrderNotify;
}

export namespace ServerMessageUserUsdtOrderNotify {
  export type AsObject = {
    orderNo: string,
    status: number,
  }
}

export class ServerMessageUserWheelHandNum extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getWheelTemplateId(): number;
  setWheelTemplateId(value: number): void;

  getLotteryHandNum(): number;
  setLotteryHandNum(value: number): void;

  getUserHandNum(): number;
  setUserHandNum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageUserWheelHandNum.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageUserWheelHandNum): ServerMessageUserWheelHandNum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageUserWheelHandNum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageUserWheelHandNum;
  static deserializeBinaryFromReader(message: ServerMessageUserWheelHandNum, reader: jspb.BinaryReader): ServerMessageUserWheelHandNum;
}

export namespace ServerMessageUserWheelHandNum {
  export type AsObject = {
    userId: number,
    wheelTemplateId: number,
    lotteryHandNum: number,
    userHandNum: number,
  }
}

export class ServerMessageGdActionAll extends jspb.Message {
  getOperatorSeatId(): number;
  setOperatorSeatId(value: number): void;

  getAct(): DefGD.ActionGdMap[keyof DefGD.ActionGdMap];
  setAct(value: DefGD.ActionGdMap[keyof DefGD.ActionGdMap]): void;

  hasDiscardCards(): boolean;
  clearDiscardCards(): void;
  getDiscardCards(): ValidCards | undefined;
  setDiscardCards(value?: ValidCards): void;

  getHandCardsLength(): number;
  setHandCardsLength(value: number): void;

  getCurrentWinrate(): number;
  setCurrentWinrate(value: number): void;

  hasNextOperator(): boolean;
  clearNextOperator(): void;
  getNextOperator(): OperatorGD | undefined;
  setNextOperator(value?: OperatorGD): void;

  getRank(): DefGD.WinTypeMap[keyof DefGD.WinTypeMap];
  setRank(value: DefGD.WinTypeMap[keyof DefGD.WinTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdActionAll.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdActionAll): ServerMessageGdActionAll.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdActionAll, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdActionAll;
  static deserializeBinaryFromReader(message: ServerMessageGdActionAll, reader: jspb.BinaryReader): ServerMessageGdActionAll;
}

export namespace ServerMessageGdActionAll {
  export type AsObject = {
    operatorSeatId: number,
    act: DefGD.ActionGdMap[keyof DefGD.ActionGdMap],
    discardCards?: ValidCards.AsObject,
    handCardsLength: number,
    currentWinrate: number,
    nextOperator?: OperatorGD.AsObject,
    rank: DefGD.WinTypeMap[keyof DefGD.WinTypeMap],
  }
}

export class ServerMessageGdAddTimeOthers extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getDuration(): number;
  setDuration(value: number): void;

  getTimes(): number;
  setTimes(value: number): void;

  getDeadline(): number;
  setDeadline(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdAddTimeOthers.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdAddTimeOthers): ServerMessageGdAddTimeOthers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdAddTimeOthers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdAddTimeOthers;
  static deserializeBinaryFromReader(message: ServerMessageGdAddTimeOthers, reader: jspb.BinaryReader): ServerMessageGdAddTimeOthers;
}

export namespace ServerMessageGdAddTimeOthers {
  export type AsObject = {
    seatId: number,
    duration: number,
    times: number,
    deadline: number,
  }
}

export class ServerMessageGdAutoOp extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getEnable(): boolean;
  setEnable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdAutoOp.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdAutoOp): ServerMessageGdAutoOp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdAutoOp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdAutoOp;
  static deserializeBinaryFromReader(message: ServerMessageGdAutoOp, reader: jspb.BinaryReader): ServerMessageGdAutoOp;
}

export namespace ServerMessageGdAutoOp {
  export type AsObject = {
    seatId: number,
    enable: boolean,
  }
}

export class ServerMessageGdBringInFail extends jspb.Message {
  getCurrentChip(): number;
  setCurrentChip(value: number): void;

  getSrc(): Def.ChipChangeReasonMap[keyof Def.ChipChangeReasonMap];
  setSrc(value: Def.ChipChangeReasonMap[keyof Def.ChipChangeReasonMap]): void;

  getExtErrcode(): number;
  setExtErrcode(value: number): void;

  getExtNotice(): string;
  setExtNotice(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdBringInFail.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdBringInFail): ServerMessageGdBringInFail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdBringInFail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdBringInFail;
  static deserializeBinaryFromReader(message: ServerMessageGdBringInFail, reader: jspb.BinaryReader): ServerMessageGdBringInFail;
}

export namespace ServerMessageGdBringInFail {
  export type AsObject = {
    currentChip: number,
    src: Def.ChipChangeReasonMap[keyof Def.ChipChangeReasonMap],
    extErrcode: number,
    extNotice: string,
  }
}

export class ServerMessageGdChipsChange extends jspb.Message {
  clearChangesList(): void;
  getChangesList(): Array<PlayerChipChangeGD>;
  setChangesList(value: Array<PlayerChipChangeGD>): void;
  addChanges(value?: PlayerChipChangeGD, index?: number): PlayerChipChangeGD;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdChipsChange.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdChipsChange): ServerMessageGdChipsChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdChipsChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdChipsChange;
  static deserializeBinaryFromReader(message: ServerMessageGdChipsChange, reader: jspb.BinaryReader): ServerMessageGdChipsChange;
}

export namespace ServerMessageGdChipsChange {
  export type AsObject = {
    changesList: Array<PlayerChipChangeGD.AsObject>,
  }
}

export class ServerMessageGdGetMsg extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  getExtra(): Uint8Array | string;
  getExtra_asU8(): Uint8Array;
  getExtra_asB64(): string;
  setExtra(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdGetMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdGetMsg): ServerMessageGdGetMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdGetMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdGetMsg;
  static deserializeBinaryFromReader(message: ServerMessageGdGetMsg, reader: jspb.BinaryReader): ServerMessageGdGetMsg;
}

export namespace ServerMessageGdGetMsg {
  export type AsObject = {
    message: string,
    extra: Uint8Array | string,
  }
}

export class ServerMessageGdHandClear extends jspb.Message {
  getMatchNum(): number;
  setMatchNum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdHandClear.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdHandClear): ServerMessageGdHandClear.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdHandClear, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdHandClear;
  static deserializeBinaryFromReader(message: ServerMessageGdHandClear, reader: jspb.BinaryReader): ServerMessageGdHandClear;
}

export namespace ServerMessageGdHandClear {
  export type AsObject = {
    matchNum: number,
  }
}

export class ServerMessageGdKeepSeat extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getKeep(): boolean;
  setKeep(value: boolean): void;

  getTimes(): number;
  setTimes(value: number): void;

  getLeftTime(): number;
  setLeftTime(value: number): void;

  getKeepSeatReason(): Def.KeepSeatReasonMap[keyof Def.KeepSeatReasonMap];
  setKeepSeatReason(value: Def.KeepSeatReasonMap[keyof Def.KeepSeatReasonMap]): void;

  getDeadline(): number;
  setDeadline(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdKeepSeat.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdKeepSeat): ServerMessageGdKeepSeat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdKeepSeat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdKeepSeat;
  static deserializeBinaryFromReader(message: ServerMessageGdKeepSeat, reader: jspb.BinaryReader): ServerMessageGdKeepSeat;
}

export namespace ServerMessageGdKeepSeat {
  export type AsObject = {
    seatId: number,
    keep: boolean,
    times: number,
    leftTime: number,
    keepSeatReason: Def.KeepSeatReasonMap[keyof Def.KeepSeatReasonMap],
    deadline: number,
  }
}

export class ServerMessageGdLeaveNotification extends jspb.Message {
  getReason(): Def.LeaveReasonMap[keyof Def.LeaveReasonMap];
  setReason(value: Def.LeaveReasonMap[keyof Def.LeaveReasonMap]): void;

  getChip(): number;
  setChip(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdLeaveNotification.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdLeaveNotification): ServerMessageGdLeaveNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdLeaveNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdLeaveNotification;
  static deserializeBinaryFromReader(message: ServerMessageGdLeaveNotification, reader: jspb.BinaryReader): ServerMessageGdLeaveNotification;
}

export namespace ServerMessageGdLeaveNotification {
  export type AsObject = {
    reason: Def.LeaveReasonMap[keyof Def.LeaveReasonMap],
    chip: number,
  }
}

export class ServerMessageGdReadyStartAll extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getWaitDeadline(): number;
  setWaitDeadline(value: number): void;

  clearPlayerGoldList(): void;
  getPlayerGoldList(): Array<PlayerGoldGD>;
  setPlayerGoldList(value: Array<PlayerGoldGD>): void;
  addPlayerGold(value?: PlayerGoldGD, index?: number): PlayerGoldGD;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdReadyStartAll.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdReadyStartAll): ServerMessageGdReadyStartAll.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdReadyStartAll, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdReadyStartAll;
  static deserializeBinaryFromReader(message: ServerMessageGdReadyStartAll, reader: jspb.BinaryReader): ServerMessageGdReadyStartAll;
}

export namespace ServerMessageGdReadyStartAll {
  export type AsObject = {
    seatId: number,
    waitDeadline: number,
    playerGoldList: Array<PlayerGoldGD.AsObject>,
  }
}

export class ServerMessageGdResult extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<ResultGD>;
  setResultsList(value: Array<ResultGD>): void;
  addResults(value?: ResultGD, index?: number): ResultGD;

  getMatchNum(): number;
  setMatchNum(value: number): void;

  getCurrentWinrate(): number;
  setCurrentWinrate(value: number): void;

  getLevelCardGroup1(): number;
  setLevelCardGroup1(value: number): void;

  getLevelCardGroup2(): number;
  setLevelCardGroup2(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdResult.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdResult): ServerMessageGdResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdResult;
  static deserializeBinaryFromReader(message: ServerMessageGdResult, reader: jspb.BinaryReader): ServerMessageGdResult;
}

export namespace ServerMessageGdResult {
  export type AsObject = {
    resultsList: Array<ResultGD.AsObject>,
    matchNum: number,
    currentWinrate: number,
    levelCardGroup1: number,
    levelCardGroup2: number,
  }
}

export class ServerMessageGdSeatedOthers extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getSex(): number;
  setSex(value: number): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  getName(): string;
  setName(value: string): void;

  getUserRid(): number;
  setUserRid(value: number): void;

  getChips(): number;
  setChips(value: number): void;

  getVip(): number;
  setVip(value: number): void;

  getKeepSeatLeftTime(): number;
  setKeepSeatLeftTime(value: number): void;

  getKeepSeatDeadline(): number;
  setKeepSeatDeadline(value: number): void;

  getUserSubscriptionId(): number;
  setUserSubscriptionId(value: number): void;

  getGold(): number;
  setGold(value: number): void;

  getIpAddr(): string;
  setIpAddr(value: string): void;

  getVideoMaskId(): number;
  setVideoMaskId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdSeatedOthers.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdSeatedOthers): ServerMessageGdSeatedOthers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdSeatedOthers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdSeatedOthers;
  static deserializeBinaryFromReader(message: ServerMessageGdSeatedOthers, reader: jspb.BinaryReader): ServerMessageGdSeatedOthers;
}

export namespace ServerMessageGdSeatedOthers {
  export type AsObject = {
    seatId: number,
    sex: number,
    avatar: string,
    name: string,
    userRid: number,
    chips: number,
    vip: number,
    keepSeatLeftTime: number,
    keepSeatDeadline: number,
    userSubscriptionId: number,
    gold: number,
    ipAddr: string,
    videoMaskId: number,
  }
}

export class ServerMessageGdStandup extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getReason(): Def.StandUpReasonMap[keyof Def.StandUpReasonMap];
  setReason(value: Def.StandUpReasonMap[keyof Def.StandUpReasonMap]): void;

  getBringOut(): number;
  setBringOut(value: number): void;

  getAccountChips(): number;
  setAccountChips(value: number): void;

  getFee(): number;
  setFee(value: number): void;

  getWillLeave(): boolean;
  setWillLeave(value: boolean): void;

  getMuted(): boolean;
  setMuted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdStandup.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdStandup): ServerMessageGdStandup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdStandup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdStandup;
  static deserializeBinaryFromReader(message: ServerMessageGdStandup, reader: jspb.BinaryReader): ServerMessageGdStandup;
}

export namespace ServerMessageGdStandup {
  export type AsObject = {
    seatId: number,
    reason: Def.StandUpReasonMap[keyof Def.StandUpReasonMap],
    bringOut: number,
    accountChips: number,
    fee: number,
    willLeave: boolean,
    muted: boolean,
  }
}

export class ServerMessageGdStartInfo extends jspb.Message {
  hasMatchInfo(): boolean;
  clearMatchInfo(): void;
  getMatchInfo(): MatchInfoGD | undefined;
  setMatchInfo(value?: MatchInfoGD): void;

  clearPlayersList(): void;
  getPlayersList(): Array<PlayerStartInfoGD>;
  setPlayersList(value: Array<PlayerStartInfoGD>): void;
  addPlayers(value?: PlayerStartInfoGD, index?: number): PlayerStartInfoGD;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdStartInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdStartInfo): ServerMessageGdStartInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdStartInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdStartInfo;
  static deserializeBinaryFromReader(message: ServerMessageGdStartInfo, reader: jspb.BinaryReader): ServerMessageGdStartInfo;
}

export namespace ServerMessageGdStartInfo {
  export type AsObject = {
    matchInfo?: MatchInfoGD.AsObject,
    playersList: Array<PlayerStartInfoGD.AsObject>,
  }
}

export class ServerMessageGdTributeGiveComplete extends jspb.Message {
  clearOpsList(): void;
  getOpsList(): Array<OperatorGD>;
  setOpsList(value: Array<OperatorGD>): void;
  addOps(value?: OperatorGD, index?: number): OperatorGD;

  clearTributeCardsList(): void;
  getTributeCardsList(): Array<TributeCard>;
  setTributeCardsList(value: Array<TributeCard>): void;
  addTributeCards(value?: TributeCard, index?: number): TributeCard;

  getRefuse(): boolean;
  setRefuse(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdTributeGiveComplete.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdTributeGiveComplete): ServerMessageGdTributeGiveComplete.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdTributeGiveComplete, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdTributeGiveComplete;
  static deserializeBinaryFromReader(message: ServerMessageGdTributeGiveComplete, reader: jspb.BinaryReader): ServerMessageGdTributeGiveComplete;
}

export namespace ServerMessageGdTributeGiveComplete {
  export type AsObject = {
    opsList: Array<OperatorGD.AsObject>,
    tributeCardsList: Array<TributeCard.AsObject>,
    refuse: boolean,
  }
}

export class ServerMessageGdTributeReturnComplete extends jspb.Message {
  clearOpsList(): void;
  getOpsList(): Array<OperatorGD>;
  setOpsList(value: Array<OperatorGD>): void;
  addOps(value?: OperatorGD, index?: number): OperatorGD;

  clearTributeCardsList(): void;
  getTributeCardsList(): Array<TributeCard>;
  setTributeCardsList(value: Array<TributeCard>): void;
  addTributeCards(value?: TributeCard, index?: number): TributeCard;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdTributeReturnComplete.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdTributeReturnComplete): ServerMessageGdTributeReturnComplete.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdTributeReturnComplete, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdTributeReturnComplete;
  static deserializeBinaryFromReader(message: ServerMessageGdTributeReturnComplete, reader: jspb.BinaryReader): ServerMessageGdTributeReturnComplete;
}

export namespace ServerMessageGdTributeReturnComplete {
  export type AsObject = {
    opsList: Array<OperatorGD.AsObject>,
    tributeCardsList: Array<TributeCard.AsObject>,
  }
}

export class ServerMessageGdVideoMaskChange extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getUserRid(): number;
  setUserRid(value: number): void;

  getVideoMaskId(): number;
  setVideoMaskId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdVideoMaskChange.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdVideoMaskChange): ServerMessageGdVideoMaskChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdVideoMaskChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdVideoMaskChange;
  static deserializeBinaryFromReader(message: ServerMessageGdVideoMaskChange, reader: jspb.BinaryReader): ServerMessageGdVideoMaskChange;
}

export namespace ServerMessageGdVideoMaskChange {
  export type AsObject = {
    userId: number,
    userRid: number,
    videoMaskId: number,
  }
}

export class ServerMessageGdWaitReadyStart extends jspb.Message {
  getWaitDeadline(): number;
  setWaitDeadline(value: number): void;

  clearPlayerGoldList(): void;
  getPlayerGoldList(): Array<PlayerGoldGD>;
  setPlayerGoldList(value: Array<PlayerGoldGD>): void;
  addPlayerGold(value?: PlayerGoldGD, index?: number): PlayerGoldGD;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdWaitReadyStart.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdWaitReadyStart): ServerMessageGdWaitReadyStart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdWaitReadyStart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdWaitReadyStart;
  static deserializeBinaryFromReader(message: ServerMessageGdWaitReadyStart, reader: jspb.BinaryReader): ServerMessageGdWaitReadyStart;
}

export namespace ServerMessageGdWaitReadyStart {
  export type AsObject = {
    waitDeadline: number,
    playerGoldList: Array<PlayerGoldGD.AsObject>,
  }
}

export class ServerMessageGdWinrateAddComplete extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getAdd(): boolean;
  setAdd(value: boolean): void;

  getCurrentInitWinrate(): number;
  setCurrentInitWinrate(value: number): void;

  clearOpsList(): void;
  getOpsList(): Array<OperatorGD>;
  setOpsList(value: Array<OperatorGD>): void;
  addOps(value?: OperatorGD, index?: number): OperatorGD;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdWinrateAddComplete.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdWinrateAddComplete): ServerMessageGdWinrateAddComplete.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdWinrateAddComplete, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdWinrateAddComplete;
  static deserializeBinaryFromReader(message: ServerMessageGdWinrateAddComplete, reader: jspb.BinaryReader): ServerMessageGdWinrateAddComplete;
}

export namespace ServerMessageGdWinrateAddComplete {
  export type AsObject = {
    seatId: number,
    add: boolean,
    currentInitWinrate: number,
    opsList: Array<OperatorGD.AsObject>,
  }
}

export class ServerMessageMjActionAll extends jspb.Message {
  getOperatorSeatId(): number;
  setOperatorSeatId(value: number): void;

  getAct(): DefMJ.ActionMjMap[keyof DefMJ.ActionMjMap];
  setAct(value: DefMJ.ActionMjMap[keyof DefMJ.ActionMjMap]): void;

  clearTilesList(): void;
  getTilesList(): Array<Tile>;
  setTilesList(value: Array<Tile>): void;
  addTiles(value?: Tile, index?: number): Tile;

  getTargetSeatId(): number;
  setTargetSeatId(value: number): void;

  hasTargetTile(): boolean;
  clearTargetTile(): void;
  getTargetTile(): Tile | undefined;
  setTargetTile(value?: Tile): void;

  hasClaimOps(): boolean;
  clearClaimOps(): void;
  getClaimOps(): OperatorMJ | undefined;
  setClaimOps(value?: OperatorMJ): void;

  getWaitDeadline(): number;
  setWaitDeadline(value: number): void;

  clearErjsList(): void;
  getErjsList(): Array<ExternalResultMJ>;
  setErjsList(value: Array<ExternalResultMJ>): void;
  addErjs(value?: ExternalResultMJ, index?: number): ExternalResultMJ;

  clearOperatorReadyTilesList(): void;
  getOperatorReadyTilesList(): Array<ReadyTile>;
  setOperatorReadyTilesList(value: Array<ReadyTile>): void;
  addOperatorReadyTiles(value?: ReadyTile, index?: number): ReadyTile;

  getIsOffline(): boolean;
  setIsOffline(value: boolean): void;

  getMsgType(): DefMJ.ActionAllTypeMap[keyof DefMJ.ActionAllTypeMap];
  setMsgType(value: DefMJ.ActionAllTypeMap[keyof DefMJ.ActionAllTypeMap]): void;

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
    act: DefMJ.ActionMjMap[keyof DefMJ.ActionMjMap],
    tilesList: Array<Tile.AsObject>,
    targetSeatId: number,
    targetTile?: Tile.AsObject,
    claimOps?: OperatorMJ.AsObject,
    waitDeadline: number,
    erjsList: Array<ExternalResultMJ.AsObject>,
    operatorReadyTilesList: Array<ReadyTile.AsObject>,
    isOffline: boolean,
    msgType: DefMJ.ActionAllTypeMap[keyof DefMJ.ActionAllTypeMap],
  }
}

export class ServerMessageMjActionFail extends jspb.Message {
  getOperatorSeatId(): number;
  setOperatorSeatId(value: number): void;

  getAct(): DefMJ.ActionMjMap[keyof DefMJ.ActionMjMap];
  setAct(value: DefMJ.ActionMjMap[keyof DefMJ.ActionMjMap]): void;

  clearTilesList(): void;
  getTilesList(): Array<Tile>;
  setTilesList(value: Array<Tile>): void;
  addTiles(value?: Tile, index?: number): Tile;

  getTargetSeatId(): number;
  setTargetSeatId(value: number): void;

  hasTargetTile(): boolean;
  clearTargetTile(): void;
  getTargetTile(): Tile | undefined;
  setTargetTile(value?: Tile): void;

  getR(): DefMJ.ActionFailReasonMap[keyof DefMJ.ActionFailReasonMap];
  setR(value: DefMJ.ActionFailReasonMap[keyof DefMJ.ActionFailReasonMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjActionFail.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjActionFail): ServerMessageMjActionFail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjActionFail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjActionFail;
  static deserializeBinaryFromReader(message: ServerMessageMjActionFail, reader: jspb.BinaryReader): ServerMessageMjActionFail;
}

export namespace ServerMessageMjActionFail {
  export type AsObject = {
    operatorSeatId: number,
    act: DefMJ.ActionMjMap[keyof DefMJ.ActionMjMap],
    tilesList: Array<Tile.AsObject>,
    targetSeatId: number,
    targetTile?: Tile.AsObject,
    r: DefMJ.ActionFailReasonMap[keyof DefMJ.ActionFailReasonMap],
  }
}

export class ServerMessageMjAddTimeOthers extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getDuration(): number;
  setDuration(value: number): void;

  getTimes(): number;
  setTimes(value: number): void;

  getDeadline(): number;
  setDeadline(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjAddTimeOthers.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjAddTimeOthers): ServerMessageMjAddTimeOthers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjAddTimeOthers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjAddTimeOthers;
  static deserializeBinaryFromReader(message: ServerMessageMjAddTimeOthers, reader: jspb.BinaryReader): ServerMessageMjAddTimeOthers;
}

export namespace ServerMessageMjAddTimeOthers {
  export type AsObject = {
    seatId: number,
    duration: number,
    times: number,
    deadline: number,
  }
}

export class ServerMessageMjAutoOp extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getEnable(): boolean;
  setEnable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjAutoOp.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjAutoOp): ServerMessageMjAutoOp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjAutoOp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjAutoOp;
  static deserializeBinaryFromReader(message: ServerMessageMjAutoOp, reader: jspb.BinaryReader): ServerMessageMjAutoOp;
}

export namespace ServerMessageMjAutoOp {
  export type AsObject = {
    seatId: number,
    enable: boolean,
  }
}

export class ServerMessageMjBringInFail extends jspb.Message {
  getCurrentChip(): number;
  setCurrentChip(value: number): void;

  getSrc(): Def.ChipChangeReasonMap[keyof Def.ChipChangeReasonMap];
  setSrc(value: Def.ChipChangeReasonMap[keyof Def.ChipChangeReasonMap]): void;

  getExtErrcode(): number;
  setExtErrcode(value: number): void;

  getExtNotice(): string;
  setExtNotice(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjBringInFail.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjBringInFail): ServerMessageMjBringInFail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjBringInFail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjBringInFail;
  static deserializeBinaryFromReader(message: ServerMessageMjBringInFail, reader: jspb.BinaryReader): ServerMessageMjBringInFail;
}

export namespace ServerMessageMjBringInFail {
  export type AsObject = {
    currentChip: number,
    src: Def.ChipChangeReasonMap[keyof Def.ChipChangeReasonMap],
    extErrcode: number,
    extNotice: string,
  }
}

export class ServerMessageMjChipsChange extends jspb.Message {
  clearChangesList(): void;
  getChangesList(): Array<PlayerChipChangeMJ>;
  setChangesList(value: Array<PlayerChipChangeMJ>): void;
  addChanges(value?: PlayerChipChangeMJ, index?: number): PlayerChipChangeMJ;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjChipsChange.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjChipsChange): ServerMessageMjChipsChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjChipsChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjChipsChange;
  static deserializeBinaryFromReader(message: ServerMessageMjChipsChange, reader: jspb.BinaryReader): ServerMessageMjChipsChange;
}

export namespace ServerMessageMjChipsChange {
  export type AsObject = {
    changesList: Array<PlayerChipChangeMJ.AsObject>,
  }
}

export class ServerMessageMjExchangeTilesComplete extends jspb.Message {
  clearInTilesList(): void;
  getInTilesList(): Array<Tile>;
  setInTilesList(value: Array<Tile>): void;
  addInTiles(value?: Tile, index?: number): Tile;

  clearOutTilesList(): void;
  getOutTilesList(): Array<Tile>;
  setOutTilesList(value: Array<Tile>): void;
  addOutTiles(value?: Tile, index?: number): Tile;

  clearOpsList(): void;
  getOpsList(): Array<OperatorMJ>;
  setOpsList(value: Array<OperatorMJ>): void;
  addOps(value?: OperatorMJ, index?: number): OperatorMJ;

  getWaitDeadline(): number;
  setWaitDeadline(value: number): void;

  getExchangeTileLength(): number;
  setExchangeTileLength(value: number): void;

  clearReadyTilesList(): void;
  getReadyTilesList(): Array<ReadyTile>;
  setReadyTilesList(value: Array<ReadyTile>): void;
  addReadyTiles(value?: ReadyTile, index?: number): ReadyTile;

  getMode(): DefMJ.ExchangeModeMap[keyof DefMJ.ExchangeModeMap];
  setMode(value: DefMJ.ExchangeModeMap[keyof DefMJ.ExchangeModeMap]): void;

  getDefaultVoid(): DefMJ.TileTypeMap[keyof DefMJ.TileTypeMap];
  setDefaultVoid(value: DefMJ.TileTypeMap[keyof DefMJ.TileTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjExchangeTilesComplete.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjExchangeTilesComplete): ServerMessageMjExchangeTilesComplete.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjExchangeTilesComplete, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjExchangeTilesComplete;
  static deserializeBinaryFromReader(message: ServerMessageMjExchangeTilesComplete, reader: jspb.BinaryReader): ServerMessageMjExchangeTilesComplete;
}

export namespace ServerMessageMjExchangeTilesComplete {
  export type AsObject = {
    inTilesList: Array<Tile.AsObject>,
    outTilesList: Array<Tile.AsObject>,
    opsList: Array<OperatorMJ.AsObject>,
    waitDeadline: number,
    exchangeTileLength: number,
    readyTilesList: Array<ReadyTile.AsObject>,
    mode: DefMJ.ExchangeModeMap[keyof DefMJ.ExchangeModeMap],
    defaultVoid: DefMJ.TileTypeMap[keyof DefMJ.TileTypeMap],
  }
}

export class ServerMessageMjFollowDealer extends jspb.Message {
  getSeat(): number;
  setSeat(value: number): void;

  hasTile(): boolean;
  clearTile(): void;
  getTile(): Tile | undefined;
  setTile(value?: Tile): void;

  clearErjsList(): void;
  getErjsList(): Array<ExternalResultMJ>;
  setErjsList(value: Array<ExternalResultMJ>): void;
  addErjs(value?: ExternalResultMJ, index?: number): ExternalResultMJ;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjFollowDealer.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjFollowDealer): ServerMessageMjFollowDealer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjFollowDealer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjFollowDealer;
  static deserializeBinaryFromReader(message: ServerMessageMjFollowDealer, reader: jspb.BinaryReader): ServerMessageMjFollowDealer;
}

export namespace ServerMessageMjFollowDealer {
  export type AsObject = {
    seat: number,
    tile?: Tile.AsObject,
    erjsList: Array<ExternalResultMJ.AsObject>,
  }
}

export class ServerMessageMjGetMsg extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  getExtra(): Uint8Array | string;
  getExtra_asU8(): Uint8Array;
  getExtra_asB64(): string;
  setExtra(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjGetMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjGetMsg): ServerMessageMjGetMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjGetMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjGetMsg;
  static deserializeBinaryFromReader(message: ServerMessageMjGetMsg, reader: jspb.BinaryReader): ServerMessageMjGetMsg;
}

export namespace ServerMessageMjGetMsg {
  export type AsObject = {
    message: string,
    extra: Uint8Array | string,
  }
}

export class ServerMessageMjHandClear extends jspb.Message {
  getMatchNum(): number;
  setMatchNum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjHandClear.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjHandClear): ServerMessageMjHandClear.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjHandClear, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjHandClear;
  static deserializeBinaryFromReader(message: ServerMessageMjHandClear, reader: jspb.BinaryReader): ServerMessageMjHandClear;
}

export namespace ServerMessageMjHandClear {
  export type AsObject = {
    matchNum: number,
  }
}

export class ServerMessageMjKeepSeat extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getKeep(): boolean;
  setKeep(value: boolean): void;

  getTimes(): number;
  setTimes(value: number): void;

  getLeftTime(): number;
  setLeftTime(value: number): void;

  getKeepSeatReason(): Def.KeepSeatReasonMap[keyof Def.KeepSeatReasonMap];
  setKeepSeatReason(value: Def.KeepSeatReasonMap[keyof Def.KeepSeatReasonMap]): void;

  getDeadline(): number;
  setDeadline(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjKeepSeat.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjKeepSeat): ServerMessageMjKeepSeat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjKeepSeat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjKeepSeat;
  static deserializeBinaryFromReader(message: ServerMessageMjKeepSeat, reader: jspb.BinaryReader): ServerMessageMjKeepSeat;
}

export namespace ServerMessageMjKeepSeat {
  export type AsObject = {
    seatId: number,
    keep: boolean,
    times: number,
    leftTime: number,
    keepSeatReason: Def.KeepSeatReasonMap[keyof Def.KeepSeatReasonMap],
    deadline: number,
  }
}

export class ServerMessageMjLeaveNotification extends jspb.Message {
  getReason(): Def.LeaveReasonMap[keyof Def.LeaveReasonMap];
  setReason(value: Def.LeaveReasonMap[keyof Def.LeaveReasonMap]): void;

  getChip(): number;
  setChip(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjLeaveNotification.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjLeaveNotification): ServerMessageMjLeaveNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjLeaveNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjLeaveNotification;
  static deserializeBinaryFromReader(message: ServerMessageMjLeaveNotification, reader: jspb.BinaryReader): ServerMessageMjLeaveNotification;
}

export namespace ServerMessageMjLeaveNotification {
  export type AsObject = {
    reason: Def.LeaveReasonMap[keyof Def.LeaveReasonMap],
    chip: number,
  }
}

export class ServerMessageMjNeedBringInComplete extends jspb.Message {
  clearPlayersList(): void;
  getPlayersList(): Array<NeedBringInResult>;
  setPlayersList(value: Array<NeedBringInResult>): void;
  addPlayers(value?: NeedBringInResult, index?: number): NeedBringInResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjNeedBringInComplete.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjNeedBringInComplete): ServerMessageMjNeedBringInComplete.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjNeedBringInComplete, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjNeedBringInComplete;
  static deserializeBinaryFromReader(message: ServerMessageMjNeedBringInComplete, reader: jspb.BinaryReader): ServerMessageMjNeedBringInComplete;
}

export namespace ServerMessageMjNeedBringInComplete {
  export type AsObject = {
    playersList: Array<NeedBringInResult.AsObject>,
  }
}

export class ServerMessageMjNeedBringIn extends jspb.Message {
  clearPlayersList(): void;
  getPlayersList(): Array<NeedBringInPlayer>;
  setPlayersList(value: Array<NeedBringInPlayer>): void;
  addPlayers(value?: NeedBringInPlayer, index?: number): NeedBringInPlayer;

  getDeadline(): number;
  setDeadline(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjNeedBringIn.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjNeedBringIn): ServerMessageMjNeedBringIn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjNeedBringIn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjNeedBringIn;
  static deserializeBinaryFromReader(message: ServerMessageMjNeedBringIn, reader: jspb.BinaryReader): ServerMessageMjNeedBringIn;
}

export namespace ServerMessageMjNeedBringIn {
  export type AsObject = {
    playersList: Array<NeedBringInPlayer.AsObject>,
    deadline: number,
  }
}

export class ServerMessageMjPrepare extends jspb.Message {
  hasMatchInfo(): boolean;
  clearMatchInfo(): void;
  getMatchInfo(): MatchInfoMJ | undefined;
  setMatchInfo(value?: MatchInfoMJ): void;

  clearPlayersList(): void;
  getPlayersList(): Array<PlayerPrepareMJ>;
  setPlayersList(value: Array<PlayerPrepareMJ>): void;
  addPlayers(value?: PlayerPrepareMJ, index?: number): PlayerPrepareMJ;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjPrepare.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjPrepare): ServerMessageMjPrepare.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjPrepare, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjPrepare;
  static deserializeBinaryFromReader(message: ServerMessageMjPrepare, reader: jspb.BinaryReader): ServerMessageMjPrepare;
}

export namespace ServerMessageMjPrepare {
  export type AsObject = {
    matchInfo?: MatchInfoMJ.AsObject,
    playersList: Array<PlayerPrepareMJ.AsObject>,
  }
}

export class ServerMessageMjRaiseComplete extends jspb.Message {
  clearPlayersList(): void;
  getPlayersList(): Array<PlayerRaise>;
  setPlayersList(value: Array<PlayerRaise>): void;
  addPlayers(value?: PlayerRaise, index?: number): PlayerRaise;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjRaiseComplete.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjRaiseComplete): ServerMessageMjRaiseComplete.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjRaiseComplete, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjRaiseComplete;
  static deserializeBinaryFromReader(message: ServerMessageMjRaiseComplete, reader: jspb.BinaryReader): ServerMessageMjRaiseComplete;
}

export namespace ServerMessageMjRaiseComplete {
  export type AsObject = {
    playersList: Array<PlayerRaise.AsObject>,
  }
}

export class ServerMessageMjResult extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<ResultMJ>;
  setResultsList(value: Array<ResultMJ>): void;
  addResults(value?: ResultMJ, index?: number): ResultMJ;

  getMatchNum(): number;
  setMatchNum(value: number): void;

  getFinal(): boolean;
  setFinal(value: boolean): void;

  getDraw(): boolean;
  setDraw(value: boolean): void;

  getWallAscIndex(): number;
  setWallAscIndex(value: number): void;

  getWallDescIndex(): number;
  setWallDescIndex(value: number): void;

  getWallLeft(): number;
  setWallLeft(value: number): void;

  clearHorseTilesList(): void;
  getHorseTilesList(): Array<number>;
  setHorseTilesList(value: Array<number>): void;
  addHorseTiles(value: number, index?: number): number;

  clearReadyTilesList(): void;
  getReadyTilesList(): Array<ReadyTile>;
  setReadyTilesList(value: Array<ReadyTile>): void;
  addReadyTiles(value?: ReadyTile, index?: number): ReadyTile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjResult.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjResult): ServerMessageMjResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjResult;
  static deserializeBinaryFromReader(message: ServerMessageMjResult, reader: jspb.BinaryReader): ServerMessageMjResult;
}

export namespace ServerMessageMjResult {
  export type AsObject = {
    resultsList: Array<ResultMJ.AsObject>,
    matchNum: number,
    pb_final: boolean,
    draw: boolean,
    wallAscIndex: number,
    wallDescIndex: number,
    wallLeft: number,
    horseTilesList: Array<number>,
    readyTilesList: Array<ReadyTile.AsObject>,
  }
}

export class ServerMessageMjSeatedOthers extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getSex(): number;
  setSex(value: number): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  getName(): string;
  setName(value: string): void;

  getUserRid(): number;
  setUserRid(value: number): void;

  getChips(): number;
  setChips(value: number): void;

  getVip(): number;
  setVip(value: number): void;

  getKeepSeatLeftTime(): number;
  setKeepSeatLeftTime(value: number): void;

  getKeepSeatDeadline(): number;
  setKeepSeatDeadline(value: number): void;

  getUserSubscriptionId(): number;
  setUserSubscriptionId(value: number): void;

  getIpAddr(): string;
  setIpAddr(value: string): void;

  getVideoMaskId(): number;
  setVideoMaskId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjSeatedOthers.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjSeatedOthers): ServerMessageMjSeatedOthers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjSeatedOthers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjSeatedOthers;
  static deserializeBinaryFromReader(message: ServerMessageMjSeatedOthers, reader: jspb.BinaryReader): ServerMessageMjSeatedOthers;
}

export namespace ServerMessageMjSeatedOthers {
  export type AsObject = {
    seatId: number,
    sex: number,
    avatar: string,
    name: string,
    userRid: number,
    chips: number,
    vip: number,
    keepSeatLeftTime: number,
    keepSeatDeadline: number,
    userSubscriptionId: number,
    ipAddr: string,
    videoMaskId: number,
  }
}

export class ServerMessageMjStandup extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getReason(): Def.StandUpReasonMap[keyof Def.StandUpReasonMap];
  setReason(value: Def.StandUpReasonMap[keyof Def.StandUpReasonMap]): void;

  getBringOut(): number;
  setBringOut(value: number): void;

  getAccountChips(): number;
  setAccountChips(value: number): void;

  getFee(): number;
  setFee(value: number): void;

  getWillLeave(): boolean;
  setWillLeave(value: boolean): void;

  getMuted(): boolean;
  setMuted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjStandup.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjStandup): ServerMessageMjStandup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjStandup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjStandup;
  static deserializeBinaryFromReader(message: ServerMessageMjStandup, reader: jspb.BinaryReader): ServerMessageMjStandup;
}

export namespace ServerMessageMjStandup {
  export type AsObject = {
    seatId: number,
    reason: Def.StandUpReasonMap[keyof Def.StandUpReasonMap],
    bringOut: number,
    accountChips: number,
    fee: number,
    willLeave: boolean,
    muted: boolean,
  }
}

export class ServerMessageMjStartInfo extends jspb.Message {
  hasMatchInfo(): boolean;
  clearMatchInfo(): void;
  getMatchInfo(): MatchInfoMJ | undefined;
  setMatchInfo(value?: MatchInfoMJ): void;

  clearPlayersList(): void;
  getPlayersList(): Array<PlayerStartInfoMJ>;
  setPlayersList(value: Array<PlayerStartInfoMJ>): void;
  addPlayers(value?: PlayerStartInfoMJ, index?: number): PlayerStartInfoMJ;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjStartInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjStartInfo): ServerMessageMjStartInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjStartInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjStartInfo;
  static deserializeBinaryFromReader(message: ServerMessageMjStartInfo, reader: jspb.BinaryReader): ServerMessageMjStartInfo;
}

export namespace ServerMessageMjStartInfo {
  export type AsObject = {
    matchInfo?: MatchInfoMJ.AsObject,
    playersList: Array<PlayerStartInfoMJ.AsObject>,
  }
}

export class ServerMessageMjSyncHand extends jspb.Message {
  getStartTime(): number;
  setStartTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjSyncHand.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjSyncHand): ServerMessageMjSyncHand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjSyncHand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjSyncHand;
  static deserializeBinaryFromReader(message: ServerMessageMjSyncHand, reader: jspb.BinaryReader): ServerMessageMjSyncHand;
}

export namespace ServerMessageMjSyncHand {
  export type AsObject = {
    startTime: number,
  }
}

export class ServerMessageMjUpBlind extends jspb.Message {
  getPtLevel(): number;
  setPtLevel(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjUpBlind.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjUpBlind): ServerMessageMjUpBlind.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjUpBlind, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjUpBlind;
  static deserializeBinaryFromReader(message: ServerMessageMjUpBlind, reader: jspb.BinaryReader): ServerMessageMjUpBlind;
}

export namespace ServerMessageMjUpBlind {
  export type AsObject = {
    ptLevel: number,
  }
}

export class ServerMessageMjVideoMaskChange extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getUserRid(): number;
  setUserRid(value: number): void;

  getVideoMaskId(): number;
  setVideoMaskId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjVideoMaskChange.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjVideoMaskChange): ServerMessageMjVideoMaskChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjVideoMaskChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjVideoMaskChange;
  static deserializeBinaryFromReader(message: ServerMessageMjVideoMaskChange, reader: jspb.BinaryReader): ServerMessageMjVideoMaskChange;
}

export namespace ServerMessageMjVideoMaskChange {
  export type AsObject = {
    userId: number,
    userRid: number,
    videoMaskId: number,
  }
}

export class ServerMessageMjVoidSuitComplete extends jspb.Message {
  clearPlayersList(): void;
  getPlayersList(): Array<PlayerVoidSuit>;
  setPlayersList(value: Array<PlayerVoidSuit>): void;
  addPlayers(value?: PlayerVoidSuit, index?: number): PlayerVoidSuit;

  clearOpsList(): void;
  getOpsList(): Array<OperatorMJ>;
  setOpsList(value: Array<OperatorMJ>): void;
  addOps(value?: OperatorMJ, index?: number): OperatorMJ;

  getWaitDeadline(): number;
  setWaitDeadline(value: number): void;

  clearReadyTilesList(): void;
  getReadyTilesList(): Array<ReadyTile>;
  setReadyTilesList(value: Array<ReadyTile>): void;
  addReadyTiles(value?: ReadyTile, index?: number): ReadyTile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjVoidSuitComplete.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjVoidSuitComplete): ServerMessageMjVoidSuitComplete.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjVoidSuitComplete, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjVoidSuitComplete;
  static deserializeBinaryFromReader(message: ServerMessageMjVoidSuitComplete, reader: jspb.BinaryReader): ServerMessageMjVoidSuitComplete;
}

export namespace ServerMessageMjVoidSuitComplete {
  export type AsObject = {
    playersList: Array<PlayerVoidSuit.AsObject>,
    opsList: Array<OperatorMJ.AsObject>,
    waitDeadline: number,
    readyTilesList: Array<ReadyTile.AsObject>,
  }
}

export class ServerMessageMjWaitTurnAction extends jspb.Message {
  hasOp(): boolean;
  clearOp(): void;
  getOp(): OperatorMJ | undefined;
  setOp(value?: OperatorMJ): void;

  getWaitDeadline(): number;
  setWaitDeadline(value: number): void;

  getWallAscIndex(): number;
  setWallAscIndex(value: number): void;

  getWallDescIndex(): number;
  setWallDescIndex(value: number): void;

  getWallLeft(): number;
  setWallLeft(value: number): void;

  clearExchangeTilesList(): void;
  getExchangeTilesList(): Array<ExchangeFlower>;
  setExchangeTilesList(value: Array<ExchangeFlower>): void;
  addExchangeTiles(value?: ExchangeFlower, index?: number): ExchangeFlower;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjWaitTurnAction.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjWaitTurnAction): ServerMessageMjWaitTurnAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjWaitTurnAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjWaitTurnAction;
  static deserializeBinaryFromReader(message: ServerMessageMjWaitTurnAction, reader: jspb.BinaryReader): ServerMessageMjWaitTurnAction;
}

export namespace ServerMessageMjWaitTurnAction {
  export type AsObject = {
    op?: OperatorMJ.AsObject,
    waitDeadline: number,
    wallAscIndex: number,
    wallDescIndex: number,
    wallLeft: number,
    exchangeTilesList: Array<ExchangeFlower.AsObject>,
  }
}

export class ServerMessageActionAll extends jspb.Message {
  getOperatorSeatId(): number;
  setOperatorSeatId(value: number): void;

  getAction(): Def.ActionMap[keyof Def.ActionMap];
  setAction(value: Def.ActionMap[keyof Def.ActionMap]): void;

  getAmount(): number;
  setAmount(value: number): void;

  hasNextOperator(): boolean;
  clearNextOperator(): void;
  getNextOperator(): Operator | undefined;
  setNextOperator(value?: Operator): void;

  getAllBet(): number;
  setAllBet(value: number): void;

  getRoundBet(): number;
  setRoundBet(value: number): void;

  getIsAuto(): boolean;
  setIsAuto(value: boolean): void;

  getLeftChips(): number;
  setLeftChips(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageActionAll.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageActionAll): ServerMessageActionAll.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageActionAll, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageActionAll;
  static deserializeBinaryFromReader(message: ServerMessageActionAll, reader: jspb.BinaryReader): ServerMessageActionAll;
}

export namespace ServerMessageActionAll {
  export type AsObject = {
    operatorSeatId: number,
    action: Def.ActionMap[keyof Def.ActionMap],
    amount: number,
    nextOperator?: Operator.AsObject,
    allBet: number,
    roundBet: number,
    isAuto: boolean,
    leftChips: number,
  }
}

export class ServerMessageAddTimeOthers extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getDuration(): number;
  setDuration(value: number): void;

  getTimes(): number;
  setTimes(value: number): void;

  getDeadline(): number;
  setDeadline(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageAddTimeOthers.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageAddTimeOthers): ServerMessageAddTimeOthers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageAddTimeOthers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageAddTimeOthers;
  static deserializeBinaryFromReader(message: ServerMessageAddTimeOthers, reader: jspb.BinaryReader): ServerMessageAddTimeOthers;
}

export namespace ServerMessageAddTimeOthers {
  export type AsObject = {
    seatId: number,
    duration: number,
    times: number,
    deadline: number,
  }
}

export class ServerMessageAgreeSecondPcs extends jspb.Message {
  getRound(): Def.RoundMap[keyof Def.RoundMap];
  setRound(value: Def.RoundMap[keyof Def.RoundMap]): void;

  getSeatId(): number;
  setSeatId(value: number): void;

  getResult(): boolean;
  setResult(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageAgreeSecondPcs.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageAgreeSecondPcs): ServerMessageAgreeSecondPcs.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageAgreeSecondPcs, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageAgreeSecondPcs;
  static deserializeBinaryFromReader(message: ServerMessageAgreeSecondPcs, reader: jspb.BinaryReader): ServerMessageAgreeSecondPcs;
}

export namespace ServerMessageAgreeSecondPcs {
  export type AsObject = {
    round: Def.RoundMap[keyof Def.RoundMap],
    seatId: number,
    result: boolean,
  }
}

export class ServerMessageAgreeSecondPcsTrigged extends jspb.Message {
  getRound(): Def.RoundMap[keyof Def.RoundMap];
  setRound(value: Def.RoundMap[keyof Def.RoundMap]): void;

  clearOperatorList(): void;
  getOperatorList(): Array<Operator>;
  setOperatorList(value: Array<Operator>): void;
  addOperator(value?: Operator, index?: number): Operator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageAgreeSecondPcsTrigged.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageAgreeSecondPcsTrigged): ServerMessageAgreeSecondPcsTrigged.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageAgreeSecondPcsTrigged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageAgreeSecondPcsTrigged;
  static deserializeBinaryFromReader(message: ServerMessageAgreeSecondPcsTrigged, reader: jspb.BinaryReader): ServerMessageAgreeSecondPcsTrigged;
}

export namespace ServerMessageAgreeSecondPcsTrigged {
  export type AsObject = {
    round: Def.RoundMap[keyof Def.RoundMap],
    operatorList: Array<Operator.AsObject>,
  }
}

export class ServerMessageAutoOp extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getEnable(): boolean;
  setEnable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageAutoOp.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageAutoOp): ServerMessageAutoOp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageAutoOp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageAutoOp;
  static deserializeBinaryFromReader(message: ServerMessageAutoOp, reader: jspb.BinaryReader): ServerMessageAutoOp;
}

export namespace ServerMessageAutoOp {
  export type AsObject = {
    seatId: number,
    enable: boolean,
  }
}

export class ServerMessageBringInOrStoreFail extends jspb.Message {
  getIsBringIn(): boolean;
  setIsBringIn(value: boolean): void;

  getCurrentChip(): number;
  setCurrentChip(value: number): void;

  getSrc(): Def.ChipChangeReasonMap[keyof Def.ChipChangeReasonMap];
  setSrc(value: Def.ChipChangeReasonMap[keyof Def.ChipChangeReasonMap]): void;

  getExtErrcode(): number;
  setExtErrcode(value: number): void;

  getExtNotice(): string;
  setExtNotice(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageBringInOrStoreFail.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageBringInOrStoreFail): ServerMessageBringInOrStoreFail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageBringInOrStoreFail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageBringInOrStoreFail;
  static deserializeBinaryFromReader(message: ServerMessageBringInOrStoreFail, reader: jspb.BinaryReader): ServerMessageBringInOrStoreFail;
}

export namespace ServerMessageBringInOrStoreFail {
  export type AsObject = {
    isBringIn: boolean,
    currentChip: number,
    src: Def.ChipChangeReasonMap[keyof Def.ChipChangeReasonMap],
    extErrcode: number,
    extNotice: string,
  }
}

export class ServerMessageBuyInsurance extends jspb.Message {
  getRound(): Def.RoundMap[keyof Def.RoundMap];
  setRound(value: Def.RoundMap[keyof Def.RoundMap]): void;

  getSeatId(): number;
  setSeatId(value: number): void;

  clearBuyList(): void;
  getBuyList(): Array<PotInsuranceBuy>;
  setBuyList(value: Array<PotInsuranceBuy>): void;
  addBuy(value?: PotInsuranceBuy, index?: number): PotInsuranceBuy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageBuyInsurance.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageBuyInsurance): ServerMessageBuyInsurance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageBuyInsurance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageBuyInsurance;
  static deserializeBinaryFromReader(message: ServerMessageBuyInsurance, reader: jspb.BinaryReader): ServerMessageBuyInsurance;
}

export namespace ServerMessageBuyInsurance {
  export type AsObject = {
    round: Def.RoundMap[keyof Def.RoundMap],
    seatId: number,
    buyList: Array<PotInsuranceBuy.AsObject>,
  }
}

export class ServerMessageChipsChange extends jspb.Message {
  clearChangesList(): void;
  getChangesList(): Array<PlayerChipChange>;
  setChangesList(value: Array<PlayerChipChange>): void;
  addChanges(value?: PlayerChipChange, index?: number): PlayerChipChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageChipsChange.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageChipsChange): ServerMessageChipsChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageChipsChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageChipsChange;
  static deserializeBinaryFromReader(message: ServerMessageChipsChange, reader: jspb.BinaryReader): ServerMessageChipsChange;
}

export namespace ServerMessageChipsChange {
  export type AsObject = {
    changesList: Array<PlayerChipChange.AsObject>,
  }
}

export class ServerMessageEncryptCards extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getCutOffset(): number;
  setCutOffset(value: number): void;

  clearCardsList(): void;
  getCardsList(): Array<string>;
  setCardsList(value: Array<string>): void;
  addCards(value: string, index?: number): string;

  getCutType(): number;
  setCutType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageEncryptCards.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageEncryptCards): ServerMessageEncryptCards.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageEncryptCards, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageEncryptCards;
  static deserializeBinaryFromReader(message: ServerMessageEncryptCards, reader: jspb.BinaryReader): ServerMessageEncryptCards;
}

export namespace ServerMessageEncryptCards {
  export type AsObject = {
    seatId: number,
    cutOffset: number,
    cardsList: Array<string>,
    cutType: number,
  }
}

export class ServerMessageForceVideo extends jspb.Message {
  getBuyComplete(): boolean;
  setBuyComplete(value: boolean): void;

  getFinalRoom(): boolean;
  setFinalRoom(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageForceVideo.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageForceVideo): ServerMessageForceVideo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageForceVideo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageForceVideo;
  static deserializeBinaryFromReader(message: ServerMessageForceVideo, reader: jspb.BinaryReader): ServerMessageForceVideo;
}

export namespace ServerMessageForceVideo {
  export type AsObject = {
    buyComplete: boolean,
    finalRoom: boolean,
  }
}

export class ServerMessageGetMsg extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  getExtra(): Uint8Array | string;
  getExtra_asU8(): Uint8Array;
  getExtra_asB64(): string;
  setExtra(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGetMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGetMsg): ServerMessageGetMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGetMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGetMsg;
  static deserializeBinaryFromReader(message: ServerMessageGetMsg, reader: jspb.BinaryReader): ServerMessageGetMsg;
}

export namespace ServerMessageGetMsg {
  export type AsObject = {
    message: string,
    extra: Uint8Array | string,
  }
}

export class ServerMessageHandClear extends jspb.Message {
  getHandNum(): number;
  setHandNum(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageHandClear.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageHandClear): ServerMessageHandClear.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageHandClear, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageHandClear;
  static deserializeBinaryFromReader(message: ServerMessageHandClear, reader: jspb.BinaryReader): ServerMessageHandClear;
}

export namespace ServerMessageHandClear {
  export type AsObject = {
    handNum: number,
  }
}

export class ServerMessageInsuranceOutsCards extends jspb.Message {
  getRound(): Def.RoundMap[keyof Def.RoundMap];
  setRound(value: Def.RoundMap[keyof Def.RoundMap]): void;

  clearPlayerCardsList(): void;
  getPlayerCardsList(): Array<PlayerInsuranceOutsCards>;
  setPlayerCardsList(value: Array<PlayerInsuranceOutsCards>): void;
  addPlayerCards(value?: PlayerInsuranceOutsCards, index?: number): PlayerInsuranceOutsCards;

  clearInsurSeatIdsList(): void;
  getInsurSeatIdsList(): Array<number>;
  setInsurSeatIdsList(value: Array<number>): void;
  addInsurSeatIds(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageInsuranceOutsCards.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageInsuranceOutsCards): ServerMessageInsuranceOutsCards.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageInsuranceOutsCards, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageInsuranceOutsCards;
  static deserializeBinaryFromReader(message: ServerMessageInsuranceOutsCards, reader: jspb.BinaryReader): ServerMessageInsuranceOutsCards;
}

export namespace ServerMessageInsuranceOutsCards {
  export type AsObject = {
    round: Def.RoundMap[keyof Def.RoundMap],
    playerCardsList: Array<PlayerInsuranceOutsCards.AsObject>,
    insurSeatIdsList: Array<number>,
  }
}

export class ServerMessageInsuranceTrigged extends jspb.Message {
  getRound(): Def.RoundMap[keyof Def.RoundMap];
  setRound(value: Def.RoundMap[keyof Def.RoundMap]): void;

  clearOperatorList(): void;
  getOperatorList(): Array<Operator>;
  setOperatorList(value: Array<Operator>): void;
  addOperator(value?: Operator, index?: number): Operator;

  clearInvalidPotsList(): void;
  getInvalidPotsList(): Array<InsurancePotInvalid>;
  setInvalidPotsList(value: Array<InsurancePotInvalid>): void;
  addInvalidPots(value?: InsurancePotInvalid, index?: number): InsurancePotInvalid;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageInsuranceTrigged.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageInsuranceTrigged): ServerMessageInsuranceTrigged.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageInsuranceTrigged, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageInsuranceTrigged;
  static deserializeBinaryFromReader(message: ServerMessageInsuranceTrigged, reader: jspb.BinaryReader): ServerMessageInsuranceTrigged;
}

export namespace ServerMessageInsuranceTrigged {
  export type AsObject = {
    round: Def.RoundMap[keyof Def.RoundMap],
    operatorList: Array<Operator.AsObject>,
    invalidPotsList: Array<InsurancePotInvalid.AsObject>,
  }
}

export class ServerMessageJackpotAward extends jspb.Message {
  getHandNum(): number;
  setHandNum(value: number): void;

  clearAwardUsersList(): void;
  getAwardUsersList(): Array<JackpotAward>;
  setAwardUsersList(value: Array<JackpotAward>): void;
  addAwardUsers(value?: JackpotAward, index?: number): JackpotAward;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageJackpotAward.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageJackpotAward): ServerMessageJackpotAward.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageJackpotAward, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageJackpotAward;
  static deserializeBinaryFromReader(message: ServerMessageJackpotAward, reader: jspb.BinaryReader): ServerMessageJackpotAward;
}

export namespace ServerMessageJackpotAward {
  export type AsObject = {
    handNum: number,
    awardUsersList: Array<JackpotAward.AsObject>,
  }
}

export class ServerMessageJackpotGoldChange extends jspb.Message {
  getJackpotId(): number;
  setJackpotId(value: number): void;

  getJackpotGold(): number;
  setJackpotGold(value: number): void;

  getJackpotParentGold(): number;
  setJackpotParentGold(value: number): void;

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
    jackpotParentGold: number,
  }
}

export class ServerMessageKeepSeat extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getKeep(): boolean;
  setKeep(value: boolean): void;

  getTimes(): number;
  setTimes(value: number): void;

  getLeftTime(): number;
  setLeftTime(value: number): void;

  getPostStatus(): Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap];
  setPostStatus(value: Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap]): void;

  getKeepSeatReason(): Def.KeepSeatReasonMap[keyof Def.KeepSeatReasonMap];
  setKeepSeatReason(value: Def.KeepSeatReasonMap[keyof Def.KeepSeatReasonMap]): void;

  getDeadline(): number;
  setDeadline(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageKeepSeat.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageKeepSeat): ServerMessageKeepSeat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageKeepSeat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageKeepSeat;
  static deserializeBinaryFromReader(message: ServerMessageKeepSeat, reader: jspb.BinaryReader): ServerMessageKeepSeat;
}

export namespace ServerMessageKeepSeat {
  export type AsObject = {
    seatId: number,
    keep: boolean,
    times: number,
    leftTime: number,
    postStatus: Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap],
    keepSeatReason: Def.KeepSeatReasonMap[keyof Def.KeepSeatReasonMap],
    deadline: number,
  }
}

export class ServerMessageLeaveNotification extends jspb.Message {
  getReason(): Def.LeaveReasonMap[keyof Def.LeaveReasonMap];
  setReason(value: Def.LeaveReasonMap[keyof Def.LeaveReasonMap]): void;

  getChip(): number;
  setChip(value: number): void;

  getAccountChips(): number;
  setAccountChips(value: number): void;

  getStoreChips(): number;
  setStoreChips(value: number): void;

  getRebuyTimes(): number;
  setRebuyTimes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageLeaveNotification.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageLeaveNotification): ServerMessageLeaveNotification.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageLeaveNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageLeaveNotification;
  static deserializeBinaryFromReader(message: ServerMessageLeaveNotification, reader: jspb.BinaryReader): ServerMessageLeaveNotification;
}

export namespace ServerMessageLeaveNotification {
  export type AsObject = {
    reason: Def.LeaveReasonMap[keyof Def.LeaveReasonMap],
    chip: number,
    accountChips: number,
    storeChips: number,
    rebuyTimes: number,
  }
}

export class ServerMessageNextChange extends jspb.Message {
  getAnte(): number;
  setAnte(value: number): void;

  getSmallBlind(): number;
  setSmallBlind(value: number): void;

  getIgnorePreflop(): boolean;
  setIgnorePreflop(value: boolean): void;

  getIsAlwaysSecondPcs(): boolean;
  setIsAlwaysSecondPcs(value: boolean): void;

  getInsurance(): boolean;
  setInsurance(value: boolean): void;

  getSquidOpen(): boolean;
  setSquidOpen(value: boolean): void;

  getSquidBase(): number;
  setSquidBase(value: number): void;

  getRoomType(): number;
  setRoomType(value: number): void;

  getCriticalHitOpen(): boolean;
  setCriticalHitOpen(value: boolean): void;

  getSquidTotalLimit(): number;
  setSquidTotalLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageNextChange.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageNextChange): ServerMessageNextChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageNextChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageNextChange;
  static deserializeBinaryFromReader(message: ServerMessageNextChange, reader: jspb.BinaryReader): ServerMessageNextChange;
}

export namespace ServerMessageNextChange {
  export type AsObject = {
    ante: number,
    smallBlind: number,
    ignorePreflop: boolean,
    isAlwaysSecondPcs: boolean,
    insurance: boolean,
    squidOpen: boolean,
    squidBase: number,
    roomType: number,
    criticalHitOpen: boolean,
    squidTotalLimit: number,
  }
}

export class ServerMessagePostStatusChange extends jspb.Message {
  clearChangesList(): void;
  getChangesList(): Array<PostStatusChange>;
  setChangesList(value: Array<PostStatusChange>): void;
  addChanges(value?: PostStatusChange, index?: number): PostStatusChange;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessagePostStatusChange.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessagePostStatusChange): ServerMessagePostStatusChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessagePostStatusChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessagePostStatusChange;
  static deserializeBinaryFromReader(message: ServerMessagePostStatusChange, reader: jspb.BinaryReader): ServerMessagePostStatusChange;
}

export namespace ServerMessagePostStatusChange {
  export type AsObject = {
    changesList: Array<PostStatusChange.AsObject>,
  }
}

export class ServerMessagePublicCards extends jspb.Message {
  clearPublicCardsArrayList(): void;
  getPublicCardsArrayList(): Array<number>;
  setPublicCardsArrayList(value: Array<number>): void;
  addPublicCardsArray(value: number, index?: number): number;

  hasNextOperator(): boolean;
  clearNextOperator(): void;
  getNextOperator(): Operator | undefined;
  setNextOperator(value?: Operator): void;

  clearExtPublicCardsArrayList(): void;
  getExtPublicCardsArrayList(): Array<number>;
  setExtPublicCardsArrayList(value: Array<number>): void;
  addExtPublicCardsArray(value: number, index?: number): number;

  getRnd(): Def.RoundMap[keyof Def.RoundMap];
  setRnd(value: Def.RoundMap[keyof Def.RoundMap]): void;

  clearAllinUsersList(): void;
  getAllinUsersList(): Array<PlayerAllInShowCardWinCardsLength>;
  setAllinUsersList(value: Array<PlayerAllInShowCardWinCardsLength>): void;
  addAllinUsers(value?: PlayerAllInShowCardWinCardsLength, index?: number): PlayerAllInShowCardWinCardsLength;

  clearExtPublicCardsAllinSummaryList(): void;
  getExtPublicCardsAllinSummaryList(): Array<SecondPublicCardsPlayerAllInShowCardSummary>;
  setExtPublicCardsAllinSummaryList(value: Array<SecondPublicCardsPlayerAllInShowCardSummary>): void;
  addExtPublicCardsAllinSummary(value?: SecondPublicCardsPlayerAllInShowCardSummary, index?: number): SecondPublicCardsPlayerAllInShowCardSummary;

  clearPublicCardsArray2List(): void;
  getPublicCardsArray2List(): Array<number>;
  setPublicCardsArray2List(value: Array<number>): void;
  addPublicCardsArray2(value: number, index?: number): number;

  clearAllinUsers2List(): void;
  getAllinUsers2List(): Array<PlayerAllInShowCardWinCardsLength>;
  setAllinUsers2List(value: Array<PlayerAllInShowCardWinCardsLength>): void;
  addAllinUsers2(value?: PlayerAllInShowCardWinCardsLength, index?: number): PlayerAllInShowCardWinCardsLength;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessagePublicCards.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessagePublicCards): ServerMessagePublicCards.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessagePublicCards, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessagePublicCards;
  static deserializeBinaryFromReader(message: ServerMessagePublicCards, reader: jspb.BinaryReader): ServerMessagePublicCards;
}

export namespace ServerMessagePublicCards {
  export type AsObject = {
    publicCardsArrayList: Array<number>,
    nextOperator?: Operator.AsObject,
    extPublicCardsArrayList: Array<number>,
    rnd: Def.RoundMap[keyof Def.RoundMap],
    allinUsersList: Array<PlayerAllInShowCardWinCardsLength.AsObject>,
    extPublicCardsAllinSummaryList: Array<SecondPublicCardsPlayerAllInShowCardSummary.AsObject>,
    publicCardsArray2List: Array<number>,
    allinUsers2List: Array<PlayerAllInShowCardWinCardsLength.AsObject>,
  }
}

export class ServerMessageSeatedOthers extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getSex(): number;
  setSex(value: number): void;

  getAvatar(): string;
  setAvatar(value: string): void;

  getName(): string;
  setName(value: string): void;

  getUserRid(): number;
  setUserRid(value: number): void;

  getChips(): number;
  setChips(value: number): void;

  getStoreChips(): number;
  setStoreChips(value: number): void;

  getHunterKill(): number;
  setHunterKill(value: number): void;

  getHunterKillAward(): number;
  setHunterKillAward(value: number): void;

  getHunterKillAwardOther(): number;
  setHunterKillAwardOther(value: number): void;

  getHunterHeadValue(): number;
  setHunterHeadValue(value: number): void;

  getVip(): number;
  setVip(value: number): void;

  getKeepSeatLeftTime(): number;
  setKeepSeatLeftTime(value: number): void;

  getKeepSeatDeadline(): number;
  setKeepSeatDeadline(value: number): void;

  getDeposit(): number;
  setDeposit(value: number): void;

  getSquidIn(): boolean;
  setSquidIn(value: boolean): void;

  getUserSubscriptionId(): number;
  setUserSubscriptionId(value: number): void;

  getIpAddr(): string;
  setIpAddr(value: string): void;

  getVideoMaskId(): number;
  setVideoMaskId(value: number): void;

  getTotalBringin(): number;
  setTotalBringin(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageSeatedOthers.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageSeatedOthers): ServerMessageSeatedOthers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageSeatedOthers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageSeatedOthers;
  static deserializeBinaryFromReader(message: ServerMessageSeatedOthers, reader: jspb.BinaryReader): ServerMessageSeatedOthers;
}

export namespace ServerMessageSeatedOthers {
  export type AsObject = {
    seatId: number,
    sex: number,
    avatar: string,
    name: string,
    userRid: number,
    chips: number,
    storeChips: number,
    hunterKill: number,
    hunterKillAward: number,
    hunterKillAwardOther: number,
    hunterHeadValue: number,
    vip: number,
    keepSeatLeftTime: number,
    keepSeatDeadline: number,
    deposit: number,
    squidIn: boolean,
    userSubscriptionId: number,
    ipAddr: string,
    videoMaskId: number,
    totalBringin: number,
  }
}

export class ServerMessageShowPublicCardsOthers extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getRound(): Def.RoundMap[keyof Def.RoundMap];
  setRound(value: Def.RoundMap[keyof Def.RoundMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageShowPublicCardsOthers.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageShowPublicCardsOthers): ServerMessageShowPublicCardsOthers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageShowPublicCardsOthers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageShowPublicCardsOthers;
  static deserializeBinaryFromReader(message: ServerMessageShowPublicCardsOthers, reader: jspb.BinaryReader): ServerMessageShowPublicCardsOthers;
}

export namespace ServerMessageShowPublicCardsOthers {
  export type AsObject = {
    seatId: number,
    round: Def.RoundMap[keyof Def.RoundMap],
  }
}

export class ServerMessageShowViewCards extends jspb.Message {
  clearPlayerCardsList(): void;
  getPlayerCardsList(): Array<PlayerCards>;
  setPlayerCardsList(value: Array<PlayerCards>): void;
  addPlayerCards(value?: PlayerCards, index?: number): PlayerCards;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageShowViewCards.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageShowViewCards): ServerMessageShowViewCards.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageShowViewCards, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageShowViewCards;
  static deserializeBinaryFromReader(message: ServerMessageShowViewCards, reader: jspb.BinaryReader): ServerMessageShowViewCards;
}

export namespace ServerMessageShowViewCards {
  export type AsObject = {
    playerCardsList: Array<PlayerCards.AsObject>,
  }
}

export class ServerMessageShowcards extends jspb.Message {
  clearPlayerCardsList(): void;
  getPlayerCardsList(): Array<PlayerCards>;
  setPlayerCardsList(value: Array<PlayerCards>): void;
  addPlayerCards(value?: PlayerCards, index?: number): PlayerCards;

  getIsAll(): boolean;
  setIsAll(value: boolean): void;

  clearAllinUsersList(): void;
  getAllinUsersList(): Array<PlayerAllInShowCardWinCardsLength>;
  setAllinUsersList(value: Array<PlayerAllInShowCardWinCardsLength>): void;
  addAllinUsers(value?: PlayerAllInShowCardWinCardsLength, index?: number): PlayerAllInShowCardWinCardsLength;

  clearAllinUsers2List(): void;
  getAllinUsers2List(): Array<PlayerAllInShowCardWinCardsLength>;
  setAllinUsers2List(value: Array<PlayerAllInShowCardWinCardsLength>): void;
  addAllinUsers2(value?: PlayerAllInShowCardWinCardsLength, index?: number): PlayerAllInShowCardWinCardsLength;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageShowcards.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageShowcards): ServerMessageShowcards.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageShowcards, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageShowcards;
  static deserializeBinaryFromReader(message: ServerMessageShowcards, reader: jspb.BinaryReader): ServerMessageShowcards;
}

export namespace ServerMessageShowcards {
  export type AsObject = {
    playerCardsList: Array<PlayerCards.AsObject>,
    isAll: boolean,
    allinUsersList: Array<PlayerAllInShowCardWinCardsLength.AsObject>,
    allinUsers2List: Array<PlayerAllInShowCardWinCardsLength.AsObject>,
  }
}

export class ServerMessageSidePots extends jspb.Message {
  clearPotsList(): void;
  getPotsList(): Array<SidePot>;
  setPotsList(value: Array<SidePot>): void;
  addPots(value?: SidePot, index?: number): SidePot;

  clearSecondPotsList(): void;
  getSecondPotsList(): Array<SidePot>;
  setSecondPotsList(value: Array<SidePot>): void;
  addSecondPots(value?: SidePot, index?: number): SidePot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageSidePots.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageSidePots): ServerMessageSidePots.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageSidePots, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageSidePots;
  static deserializeBinaryFromReader(message: ServerMessageSidePots, reader: jspb.BinaryReader): ServerMessageSidePots;
}

export namespace ServerMessageSidePots {
  export type AsObject = {
    potsList: Array<SidePot.AsObject>,
    secondPotsList: Array<SidePot.AsObject>,
  }
}

export class ServerMessageSquidIn extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getEnable(): boolean;
  setEnable(value: boolean): void;

  getFirstIn(): boolean;
  setFirstIn(value: boolean): void;

  getSquidTotalLimit(): number;
  setSquidTotalLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageSquidIn.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageSquidIn): ServerMessageSquidIn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageSquidIn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageSquidIn;
  static deserializeBinaryFromReader(message: ServerMessageSquidIn, reader: jspb.BinaryReader): ServerMessageSquidIn;
}

export namespace ServerMessageSquidIn {
  export type AsObject = {
    seatId: number,
    enable: boolean,
    firstIn: boolean,
    squidTotalLimit: number,
  }
}

export class ServerMessageStandup extends jspb.Message {
  getSeatId(): number;
  setSeatId(value: number): void;

  getReason(): Def.StandUpReasonMap[keyof Def.StandUpReasonMap];
  setReason(value: Def.StandUpReasonMap[keyof Def.StandUpReasonMap]): void;

  getBringOut(): number;
  setBringOut(value: number): void;

  getAccountChips(): number;
  setAccountChips(value: number): void;

  getFee(): number;
  setFee(value: number): void;

  getStoreChips(): number;
  setStoreChips(value: number): void;

  getWillLeave(): boolean;
  setWillLeave(value: boolean): void;

  getMuted(): boolean;
  setMuted(value: boolean): void;

  hasNextRoom(): boolean;
  clearNextRoom(): void;
  getNextRoom(): ChangeRoomInfo | undefined;
  setNextRoom(value?: ChangeRoomInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageStandup.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageStandup): ServerMessageStandup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageStandup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageStandup;
  static deserializeBinaryFromReader(message: ServerMessageStandup, reader: jspb.BinaryReader): ServerMessageStandup;
}

export namespace ServerMessageStandup {
  export type AsObject = {
    seatId: number,
    reason: Def.StandUpReasonMap[keyof Def.StandUpReasonMap],
    bringOut: number,
    accountChips: number,
    fee: number,
    storeChips: number,
    willLeave: boolean,
    muted: boolean,
    nextRoom?: ChangeRoomInfo.AsObject,
  }
}

export class ServerMessageStartInfo extends jspb.Message {
  hasHandInfo(): boolean;
  clearHandInfo(): void;
  getHandInfo(): HandInfo | undefined;
  setHandInfo(value?: HandInfo): void;

  hasNextOperator(): boolean;
  clearNextOperator(): void;
  getNextOperator(): Operator | undefined;
  setNextOperator(value?: Operator): void;

  clearPlayersList(): void;
  getPlayersList(): Array<PlayerStartInfo>;
  setPlayersList(value: Array<PlayerStartInfo>): void;
  addPlayers(value?: PlayerStartInfo, index?: number): PlayerStartInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageStartInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageStartInfo): ServerMessageStartInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageStartInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageStartInfo;
  static deserializeBinaryFromReader(message: ServerMessageStartInfo, reader: jspb.BinaryReader): ServerMessageStartInfo;
}

export namespace ServerMessageStartInfo {
  export type AsObject = {
    handInfo?: HandInfo.AsObject,
    nextOperator?: Operator.AsObject,
    playersList: Array<PlayerStartInfo.AsObject>,
  }
}

export class ServerMessageSyncHand extends jspb.Message {
  getStartTime(): number;
  setStartTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageSyncHand.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageSyncHand): ServerMessageSyncHand.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageSyncHand, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageSyncHand;
  static deserializeBinaryFromReader(message: ServerMessageSyncHand, reader: jspb.BinaryReader): ServerMessageSyncHand;
}

export namespace ServerMessageSyncHand {
  export type AsObject = {
    startTime: number,
  }
}

export class ServerMessageUpBlind extends jspb.Message {
  getAnte(): number;
  setAnte(value: number): void;

  getSmallBlind(): number;
  setSmallBlind(value: number): void;

  hasMttProgress(): boolean;
  clearMttProgress(): void;
  getMttProgress(): MTTProgress | undefined;
  setMttProgress(value?: MTTProgress): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageUpBlind.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageUpBlind): ServerMessageUpBlind.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageUpBlind, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageUpBlind;
  static deserializeBinaryFromReader(message: ServerMessageUpBlind, reader: jspb.BinaryReader): ServerMessageUpBlind;
}

export namespace ServerMessageUpBlind {
  export type AsObject = {
    ante: number,
    smallBlind: number,
    mttProgress?: MTTProgress.AsObject,
  }
}

export class ServerMessageVideoMaskChange extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getUserRid(): number;
  setUserRid(value: number): void;

  getVideoMaskId(): number;
  setVideoMaskId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageVideoMaskChange.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageVideoMaskChange): ServerMessageVideoMaskChange.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageVideoMaskChange, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageVideoMaskChange;
  static deserializeBinaryFromReader(message: ServerMessageVideoMaskChange, reader: jspb.BinaryReader): ServerMessageVideoMaskChange;
}

export namespace ServerMessageVideoMaskChange {
  export type AsObject = {
    userId: number,
    userRid: number,
    videoMaskId: number,
  }
}

export class ServerMessageWaitCheckAutoAddTime extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getSeatId(): number;
  setSeatId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageWaitCheckAutoAddTime.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageWaitCheckAutoAddTime): ServerMessageWaitCheckAutoAddTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageWaitCheckAutoAddTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageWaitCheckAutoAddTime;
  static deserializeBinaryFromReader(message: ServerMessageWaitCheckAutoAddTime, reader: jspb.BinaryReader): ServerMessageWaitCheckAutoAddTime;
}

export namespace ServerMessageWaitCheckAutoAddTime {
  export type AsObject = {
    userId: number,
    seatId: number,
  }
}

export class ServerMessageWinner extends jspb.Message {
  clearResultsList(): void;
  getResultsList(): Array<Result>;
  setResultsList(value: Array<Result>): void;
  addResults(value?: Result, index?: number): Result;

  getHandNum(): number;
  setHandNum(value: number): void;

  getRound(): Def.RoundMap[keyof Def.RoundMap];
  setRound(value: Def.RoundMap[keyof Def.RoundMap]): void;

  hasPools(): boolean;
  clearPools(): void;
  getPools(): ExternalPools | undefined;
  setPools(value?: ExternalPools): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageWinner.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageWinner): ServerMessageWinner.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageWinner, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageWinner;
  static deserializeBinaryFromReader(message: ServerMessageWinner, reader: jspb.BinaryReader): ServerMessageWinner;
}

export namespace ServerMessageWinner {
  export type AsObject = {
    resultsList: Array<Result.AsObject>,
    handNum: number,
    round: Def.RoundMap[keyof Def.RoundMap],
    pools?: ExternalPools.AsObject,
  }
}

export class ServerMessageUtilAntiCheatRoomVideo extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getRoomType(): number;
  setRoomType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageUtilAntiCheatRoomVideo.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageUtilAntiCheatRoomVideo): ServerMessageUtilAntiCheatRoomVideo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageUtilAntiCheatRoomVideo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageUtilAntiCheatRoomVideo;
  static deserializeBinaryFromReader(message: ServerMessageUtilAntiCheatRoomVideo, reader: jspb.BinaryReader): ServerMessageUtilAntiCheatRoomVideo;
}

export namespace ServerMessageUtilAntiCheatRoomVideo {
  export type AsObject = {
    status: number,
    roomType: number,
  }
}

export class ServerMessageUtilFaceRecognize extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getRequestUserRid(): number;
  setRequestUserRid(value: number): void;

  getRequestUserName(): string;
  setRequestUserName(value: string): void;

  getRecogUserRid(): number;
  setRecogUserRid(value: number): void;

  getRecogUserName(): string;
  setRecogUserName(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  getRecogTime(): number;
  setRecogTime(value: number): void;

  getCreateTime(): number;
  setCreateTime(value: number): void;

  getTimeoutStamp(): number;
  setTimeoutStamp(value: number): void;

  getRoomType(): number;
  setRoomType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageUtilFaceRecognize.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageUtilFaceRecognize): ServerMessageUtilFaceRecognize.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageUtilFaceRecognize, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageUtilFaceRecognize;
  static deserializeBinaryFromReader(message: ServerMessageUtilFaceRecognize, reader: jspb.BinaryReader): ServerMessageUtilFaceRecognize;
}

export namespace ServerMessageUtilFaceRecognize {
  export type AsObject = {
    id: number,
    requestUserRid: number,
    requestUserName: string,
    recogUserRid: number,
    recogUserName: string,
    status: number,
    recogTime: number,
    createTime: number,
    timeoutStamp: number,
    roomType: number,
  }
}

export class ClientMessageCbBringIn extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): void;

  getBringIn(): number;
  setBringIn(value: number): void;

  getClubId(): number;
  setClubId(value: number): void;

  getReturnOrNew(): number;
  setReturnOrNew(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageCbBringIn.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageCbBringIn): ClientMessageCbBringIn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageCbBringIn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageCbBringIn;
  static deserializeBinaryFromReader(message: ClientMessageCbBringIn, reader: jspb.BinaryReader): ClientMessageCbBringIn;
}

export namespace ClientMessageCbBringIn {
  export type AsObject = {
    roomId: number,
    bringIn: number,
    clubId: number,
    returnOrNew: number,
  }
}

export class ServerMessageCbBringIn extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getBringIn(): number;
  setBringIn(value: number): void;

  getCurrent(): number;
  setCurrent(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageCbBringIn.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageCbBringIn): ServerMessageCbBringIn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageCbBringIn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageCbBringIn;
  static deserializeBinaryFromReader(message: ServerMessageCbBringIn, reader: jspb.BinaryReader): ServerMessageCbBringIn;
}

export namespace ServerMessageCbBringIn {
  export type AsObject = {
    status: number,
    bringIn: number,
    current: number,
  }
}

export class ClientMessageCbCancelPlay extends jspb.Message {
  getGameNum(): number;
  setGameNum(value: number): void;

  getRoomId(): number;
  setRoomId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageCbCancelPlay.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageCbCancelPlay): ClientMessageCbCancelPlay.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageCbCancelPlay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageCbCancelPlay;
  static deserializeBinaryFromReader(message: ClientMessageCbCancelPlay, reader: jspb.BinaryReader): ClientMessageCbCancelPlay;
}

export namespace ClientMessageCbCancelPlay {
  export type AsObject = {
    gameNum: number,
    roomId: number,
  }
}

export class ServerMessageCbCancelPlay extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getAmount(): number;
  setAmount(value: number): void;

  getCurrent(): number;
  setCurrent(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageCbCancelPlay.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageCbCancelPlay): ServerMessageCbCancelPlay.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageCbCancelPlay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageCbCancelPlay;
  static deserializeBinaryFromReader(message: ServerMessageCbCancelPlay, reader: jspb.BinaryReader): ServerMessageCbCancelPlay;
}

export namespace ServerMessageCbCancelPlay {
  export type AsObject = {
    status: number,
    amount: number,
    current: number,
  }
}

export class ClientMessageCbChat extends jspb.Message {
  getConsume(): DefCB.ConsumeTypeMap[keyof DefCB.ConsumeTypeMap];
  setConsume(value: DefCB.ConsumeTypeMap[keyof DefCB.ConsumeTypeMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  getExtra(): Uint8Array | string;
  getExtra_asU8(): Uint8Array;
  getExtra_asB64(): string;
  setExtra(value: Uint8Array | string): void;

  getRoomId(): number;
  setRoomId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageCbChat.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageCbChat): ClientMessageCbChat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageCbChat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageCbChat;
  static deserializeBinaryFromReader(message: ClientMessageCbChat, reader: jspb.BinaryReader): ClientMessageCbChat;
}

export namespace ClientMessageCbChat {
  export type AsObject = {
    consume: DefCB.ConsumeTypeMap[keyof DefCB.ConsumeTypeMap],
    message: string,
    extra: Uint8Array | string,
    roomId: number,
  }
}

export class ServerMessageCbChat extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageCbChat.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageCbChat): ServerMessageCbChat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageCbChat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageCbChat;
  static deserializeBinaryFromReader(message: ServerMessageCbChat, reader: jspb.BinaryReader): ServerMessageCbChat;
}

export namespace ServerMessageCbChat {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageCbEnterRoom extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageCbEnterRoom.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageCbEnterRoom): ClientMessageCbEnterRoom.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageCbEnterRoom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageCbEnterRoom;
  static deserializeBinaryFromReader(message: ClientMessageCbEnterRoom, reader: jspb.BinaryReader): ClientMessageCbEnterRoom;
}

export namespace ClientMessageCbEnterRoom {
  export type AsObject = {
    roomId: number,
  }
}

export class ServerMessageCbEnterRoom extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): CBRoom | undefined;
  setRoom(value?: CBRoom): void;

  hasGame(): boolean;
  clearGame(): void;
  getGame(): CBGame | undefined;
  setGame(value?: CBGame): void;

  clearItemsList(): void;
  getItemsList(): Array<CBHistoryItem>;
  setItemsList(value: Array<CBHistoryItem>): void;
  addItems(value?: CBHistoryItem, index?: number): CBHistoryItem;

  getOnline(): number;
  setOnline(value: number): void;

  clearMyPlayList(): void;
  getMyPlayList(): Array<CBPlayResult>;
  setMyPlayList(value: Array<CBPlayResult>): void;
  addMyPlay(value?: CBPlayResult, index?: number): CBPlayResult;

  getMyWin(): number;
  setMyWin(value: number): void;

  getOnTable(): boolean;
  setOnTable(value: boolean): void;

  getMyWallet(): number;
  setMyWallet(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageCbEnterRoom.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageCbEnterRoom): ServerMessageCbEnterRoom.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageCbEnterRoom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageCbEnterRoom;
  static deserializeBinaryFromReader(message: ServerMessageCbEnterRoom, reader: jspb.BinaryReader): ServerMessageCbEnterRoom;
}

export namespace ServerMessageCbEnterRoom {
  export type AsObject = {
    status: number,
    room?: CBRoom.AsObject,
    game?: CBGame.AsObject,
    itemsList: Array<CBHistoryItem.AsObject>,
    online: number,
    myPlayList: Array<CBPlayResult.AsObject>,
    myWin: number,
    onTable: boolean,
    myWallet: number,
  }
}

export class ClientMessageCbLastGames extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageCbLastGames.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageCbLastGames): ClientMessageCbLastGames.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageCbLastGames, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageCbLastGames;
  static deserializeBinaryFromReader(message: ClientMessageCbLastGames, reader: jspb.BinaryReader): ClientMessageCbLastGames;
}

export namespace ClientMessageCbLastGames {
  export type AsObject = {
    roomId: number,
    limit: number,
  }
}

export class ServerMessageCbLastGames extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  clearGamesList(): void;
  getGamesList(): Array<CBGameHistorySummary>;
  setGamesList(value: Array<CBGameHistorySummary>): void;
  addGames(value?: CBGameHistorySummary, index?: number): CBGameHistorySummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageCbLastGames.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageCbLastGames): ServerMessageCbLastGames.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageCbLastGames, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageCbLastGames;
  static deserializeBinaryFromReader(message: ServerMessageCbLastGames, reader: jspb.BinaryReader): ServerMessageCbLastGames;
}

export namespace ServerMessageCbLastGames {
  export type AsObject = {
    status: number,
    gamesList: Array<CBGameHistorySummary.AsObject>,
  }
}

export class ClientMessageCbLeave extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageCbLeave.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageCbLeave): ClientMessageCbLeave.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageCbLeave, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageCbLeave;
  static deserializeBinaryFromReader(message: ClientMessageCbLeave, reader: jspb.BinaryReader): ClientMessageCbLeave;
}

export namespace ClientMessageCbLeave {
  export type AsObject = {
    roomId: number,
  }
}

export class ServerMessageCbLeave extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageCbLeave.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageCbLeave): ServerMessageCbLeave.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageCbLeave, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageCbLeave;
  static deserializeBinaryFromReader(message: ServerMessageCbLeave, reader: jspb.BinaryReader): ServerMessageCbLeave;
}

export namespace ServerMessageCbLeave {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageCbOnline extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  getRoomId(): number;
  setRoomId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageCbOnline.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageCbOnline): ClientMessageCbOnline.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageCbOnline, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageCbOnline;
  static deserializeBinaryFromReader(message: ClientMessageCbOnline, reader: jspb.BinaryReader): ClientMessageCbOnline;
}

export namespace ClientMessageCbOnline {
  export type AsObject = {
    offset: number,
    limit: number,
    roomId: number,
  }
}

export class ServerMessageCbOnline extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  clearUsersList(): void;
  getUsersList(): Array<CBUser>;
  setUsersList(value: Array<CBUser>): void;
  addUsers(value?: CBUser, index?: number): CBUser;

  getOnline(): number;
  setOnline(value: number): void;

  getGuestCount(): number;
  setGuestCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageCbOnline.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageCbOnline): ServerMessageCbOnline.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageCbOnline, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageCbOnline;
  static deserializeBinaryFromReader(message: ServerMessageCbOnline, reader: jspb.BinaryReader): ServerMessageCbOnline;
}

export namespace ServerMessageCbOnline {
  export type AsObject = {
    status: number,
    offset: number,
    limit: number,
    usersList: Array<CBUser.AsObject>,
    online: number,
    guestCount: number,
  }
}

export class ClientMessageCbPlay extends jspb.Message {
  getGameNum(): number;
  setGameNum(value: number): void;

  getRoomId(): number;
  setRoomId(value: number): void;

  clearSlotsList(): void;
  getSlotsList(): Array<CBPlaySummary>;
  setSlotsList(value: Array<CBPlaySummary>): void;
  addSlots(value?: CBPlaySummary, index?: number): CBPlaySummary;

  getClubId(): number;
  setClubId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageCbPlay.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageCbPlay): ClientMessageCbPlay.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageCbPlay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageCbPlay;
  static deserializeBinaryFromReader(message: ClientMessageCbPlay, reader: jspb.BinaryReader): ClientMessageCbPlay;
}

export namespace ClientMessageCbPlay {
  export type AsObject = {
    gameNum: number,
    roomId: number,
    slotsList: Array<CBPlaySummary.AsObject>,
    clubId: number,
  }
}

export class ServerMessageCbPlay extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getCurrent(): number;
  setCurrent(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageCbPlay.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageCbPlay): ServerMessageCbPlay.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageCbPlay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageCbPlay;
  static deserializeBinaryFromReader(message: ServerMessageCbPlay, reader: jspb.BinaryReader): ServerMessageCbPlay;
}

export namespace ServerMessageCbPlay {
  export type AsObject = {
    status: number,
    current: number,
  }
}

export class ClientMessageCbSyncEnter extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageCbSyncEnter.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageCbSyncEnter): ClientMessageCbSyncEnter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageCbSyncEnter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageCbSyncEnter;
  static deserializeBinaryFromReader(message: ClientMessageCbSyncEnter, reader: jspb.BinaryReader): ClientMessageCbSyncEnter;
}

export namespace ClientMessageCbSyncEnter {
  export type AsObject = {
    roomId: number,
  }
}

export class ServerMessageCbSyncEnter extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): CBRoom | undefined;
  setRoom(value?: CBRoom): void;

  hasGame(): boolean;
  clearGame(): void;
  getGame(): CBGame | undefined;
  setGame(value?: CBGame): void;

  clearItemsList(): void;
  getItemsList(): Array<CBHistoryItem>;
  setItemsList(value: Array<CBHistoryItem>): void;
  addItems(value?: CBHistoryItem, index?: number): CBHistoryItem;

  getOnline(): number;
  setOnline(value: number): void;

  clearMyPlayList(): void;
  getMyPlayList(): Array<CBPlayResult>;
  setMyPlayList(value: Array<CBPlayResult>): void;
  addMyPlay(value?: CBPlayResult, index?: number): CBPlayResult;

  getMyWin(): number;
  setMyWin(value: number): void;

  getOnTable(): boolean;
  setOnTable(value: boolean): void;

  getMyWallet(): number;
  setMyWallet(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageCbSyncEnter.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageCbSyncEnter): ServerMessageCbSyncEnter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageCbSyncEnter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageCbSyncEnter;
  static deserializeBinaryFromReader(message: ServerMessageCbSyncEnter, reader: jspb.BinaryReader): ServerMessageCbSyncEnter;
}

export namespace ServerMessageCbSyncEnter {
  export type AsObject = {
    status: number,
    room?: CBRoom.AsObject,
    game?: CBGame.AsObject,
    itemsList: Array<CBHistoryItem.AsObject>,
    online: number,
    myPlayList: Array<CBPlayResult.AsObject>,
    myWin: number,
    onTable: boolean,
    myWallet: number,
  }
}

export class ClientMessageCbTop extends jspb.Message {
  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  getRoomId(): number;
  setRoomId(value: number): void;

  getOrderbyType(): DefCB.OrderByTypeMap[keyof DefCB.OrderByTypeMap];
  setOrderbyType(value: DefCB.OrderByTypeMap[keyof DefCB.OrderByTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageCbTop.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageCbTop): ClientMessageCbTop.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageCbTop, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageCbTop;
  static deserializeBinaryFromReader(message: ClientMessageCbTop, reader: jspb.BinaryReader): ClientMessageCbTop;
}

export namespace ClientMessageCbTop {
  export type AsObject = {
    offset: number,
    limit: number,
    roomId: number,
    orderbyType: DefCB.OrderByTypeMap[keyof DefCB.OrderByTypeMap],
  }
}

export class ServerMessageCbTop extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  clearUsersList(): void;
  getUsersList(): Array<CBUserPlay>;
  setUsersList(value: Array<CBUserPlay>): void;
  addUsers(value?: CBUserPlay, index?: number): CBUserPlay;

  getOrderbyType(): DefCB.OrderByTypeMap[keyof DefCB.OrderByTypeMap];
  setOrderbyType(value: DefCB.OrderByTypeMap[keyof DefCB.OrderByTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageCbTop.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageCbTop): ServerMessageCbTop.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageCbTop, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageCbTop;
  static deserializeBinaryFromReader(message: ServerMessageCbTop, reader: jspb.BinaryReader): ServerMessageCbTop;
}

export namespace ServerMessageCbTop {
  export type AsObject = {
    status: number,
    offset: number,
    limit: number,
    usersList: Array<CBUserPlay.AsObject>,
    orderbyType: DefCB.OrderByTypeMap[keyof DefCB.OrderByTypeMap],
  }
}

export class ClientMessageCbWaymap extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageCbWaymap.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageCbWaymap): ClientMessageCbWaymap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageCbWaymap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageCbWaymap;
  static deserializeBinaryFromReader(message: ClientMessageCbWaymap, reader: jspb.BinaryReader): ClientMessageCbWaymap;
}

export namespace ClientMessageCbWaymap {
  export type AsObject = {
    roomId: number,
  }
}

export class ServerMessageCbWaymap extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  hasBigMap(): boolean;
  clearBigMap(): void;
  getBigMap(): CBWayPointMap | undefined;
  setBigMap(value?: CBWayPointMap): void;

  hasSmallMap(): boolean;
  clearSmallMap(): void;
  getSmallMap(): CBWayPointMap | undefined;
  setSmallMap(value?: CBWayPointMap): void;

  hasPanMap(): boolean;
  clearPanMap(): void;
  getPanMap(): CBWayPointMap | undefined;
  setPanMap(value?: CBWayPointMap): void;

  clearPreviewList(): void;
  getPreviewList(): Array<CBWayPointPreview>;
  setPreviewList(value: Array<CBWayPointPreview>): void;
  addPreview(value?: CBWayPointPreview, index?: number): CBWayPointPreview;

  clearItemsList(): void;
  getItemsList(): Array<CBHistorySimpleItem>;
  setItemsList(value: Array<CBHistorySimpleItem>): void;
  addItems(value?: CBHistorySimpleItem, index?: number): CBHistorySimpleItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageCbWaymap.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageCbWaymap): ServerMessageCbWaymap.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageCbWaymap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageCbWaymap;
  static deserializeBinaryFromReader(message: ServerMessageCbWaymap, reader: jspb.BinaryReader): ServerMessageCbWaymap;
}

export namespace ServerMessageCbWaymap {
  export type AsObject = {
    status: number,
    bigMap?: CBWayPointMap.AsObject,
    smallMap?: CBWayPointMap.AsObject,
    panMap?: CBWayPointMap.AsObject,
    previewList: Array<CBWayPointPreview.AsObject>,
    itemsList: Array<CBHistorySimpleItem.AsObject>,
  }
}

export class ClientMessageCbWaymapSpec extends jspb.Message {
  getRoomId(): number;
  setRoomId(value: number): void;

  getBigMapStartIndex(): number;
  setBigMapStartIndex(value: number): void;

  getSmallMapStartIndex(): number;
  setSmallMapStartIndex(value: number): void;

  getPanMapStartIndex(): number;
  setPanMapStartIndex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageCbWaymapSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageCbWaymapSpec): ClientMessageCbWaymapSpec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageCbWaymapSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageCbWaymapSpec;
  static deserializeBinaryFromReader(message: ClientMessageCbWaymapSpec, reader: jspb.BinaryReader): ClientMessageCbWaymapSpec;
}

export namespace ClientMessageCbWaymapSpec {
  export type AsObject = {
    roomId: number,
    bigMapStartIndex: number,
    smallMapStartIndex: number,
    panMapStartIndex: number,
  }
}

export class ServerMessageCbWaymapSpec extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  clearBigMapList(): void;
  getBigMapList(): Array<CBWayPointMove>;
  setBigMapList(value: Array<CBWayPointMove>): void;
  addBigMap(value?: CBWayPointMove, index?: number): CBWayPointMove;

  clearSmallMapList(): void;
  getSmallMapList(): Array<CBWayPointMove>;
  setSmallMapList(value: Array<CBWayPointMove>): void;
  addSmallMap(value?: CBWayPointMove, index?: number): CBWayPointMove;

  clearPanMapList(): void;
  getPanMapList(): Array<CBWayPointMove>;
  setPanMapList(value: Array<CBWayPointMove>): void;
  addPanMap(value?: CBWayPointMove, index?: number): CBWayPointMove;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageCbWaymapSpec.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageCbWaymapSpec): ServerMessageCbWaymapSpec.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageCbWaymapSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageCbWaymapSpec;
  static deserializeBinaryFromReader(message: ServerMessageCbWaymapSpec, reader: jspb.BinaryReader): ServerMessageCbWaymapSpec;
}

export namespace ServerMessageCbWaymapSpec {
  export type AsObject = {
    status: number,
    bigMapList: Array<CBWayPointMove.AsObject>,
    smallMapList: Array<CBWayPointMove.AsObject>,
    panMapList: Array<CBWayPointMove.AsObject>,
  }
}

export class ClientMessageFtAction extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  clearCardIndexGroupsList(): void;
  getCardIndexGroupsList(): Array<HandCardIndexGroup>;
  setCardIndexGroupsList(value: Array<HandCardIndexGroup>): void;
  addCardIndexGroups(value?: HandCardIndexGroup, index?: number): HandCardIndexGroup;

  getConfirm(): boolean;
  setConfirm(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageFtAction.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageFtAction): ClientMessageFtAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageFtAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageFtAction;
  static deserializeBinaryFromReader(message: ClientMessageFtAction, reader: jspb.BinaryReader): ClientMessageFtAction;
}

export namespace ClientMessageFtAction {
  export type AsObject = {
    room?: Room.AsObject,
    cardIndexGroupsList: Array<HandCardIndexGroup.AsObject>,
    confirm: boolean,
  }
}

export class ServerMessageFtAction extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtAction.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtAction): ServerMessageFtAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtAction;
  static deserializeBinaryFromReader(message: ServerMessageFtAction, reader: jspb.BinaryReader): ServerMessageFtAction;
}

export namespace ServerMessageFtAction {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageFtAddTime extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getConsume(): Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap];
  setConsume(value: Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageFtAddTime.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageFtAddTime): ClientMessageFtAddTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageFtAddTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageFtAddTime;
  static deserializeBinaryFromReader(message: ClientMessageFtAddTime, reader: jspb.BinaryReader): ClientMessageFtAddTime;
}

export namespace ClientMessageFtAddTime {
  export type AsObject = {
    room?: Room.AsObject,
    consume: Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap],
  }
}

export class ServerMessageFtAddTime extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getTimes(): number;
  setTimes(value: number): void;

  getDuration(): number;
  setDuration(value: number): void;

  getDeadline(): number;
  setDeadline(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtAddTime.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtAddTime): ServerMessageFtAddTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtAddTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtAddTime;
  static deserializeBinaryFromReader(message: ServerMessageFtAddTime, reader: jspb.BinaryReader): ServerMessageFtAddTime;
}

export namespace ServerMessageFtAddTime {
  export type AsObject = {
    status: number,
    times: number,
    duration: number,
    deadline: number,
  }
}

export class ClientMessageFtAutoOpActive extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getEnable(): boolean;
  setEnable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageFtAutoOpActive.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageFtAutoOpActive): ClientMessageFtAutoOpActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageFtAutoOpActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageFtAutoOpActive;
  static deserializeBinaryFromReader(message: ClientMessageFtAutoOpActive, reader: jspb.BinaryReader): ClientMessageFtAutoOpActive;
}

export namespace ClientMessageFtAutoOpActive {
  export type AsObject = {
    room?: Room.AsObject,
    enable: boolean,
  }
}

export class ServerMessageFtAutoOpActive extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtAutoOpActive.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtAutoOpActive): ServerMessageFtAutoOpActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtAutoOpActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtAutoOpActive;
  static deserializeBinaryFromReader(message: ServerMessageFtAutoOpActive, reader: jspb.BinaryReader): ServerMessageFtAutoOpActive;
}

export namespace ServerMessageFtAutoOpActive {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageFtBringIn extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getBringIn(): number;
  setBringIn(value: number): void;

  getUseWallet(): boolean;
  setUseWallet(value: boolean): void;

  getApplyBringIn(): boolean;
  setApplyBringIn(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageFtBringIn.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageFtBringIn): ClientMessageFtBringIn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageFtBringIn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageFtBringIn;
  static deserializeBinaryFromReader(message: ClientMessageFtBringIn, reader: jspb.BinaryReader): ClientMessageFtBringIn;
}

export namespace ClientMessageFtBringIn {
  export type AsObject = {
    room?: Room.AsObject,
    bringIn: number,
    useWallet: boolean,
    applyBringIn: boolean,
  }
}

export class ServerMessageFtBringIn extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getChips(): number;
  setChips(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtBringIn.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtBringIn): ServerMessageFtBringIn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtBringIn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtBringIn;
  static deserializeBinaryFromReader(message: ServerMessageFtBringIn, reader: jspb.BinaryReader): ServerMessageFtBringIn;
}

export namespace ServerMessageFtBringIn {
  export type AsObject = {
    status: number,
    chips: number,
  }
}

export class ClientMessageFtBroadcastMsg extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getConsume(): Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap];
  setConsume(value: Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  getExtra(): Uint8Array | string;
  getExtra_asU8(): Uint8Array;
  getExtra_asB64(): string;
  setExtra(value: Uint8Array | string): void;

  getMsgType(): Def.BroadcastMsgTypeMap[keyof Def.BroadcastMsgTypeMap];
  setMsgType(value: Def.BroadcastMsgTypeMap[keyof Def.BroadcastMsgTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageFtBroadcastMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageFtBroadcastMsg): ClientMessageFtBroadcastMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageFtBroadcastMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageFtBroadcastMsg;
  static deserializeBinaryFromReader(message: ClientMessageFtBroadcastMsg, reader: jspb.BinaryReader): ClientMessageFtBroadcastMsg;
}

export namespace ClientMessageFtBroadcastMsg {
  export type AsObject = {
    room?: Room.AsObject,
    consume: Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap],
    message: string,
    extra: Uint8Array | string,
    msgType: Def.BroadcastMsgTypeMap[keyof Def.BroadcastMsgTypeMap],
  }
}

export class ServerMessageFtBroadcastMsg extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtBroadcastMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtBroadcastMsg): ServerMessageFtBroadcastMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtBroadcastMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtBroadcastMsg;
  static deserializeBinaryFromReader(message: ServerMessageFtBroadcastMsg, reader: jspb.BinaryReader): ServerMessageFtBroadcastMsg;
}

export namespace ServerMessageFtBroadcastMsg {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageFtChatMembers extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getIsHaveObserver(): boolean;
  setIsHaveObserver(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageFtChatMembers.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageFtChatMembers): ClientMessageFtChatMembers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageFtChatMembers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageFtChatMembers;
  static deserializeBinaryFromReader(message: ClientMessageFtChatMembers, reader: jspb.BinaryReader): ClientMessageFtChatMembers;
}

export namespace ClientMessageFtChatMembers {
  export type AsObject = {
    room?: Room.AsObject,
    isHaveObserver: boolean,
  }
}

export class ServerMessageFtChatMembers extends jspb.Message {
  clearMembersList(): void;
  getMembersList(): Array<Roomer>;
  setMembersList(value: Array<Roomer>): void;
  addMembers(value?: Roomer, index?: number): Roomer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtChatMembers.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtChatMembers): ServerMessageFtChatMembers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtChatMembers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtChatMembers;
  static deserializeBinaryFromReader(message: ServerMessageFtChatMembers, reader: jspb.BinaryReader): ServerMessageFtChatMembers;
}

export namespace ServerMessageFtChatMembers {
  export type AsObject = {
    membersList: Array<Roomer.AsObject>,
  }
}

export class ClientMessageFtEnterRoom extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  hasGps(): boolean;
  clearGps(): void;
  getGps(): GPS | undefined;
  setGps(value?: GPS): void;

  getWantSeat(): Def.WantSeatTypeMap[keyof Def.WantSeatTypeMap];
  setWantSeat(value: Def.WantSeatTypeMap[keyof Def.WantSeatTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageFtEnterRoom.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageFtEnterRoom): ClientMessageFtEnterRoom.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageFtEnterRoom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageFtEnterRoom;
  static deserializeBinaryFromReader(message: ClientMessageFtEnterRoom, reader: jspb.BinaryReader): ClientMessageFtEnterRoom;
}

export namespace ClientMessageFtEnterRoom {
  export type AsObject = {
    room?: Room.AsObject,
    gps?: GPS.AsObject,
    wantSeat: Def.WantSeatTypeMap[keyof Def.WantSeatTypeMap],
  }
}

export class ServerMessageFtEnterRoom extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getGameStatus(): Def.GameStatusMap[keyof Def.GameStatusMap];
  setGameStatus(value: Def.GameStatusMap[keyof Def.GameStatusMap]): void;

  hasRoomInfo(): boolean;
  clearRoomInfo(): void;
  getRoomInfo(): RoomInfoFT | undefined;
  setRoomInfo(value?: RoomInfoFT): void;

  hasHandInfo(): boolean;
  clearHandInfo(): void;
  getHandInfo(): HandInfoFT | undefined;
  setHandInfo(value?: HandInfoFT): void;

  clearPlayersList(): void;
  getPlayersList(): Array<PlayerFT>;
  setPlayersList(value: Array<PlayerFT>): void;
  addPlayers(value?: PlayerFT, index?: number): PlayerFT;

  hasMyInfo(): boolean;
  clearMyInfo(): void;
  getMyInfo(): MyGameInfoFT | undefined;
  setMyInfo(value?: MyGameInfoFT): void;

  clearOperatorList(): void;
  getOperatorList(): Array<OperatorFT>;
  setOperatorList(value: Array<OperatorFT>): void;
  addOperator(value?: OperatorFT, index?: number): OperatorFT;

  getMuted(): boolean;
  setMuted(value: boolean): void;

  hasMyWheelInfo(): boolean;
  clearMyWheelInfo(): void;
  getMyWheelInfo(): MyWheelInfo | undefined;
  setMyWheelInfo(value?: MyWheelInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtEnterRoom.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtEnterRoom): ServerMessageFtEnterRoom.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtEnterRoom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtEnterRoom;
  static deserializeBinaryFromReader(message: ServerMessageFtEnterRoom, reader: jspb.BinaryReader): ServerMessageFtEnterRoom;
}

export namespace ServerMessageFtEnterRoom {
  export type AsObject = {
    status: number,
    gameStatus: Def.GameStatusMap[keyof Def.GameStatusMap],
    roomInfo?: RoomInfoFT.AsObject,
    handInfo?: HandInfoFT.AsObject,
    playersList: Array<PlayerFT.AsObject>,
    myInfo?: MyGameInfoFT.AsObject,
    operatorList: Array<OperatorFT.AsObject>,
    muted: boolean,
    myWheelInfo?: MyWheelInfo.AsObject,
  }
}

export class ClientMessageFtKeepSeatActive extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getKeep(): boolean;
  setKeep(value: boolean): void;

  getDuration(): number;
  setDuration(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageFtKeepSeatActive.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageFtKeepSeatActive): ClientMessageFtKeepSeatActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageFtKeepSeatActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageFtKeepSeatActive;
  static deserializeBinaryFromReader(message: ClientMessageFtKeepSeatActive, reader: jspb.BinaryReader): ClientMessageFtKeepSeatActive;
}

export namespace ClientMessageFtKeepSeatActive {
  export type AsObject = {
    room?: Room.AsObject,
    keep: boolean,
    duration: number,
  }
}

export class ServerMessageFtKeepSeatActive extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getTimes(): number;
  setTimes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtKeepSeatActive.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtKeepSeatActive): ServerMessageFtKeepSeatActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtKeepSeatActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtKeepSeatActive;
  static deserializeBinaryFromReader(message: ServerMessageFtKeepSeatActive, reader: jspb.BinaryReader): ServerMessageFtKeepSeatActive;
}

export namespace ServerMessageFtKeepSeatActive {
  export type AsObject = {
    status: number,
    times: number,
  }
}

export class ClientMessageFtLeave extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageFtLeave.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageFtLeave): ClientMessageFtLeave.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageFtLeave, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageFtLeave;
  static deserializeBinaryFromReader(message: ClientMessageFtLeave, reader: jspb.BinaryReader): ClientMessageFtLeave;
}

export namespace ClientMessageFtLeave {
  export type AsObject = {
    room?: Room.AsObject,
  }
}

export class ServerMessageFtLeave extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtLeave.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtLeave): ServerMessageFtLeave.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtLeave, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtLeave;
  static deserializeBinaryFromReader(message: ServerMessageFtLeave, reader: jspb.BinaryReader): ServerMessageFtLeave;
}

export namespace ServerMessageFtLeave {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageFtObservers extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageFtObservers.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageFtObservers): ClientMessageFtObservers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageFtObservers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageFtObservers;
  static deserializeBinaryFromReader(message: ClientMessageFtObservers, reader: jspb.BinaryReader): ClientMessageFtObservers;
}

export namespace ClientMessageFtObservers {
  export type AsObject = {
    room?: Room.AsObject,
    offset: number,
    limit: number,
  }
}

export class ServerMessageFtObservers extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  clearObserversList(): void;
  getObserversList(): Array<Roomer>;
  setObserversList(value: Array<Roomer>): void;
  addObservers(value?: Roomer, index?: number): Roomer;

  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtObservers.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtObservers): ServerMessageFtObservers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtObservers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtObservers;
  static deserializeBinaryFromReader(message: ServerMessageFtObservers, reader: jspb.BinaryReader): ServerMessageFtObservers;
}

export namespace ServerMessageFtObservers {
  export type AsObject = {
    status: number,
    observersList: Array<Roomer.AsObject>,
    offset: number,
    limit: number,
    total: number,
  }
}

export class ClientMessageFtPair extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  clearHandGroupIndexesList(): void;
  getHandGroupIndexesList(): Array<number>;
  setHandGroupIndexesList(value: Array<number>): void;
  addHandGroupIndexes(value: number, index?: number): number;

  getConfirm(): boolean;
  setConfirm(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageFtPair.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageFtPair): ClientMessageFtPair.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageFtPair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageFtPair;
  static deserializeBinaryFromReader(message: ClientMessageFtPair, reader: jspb.BinaryReader): ClientMessageFtPair;
}

export namespace ClientMessageFtPair {
  export type AsObject = {
    room?: Room.AsObject,
    handGroupIndexesList: Array<number>,
    confirm: boolean,
  }
}

export class ServerMessageFtPair extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtPair.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtPair): ServerMessageFtPair.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtPair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtPair;
  static deserializeBinaryFromReader(message: ServerMessageFtPair, reader: jspb.BinaryReader): ServerMessageFtPair;
}

export namespace ServerMessageFtPair {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageFtPrivateMsg extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getConsume(): Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap];
  setConsume(value: Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  getExtra(): Uint8Array | string;
  getExtra_asU8(): Uint8Array;
  getExtra_asB64(): string;
  setExtra(value: Uint8Array | string): void;

  getTargetUserRid(): number;
  setTargetUserRid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageFtPrivateMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageFtPrivateMsg): ClientMessageFtPrivateMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageFtPrivateMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageFtPrivateMsg;
  static deserializeBinaryFromReader(message: ClientMessageFtPrivateMsg, reader: jspb.BinaryReader): ClientMessageFtPrivateMsg;
}

export namespace ClientMessageFtPrivateMsg {
  export type AsObject = {
    room?: Room.AsObject,
    consume: Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap],
    message: string,
    extra: Uint8Array | string,
    targetUserRid: number,
  }
}

export class ServerMessageFtPrivateMsg extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtPrivateMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtPrivateMsg): ServerMessageFtPrivateMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtPrivateMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtPrivateMsg;
  static deserializeBinaryFromReader(message: ServerMessageFtPrivateMsg, reader: jspb.BinaryReader): ServerMessageFtPrivateMsg;
}

export namespace ServerMessageFtPrivateMsg {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageFtPublicReplay extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getHandNum(): number;
  setHandNum(value: number): void;

  getUniqueId(): string;
  setUniqueId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageFtPublicReplay.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageFtPublicReplay): ClientMessageFtPublicReplay.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageFtPublicReplay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageFtPublicReplay;
  static deserializeBinaryFromReader(message: ClientMessageFtPublicReplay, reader: jspb.BinaryReader): ClientMessageFtPublicReplay;
}

export namespace ClientMessageFtPublicReplay {
  export type AsObject = {
    room?: Room.AsObject,
    handNum: number,
    uniqueId: string,
  }
}

export class ServerMessageFtPublicReplay extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtPublicReplay.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtPublicReplay): ServerMessageFtPublicReplay.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtPublicReplay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtPublicReplay;
  static deserializeBinaryFromReader(message: ServerMessageFtPublicReplay, reader: jspb.BinaryReader): ServerMessageFtPublicReplay;
}

export namespace ServerMessageFtPublicReplay {
  export type AsObject = {
    status: number,
    data: Uint8Array | string,
  }
}

export class ClientMessageFtRoomers extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getHistory(): boolean;
  setHistory(value: boolean): void;

  getHistoryOffset(): number;
  setHistoryOffset(value: number): void;

  getHistoryLimit(): number;
  setHistoryLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageFtRoomers.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageFtRoomers): ClientMessageFtRoomers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageFtRoomers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageFtRoomers;
  static deserializeBinaryFromReader(message: ClientMessageFtRoomers, reader: jspb.BinaryReader): ClientMessageFtRoomers;
}

export namespace ClientMessageFtRoomers {
  export type AsObject = {
    room?: Room.AsObject,
    history: boolean,
    historyOffset: number,
    historyLimit: number,
  }
}

export class ServerMessageFtRoomers extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  clearObserversList(): void;
  getObserversList(): Array<Roomer>;
  setObserversList(value: Array<Roomer>): void;
  addObservers(value?: Roomer, index?: number): Roomer;

  clearPlayersList(): void;
  getPlayersList(): Array<PlayerSummaryFT>;
  setPlayersList(value: Array<PlayerSummaryFT>): void;
  addPlayers(value?: PlayerSummaryFT, index?: number): PlayerSummaryFT;

  getHistoryOffset(): number;
  setHistoryOffset(value: number): void;

  getHistoryLimit(): number;
  setHistoryLimit(value: number): void;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtRoomers.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtRoomers): ServerMessageFtRoomers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtRoomers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtRoomers;
  static deserializeBinaryFromReader(message: ServerMessageFtRoomers, reader: jspb.BinaryReader): ServerMessageFtRoomers;
}

export namespace ServerMessageFtRoomers {
  export type AsObject = {
    status: number,
    observersList: Array<Roomer.AsObject>,
    playersList: Array<PlayerSummaryFT.AsObject>,
    historyOffset: number,
    historyLimit: number,
    total: number,
  }
}

export class ClientMessageFtSeated extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getSeatId(): number;
  setSeatId(value: number): void;

  getReturnOrNew(): number;
  setReturnOrNew(value: number): void;

  getBringIn(): number;
  setBringIn(value: number): void;

  getAutoOnTable(): number;
  setAutoOnTable(value: number): void;

  getAutoUseWallet(): boolean;
  setAutoUseWallet(value: boolean): void;

  getAutoOnTableFix(): number;
  setAutoOnTableFix(value: number): void;

  getClubId(): number;
  setClubId(value: number): void;

  getApplyBringIn(): boolean;
  setApplyBringIn(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageFtSeated.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageFtSeated): ClientMessageFtSeated.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageFtSeated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageFtSeated;
  static deserializeBinaryFromReader(message: ClientMessageFtSeated, reader: jspb.BinaryReader): ClientMessageFtSeated;
}

export namespace ClientMessageFtSeated {
  export type AsObject = {
    room?: Room.AsObject,
    seatId: number,
    returnOrNew: number,
    bringIn: number,
    autoOnTable: number,
    autoUseWallet: boolean,
    autoOnTableFix: number,
    clubId: number,
    applyBringIn: boolean,
  }
}

export class ServerMessageFtSeated extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getChips(): number;
  setChips(value: number): void;

  getAccountChips(): number;
  setAccountChips(value: number): void;

  getRecvSeatId(): number;
  setRecvSeatId(value: number): void;

  getKeepSeatLeftTime(): number;
  setKeepSeatLeftTime(value: number): void;

  getKeepSeatDeadline(): number;
  setKeepSeatDeadline(value: number): void;

  getUserSubscriptionId(): number;
  setUserSubscriptionId(value: number): void;

  getVideoMaskId(): number;
  setVideoMaskId(value: number): void;

  getTotalBringin(): number;
  setTotalBringin(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtSeated.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtSeated): ServerMessageFtSeated.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtSeated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtSeated;
  static deserializeBinaryFromReader(message: ServerMessageFtSeated, reader: jspb.BinaryReader): ServerMessageFtSeated;
}

export namespace ServerMessageFtSeated {
  export type AsObject = {
    status: number,
    chips: number,
    accountChips: number,
    recvSeatId: number,
    keepSeatLeftTime: number,
    keepSeatDeadline: number,
    userSubscriptionId: number,
    videoMaskId: number,
    totalBringin: number,
  }
}

export class ClientMessageFtSetAutoOnTable extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getAutoOnTable(): number;
  setAutoOnTable(value: number): void;

  getAutoUseWallet(): boolean;
  setAutoUseWallet(value: boolean): void;

  getAutoOnTableFix(): number;
  setAutoOnTableFix(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageFtSetAutoOnTable.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageFtSetAutoOnTable): ClientMessageFtSetAutoOnTable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageFtSetAutoOnTable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageFtSetAutoOnTable;
  static deserializeBinaryFromReader(message: ClientMessageFtSetAutoOnTable, reader: jspb.BinaryReader): ClientMessageFtSetAutoOnTable;
}

export namespace ClientMessageFtSetAutoOnTable {
  export type AsObject = {
    room?: Room.AsObject,
    autoOnTable: number,
    autoUseWallet: boolean,
    autoOnTableFix: number,
  }
}

export class ServerMessageFtSetAutoOnTable extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtSetAutoOnTable.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtSetAutoOnTable): ServerMessageFtSetAutoOnTable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtSetAutoOnTable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtSetAutoOnTable;
  static deserializeBinaryFromReader(message: ServerMessageFtSetAutoOnTable, reader: jspb.BinaryReader): ServerMessageFtSetAutoOnTable;
}

export namespace ServerMessageFtSetAutoOnTable {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageFtStandupActive extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageFtStandupActive.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageFtStandupActive): ClientMessageFtStandupActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageFtStandupActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageFtStandupActive;
  static deserializeBinaryFromReader(message: ClientMessageFtStandupActive, reader: jspb.BinaryReader): ClientMessageFtStandupActive;
}

export namespace ClientMessageFtStandupActive {
  export type AsObject = {
    room?: Room.AsObject,
  }
}

export class ServerMessageFtStandupActive extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getSeatId(): number;
  setSeatId(value: number): void;

  getChips(): number;
  setChips(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtStandupActive.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtStandupActive): ServerMessageFtStandupActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtStandupActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtStandupActive;
  static deserializeBinaryFromReader(message: ServerMessageFtStandupActive, reader: jspb.BinaryReader): ServerMessageFtStandupActive;
}

export namespace ServerMessageFtStandupActive {
  export type AsObject = {
    status: number,
    seatId: number,
    chips: number,
  }
}

export class ClientMessageFtSyncEnter extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageFtSyncEnter.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageFtSyncEnter): ClientMessageFtSyncEnter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageFtSyncEnter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageFtSyncEnter;
  static deserializeBinaryFromReader(message: ClientMessageFtSyncEnter, reader: jspb.BinaryReader): ClientMessageFtSyncEnter;
}

export namespace ClientMessageFtSyncEnter {
  export type AsObject = {
    room?: Room.AsObject,
  }
}

export class ServerMessageFtSyncEnter extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getGameStatus(): Def.GameStatusMap[keyof Def.GameStatusMap];
  setGameStatus(value: Def.GameStatusMap[keyof Def.GameStatusMap]): void;

  hasRoomInfo(): boolean;
  clearRoomInfo(): void;
  getRoomInfo(): RoomInfoFT | undefined;
  setRoomInfo(value?: RoomInfoFT): void;

  hasHandInfo(): boolean;
  clearHandInfo(): void;
  getHandInfo(): HandInfoFT | undefined;
  setHandInfo(value?: HandInfoFT): void;

  clearPlayersList(): void;
  getPlayersList(): Array<PlayerFT>;
  setPlayersList(value: Array<PlayerFT>): void;
  addPlayers(value?: PlayerFT, index?: number): PlayerFT;

  hasMyInfo(): boolean;
  clearMyInfo(): void;
  getMyInfo(): MyGameInfoFT | undefined;
  setMyInfo(value?: MyGameInfoFT): void;

  clearOperatorList(): void;
  getOperatorList(): Array<OperatorFT>;
  setOperatorList(value: Array<OperatorFT>): void;
  addOperator(value?: OperatorFT, index?: number): OperatorFT;

  getMuted(): boolean;
  setMuted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageFtSyncEnter.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageFtSyncEnter): ServerMessageFtSyncEnter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageFtSyncEnter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageFtSyncEnter;
  static deserializeBinaryFromReader(message: ServerMessageFtSyncEnter, reader: jspb.BinaryReader): ServerMessageFtSyncEnter;
}

export namespace ServerMessageFtSyncEnter {
  export type AsObject = {
    status: number,
    gameStatus: Def.GameStatusMap[keyof Def.GameStatusMap],
    roomInfo?: RoomInfoFT.AsObject,
    handInfo?: HandInfoFT.AsObject,
    playersList: Array<PlayerFT.AsObject>,
    myInfo?: MyGameInfoFT.AsObject,
    operatorList: Array<OperatorFT.AsObject>,
    muted: boolean,
  }
}

export class ClientMessageHeartbeat extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageHeartbeat.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageHeartbeat): ClientMessageHeartbeat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageHeartbeat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageHeartbeat;
  static deserializeBinaryFromReader(message: ClientMessageHeartbeat, reader: jspb.BinaryReader): ClientMessageHeartbeat;
}

export namespace ClientMessageHeartbeat {
  export type AsObject = {
  }
}

export class ServerMessageHeartbeat extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageHeartbeat.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageHeartbeat): ServerMessageHeartbeat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageHeartbeat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageHeartbeat;
  static deserializeBinaryFromReader(message: ServerMessageHeartbeat, reader: jspb.BinaryReader): ServerMessageHeartbeat;
}

export namespace ServerMessageHeartbeat {
  export type AsObject = {
    status: number,
    timestamp: number,
  }
}

export class ClientMessageRegister extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageRegister.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageRegister): ClientMessageRegister.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageRegister, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageRegister;
  static deserializeBinaryFromReader(message: ClientMessageRegister, reader: jspb.BinaryReader): ClientMessageRegister;
}

export namespace ClientMessageRegister {
  export type AsObject = {
  }
}

export class ServerMessageRegister extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageRegister.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageRegister): ServerMessageRegister.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageRegister, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageRegister;
  static deserializeBinaryFromReader(message: ServerMessageRegister, reader: jspb.BinaryReader): ServerMessageRegister;
}

export namespace ServerMessageRegister {
  export type AsObject = {
    status: number,
    timestamp: number,
  }
}

export class ClientMessageUserPlaying extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageUserPlaying.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageUserPlaying): ClientMessageUserPlaying.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageUserPlaying, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageUserPlaying;
  static deserializeBinaryFromReader(message: ClientMessageUserPlaying, reader: jspb.BinaryReader): ClientMessageUserPlaying;
}

export namespace ClientMessageUserPlaying {
  export type AsObject = {
  }
}

export class ServerMessageUserPlaying extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  clearRoomsMttsList(): void;
  getRoomsMttsList(): Array<RoomWithType>;
  setRoomsMttsList(value: Array<RoomWithType>): void;
  addRoomsMtts(value?: RoomWithType, index?: number): RoomWithType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageUserPlaying.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageUserPlaying): ServerMessageUserPlaying.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageUserPlaying, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageUserPlaying;
  static deserializeBinaryFromReader(message: ServerMessageUserPlaying, reader: jspb.BinaryReader): ServerMessageUserPlaying;
}

export namespace ServerMessageUserPlaying {
  export type AsObject = {
    status: number,
    roomsMttsList: Array<RoomWithType.AsObject>,
  }
}

export class ClientMessageGdAction extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getAction(): DefGD.ActionGdMap[keyof DefGD.ActionGdMap];
  setAction(value: DefGD.ActionGdMap[keyof DefGD.ActionGdMap]): void;

  hasDiscardCards(): boolean;
  clearDiscardCards(): void;
  getDiscardCards(): ValidCards | undefined;
  setDiscardCards(value?: ValidCards): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageGdAction.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageGdAction): ClientMessageGdAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageGdAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageGdAction;
  static deserializeBinaryFromReader(message: ClientMessageGdAction, reader: jspb.BinaryReader): ClientMessageGdAction;
}

export namespace ClientMessageGdAction {
  export type AsObject = {
    room?: Room.AsObject,
    action: DefGD.ActionGdMap[keyof DefGD.ActionGdMap],
    discardCards?: ValidCards.AsObject,
  }
}

export class ServerMessageGdAction extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdAction.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdAction): ServerMessageGdAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdAction;
  static deserializeBinaryFromReader(message: ServerMessageGdAction, reader: jspb.BinaryReader): ServerMessageGdAction;
}

export namespace ServerMessageGdAction {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageGdAddTime extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getConsume(): Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap];
  setConsume(value: Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageGdAddTime.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageGdAddTime): ClientMessageGdAddTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageGdAddTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageGdAddTime;
  static deserializeBinaryFromReader(message: ClientMessageGdAddTime, reader: jspb.BinaryReader): ClientMessageGdAddTime;
}

export namespace ClientMessageGdAddTime {
  export type AsObject = {
    room?: Room.AsObject,
    consume: Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap],
  }
}

export class ServerMessageGdAddTime extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getTimes(): number;
  setTimes(value: number): void;

  getDuration(): number;
  setDuration(value: number): void;

  getDeadline(): number;
  setDeadline(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdAddTime.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdAddTime): ServerMessageGdAddTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdAddTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdAddTime;
  static deserializeBinaryFromReader(message: ServerMessageGdAddTime, reader: jspb.BinaryReader): ServerMessageGdAddTime;
}

export namespace ServerMessageGdAddTime {
  export type AsObject = {
    status: number,
    times: number,
    duration: number,
    deadline: number,
  }
}

export class ClientMessageGdAutoOpActive extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getEnable(): boolean;
  setEnable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageGdAutoOpActive.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageGdAutoOpActive): ClientMessageGdAutoOpActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageGdAutoOpActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageGdAutoOpActive;
  static deserializeBinaryFromReader(message: ClientMessageGdAutoOpActive, reader: jspb.BinaryReader): ClientMessageGdAutoOpActive;
}

export namespace ClientMessageGdAutoOpActive {
  export type AsObject = {
    room?: Room.AsObject,
    enable: boolean,
  }
}

export class ServerMessageGdAutoOpActive extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdAutoOpActive.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdAutoOpActive): ServerMessageGdAutoOpActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdAutoOpActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdAutoOpActive;
  static deserializeBinaryFromReader(message: ServerMessageGdAutoOpActive, reader: jspb.BinaryReader): ServerMessageGdAutoOpActive;
}

export namespace ServerMessageGdAutoOpActive {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageGdBringIn extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getBringIn(): number;
  setBringIn(value: number): void;

  getUseWallet(): boolean;
  setUseWallet(value: boolean): void;

  getApplyBringIn(): boolean;
  setApplyBringIn(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageGdBringIn.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageGdBringIn): ClientMessageGdBringIn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageGdBringIn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageGdBringIn;
  static deserializeBinaryFromReader(message: ClientMessageGdBringIn, reader: jspb.BinaryReader): ClientMessageGdBringIn;
}

export namespace ClientMessageGdBringIn {
  export type AsObject = {
    room?: Room.AsObject,
    bringIn: number,
    useWallet: boolean,
    applyBringIn: boolean,
  }
}

export class ServerMessageGdBringIn extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getChips(): number;
  setChips(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdBringIn.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdBringIn): ServerMessageGdBringIn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdBringIn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdBringIn;
  static deserializeBinaryFromReader(message: ServerMessageGdBringIn, reader: jspb.BinaryReader): ServerMessageGdBringIn;
}

export namespace ServerMessageGdBringIn {
  export type AsObject = {
    status: number,
    chips: number,
  }
}

export class ClientMessageGdBroadcastMsg extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getConsume(): Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap];
  setConsume(value: Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  getExtra(): Uint8Array | string;
  getExtra_asU8(): Uint8Array;
  getExtra_asB64(): string;
  setExtra(value: Uint8Array | string): void;

  getMsgType(): Def.BroadcastMsgTypeMap[keyof Def.BroadcastMsgTypeMap];
  setMsgType(value: Def.BroadcastMsgTypeMap[keyof Def.BroadcastMsgTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageGdBroadcastMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageGdBroadcastMsg): ClientMessageGdBroadcastMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageGdBroadcastMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageGdBroadcastMsg;
  static deserializeBinaryFromReader(message: ClientMessageGdBroadcastMsg, reader: jspb.BinaryReader): ClientMessageGdBroadcastMsg;
}

export namespace ClientMessageGdBroadcastMsg {
  export type AsObject = {
    room?: Room.AsObject,
    consume: Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap],
    message: string,
    extra: Uint8Array | string,
    msgType: Def.BroadcastMsgTypeMap[keyof Def.BroadcastMsgTypeMap],
  }
}

export class ServerMessageGdBroadcastMsg extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdBroadcastMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdBroadcastMsg): ServerMessageGdBroadcastMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdBroadcastMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdBroadcastMsg;
  static deserializeBinaryFromReader(message: ServerMessageGdBroadcastMsg, reader: jspb.BinaryReader): ServerMessageGdBroadcastMsg;
}

export namespace ServerMessageGdBroadcastMsg {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageGdChatMembers extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getIsHaveObserver(): boolean;
  setIsHaveObserver(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageGdChatMembers.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageGdChatMembers): ClientMessageGdChatMembers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageGdChatMembers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageGdChatMembers;
  static deserializeBinaryFromReader(message: ClientMessageGdChatMembers, reader: jspb.BinaryReader): ClientMessageGdChatMembers;
}

export namespace ClientMessageGdChatMembers {
  export type AsObject = {
    room?: Room.AsObject,
    isHaveObserver: boolean,
  }
}

export class ServerMessageGdChatMembers extends jspb.Message {
  clearMembersList(): void;
  getMembersList(): Array<Roomer>;
  setMembersList(value: Array<Roomer>): void;
  addMembers(value?: Roomer, index?: number): Roomer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdChatMembers.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdChatMembers): ServerMessageGdChatMembers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdChatMembers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdChatMembers;
  static deserializeBinaryFromReader(message: ServerMessageGdChatMembers, reader: jspb.BinaryReader): ServerMessageGdChatMembers;
}

export namespace ServerMessageGdChatMembers {
  export type AsObject = {
    membersList: Array<Roomer.AsObject>,
  }
}

export class ClientMessageGdEnterRoom extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  hasGps(): boolean;
  clearGps(): void;
  getGps(): GPS | undefined;
  setGps(value?: GPS): void;

  getWantSeat(): Def.WantSeatTypeMap[keyof Def.WantSeatTypeMap];
  setWantSeat(value: Def.WantSeatTypeMap[keyof Def.WantSeatTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageGdEnterRoom.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageGdEnterRoom): ClientMessageGdEnterRoom.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageGdEnterRoom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageGdEnterRoom;
  static deserializeBinaryFromReader(message: ClientMessageGdEnterRoom, reader: jspb.BinaryReader): ClientMessageGdEnterRoom;
}

export namespace ClientMessageGdEnterRoom {
  export type AsObject = {
    room?: Room.AsObject,
    gps?: GPS.AsObject,
    wantSeat: Def.WantSeatTypeMap[keyof Def.WantSeatTypeMap],
  }
}

export class ServerMessageGdEnterRoom extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getGameStatus(): Def.GameStatusMap[keyof Def.GameStatusMap];
  setGameStatus(value: Def.GameStatusMap[keyof Def.GameStatusMap]): void;

  hasRoomInfo(): boolean;
  clearRoomInfo(): void;
  getRoomInfo(): RoomInfoGD | undefined;
  setRoomInfo(value?: RoomInfoGD): void;

  hasMatchInfo(): boolean;
  clearMatchInfo(): void;
  getMatchInfo(): MatchInfoGD | undefined;
  setMatchInfo(value?: MatchInfoGD): void;

  clearPlayersList(): void;
  getPlayersList(): Array<PlayerGD>;
  setPlayersList(value: Array<PlayerGD>): void;
  addPlayers(value?: PlayerGD, index?: number): PlayerGD;

  hasMyInfo(): boolean;
  clearMyInfo(): void;
  getMyInfo(): MyGameInfoGD | undefined;
  setMyInfo(value?: MyGameInfoGD): void;

  clearOperatorList(): void;
  getOperatorList(): Array<OperatorGD>;
  setOperatorList(value: Array<OperatorGD>): void;
  addOperator(value?: OperatorGD, index?: number): OperatorGD;

  getMuted(): boolean;
  setMuted(value: boolean): void;

  clearResultsList(): void;
  getResultsList(): Array<ResultGD>;
  setResultsList(value: Array<ResultGD>): void;
  addResults(value?: ResultGD, index?: number): ResultGD;

  hasMyWheelInfo(): boolean;
  clearMyWheelInfo(): void;
  getMyWheelInfo(): MyWheelInfo | undefined;
  setMyWheelInfo(value?: MyWheelInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdEnterRoom.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdEnterRoom): ServerMessageGdEnterRoom.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdEnterRoom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdEnterRoom;
  static deserializeBinaryFromReader(message: ServerMessageGdEnterRoom, reader: jspb.BinaryReader): ServerMessageGdEnterRoom;
}

export namespace ServerMessageGdEnterRoom {
  export type AsObject = {
    status: number,
    gameStatus: Def.GameStatusMap[keyof Def.GameStatusMap],
    roomInfo?: RoomInfoGD.AsObject,
    matchInfo?: MatchInfoGD.AsObject,
    playersList: Array<PlayerGD.AsObject>,
    myInfo?: MyGameInfoGD.AsObject,
    operatorList: Array<OperatorGD.AsObject>,
    muted: boolean,
    resultsList: Array<ResultGD.AsObject>,
    myWheelInfo?: MyWheelInfo.AsObject,
  }
}

export class ClientMessageGdKeepSeatActive extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getKeep(): boolean;
  setKeep(value: boolean): void;

  getDuration(): number;
  setDuration(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageGdKeepSeatActive.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageGdKeepSeatActive): ClientMessageGdKeepSeatActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageGdKeepSeatActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageGdKeepSeatActive;
  static deserializeBinaryFromReader(message: ClientMessageGdKeepSeatActive, reader: jspb.BinaryReader): ClientMessageGdKeepSeatActive;
}

export namespace ClientMessageGdKeepSeatActive {
  export type AsObject = {
    room?: Room.AsObject,
    keep: boolean,
    duration: number,
  }
}

export class ServerMessageGdKeepSeatActive extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getTimes(): number;
  setTimes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdKeepSeatActive.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdKeepSeatActive): ServerMessageGdKeepSeatActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdKeepSeatActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdKeepSeatActive;
  static deserializeBinaryFromReader(message: ServerMessageGdKeepSeatActive, reader: jspb.BinaryReader): ServerMessageGdKeepSeatActive;
}

export namespace ServerMessageGdKeepSeatActive {
  export type AsObject = {
    status: number,
    times: number,
  }
}

export class ClientMessageGdLeave extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageGdLeave.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageGdLeave): ClientMessageGdLeave.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageGdLeave, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageGdLeave;
  static deserializeBinaryFromReader(message: ClientMessageGdLeave, reader: jspb.BinaryReader): ClientMessageGdLeave;
}

export namespace ClientMessageGdLeave {
  export type AsObject = {
    room?: Room.AsObject,
  }
}

export class ServerMessageGdLeave extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdLeave.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdLeave): ServerMessageGdLeave.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdLeave, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdLeave;
  static deserializeBinaryFromReader(message: ServerMessageGdLeave, reader: jspb.BinaryReader): ServerMessageGdLeave;
}

export namespace ServerMessageGdLeave {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageGdObservers extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageGdObservers.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageGdObservers): ClientMessageGdObservers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageGdObservers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageGdObservers;
  static deserializeBinaryFromReader(message: ClientMessageGdObservers, reader: jspb.BinaryReader): ClientMessageGdObservers;
}

export namespace ClientMessageGdObservers {
  export type AsObject = {
    room?: Room.AsObject,
    offset: number,
    limit: number,
  }
}

export class ServerMessageGdObservers extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  clearObserversList(): void;
  getObserversList(): Array<Roomer>;
  setObserversList(value: Array<Roomer>): void;
  addObservers(value?: Roomer, index?: number): Roomer;

  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdObservers.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdObservers): ServerMessageGdObservers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdObservers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdObservers;
  static deserializeBinaryFromReader(message: ServerMessageGdObservers, reader: jspb.BinaryReader): ServerMessageGdObservers;
}

export namespace ServerMessageGdObservers {
  export type AsObject = {
    status: number,
    observersList: Array<Roomer.AsObject>,
    offset: number,
    limit: number,
    total: number,
  }
}

export class ClientMessageGdPrivateMsg extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getConsume(): Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap];
  setConsume(value: Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  getExtra(): Uint8Array | string;
  getExtra_asU8(): Uint8Array;
  getExtra_asB64(): string;
  setExtra(value: Uint8Array | string): void;

  getTargetUserRid(): number;
  setTargetUserRid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageGdPrivateMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageGdPrivateMsg): ClientMessageGdPrivateMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageGdPrivateMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageGdPrivateMsg;
  static deserializeBinaryFromReader(message: ClientMessageGdPrivateMsg, reader: jspb.BinaryReader): ClientMessageGdPrivateMsg;
}

export namespace ClientMessageGdPrivateMsg {
  export type AsObject = {
    room?: Room.AsObject,
    consume: Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap],
    message: string,
    extra: Uint8Array | string,
    targetUserRid: number,
  }
}

export class ServerMessageGdPrivateMsg extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdPrivateMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdPrivateMsg): ServerMessageGdPrivateMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdPrivateMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdPrivateMsg;
  static deserializeBinaryFromReader(message: ServerMessageGdPrivateMsg, reader: jspb.BinaryReader): ServerMessageGdPrivateMsg;
}

export namespace ServerMessageGdPrivateMsg {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageGdReadyStart extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageGdReadyStart.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageGdReadyStart): ClientMessageGdReadyStart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageGdReadyStart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageGdReadyStart;
  static deserializeBinaryFromReader(message: ClientMessageGdReadyStart, reader: jspb.BinaryReader): ClientMessageGdReadyStart;
}

export namespace ClientMessageGdReadyStart {
  export type AsObject = {
    room?: Room.AsObject,
  }
}

export class ServerMessageGdReadyStart extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdReadyStart.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdReadyStart): ServerMessageGdReadyStart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdReadyStart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdReadyStart;
  static deserializeBinaryFromReader(message: ServerMessageGdReadyStart, reader: jspb.BinaryReader): ServerMessageGdReadyStart;
}

export namespace ServerMessageGdReadyStart {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageGdReplay extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getMatchNum(): number;
  setMatchNum(value: number): void;

  getUniqueId(): string;
  setUniqueId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageGdReplay.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageGdReplay): ClientMessageGdReplay.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageGdReplay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageGdReplay;
  static deserializeBinaryFromReader(message: ClientMessageGdReplay, reader: jspb.BinaryReader): ClientMessageGdReplay;
}

export namespace ClientMessageGdReplay {
  export type AsObject = {
    room?: Room.AsObject,
    matchNum: number,
    uniqueId: string,
  }
}

export class ServerMessageGdReplay extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdReplay.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdReplay): ServerMessageGdReplay.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdReplay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdReplay;
  static deserializeBinaryFromReader(message: ServerMessageGdReplay, reader: jspb.BinaryReader): ServerMessageGdReplay;
}

export namespace ServerMessageGdReplay {
  export type AsObject = {
    status: number,
    data: Uint8Array | string,
  }
}

export class ClientMessageGdRoomers extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getHistory(): boolean;
  setHistory(value: boolean): void;

  getHistoryOffset(): number;
  setHistoryOffset(value: number): void;

  getHistoryLimit(): number;
  setHistoryLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageGdRoomers.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageGdRoomers): ClientMessageGdRoomers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageGdRoomers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageGdRoomers;
  static deserializeBinaryFromReader(message: ClientMessageGdRoomers, reader: jspb.BinaryReader): ClientMessageGdRoomers;
}

export namespace ClientMessageGdRoomers {
  export type AsObject = {
    room?: Room.AsObject,
    history: boolean,
    historyOffset: number,
    historyLimit: number,
  }
}

export class ServerMessageGdRoomers extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  clearObserversList(): void;
  getObserversList(): Array<Roomer>;
  setObserversList(value: Array<Roomer>): void;
  addObservers(value?: Roomer, index?: number): Roomer;

  clearPlayersList(): void;
  getPlayersList(): Array<PlayerSummaryGD>;
  setPlayersList(value: Array<PlayerSummaryGD>): void;
  addPlayers(value?: PlayerSummaryGD, index?: number): PlayerSummaryGD;

  getHistoryOffset(): number;
  setHistoryOffset(value: number): void;

  getHistoryLimit(): number;
  setHistoryLimit(value: number): void;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdRoomers.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdRoomers): ServerMessageGdRoomers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdRoomers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdRoomers;
  static deserializeBinaryFromReader(message: ServerMessageGdRoomers, reader: jspb.BinaryReader): ServerMessageGdRoomers;
}

export namespace ServerMessageGdRoomers {
  export type AsObject = {
    status: number,
    observersList: Array<Roomer.AsObject>,
    playersList: Array<PlayerSummaryGD.AsObject>,
    historyOffset: number,
    historyLimit: number,
    total: number,
  }
}

export class ClientMessageGdSeated extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getSeatId(): number;
  setSeatId(value: number): void;

  getReturnOrNew(): number;
  setReturnOrNew(value: number): void;

  getBringIn(): number;
  setBringIn(value: number): void;

  getAutoOnTable(): number;
  setAutoOnTable(value: number): void;

  getAutoUseWallet(): boolean;
  setAutoUseWallet(value: boolean): void;

  getAutoOnTableFix(): number;
  setAutoOnTableFix(value: number): void;

  getClubId(): number;
  setClubId(value: number): void;

  getApplyBringIn(): boolean;
  setApplyBringIn(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageGdSeated.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageGdSeated): ClientMessageGdSeated.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageGdSeated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageGdSeated;
  static deserializeBinaryFromReader(message: ClientMessageGdSeated, reader: jspb.BinaryReader): ClientMessageGdSeated;
}

export namespace ClientMessageGdSeated {
  export type AsObject = {
    room?: Room.AsObject,
    seatId: number,
    returnOrNew: number,
    bringIn: number,
    autoOnTable: number,
    autoUseWallet: boolean,
    autoOnTableFix: number,
    clubId: number,
    applyBringIn: boolean,
  }
}

export class ServerMessageGdSeated extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getChips(): number;
  setChips(value: number): void;

  getAccountChips(): number;
  setAccountChips(value: number): void;

  getRecvSeatId(): number;
  setRecvSeatId(value: number): void;

  getKeepSeatLeftTime(): number;
  setKeepSeatLeftTime(value: number): void;

  getKeepSeatDeadline(): number;
  setKeepSeatDeadline(value: number): void;

  getUserSubscriptionId(): number;
  setUserSubscriptionId(value: number): void;

  getVideoMaskId(): number;
  setVideoMaskId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdSeated.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdSeated): ServerMessageGdSeated.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdSeated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdSeated;
  static deserializeBinaryFromReader(message: ServerMessageGdSeated, reader: jspb.BinaryReader): ServerMessageGdSeated;
}

export namespace ServerMessageGdSeated {
  export type AsObject = {
    status: number,
    chips: number,
    accountChips: number,
    recvSeatId: number,
    keepSeatLeftTime: number,
    keepSeatDeadline: number,
    userSubscriptionId: number,
    videoMaskId: number,
  }
}

export class ClientMessageGdSetAutoOnTable extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getAutoOnTable(): number;
  setAutoOnTable(value: number): void;

  getAutoUseWallet(): boolean;
  setAutoUseWallet(value: boolean): void;

  getAutoOnTableFix(): number;
  setAutoOnTableFix(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageGdSetAutoOnTable.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageGdSetAutoOnTable): ClientMessageGdSetAutoOnTable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageGdSetAutoOnTable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageGdSetAutoOnTable;
  static deserializeBinaryFromReader(message: ClientMessageGdSetAutoOnTable, reader: jspb.BinaryReader): ClientMessageGdSetAutoOnTable;
}

export namespace ClientMessageGdSetAutoOnTable {
  export type AsObject = {
    room?: Room.AsObject,
    autoOnTable: number,
    autoUseWallet: boolean,
    autoOnTableFix: number,
  }
}

export class ServerMessageGdSetAutoOnTable extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdSetAutoOnTable.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdSetAutoOnTable): ServerMessageGdSetAutoOnTable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdSetAutoOnTable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdSetAutoOnTable;
  static deserializeBinaryFromReader(message: ServerMessageGdSetAutoOnTable, reader: jspb.BinaryReader): ServerMessageGdSetAutoOnTable;
}

export namespace ServerMessageGdSetAutoOnTable {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageGdStandupActive extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageGdStandupActive.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageGdStandupActive): ClientMessageGdStandupActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageGdStandupActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageGdStandupActive;
  static deserializeBinaryFromReader(message: ClientMessageGdStandupActive, reader: jspb.BinaryReader): ClientMessageGdStandupActive;
}

export namespace ClientMessageGdStandupActive {
  export type AsObject = {
    room?: Room.AsObject,
  }
}

export class ServerMessageGdStandupActive extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getSeatId(): number;
  setSeatId(value: number): void;

  getChips(): number;
  setChips(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdStandupActive.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdStandupActive): ServerMessageGdStandupActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdStandupActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdStandupActive;
  static deserializeBinaryFromReader(message: ServerMessageGdStandupActive, reader: jspb.BinaryReader): ServerMessageGdStandupActive;
}

export namespace ServerMessageGdStandupActive {
  export type AsObject = {
    status: number,
    seatId: number,
    chips: number,
  }
}

export class ClientMessageGdSyncEnter extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageGdSyncEnter.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageGdSyncEnter): ClientMessageGdSyncEnter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageGdSyncEnter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageGdSyncEnter;
  static deserializeBinaryFromReader(message: ClientMessageGdSyncEnter, reader: jspb.BinaryReader): ClientMessageGdSyncEnter;
}

export namespace ClientMessageGdSyncEnter {
  export type AsObject = {
    room?: Room.AsObject,
  }
}

export class ServerMessageGdSyncEnter extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getGameStatus(): Def.GameStatusMap[keyof Def.GameStatusMap];
  setGameStatus(value: Def.GameStatusMap[keyof Def.GameStatusMap]): void;

  hasRoomInfo(): boolean;
  clearRoomInfo(): void;
  getRoomInfo(): RoomInfoGD | undefined;
  setRoomInfo(value?: RoomInfoGD): void;

  hasHandInfo(): boolean;
  clearHandInfo(): void;
  getHandInfo(): MatchInfoGD | undefined;
  setHandInfo(value?: MatchInfoGD): void;

  clearPlayersList(): void;
  getPlayersList(): Array<PlayerGD>;
  setPlayersList(value: Array<PlayerGD>): void;
  addPlayers(value?: PlayerGD, index?: number): PlayerGD;

  hasMyInfo(): boolean;
  clearMyInfo(): void;
  getMyInfo(): MyGameInfoGD | undefined;
  setMyInfo(value?: MyGameInfoGD): void;

  clearOperatorList(): void;
  getOperatorList(): Array<OperatorGD>;
  setOperatorList(value: Array<OperatorGD>): void;
  addOperator(value?: OperatorGD, index?: number): OperatorGD;

  getMuted(): boolean;
  setMuted(value: boolean): void;

  clearResultsList(): void;
  getResultsList(): Array<ResultGD>;
  setResultsList(value: Array<ResultGD>): void;
  addResults(value?: ResultGD, index?: number): ResultGD;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdSyncEnter.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdSyncEnter): ServerMessageGdSyncEnter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdSyncEnter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdSyncEnter;
  static deserializeBinaryFromReader(message: ServerMessageGdSyncEnter, reader: jspb.BinaryReader): ServerMessageGdSyncEnter;
}

export namespace ServerMessageGdSyncEnter {
  export type AsObject = {
    status: number,
    gameStatus: Def.GameStatusMap[keyof Def.GameStatusMap],
    roomInfo?: RoomInfoGD.AsObject,
    handInfo?: MatchInfoGD.AsObject,
    playersList: Array<PlayerGD.AsObject>,
    myInfo?: MyGameInfoGD.AsObject,
    operatorList: Array<OperatorGD.AsObject>,
    muted: boolean,
    resultsList: Array<ResultGD.AsObject>,
  }
}

export class ClientMessageGdTributeGive extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  hasCard(): boolean;
  clearCard(): void;
  getCard(): Card | undefined;
  setCard(value?: Card): void;

  getRefuse(): boolean;
  setRefuse(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageGdTributeGive.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageGdTributeGive): ClientMessageGdTributeGive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageGdTributeGive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageGdTributeGive;
  static deserializeBinaryFromReader(message: ClientMessageGdTributeGive, reader: jspb.BinaryReader): ClientMessageGdTributeGive;
}

export namespace ClientMessageGdTributeGive {
  export type AsObject = {
    room?: Room.AsObject,
    card?: Card.AsObject,
    refuse: boolean,
  }
}

export class ServerMessageGdTributeGive extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdTributeGive.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdTributeGive): ServerMessageGdTributeGive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdTributeGive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdTributeGive;
  static deserializeBinaryFromReader(message: ServerMessageGdTributeGive, reader: jspb.BinaryReader): ServerMessageGdTributeGive;
}

export namespace ServerMessageGdTributeGive {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageGdTributeReturn extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  hasCard(): boolean;
  clearCard(): void;
  getCard(): Card | undefined;
  setCard(value?: Card): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageGdTributeReturn.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageGdTributeReturn): ClientMessageGdTributeReturn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageGdTributeReturn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageGdTributeReturn;
  static deserializeBinaryFromReader(message: ClientMessageGdTributeReturn, reader: jspb.BinaryReader): ClientMessageGdTributeReturn;
}

export namespace ClientMessageGdTributeReturn {
  export type AsObject = {
    room?: Room.AsObject,
    card?: Card.AsObject,
  }
}

export class ServerMessageGdTributeReturn extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdTributeReturn.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdTributeReturn): ServerMessageGdTributeReturn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdTributeReturn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdTributeReturn;
  static deserializeBinaryFromReader(message: ServerMessageGdTributeReturn, reader: jspb.BinaryReader): ServerMessageGdTributeReturn;
}

export namespace ServerMessageGdTributeReturn {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageGdWinrateAdd extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getAdd(): boolean;
  setAdd(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageGdWinrateAdd.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageGdWinrateAdd): ClientMessageGdWinrateAdd.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageGdWinrateAdd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageGdWinrateAdd;
  static deserializeBinaryFromReader(message: ClientMessageGdWinrateAdd, reader: jspb.BinaryReader): ClientMessageGdWinrateAdd;
}

export namespace ClientMessageGdWinrateAdd {
  export type AsObject = {
    room?: Room.AsObject,
    add: boolean,
  }
}

export class ServerMessageGdWinrateAdd extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageGdWinrateAdd.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageGdWinrateAdd): ServerMessageGdWinrateAdd.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageGdWinrateAdd, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageGdWinrateAdd;
  static deserializeBinaryFromReader(message: ServerMessageGdWinrateAdd, reader: jspb.BinaryReader): ServerMessageGdWinrateAdd;
}

export namespace ServerMessageGdWinrateAdd {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageMjAction extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getAction(): DefMJ.ActionMjMap[keyof DefMJ.ActionMjMap];
  setAction(value: DefMJ.ActionMjMap[keyof DefMJ.ActionMjMap]): void;

  clearTilesList(): void;
  getTilesList(): Array<Tile>;
  setTilesList(value: Array<Tile>): void;
  addTiles(value?: Tile, index?: number): Tile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageMjAction.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageMjAction): ClientMessageMjAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageMjAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageMjAction;
  static deserializeBinaryFromReader(message: ClientMessageMjAction, reader: jspb.BinaryReader): ClientMessageMjAction;
}

export namespace ClientMessageMjAction {
  export type AsObject = {
    room?: Room.AsObject,
    action: DefMJ.ActionMjMap[keyof DefMJ.ActionMjMap],
    tilesList: Array<Tile.AsObject>,
  }
}

export class ServerMessageMjAction extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjAction.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjAction): ServerMessageMjAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjAction;
  static deserializeBinaryFromReader(message: ServerMessageMjAction, reader: jspb.BinaryReader): ServerMessageMjAction;
}

export namespace ServerMessageMjAction {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageMjAddTime extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getConsume(): Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap];
  setConsume(value: Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageMjAddTime.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageMjAddTime): ClientMessageMjAddTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageMjAddTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageMjAddTime;
  static deserializeBinaryFromReader(message: ClientMessageMjAddTime, reader: jspb.BinaryReader): ClientMessageMjAddTime;
}

export namespace ClientMessageMjAddTime {
  export type AsObject = {
    room?: Room.AsObject,
    consume: Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap],
  }
}

export class ServerMessageMjAddTime extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getTimes(): number;
  setTimes(value: number): void;

  getDuration(): number;
  setDuration(value: number): void;

  getDeadline(): number;
  setDeadline(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjAddTime.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjAddTime): ServerMessageMjAddTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjAddTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjAddTime;
  static deserializeBinaryFromReader(message: ServerMessageMjAddTime, reader: jspb.BinaryReader): ServerMessageMjAddTime;
}

export namespace ServerMessageMjAddTime {
  export type AsObject = {
    status: number,
    times: number,
    duration: number,
    deadline: number,
  }
}

export class ClientMessageMjAutoOpActive extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getEnable(): boolean;
  setEnable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageMjAutoOpActive.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageMjAutoOpActive): ClientMessageMjAutoOpActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageMjAutoOpActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageMjAutoOpActive;
  static deserializeBinaryFromReader(message: ClientMessageMjAutoOpActive, reader: jspb.BinaryReader): ClientMessageMjAutoOpActive;
}

export namespace ClientMessageMjAutoOpActive {
  export type AsObject = {
    room?: Room.AsObject,
    enable: boolean,
  }
}

export class ServerMessageMjAutoOpActive extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjAutoOpActive.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjAutoOpActive): ServerMessageMjAutoOpActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjAutoOpActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjAutoOpActive;
  static deserializeBinaryFromReader(message: ServerMessageMjAutoOpActive, reader: jspb.BinaryReader): ServerMessageMjAutoOpActive;
}

export namespace ServerMessageMjAutoOpActive {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageMjBringIn extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getBringIn(): number;
  setBringIn(value: number): void;

  getUseWallet(): boolean;
  setUseWallet(value: boolean): void;

  getApplyBringIn(): boolean;
  setApplyBringIn(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageMjBringIn.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageMjBringIn): ClientMessageMjBringIn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageMjBringIn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageMjBringIn;
  static deserializeBinaryFromReader(message: ClientMessageMjBringIn, reader: jspb.BinaryReader): ClientMessageMjBringIn;
}

export namespace ClientMessageMjBringIn {
  export type AsObject = {
    room?: Room.AsObject,
    bringIn: number,
    useWallet: boolean,
    applyBringIn: boolean,
  }
}

export class ServerMessageMjBringIn extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getChips(): number;
  setChips(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjBringIn.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjBringIn): ServerMessageMjBringIn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjBringIn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjBringIn;
  static deserializeBinaryFromReader(message: ServerMessageMjBringIn, reader: jspb.BinaryReader): ServerMessageMjBringIn;
}

export namespace ServerMessageMjBringIn {
  export type AsObject = {
    status: number,
    chips: number,
  }
}

export class ClientMessageMjBroadcastMsg extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getConsume(): Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap];
  setConsume(value: Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  getExtra(): Uint8Array | string;
  getExtra_asU8(): Uint8Array;
  getExtra_asB64(): string;
  setExtra(value: Uint8Array | string): void;

  getMsgType(): Def.BroadcastMsgTypeMap[keyof Def.BroadcastMsgTypeMap];
  setMsgType(value: Def.BroadcastMsgTypeMap[keyof Def.BroadcastMsgTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageMjBroadcastMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageMjBroadcastMsg): ClientMessageMjBroadcastMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageMjBroadcastMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageMjBroadcastMsg;
  static deserializeBinaryFromReader(message: ClientMessageMjBroadcastMsg, reader: jspb.BinaryReader): ClientMessageMjBroadcastMsg;
}

export namespace ClientMessageMjBroadcastMsg {
  export type AsObject = {
    room?: Room.AsObject,
    consume: Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap],
    message: string,
    extra: Uint8Array | string,
    msgType: Def.BroadcastMsgTypeMap[keyof Def.BroadcastMsgTypeMap],
  }
}

export class ServerMessageMjBroadcastMsg extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjBroadcastMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjBroadcastMsg): ServerMessageMjBroadcastMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjBroadcastMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjBroadcastMsg;
  static deserializeBinaryFromReader(message: ServerMessageMjBroadcastMsg, reader: jspb.BinaryReader): ServerMessageMjBroadcastMsg;
}

export namespace ServerMessageMjBroadcastMsg {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageMjChatMembers extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getIsHaveObserver(): boolean;
  setIsHaveObserver(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageMjChatMembers.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageMjChatMembers): ClientMessageMjChatMembers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageMjChatMembers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageMjChatMembers;
  static deserializeBinaryFromReader(message: ClientMessageMjChatMembers, reader: jspb.BinaryReader): ClientMessageMjChatMembers;
}

export namespace ClientMessageMjChatMembers {
  export type AsObject = {
    room?: Room.AsObject,
    isHaveObserver: boolean,
  }
}

export class ServerMessageMjChatMembers extends jspb.Message {
  clearMembersList(): void;
  getMembersList(): Array<Roomer>;
  setMembersList(value: Array<Roomer>): void;
  addMembers(value?: Roomer, index?: number): Roomer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjChatMembers.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjChatMembers): ServerMessageMjChatMembers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjChatMembers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjChatMembers;
  static deserializeBinaryFromReader(message: ServerMessageMjChatMembers, reader: jspb.BinaryReader): ServerMessageMjChatMembers;
}

export namespace ServerMessageMjChatMembers {
  export type AsObject = {
    membersList: Array<Roomer.AsObject>,
  }
}

export class ClientMessageMjEnterRoom extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  hasGps(): boolean;
  clearGps(): void;
  getGps(): GPS | undefined;
  setGps(value?: GPS): void;

  getWantSeat(): Def.WantSeatTypeMap[keyof Def.WantSeatTypeMap];
  setWantSeat(value: Def.WantSeatTypeMap[keyof Def.WantSeatTypeMap]): void;

  getObserver(): boolean;
  setObserver(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageMjEnterRoom.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageMjEnterRoom): ClientMessageMjEnterRoom.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageMjEnterRoom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageMjEnterRoom;
  static deserializeBinaryFromReader(message: ClientMessageMjEnterRoom, reader: jspb.BinaryReader): ClientMessageMjEnterRoom;
}

export namespace ClientMessageMjEnterRoom {
  export type AsObject = {
    room?: Room.AsObject,
    gps?: GPS.AsObject,
    wantSeat: Def.WantSeatTypeMap[keyof Def.WantSeatTypeMap],
    observer: boolean,
  }
}

export class ServerMessageMjEnterRoom extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getGameStatus(): Def.GameStatusMap[keyof Def.GameStatusMap];
  setGameStatus(value: Def.GameStatusMap[keyof Def.GameStatusMap]): void;

  hasRoomInfo(): boolean;
  clearRoomInfo(): void;
  getRoomInfo(): RoomInfoMJ | undefined;
  setRoomInfo(value?: RoomInfoMJ): void;

  hasMatchInfo(): boolean;
  clearMatchInfo(): void;
  getMatchInfo(): MatchInfoMJ | undefined;
  setMatchInfo(value?: MatchInfoMJ): void;

  clearPlayersList(): void;
  getPlayersList(): Array<PlayerMJ>;
  setPlayersList(value: Array<PlayerMJ>): void;
  addPlayers(value?: PlayerMJ, index?: number): PlayerMJ;

  hasMyInfo(): boolean;
  clearMyInfo(): void;
  getMyInfo(): MyGameInfoMJ | undefined;
  setMyInfo(value?: MyGameInfoMJ): void;

  clearOperatorList(): void;
  getOperatorList(): Array<OperatorMJ>;
  setOperatorList(value: Array<OperatorMJ>): void;
  addOperator(value?: OperatorMJ, index?: number): OperatorMJ;

  getMuted(): boolean;
  setMuted(value: boolean): void;

  hasMyWheelInfo(): boolean;
  clearMyWheelInfo(): void;
  getMyWheelInfo(): MyWheelInfo | undefined;
  setMyWheelInfo(value?: MyWheelInfo): void;

  hasMttRoom(): boolean;
  clearMttRoom(): void;
  getMttRoom(): Room | undefined;
  setMttRoom(value?: Room): void;

  hasMttInfo(): boolean;
  clearMttInfo(): void;
  getMttInfo(): MTTInfo | undefined;
  setMttInfo(value?: MTTInfo): void;

  getPayTimes(): number;
  setPayTimes(value: number): void;

  hasBlackInfo(): boolean;
  clearBlackInfo(): void;
  getBlackInfo(): BlackInfo | undefined;
  setBlackInfo(value?: BlackInfo): void;

  hasMttProgress(): boolean;
  clearMttProgress(): void;
  getMttProgress(): MTTProgress | undefined;
  setMttProgress(value?: MTTProgress): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjEnterRoom.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjEnterRoom): ServerMessageMjEnterRoom.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjEnterRoom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjEnterRoom;
  static deserializeBinaryFromReader(message: ServerMessageMjEnterRoom, reader: jspb.BinaryReader): ServerMessageMjEnterRoom;
}

export namespace ServerMessageMjEnterRoom {
  export type AsObject = {
    status: number,
    gameStatus: Def.GameStatusMap[keyof Def.GameStatusMap],
    roomInfo?: RoomInfoMJ.AsObject,
    matchInfo?: MatchInfoMJ.AsObject,
    playersList: Array<PlayerMJ.AsObject>,
    myInfo?: MyGameInfoMJ.AsObject,
    operatorList: Array<OperatorMJ.AsObject>,
    muted: boolean,
    myWheelInfo?: MyWheelInfo.AsObject,
    mttRoom?: Room.AsObject,
    mttInfo?: MTTInfo.AsObject,
    payTimes: number,
    blackInfo?: BlackInfo.AsObject,
    mttProgress?: MTTProgress.AsObject,
  }
}

export class ClientMessageMjExchangeTiles extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  clearExchangeTilesList(): void;
  getExchangeTilesList(): Array<Tile>;
  setExchangeTilesList(value: Array<Tile>): void;
  addExchangeTiles(value?: Tile, index?: number): Tile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageMjExchangeTiles.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageMjExchangeTiles): ClientMessageMjExchangeTiles.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageMjExchangeTiles, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageMjExchangeTiles;
  static deserializeBinaryFromReader(message: ClientMessageMjExchangeTiles, reader: jspb.BinaryReader): ClientMessageMjExchangeTiles;
}

export namespace ClientMessageMjExchangeTiles {
  export type AsObject = {
    room?: Room.AsObject,
    exchangeTilesList: Array<Tile.AsObject>,
  }
}

export class ServerMessageMjExchangeTiles extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjExchangeTiles.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjExchangeTiles): ServerMessageMjExchangeTiles.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjExchangeTiles, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjExchangeTiles;
  static deserializeBinaryFromReader(message: ServerMessageMjExchangeTiles, reader: jspb.BinaryReader): ServerMessageMjExchangeTiles;
}

export namespace ServerMessageMjExchangeTiles {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageMjKeepSeatActive extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getKeep(): boolean;
  setKeep(value: boolean): void;

  getDuration(): number;
  setDuration(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageMjKeepSeatActive.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageMjKeepSeatActive): ClientMessageMjKeepSeatActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageMjKeepSeatActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageMjKeepSeatActive;
  static deserializeBinaryFromReader(message: ClientMessageMjKeepSeatActive, reader: jspb.BinaryReader): ClientMessageMjKeepSeatActive;
}

export namespace ClientMessageMjKeepSeatActive {
  export type AsObject = {
    room?: Room.AsObject,
    keep: boolean,
    duration: number,
  }
}

export class ServerMessageMjKeepSeatActive extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getTimes(): number;
  setTimes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjKeepSeatActive.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjKeepSeatActive): ServerMessageMjKeepSeatActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjKeepSeatActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjKeepSeatActive;
  static deserializeBinaryFromReader(message: ServerMessageMjKeepSeatActive, reader: jspb.BinaryReader): ServerMessageMjKeepSeatActive;
}

export namespace ServerMessageMjKeepSeatActive {
  export type AsObject = {
    status: number,
    times: number,
  }
}

export class ClientMessageMjLeave extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageMjLeave.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageMjLeave): ClientMessageMjLeave.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageMjLeave, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageMjLeave;
  static deserializeBinaryFromReader(message: ClientMessageMjLeave, reader: jspb.BinaryReader): ClientMessageMjLeave;
}

export namespace ClientMessageMjLeave {
  export type AsObject = {
    room?: Room.AsObject,
  }
}

export class ServerMessageMjLeave extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjLeave.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjLeave): ServerMessageMjLeave.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjLeave, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjLeave;
  static deserializeBinaryFromReader(message: ServerMessageMjLeave, reader: jspb.BinaryReader): ServerMessageMjLeave;
}

export namespace ServerMessageMjLeave {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageMjObservers extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageMjObservers.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageMjObservers): ClientMessageMjObservers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageMjObservers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageMjObservers;
  static deserializeBinaryFromReader(message: ClientMessageMjObservers, reader: jspb.BinaryReader): ClientMessageMjObservers;
}

export namespace ClientMessageMjObservers {
  export type AsObject = {
    room?: Room.AsObject,
    offset: number,
    limit: number,
  }
}

export class ServerMessageMjObservers extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  clearObserversList(): void;
  getObserversList(): Array<Roomer>;
  setObserversList(value: Array<Roomer>): void;
  addObservers(value?: Roomer, index?: number): Roomer;

  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjObservers.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjObservers): ServerMessageMjObservers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjObservers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjObservers;
  static deserializeBinaryFromReader(message: ServerMessageMjObservers, reader: jspb.BinaryReader): ServerMessageMjObservers;
}

export namespace ServerMessageMjObservers {
  export type AsObject = {
    status: number,
    observersList: Array<Roomer.AsObject>,
    offset: number,
    limit: number,
    total: number,
  }
}

export class ClientMessageMjPrivateMsg extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getConsume(): Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap];
  setConsume(value: Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  getExtra(): Uint8Array | string;
  getExtra_asU8(): Uint8Array;
  getExtra_asB64(): string;
  setExtra(value: Uint8Array | string): void;

  getTargetUserRid(): number;
  setTargetUserRid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageMjPrivateMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageMjPrivateMsg): ClientMessageMjPrivateMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageMjPrivateMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageMjPrivateMsg;
  static deserializeBinaryFromReader(message: ClientMessageMjPrivateMsg, reader: jspb.BinaryReader): ClientMessageMjPrivateMsg;
}

export namespace ClientMessageMjPrivateMsg {
  export type AsObject = {
    room?: Room.AsObject,
    consume: Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap],
    message: string,
    extra: Uint8Array | string,
    targetUserRid: number,
  }
}

export class ServerMessageMjPrivateMsg extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjPrivateMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjPrivateMsg): ServerMessageMjPrivateMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjPrivateMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjPrivateMsg;
  static deserializeBinaryFromReader(message: ServerMessageMjPrivateMsg, reader: jspb.BinaryReader): ServerMessageMjPrivateMsg;
}

export namespace ServerMessageMjPrivateMsg {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageMjRaise extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getRaise(): number;
  setRaise(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageMjRaise.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageMjRaise): ClientMessageMjRaise.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageMjRaise, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageMjRaise;
  static deserializeBinaryFromReader(message: ClientMessageMjRaise, reader: jspb.BinaryReader): ClientMessageMjRaise;
}

export namespace ClientMessageMjRaise {
  export type AsObject = {
    room?: Room.AsObject,
    raise: number,
  }
}

export class ServerMessageMjRaise extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjRaise.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjRaise): ServerMessageMjRaise.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjRaise, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjRaise;
  static deserializeBinaryFromReader(message: ServerMessageMjRaise, reader: jspb.BinaryReader): ServerMessageMjRaise;
}

export namespace ServerMessageMjRaise {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageMjRejectBringIn extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageMjRejectBringIn.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageMjRejectBringIn): ClientMessageMjRejectBringIn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageMjRejectBringIn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageMjRejectBringIn;
  static deserializeBinaryFromReader(message: ClientMessageMjRejectBringIn, reader: jspb.BinaryReader): ClientMessageMjRejectBringIn;
}

export namespace ClientMessageMjRejectBringIn {
  export type AsObject = {
    room?: Room.AsObject,
  }
}

export class ServerMessageMjRejectBringIn extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjRejectBringIn.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjRejectBringIn): ServerMessageMjRejectBringIn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjRejectBringIn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjRejectBringIn;
  static deserializeBinaryFromReader(message: ServerMessageMjRejectBringIn, reader: jspb.BinaryReader): ServerMessageMjRejectBringIn;
}

export namespace ServerMessageMjRejectBringIn {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageMjReplay extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getMatchNum(): number;
  setMatchNum(value: number): void;

  getUniqueId(): string;
  setUniqueId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageMjReplay.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageMjReplay): ClientMessageMjReplay.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageMjReplay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageMjReplay;
  static deserializeBinaryFromReader(message: ClientMessageMjReplay, reader: jspb.BinaryReader): ClientMessageMjReplay;
}

export namespace ClientMessageMjReplay {
  export type AsObject = {
    room?: Room.AsObject,
    matchNum: number,
    uniqueId: string,
  }
}

export class ServerMessageMjReplay extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjReplay.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjReplay): ServerMessageMjReplay.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjReplay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjReplay;
  static deserializeBinaryFromReader(message: ServerMessageMjReplay, reader: jspb.BinaryReader): ServerMessageMjReplay;
}

export namespace ServerMessageMjReplay {
  export type AsObject = {
    status: number,
    data: Uint8Array | string,
  }
}

export class ClientMessageMjRoomers extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getHistory(): boolean;
  setHistory(value: boolean): void;

  getHistoryOffset(): number;
  setHistoryOffset(value: number): void;

  getHistoryLimit(): number;
  setHistoryLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageMjRoomers.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageMjRoomers): ClientMessageMjRoomers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageMjRoomers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageMjRoomers;
  static deserializeBinaryFromReader(message: ClientMessageMjRoomers, reader: jspb.BinaryReader): ClientMessageMjRoomers;
}

export namespace ClientMessageMjRoomers {
  export type AsObject = {
    room?: Room.AsObject,
    history: boolean,
    historyOffset: number,
    historyLimit: number,
  }
}

export class ServerMessageMjRoomers extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  clearObserversList(): void;
  getObserversList(): Array<Roomer>;
  setObserversList(value: Array<Roomer>): void;
  addObservers(value?: Roomer, index?: number): Roomer;

  clearPlayersList(): void;
  getPlayersList(): Array<PlayerSummaryMJ>;
  setPlayersList(value: Array<PlayerSummaryMJ>): void;
  addPlayers(value?: PlayerSummaryMJ, index?: number): PlayerSummaryMJ;

  getHistoryOffset(): number;
  setHistoryOffset(value: number): void;

  getHistoryLimit(): number;
  setHistoryLimit(value: number): void;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjRoomers.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjRoomers): ServerMessageMjRoomers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjRoomers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjRoomers;
  static deserializeBinaryFromReader(message: ServerMessageMjRoomers, reader: jspb.BinaryReader): ServerMessageMjRoomers;
}

export namespace ServerMessageMjRoomers {
  export type AsObject = {
    status: number,
    observersList: Array<Roomer.AsObject>,
    playersList: Array<PlayerSummaryMJ.AsObject>,
    historyOffset: number,
    historyLimit: number,
    total: number,
  }
}

export class ClientMessageMjSeated extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getSeatId(): number;
  setSeatId(value: number): void;

  getReturnOrNew(): number;
  setReturnOrNew(value: number): void;

  getBringIn(): number;
  setBringIn(value: number): void;

  getAutoOnTable(): number;
  setAutoOnTable(value: number): void;

  getAutoUseWallet(): boolean;
  setAutoUseWallet(value: boolean): void;

  getAutoOnTableFix(): number;
  setAutoOnTableFix(value: number): void;

  getClubId(): number;
  setClubId(value: number): void;

  getApplyBringIn(): boolean;
  setApplyBringIn(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageMjSeated.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageMjSeated): ClientMessageMjSeated.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageMjSeated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageMjSeated;
  static deserializeBinaryFromReader(message: ClientMessageMjSeated, reader: jspb.BinaryReader): ClientMessageMjSeated;
}

export namespace ClientMessageMjSeated {
  export type AsObject = {
    room?: Room.AsObject,
    seatId: number,
    returnOrNew: number,
    bringIn: number,
    autoOnTable: number,
    autoUseWallet: boolean,
    autoOnTableFix: number,
    clubId: number,
    applyBringIn: boolean,
  }
}

export class ServerMessageMjSeated extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getChips(): number;
  setChips(value: number): void;

  getAccountChips(): number;
  setAccountChips(value: number): void;

  getRecvSeatId(): number;
  setRecvSeatId(value: number): void;

  getKeepSeatLeftTime(): number;
  setKeepSeatLeftTime(value: number): void;

  getKeepSeatDeadline(): number;
  setKeepSeatDeadline(value: number): void;

  getUserSubscriptionId(): number;
  setUserSubscriptionId(value: number): void;

  getVideoMaskId(): number;
  setVideoMaskId(value: number): void;

  getTotalBringin(): number;
  setTotalBringin(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjSeated.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjSeated): ServerMessageMjSeated.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjSeated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjSeated;
  static deserializeBinaryFromReader(message: ServerMessageMjSeated, reader: jspb.BinaryReader): ServerMessageMjSeated;
}

export namespace ServerMessageMjSeated {
  export type AsObject = {
    status: number,
    chips: number,
    accountChips: number,
    recvSeatId: number,
    keepSeatLeftTime: number,
    keepSeatDeadline: number,
    userSubscriptionId: number,
    videoMaskId: number,
    totalBringin: number,
  }
}

export class ClientMessageMjSetAutoOnTable extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getAutoOnTable(): number;
  setAutoOnTable(value: number): void;

  getAutoUseWallet(): boolean;
  setAutoUseWallet(value: boolean): void;

  getAutoOnTableFix(): number;
  setAutoOnTableFix(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageMjSetAutoOnTable.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageMjSetAutoOnTable): ClientMessageMjSetAutoOnTable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageMjSetAutoOnTable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageMjSetAutoOnTable;
  static deserializeBinaryFromReader(message: ClientMessageMjSetAutoOnTable, reader: jspb.BinaryReader): ClientMessageMjSetAutoOnTable;
}

export namespace ClientMessageMjSetAutoOnTable {
  export type AsObject = {
    room?: Room.AsObject,
    autoOnTable: number,
    autoUseWallet: boolean,
    autoOnTableFix: number,
  }
}

export class ServerMessageMjSetAutoOnTable extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjSetAutoOnTable.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjSetAutoOnTable): ServerMessageMjSetAutoOnTable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjSetAutoOnTable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjSetAutoOnTable;
  static deserializeBinaryFromReader(message: ServerMessageMjSetAutoOnTable, reader: jspb.BinaryReader): ServerMessageMjSetAutoOnTable;
}

export namespace ServerMessageMjSetAutoOnTable {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageMjStandupActive extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageMjStandupActive.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageMjStandupActive): ClientMessageMjStandupActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageMjStandupActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageMjStandupActive;
  static deserializeBinaryFromReader(message: ClientMessageMjStandupActive, reader: jspb.BinaryReader): ClientMessageMjStandupActive;
}

export namespace ClientMessageMjStandupActive {
  export type AsObject = {
    room?: Room.AsObject,
  }
}

export class ServerMessageMjStandupActive extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getSeatId(): number;
  setSeatId(value: number): void;

  getChips(): number;
  setChips(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjStandupActive.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjStandupActive): ServerMessageMjStandupActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjStandupActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjStandupActive;
  static deserializeBinaryFromReader(message: ServerMessageMjStandupActive, reader: jspb.BinaryReader): ServerMessageMjStandupActive;
}

export namespace ServerMessageMjStandupActive {
  export type AsObject = {
    status: number,
    seatId: number,
    chips: number,
  }
}

export class ClientMessageMjSyncEnter extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageMjSyncEnter.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageMjSyncEnter): ClientMessageMjSyncEnter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageMjSyncEnter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageMjSyncEnter;
  static deserializeBinaryFromReader(message: ClientMessageMjSyncEnter, reader: jspb.BinaryReader): ClientMessageMjSyncEnter;
}

export namespace ClientMessageMjSyncEnter {
  export type AsObject = {
    room?: Room.AsObject,
  }
}

export class ServerMessageMjSyncEnter extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getGameStatus(): Def.GameStatusMap[keyof Def.GameStatusMap];
  setGameStatus(value: Def.GameStatusMap[keyof Def.GameStatusMap]): void;

  hasRoomInfo(): boolean;
  clearRoomInfo(): void;
  getRoomInfo(): RoomInfoMJ | undefined;
  setRoomInfo(value?: RoomInfoMJ): void;

  hasHandInfo(): boolean;
  clearHandInfo(): void;
  getHandInfo(): MatchInfoMJ | undefined;
  setHandInfo(value?: MatchInfoMJ): void;

  clearPlayersList(): void;
  getPlayersList(): Array<PlayerMJ>;
  setPlayersList(value: Array<PlayerMJ>): void;
  addPlayers(value?: PlayerMJ, index?: number): PlayerMJ;

  hasMyInfo(): boolean;
  clearMyInfo(): void;
  getMyInfo(): MyGameInfoMJ | undefined;
  setMyInfo(value?: MyGameInfoMJ): void;

  clearOperatorList(): void;
  getOperatorList(): Array<OperatorMJ>;
  setOperatorList(value: Array<OperatorMJ>): void;
  addOperator(value?: OperatorMJ, index?: number): OperatorMJ;

  getMuted(): boolean;
  setMuted(value: boolean): void;

  hasMyWheelInfo(): boolean;
  clearMyWheelInfo(): void;
  getMyWheelInfo(): MyWheelInfo | undefined;
  setMyWheelInfo(value?: MyWheelInfo): void;

  hasMttRoom(): boolean;
  clearMttRoom(): void;
  getMttRoom(): Room | undefined;
  setMttRoom(value?: Room): void;

  hasMttInfo(): boolean;
  clearMttInfo(): void;
  getMttInfo(): MTTInfo | undefined;
  setMttInfo(value?: MTTInfo): void;

  getPayTimes(): number;
  setPayTimes(value: number): void;

  hasBlackInfo(): boolean;
  clearBlackInfo(): void;
  getBlackInfo(): BlackInfo | undefined;
  setBlackInfo(value?: BlackInfo): void;

  hasMttProgress(): boolean;
  clearMttProgress(): void;
  getMttProgress(): MTTProgress | undefined;
  setMttProgress(value?: MTTProgress): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjSyncEnter.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjSyncEnter): ServerMessageMjSyncEnter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjSyncEnter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjSyncEnter;
  static deserializeBinaryFromReader(message: ServerMessageMjSyncEnter, reader: jspb.BinaryReader): ServerMessageMjSyncEnter;
}

export namespace ServerMessageMjSyncEnter {
  export type AsObject = {
    status: number,
    gameStatus: Def.GameStatusMap[keyof Def.GameStatusMap],
    roomInfo?: RoomInfoMJ.AsObject,
    handInfo?: MatchInfoMJ.AsObject,
    playersList: Array<PlayerMJ.AsObject>,
    myInfo?: MyGameInfoMJ.AsObject,
    operatorList: Array<OperatorMJ.AsObject>,
    muted: boolean,
    myWheelInfo?: MyWheelInfo.AsObject,
    mttRoom?: Room.AsObject,
    mttInfo?: MTTInfo.AsObject,
    payTimes: number,
    blackInfo?: BlackInfo.AsObject,
    mttProgress?: MTTProgress.AsObject,
  }
}

export class ClientMessageMjVoidSuit extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getTileType(): DefMJ.TileTypeMap[keyof DefMJ.TileTypeMap];
  setTileType(value: DefMJ.TileTypeMap[keyof DefMJ.TileTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageMjVoidSuit.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageMjVoidSuit): ClientMessageMjVoidSuit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageMjVoidSuit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageMjVoidSuit;
  static deserializeBinaryFromReader(message: ClientMessageMjVoidSuit, reader: jspb.BinaryReader): ClientMessageMjVoidSuit;
}

export namespace ClientMessageMjVoidSuit {
  export type AsObject = {
    room?: Room.AsObject,
    tileType: DefMJ.TileTypeMap[keyof DefMJ.TileTypeMap],
  }
}

export class ServerMessageMjVoidSuit extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMjVoidSuit.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMjVoidSuit): ServerMessageMjVoidSuit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMjVoidSuit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMjVoidSuit;
  static deserializeBinaryFromReader(message: ServerMessageMjVoidSuit, reader: jspb.BinaryReader): ServerMessageMjVoidSuit;
}

export namespace ServerMessageMjVoidSuit {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageJoinMatching extends jspb.Message {
  getRpcId(): number;
  setRpcId(value: number): void;

  getRoomId(): number;
  setRoomId(value: number): void;

  getClubId(): number;
  setClubId(value: number): void;

  getBringIn(): number;
  setBringIn(value: number): void;

  getDeposit(): number;
  setDeposit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageJoinMatching.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageJoinMatching): ClientMessageJoinMatching.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageJoinMatching, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageJoinMatching;
  static deserializeBinaryFromReader(message: ClientMessageJoinMatching, reader: jspb.BinaryReader): ClientMessageJoinMatching;
}

export namespace ClientMessageJoinMatching {
  export type AsObject = {
    rpcId: number,
    roomId: number,
    clubId: number,
    bringIn: number,
    deposit: number,
  }
}

export class ServerMessageJoinMatching extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getRpcId(): number;
  setRpcId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageJoinMatching.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageJoinMatching): ServerMessageJoinMatching.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageJoinMatching, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageJoinMatching;
  static deserializeBinaryFromReader(message: ServerMessageJoinMatching, reader: jspb.BinaryReader): ServerMessageJoinMatching;
}

export namespace ServerMessageJoinMatching {
  export type AsObject = {
    status: number,
    rpcId: number,
  }
}

export class ClientMessageMttDetail extends jspb.Message {
  getMatchId(): number;
  setMatchId(value: number): void;

  getRpcId(): number;
  setRpcId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageMttDetail.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageMttDetail): ClientMessageMttDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageMttDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageMttDetail;
  static deserializeBinaryFromReader(message: ClientMessageMttDetail, reader: jspb.BinaryReader): ClientMessageMttDetail;
}

export namespace ClientMessageMttDetail {
  export type AsObject = {
    matchId: number,
    rpcId: number,
  }
}

export class ServerMessageMttDetail extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getRpcId(): number;
  setRpcId(value: number): void;

  hasMtt(): boolean;
  clearMtt(): void;
  getMtt(): MTTRecord | undefined;
  setMtt(value?: MTTRecord): void;

  hasMore(): boolean;
  clearMore(): void;
  getMore(): MTTMore | undefined;
  setMore(value?: MTTMore): void;

  getAlive(): number;
  setAlive(value: number): void;

  getStateCode(): number;
  setStateCode(value: number): void;

  getTop(): number;
  setTop(value: number): void;

  hasState(): boolean;
  clearState(): void;
  getState(): MTTUserStatus | undefined;
  setState(value?: MTTUserStatus): void;

  getIsAdmin(): boolean;
  setIsAdmin(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageMttDetail.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageMttDetail): ServerMessageMttDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageMttDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageMttDetail;
  static deserializeBinaryFromReader(message: ServerMessageMttDetail, reader: jspb.BinaryReader): ServerMessageMttDetail;
}

export namespace ServerMessageMttDetail {
  export type AsObject = {
    status: number,
    rpcId: number,
    mtt?: MTTRecord.AsObject,
    more?: MTTMore.AsObject,
    alive: number,
    stateCode: number,
    top: number,
    state?: MTTUserStatus.AsObject,
    isAdmin: boolean,
  }
}

export class ClientMessageQuickJoin extends jspb.Message {
  getRpcId(): number;
  setRpcId(value: number): void;

  getRoomId(): number;
  setRoomId(value: number): void;

  getShowVoice(): boolean;
  setShowVoice(value: boolean): void;

  getShowVideo(): boolean;
  setShowVideo(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageQuickJoin.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageQuickJoin): ClientMessageQuickJoin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageQuickJoin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageQuickJoin;
  static deserializeBinaryFromReader(message: ClientMessageQuickJoin, reader: jspb.BinaryReader): ClientMessageQuickJoin;
}

export namespace ClientMessageQuickJoin {
  export type AsObject = {
    rpcId: number,
    roomId: number,
    showVoice: boolean,
    showVideo: boolean,
  }
}

export class ServerMessageQuickJoin extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getRpcId(): number;
  setRpcId(value: number): void;

  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): RoomWithType | undefined;
  setRoom(value?: RoomWithType): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageQuickJoin.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageQuickJoin): ServerMessageQuickJoin.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageQuickJoin, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageQuickJoin;
  static deserializeBinaryFromReader(message: ServerMessageQuickJoin, reader: jspb.BinaryReader): ServerMessageQuickJoin;
}

export namespace ServerMessageQuickJoin {
  export type AsObject = {
    status: number,
    rpcId: number,
    room?: RoomWithType.AsObject,
  }
}

export class ClientMessageRooms extends jspb.Message {
  clearRoomIdList(): void;
  getRoomIdList(): Array<number>;
  setRoomIdList(value: Array<number>): void;
  addRoomId(value: number, index?: number): number;

  getRpcId(): number;
  setRpcId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageRooms.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageRooms): ClientMessageRooms.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageRooms, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageRooms;
  static deserializeBinaryFromReader(message: ClientMessageRooms, reader: jspb.BinaryReader): ClientMessageRooms;
}

export namespace ClientMessageRooms {
  export type AsObject = {
    roomIdList: Array<number>,
    rpcId: number,
  }
}

export class ServerMessageRooms extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getRpcId(): number;
  setRpcId(value: number): void;

  clearRoomsList(): void;
  getRoomsList(): Array<RoomRecord>;
  setRoomsList(value: Array<RoomRecord>): void;
  addRooms(value?: RoomRecord, index?: number): RoomRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageRooms.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageRooms): ServerMessageRooms.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageRooms, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageRooms;
  static deserializeBinaryFromReader(message: ServerMessageRooms, reader: jspb.BinaryReader): ServerMessageRooms;
}

export namespace ServerMessageRooms {
  export type AsObject = {
    status: number,
    rpcId: number,
    roomsList: Array<RoomRecord.AsObject>,
  }
}

export class ClientMessageRoomsSimple extends jspb.Message {
  clearRoomIdList(): void;
  getRoomIdList(): Array<number>;
  setRoomIdList(value: Array<number>): void;
  addRoomId(value: number, index?: number): number;

  getRpcId(): number;
  setRpcId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageRoomsSimple.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageRoomsSimple): ClientMessageRoomsSimple.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageRoomsSimple, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageRoomsSimple;
  static deserializeBinaryFromReader(message: ClientMessageRoomsSimple, reader: jspb.BinaryReader): ClientMessageRoomsSimple;
}

export namespace ClientMessageRoomsSimple {
  export type AsObject = {
    roomIdList: Array<number>,
    rpcId: number,
  }
}

export class ServerMessageRoomsSimple extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getRpcId(): number;
  setRpcId(value: number): void;

  clearRoomsList(): void;
  getRoomsList(): Array<RoomRecordSimple>;
  setRoomsList(value: Array<RoomRecordSimple>): void;
  addRooms(value?: RoomRecordSimple, index?: number): RoomRecordSimple;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageRoomsSimple.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageRoomsSimple): ServerMessageRoomsSimple.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageRoomsSimple, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageRoomsSimple;
  static deserializeBinaryFromReader(message: ServerMessageRoomsSimple, reader: jspb.BinaryReader): ServerMessageRoomsSimple;
}

export namespace ServerMessageRoomsSimple {
  export type AsObject = {
    status: number,
    rpcId: number,
    roomsList: Array<RoomRecordSimple.AsObject>,
  }
}

export class ClientMessageAction extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getAction(): Def.ActionMap[keyof Def.ActionMap];
  setAction(value: Def.ActionMap[keyof Def.ActionMap]): void;

  getAmount(): number;
  setAmount(value: number): void;

  getClubId(): number;
  setClubId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageAction.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageAction): ClientMessageAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageAction;
  static deserializeBinaryFromReader(message: ClientMessageAction, reader: jspb.BinaryReader): ClientMessageAction;
}

export namespace ClientMessageAction {
  export type AsObject = {
    room?: Room.AsObject,
    action: Def.ActionMap[keyof Def.ActionMap],
    amount: number,
    clubId: number,
  }
}

export class ServerMessageAction extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageAction.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageAction): ServerMessageAction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageAction;
  static deserializeBinaryFromReader(message: ServerMessageAction, reader: jspb.BinaryReader): ServerMessageAction;
}

export namespace ServerMessageAction {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageAddOn extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getUseProp(): boolean;
  setUseProp(value: boolean): void;

  getRatio(): number;
  setRatio(value: number): void;

  getMode(): Def.AddOnModeMap[keyof Def.AddOnModeMap];
  setMode(value: Def.AddOnModeMap[keyof Def.AddOnModeMap]): void;

  getUsedPropId(): number;
  setUsedPropId(value: number): void;

  getPropType(): number;
  setPropType(value: number): void;

  getUseFree(): boolean;
  setUseFree(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageAddOn.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageAddOn): ClientMessageAddOn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageAddOn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageAddOn;
  static deserializeBinaryFromReader(message: ClientMessageAddOn, reader: jspb.BinaryReader): ClientMessageAddOn;
}

export namespace ClientMessageAddOn {
  export type AsObject = {
    room?: Room.AsObject,
    useProp: boolean,
    ratio: number,
    mode: Def.AddOnModeMap[keyof Def.AddOnModeMap],
    usedPropId: number,
    propType: number,
    useFree: boolean,
  }
}

export class ServerMessageAddOn extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getChips(): number;
  setChips(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageAddOn.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageAddOn): ServerMessageAddOn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageAddOn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageAddOn;
  static deserializeBinaryFromReader(message: ServerMessageAddOn, reader: jspb.BinaryReader): ServerMessageAddOn;
}

export namespace ServerMessageAddOn {
  export type AsObject = {
    status: number,
    chips: number,
  }
}

export class ClientMessageAddTime extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getConsume(): Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap];
  setConsume(value: Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap]): void;

  getDirectConsume(): boolean;
  setDirectConsume(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageAddTime.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageAddTime): ClientMessageAddTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageAddTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageAddTime;
  static deserializeBinaryFromReader(message: ClientMessageAddTime, reader: jspb.BinaryReader): ClientMessageAddTime;
}

export namespace ClientMessageAddTime {
  export type AsObject = {
    room?: Room.AsObject,
    consume: Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap],
    directConsume: boolean,
  }
}

export class ServerMessageAddTime extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getTimes(): number;
  setTimes(value: number): void;

  getDuration(): number;
  setDuration(value: number): void;

  getDeadline(): number;
  setDeadline(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageAddTime.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageAddTime): ServerMessageAddTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageAddTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageAddTime;
  static deserializeBinaryFromReader(message: ServerMessageAddTime, reader: jspb.BinaryReader): ServerMessageAddTime;
}

export namespace ServerMessageAddTime {
  export type AsObject = {
    status: number,
    times: number,
    duration: number,
    deadline: number,
  }
}

export class ClientMessageAgreePost extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageAgreePost.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageAgreePost): ClientMessageAgreePost.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageAgreePost, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageAgreePost;
  static deserializeBinaryFromReader(message: ClientMessageAgreePost, reader: jspb.BinaryReader): ClientMessageAgreePost;
}

export namespace ClientMessageAgreePost {
  export type AsObject = {
    room?: Room.AsObject,
  }
}

export class ServerMessageAgreePost extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageAgreePost.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageAgreePost): ServerMessageAgreePost.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageAgreePost, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageAgreePost;
  static deserializeBinaryFromReader(message: ServerMessageAgreePost, reader: jspb.BinaryReader): ServerMessageAgreePost;
}

export namespace ServerMessageAgreePost {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageAgreeSecondPcsActive extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getAgree(): boolean;
  setAgree(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageAgreeSecondPcsActive.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageAgreeSecondPcsActive): ClientMessageAgreeSecondPcsActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageAgreeSecondPcsActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageAgreeSecondPcsActive;
  static deserializeBinaryFromReader(message: ClientMessageAgreeSecondPcsActive, reader: jspb.BinaryReader): ClientMessageAgreeSecondPcsActive;
}

export namespace ClientMessageAgreeSecondPcsActive {
  export type AsObject = {
    room?: Room.AsObject,
    agree: boolean,
  }
}

export class ServerMessageAgreeSecondPcsActive extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageAgreeSecondPcsActive.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageAgreeSecondPcsActive): ServerMessageAgreeSecondPcsActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageAgreeSecondPcsActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageAgreeSecondPcsActive;
  static deserializeBinaryFromReader(message: ServerMessageAgreeSecondPcsActive, reader: jspb.BinaryReader): ServerMessageAgreeSecondPcsActive;
}

export namespace ServerMessageAgreeSecondPcsActive {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageAutoOpActive extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getEnable(): boolean;
  setEnable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageAutoOpActive.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageAutoOpActive): ClientMessageAutoOpActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageAutoOpActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageAutoOpActive;
  static deserializeBinaryFromReader(message: ClientMessageAutoOpActive, reader: jspb.BinaryReader): ClientMessageAutoOpActive;
}

export namespace ClientMessageAutoOpActive {
  export type AsObject = {
    room?: Room.AsObject,
    enable: boolean,
  }
}

export class ServerMessageAutoOpActive extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageAutoOpActive.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageAutoOpActive): ServerMessageAutoOpActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageAutoOpActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageAutoOpActive;
  static deserializeBinaryFromReader(message: ServerMessageAutoOpActive, reader: jspb.BinaryReader): ServerMessageAutoOpActive;
}

export namespace ServerMessageAutoOpActive {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageBringIn extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getBringIn(): number;
  setBringIn(value: number): void;

  getUseWallet(): boolean;
  setUseWallet(value: boolean): void;

  getApplyBringIn(): boolean;
  setApplyBringIn(value: boolean): void;

  getDepositAdvance(): number;
  setDepositAdvance(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageBringIn.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageBringIn): ClientMessageBringIn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageBringIn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageBringIn;
  static deserializeBinaryFromReader(message: ClientMessageBringIn, reader: jspb.BinaryReader): ClientMessageBringIn;
}

export namespace ClientMessageBringIn {
  export type AsObject = {
    room?: Room.AsObject,
    bringIn: number,
    useWallet: boolean,
    applyBringIn: boolean,
    depositAdvance: number,
  }
}

export class ServerMessageBringIn extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getChips(): number;
  setChips(value: number): void;

  getTotalChips(): number;
  setTotalChips(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageBringIn.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageBringIn): ServerMessageBringIn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageBringIn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageBringIn;
  static deserializeBinaryFromReader(message: ServerMessageBringIn, reader: jspb.BinaryReader): ServerMessageBringIn;
}

export namespace ServerMessageBringIn {
  export type AsObject = {
    status: number,
    chips: number,
    totalChips: number,
  }
}

export class ClientMessageBroadcastMsg extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getConsume(): Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap];
  setConsume(value: Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  getExtra(): Uint8Array | string;
  getExtra_asU8(): Uint8Array;
  getExtra_asB64(): string;
  setExtra(value: Uint8Array | string): void;

  getMsgType(): Def.BroadcastMsgTypeMap[keyof Def.BroadcastMsgTypeMap];
  setMsgType(value: Def.BroadcastMsgTypeMap[keyof Def.BroadcastMsgTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageBroadcastMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageBroadcastMsg): ClientMessageBroadcastMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageBroadcastMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageBroadcastMsg;
  static deserializeBinaryFromReader(message: ClientMessageBroadcastMsg, reader: jspb.BinaryReader): ClientMessageBroadcastMsg;
}

export namespace ClientMessageBroadcastMsg {
  export type AsObject = {
    room?: Room.AsObject,
    consume: Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap],
    message: string,
    extra: Uint8Array | string,
    msgType: Def.BroadcastMsgTypeMap[keyof Def.BroadcastMsgTypeMap],
  }
}

export class ServerMessageBroadcastMsg extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageBroadcastMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageBroadcastMsg): ServerMessageBroadcastMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageBroadcastMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageBroadcastMsg;
  static deserializeBinaryFromReader(message: ServerMessageBroadcastMsg, reader: jspb.BinaryReader): ServerMessageBroadcastMsg;
}

export namespace ServerMessageBroadcastMsg {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageBuyInsuranceActive extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  clearBuyList(): void;
  getBuyList(): Array<PotInsuranceBuy>;
  setBuyList(value: Array<PotInsuranceBuy>): void;
  addBuy(value?: PotInsuranceBuy, index?: number): PotInsuranceBuy;

  getConfirm(): boolean;
  setConfirm(value: boolean): void;

  getStep(): boolean;
  setStep(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageBuyInsuranceActive.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageBuyInsuranceActive): ClientMessageBuyInsuranceActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageBuyInsuranceActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageBuyInsuranceActive;
  static deserializeBinaryFromReader(message: ClientMessageBuyInsuranceActive, reader: jspb.BinaryReader): ClientMessageBuyInsuranceActive;
}

export namespace ClientMessageBuyInsuranceActive {
  export type AsObject = {
    room?: Room.AsObject,
    buyList: Array<PotInsuranceBuy.AsObject>,
    confirm: boolean,
    step: boolean,
  }
}

export class ServerMessageBuyInsuranceActive extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageBuyInsuranceActive.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageBuyInsuranceActive): ServerMessageBuyInsuranceActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageBuyInsuranceActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageBuyInsuranceActive;
  static deserializeBinaryFromReader(message: ServerMessageBuyInsuranceActive, reader: jspb.BinaryReader): ServerMessageBuyInsuranceActive;
}

export namespace ServerMessageBuyInsuranceActive {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageChatMembers extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getIsHaveObserver(): boolean;
  setIsHaveObserver(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageChatMembers.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageChatMembers): ClientMessageChatMembers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageChatMembers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageChatMembers;
  static deserializeBinaryFromReader(message: ClientMessageChatMembers, reader: jspb.BinaryReader): ClientMessageChatMembers;
}

export namespace ClientMessageChatMembers {
  export type AsObject = {
    room?: Room.AsObject,
    isHaveObserver: boolean,
  }
}

export class ServerMessageChatMembers extends jspb.Message {
  clearMembersList(): void;
  getMembersList(): Array<Roomer>;
  setMembersList(value: Array<Roomer>): void;
  addMembers(value?: Roomer, index?: number): Roomer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageChatMembers.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageChatMembers): ServerMessageChatMembers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageChatMembers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageChatMembers;
  static deserializeBinaryFromReader(message: ServerMessageChatMembers, reader: jspb.BinaryReader): ServerMessageChatMembers;
}

export namespace ServerMessageChatMembers {
  export type AsObject = {
    membersList: Array<Roomer.AsObject>,
  }
}

export class ClientMessageEnterRoom extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  hasGps(): boolean;
  clearGps(): void;
  getGps(): GPS | undefined;
  setGps(value?: GPS): void;

  getMttPartialBringIn(): number;
  setMttPartialBringIn(value: number): void;

  getObserver(): boolean;
  setObserver(value: boolean): void;

  getWantSeat(): Def.WantSeatTypeMap[keyof Def.WantSeatTypeMap];
  setWantSeat(value: Def.WantSeatTypeMap[keyof Def.WantSeatTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageEnterRoom.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageEnterRoom): ClientMessageEnterRoom.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageEnterRoom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageEnterRoom;
  static deserializeBinaryFromReader(message: ClientMessageEnterRoom, reader: jspb.BinaryReader): ClientMessageEnterRoom;
}

export namespace ClientMessageEnterRoom {
  export type AsObject = {
    room?: Room.AsObject,
    gps?: GPS.AsObject,
    mttPartialBringIn: number,
    observer: boolean,
    wantSeat: Def.WantSeatTypeMap[keyof Def.WantSeatTypeMap],
  }
}

export class ServerMessageEnterRoom extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getGameStatus(): Def.GameStatusMap[keyof Def.GameStatusMap];
  setGameStatus(value: Def.GameStatusMap[keyof Def.GameStatusMap]): void;

  hasRoomInfo(): boolean;
  clearRoomInfo(): void;
  getRoomInfo(): RoomInfo | undefined;
  setRoomInfo(value?: RoomInfo): void;

  hasHandInfo(): boolean;
  clearHandInfo(): void;
  getHandInfo(): HandInfo | undefined;
  setHandInfo(value?: HandInfo): void;

  clearPlayersList(): void;
  getPlayersList(): Array<Player>;
  setPlayersList(value: Array<Player>): void;
  addPlayers(value?: Player, index?: number): Player;

  hasMyInfo(): boolean;
  clearMyInfo(): void;
  getMyInfo(): MyGameInfo | undefined;
  setMyInfo(value?: MyGameInfo): void;

  clearOperatorList(): void;
  getOperatorList(): Array<Operator>;
  setOperatorList(value: Array<Operator>): void;
  addOperator(value?: Operator, index?: number): Operator;

  hasMttInfo(): boolean;
  clearMttInfo(): void;
  getMttInfo(): MTTInfo | undefined;
  setMttInfo(value?: MTTInfo): void;

  hasMttProgress(): boolean;
  clearMttProgress(): void;
  getMttProgress(): MTTProgress | undefined;
  setMttProgress(value?: MTTProgress): void;

  hasMttRoom(): boolean;
  clearMttRoom(): void;
  getMttRoom(): Room | undefined;
  setMttRoom(value?: Room): void;

  getMuted(): boolean;
  setMuted(value: boolean): void;

  getPayTimes(): number;
  setPayTimes(value: number): void;

  hasMyWheelInfo(): boolean;
  clearMyWheelInfo(): void;
  getMyWheelInfo(): MyWheelInfo | undefined;
  setMyWheelInfo(value?: MyWheelInfo): void;

  hasBlackInfo(): boolean;
  clearBlackInfo(): void;
  getBlackInfo(): BlackInfo | undefined;
  setBlackInfo(value?: BlackInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageEnterRoom.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageEnterRoom): ServerMessageEnterRoom.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageEnterRoom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageEnterRoom;
  static deserializeBinaryFromReader(message: ServerMessageEnterRoom, reader: jspb.BinaryReader): ServerMessageEnterRoom;
}

export namespace ServerMessageEnterRoom {
  export type AsObject = {
    status: number,
    gameStatus: Def.GameStatusMap[keyof Def.GameStatusMap],
    roomInfo?: RoomInfo.AsObject,
    handInfo?: HandInfo.AsObject,
    playersList: Array<Player.AsObject>,
    myInfo?: MyGameInfo.AsObject,
    operatorList: Array<Operator.AsObject>,
    mttInfo?: MTTInfo.AsObject,
    mttProgress?: MTTProgress.AsObject,
    mttRoom?: Room.AsObject,
    muted: boolean,
    payTimes: number,
    myWheelInfo?: MyWheelInfo.AsObject,
    blackInfo?: BlackInfo.AsObject,
  }
}

export class ClientMessageKeepSeatActive extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getKeep(): boolean;
  setKeep(value: boolean): void;

  getDuration(): number;
  setDuration(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageKeepSeatActive.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageKeepSeatActive): ClientMessageKeepSeatActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageKeepSeatActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageKeepSeatActive;
  static deserializeBinaryFromReader(message: ClientMessageKeepSeatActive, reader: jspb.BinaryReader): ClientMessageKeepSeatActive;
}

export namespace ClientMessageKeepSeatActive {
  export type AsObject = {
    room?: Room.AsObject,
    keep: boolean,
    duration: number,
  }
}

export class ServerMessageKeepSeatActive extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getTimes(): number;
  setTimes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageKeepSeatActive.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageKeepSeatActive): ServerMessageKeepSeatActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageKeepSeatActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageKeepSeatActive;
  static deserializeBinaryFromReader(message: ServerMessageKeepSeatActive, reader: jspb.BinaryReader): ServerMessageKeepSeatActive;
}

export namespace ServerMessageKeepSeatActive {
  export type AsObject = {
    status: number,
    times: number,
  }
}

export class ClientMessageLeave extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageLeave.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageLeave): ClientMessageLeave.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageLeave, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageLeave;
  static deserializeBinaryFromReader(message: ClientMessageLeave, reader: jspb.BinaryReader): ClientMessageLeave;
}

export namespace ClientMessageLeave {
  export type AsObject = {
    room?: Room.AsObject,
  }
}

export class ServerMessageLeave extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageLeave.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageLeave): ServerMessageLeave.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageLeave, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageLeave;
  static deserializeBinaryFromReader(message: ServerMessageLeave, reader: jspb.BinaryReader): ServerMessageLeave;
}

export namespace ServerMessageLeave {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageObservers extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageObservers.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageObservers): ClientMessageObservers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageObservers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageObservers;
  static deserializeBinaryFromReader(message: ClientMessageObservers, reader: jspb.BinaryReader): ClientMessageObservers;
}

export namespace ClientMessageObservers {
  export type AsObject = {
    room?: Room.AsObject,
    offset: number,
    limit: number,
  }
}

export class ServerMessageObservers extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  clearObserversList(): void;
  getObserversList(): Array<Roomer>;
  setObserversList(value: Array<Roomer>): void;
  addObservers(value?: Roomer, index?: number): Roomer;

  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageObservers.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageObservers): ServerMessageObservers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageObservers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageObservers;
  static deserializeBinaryFromReader(message: ServerMessageObservers, reader: jspb.BinaryReader): ServerMessageObservers;
}

export namespace ServerMessageObservers {
  export type AsObject = {
    status: number,
    observersList: Array<Roomer.AsObject>,
    offset: number,
    limit: number,
    total: number,
  }
}

export class ClientMessagePlayerJackpotSummary extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessagePlayerJackpotSummary.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessagePlayerJackpotSummary): ClientMessagePlayerJackpotSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessagePlayerJackpotSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessagePlayerJackpotSummary;
  static deserializeBinaryFromReader(message: ClientMessagePlayerJackpotSummary, reader: jspb.BinaryReader): ClientMessagePlayerJackpotSummary;
}

export namespace ClientMessagePlayerJackpotSummary {
  export type AsObject = {
    room?: Room.AsObject,
  }
}

export class ServerMessagePlayerJackpotSummary extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  clearPlayersList(): void;
  getPlayersList(): Array<PlayerJackpotSummary>;
  setPlayersList(value: Array<PlayerJackpotSummary>): void;
  addPlayers(value?: PlayerJackpotSummary, index?: number): PlayerJackpotSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessagePlayerJackpotSummary.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessagePlayerJackpotSummary): ServerMessagePlayerJackpotSummary.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessagePlayerJackpotSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessagePlayerJackpotSummary;
  static deserializeBinaryFromReader(message: ServerMessagePlayerJackpotSummary, reader: jspb.BinaryReader): ServerMessagePlayerJackpotSummary;
}

export namespace ServerMessagePlayerJackpotSummary {
  export type AsObject = {
    status: number,
    playersList: Array<PlayerJackpotSummary.AsObject>,
  }
}

export class ClientMessagePrivateMsg extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getConsume(): Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap];
  setConsume(value: Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  getExtra(): Uint8Array | string;
  getExtra_asU8(): Uint8Array;
  getExtra_asB64(): string;
  setExtra(value: Uint8Array | string): void;

  getTargetUserRid(): number;
  setTargetUserRid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessagePrivateMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessagePrivateMsg): ClientMessagePrivateMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessagePrivateMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessagePrivateMsg;
  static deserializeBinaryFromReader(message: ClientMessagePrivateMsg, reader: jspb.BinaryReader): ClientMessagePrivateMsg;
}

export namespace ClientMessagePrivateMsg {
  export type AsObject = {
    room?: Room.AsObject,
    consume: Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap],
    message: string,
    extra: Uint8Array | string,
    targetUserRid: number,
  }
}

export class ServerMessagePrivateMsg extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessagePrivateMsg.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessagePrivateMsg): ServerMessagePrivateMsg.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessagePrivateMsg, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessagePrivateMsg;
  static deserializeBinaryFromReader(message: ServerMessagePrivateMsg, reader: jspb.BinaryReader): ServerMessagePrivateMsg;
}

export namespace ServerMessagePrivateMsg {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessagePublicReplay extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getHandNum(): number;
  setHandNum(value: number): void;

  getUniqueId(): string;
  setUniqueId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessagePublicReplay.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessagePublicReplay): ClientMessagePublicReplay.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessagePublicReplay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessagePublicReplay;
  static deserializeBinaryFromReader(message: ClientMessagePublicReplay, reader: jspb.BinaryReader): ClientMessagePublicReplay;
}

export namespace ClientMessagePublicReplay {
  export type AsObject = {
    room?: Room.AsObject,
    handNum: number,
    uniqueId: string,
  }
}

export class ServerMessagePublicReplay extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessagePublicReplay.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessagePublicReplay): ServerMessagePublicReplay.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessagePublicReplay, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessagePublicReplay;
  static deserializeBinaryFromReader(message: ServerMessagePublicReplay, reader: jspb.BinaryReader): ServerMessagePublicReplay;
}

export namespace ServerMessagePublicReplay {
  export type AsObject = {
    status: number,
    data: Uint8Array | string,
  }
}

export class ClientMessageRoomInsurance extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageRoomInsurance.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageRoomInsurance): ClientMessageRoomInsurance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageRoomInsurance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageRoomInsurance;
  static deserializeBinaryFromReader(message: ClientMessageRoomInsurance, reader: jspb.BinaryReader): ClientMessageRoomInsurance;
}

export namespace ClientMessageRoomInsurance {
  export type AsObject = {
    room?: Room.AsObject,
    offset: number,
    limit: number,
  }
}

export class ServerMessageRoomInsurance extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getInsurance(): number;
  setInsurance(value: number): void;

  clearPlayerInsurancesList(): void;
  getPlayerInsurancesList(): Array<PlayerInsurance>;
  setPlayerInsurancesList(value: Array<PlayerInsurance>): void;
  addPlayerInsurances(value?: PlayerInsurance, index?: number): PlayerInsurance;

  getOffset(): number;
  setOffset(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  getTotal(): number;
  setTotal(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageRoomInsurance.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageRoomInsurance): ServerMessageRoomInsurance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageRoomInsurance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageRoomInsurance;
  static deserializeBinaryFromReader(message: ServerMessageRoomInsurance, reader: jspb.BinaryReader): ServerMessageRoomInsurance;
}

export namespace ServerMessageRoomInsurance {
  export type AsObject = {
    status: number,
    insurance: number,
    playerInsurancesList: Array<PlayerInsurance.AsObject>,
    offset: number,
    limit: number,
    total: number,
  }
}

export class ClientMessageRoomers extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getHistory(): boolean;
  setHistory(value: boolean): void;

  getHistoryOffset(): number;
  setHistoryOffset(value: number): void;

  getHistoryLimit(): number;
  setHistoryLimit(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageRoomers.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageRoomers): ClientMessageRoomers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageRoomers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageRoomers;
  static deserializeBinaryFromReader(message: ClientMessageRoomers, reader: jspb.BinaryReader): ClientMessageRoomers;
}

export namespace ClientMessageRoomers {
  export type AsObject = {
    room?: Room.AsObject,
    history: boolean,
    historyOffset: number,
    historyLimit: number,
  }
}

export class ServerMessageRoomers extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getInsurance(): number;
  setInsurance(value: number): void;

  clearObserversList(): void;
  getObserversList(): Array<Roomer>;
  setObserversList(value: Array<Roomer>): void;
  addObservers(value?: Roomer, index?: number): Roomer;

  clearPlayersList(): void;
  getPlayersList(): Array<PlayerSummary>;
  setPlayersList(value: Array<PlayerSummary>): void;
  addPlayers(value?: PlayerSummary, index?: number): PlayerSummary;

  getHistoryOffset(): number;
  setHistoryOffset(value: number): void;

  getHistoryLimit(): number;
  setHistoryLimit(value: number): void;

  getTotal(): number;
  setTotal(value: number): void;

  getTotalPot(): number;
  setTotalPot(value: number): void;

  getTotalHand(): number;
  setTotalHand(value: number): void;

  getTotalBringin(): number;
  setTotalBringin(value: number): void;

  getStartTime(): number;
  setStartTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageRoomers.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageRoomers): ServerMessageRoomers.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageRoomers, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageRoomers;
  static deserializeBinaryFromReader(message: ServerMessageRoomers, reader: jspb.BinaryReader): ServerMessageRoomers;
}

export namespace ServerMessageRoomers {
  export type AsObject = {
    status: number,
    insurance: number,
    observersList: Array<Roomer.AsObject>,
    playersList: Array<PlayerSummary.AsObject>,
    historyOffset: number,
    historyLimit: number,
    total: number,
    totalPot: number,
    totalHand: number,
    totalBringin: number,
    startTime: number,
  }
}

export class ClientMessageSeated extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getSeatId(): number;
  setSeatId(value: number): void;

  getReturnOrNew(): number;
  setReturnOrNew(value: number): void;

  getBringIn(): number;
  setBringIn(value: number): void;

  getAutoOnTable(): number;
  setAutoOnTable(value: number): void;

  getAutoUseWallet(): boolean;
  setAutoUseWallet(value: boolean): void;

  getStore(): number;
  setStore(value: number): void;

  getClubId(): number;
  setClubId(value: number): void;

  getApplyBringIn(): boolean;
  setApplyBringIn(value: boolean): void;

  getAutoOnTableNoStore(): boolean;
  setAutoOnTableNoStore(value: boolean): void;

  getAutoOnTableFix(): number;
  setAutoOnTableFix(value: number): void;

  getDepositAdvance(): number;
  setDepositAdvance(value: number): void;

  getAutoOnTableMax(): number;
  setAutoOnTableMax(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageSeated.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageSeated): ClientMessageSeated.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageSeated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageSeated;
  static deserializeBinaryFromReader(message: ClientMessageSeated, reader: jspb.BinaryReader): ClientMessageSeated;
}

export namespace ClientMessageSeated {
  export type AsObject = {
    room?: Room.AsObject,
    seatId: number,
    returnOrNew: number,
    bringIn: number,
    autoOnTable: number,
    autoUseWallet: boolean,
    store: number,
    clubId: number,
    applyBringIn: boolean,
    autoOnTableNoStore: boolean,
    autoOnTableFix: number,
    depositAdvance: number,
    autoOnTableMax: number,
  }
}

export class ServerMessageSeated extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getChips(): number;
  setChips(value: number): void;

  getAccountChips(): number;
  setAccountChips(value: number): void;

  getRecvSeatId(): number;
  setRecvSeatId(value: number): void;

  getPostStatus(): Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap];
  setPostStatus(value: Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap]): void;

  getStoreChips(): number;
  setStoreChips(value: number): void;

  getDeposit(): number;
  setDeposit(value: number): void;

  getSquidIn(): boolean;
  setSquidIn(value: boolean): void;

  getKeepSeatLeftTime(): number;
  setKeepSeatLeftTime(value: number): void;

  getKeepSeatDeadline(): number;
  setKeepSeatDeadline(value: number): void;

  getUserSubscriptionId(): number;
  setUserSubscriptionId(value: number): void;

  getSquidTotalLimit(): number;
  setSquidTotalLimit(value: number): void;

  getAlreadySeated(): boolean;
  setAlreadySeated(value: boolean): void;

  getSquidRoundSeated(): boolean;
  setSquidRoundSeated(value: boolean): void;

  getVideoMaskId(): number;
  setVideoMaskId(value: number): void;

  getTotalBringin(): number;
  setTotalBringin(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageSeated.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageSeated): ServerMessageSeated.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageSeated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageSeated;
  static deserializeBinaryFromReader(message: ServerMessageSeated, reader: jspb.BinaryReader): ServerMessageSeated;
}

export namespace ServerMessageSeated {
  export type AsObject = {
    status: number,
    chips: number,
    accountChips: number,
    recvSeatId: number,
    postStatus: Def.CanPlayStatusMap[keyof Def.CanPlayStatusMap],
    storeChips: number,
    deposit: number,
    squidIn: boolean,
    keepSeatLeftTime: number,
    keepSeatDeadline: number,
    userSubscriptionId: number,
    squidTotalLimit: number,
    alreadySeated: boolean,
    squidRoundSeated: boolean,
    videoMaskId: number,
    totalBringin: number,
  }
}

export class ClientMessageSetAutoOnTable extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getAutoOnTable(): number;
  setAutoOnTable(value: number): void;

  getAutoUseWallet(): boolean;
  setAutoUseWallet(value: boolean): void;

  getAutoOnTableNoStore(): boolean;
  setAutoOnTableNoStore(value: boolean): void;

  getAutoOnTableFix(): number;
  setAutoOnTableFix(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageSetAutoOnTable.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageSetAutoOnTable): ClientMessageSetAutoOnTable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageSetAutoOnTable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageSetAutoOnTable;
  static deserializeBinaryFromReader(message: ClientMessageSetAutoOnTable, reader: jspb.BinaryReader): ClientMessageSetAutoOnTable;
}

export namespace ClientMessageSetAutoOnTable {
  export type AsObject = {
    room?: Room.AsObject,
    autoOnTable: number,
    autoUseWallet: boolean,
    autoOnTableNoStore: boolean,
    autoOnTableFix: number,
  }
}

export class ServerMessageSetAutoOnTable extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageSetAutoOnTable.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageSetAutoOnTable): ServerMessageSetAutoOnTable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageSetAutoOnTable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageSetAutoOnTable;
  static deserializeBinaryFromReader(message: ServerMessageSetAutoOnTable, reader: jspb.BinaryReader): ServerMessageSetAutoOnTable;
}

export namespace ServerMessageSetAutoOnTable {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageShowPublicCards extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getRound(): Def.RoundMap[keyof Def.RoundMap];
  setRound(value: Def.RoundMap[keyof Def.RoundMap]): void;

  getConsume(): Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap];
  setConsume(value: Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageShowPublicCards.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageShowPublicCards): ClientMessageShowPublicCards.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageShowPublicCards, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageShowPublicCards;
  static deserializeBinaryFromReader(message: ClientMessageShowPublicCards, reader: jspb.BinaryReader): ClientMessageShowPublicCards;
}

export namespace ClientMessageShowPublicCards {
  export type AsObject = {
    room?: Room.AsObject,
    round: Def.RoundMap[keyof Def.RoundMap],
    consume: Def.ConsumeTypeMap[keyof Def.ConsumeTypeMap],
  }
}

export class ServerMessageShowPublicCards extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  clearPublicCardsList(): void;
  getPublicCardsList(): Array<number>;
  setPublicCardsList(value: Array<number>): void;
  addPublicCards(value: number, index?: number): number;

  getRound(): Def.RoundMap[keyof Def.RoundMap];
  setRound(value: Def.RoundMap[keyof Def.RoundMap]): void;

  clearPublicCards2List(): void;
  getPublicCards2List(): Array<number>;
  setPublicCards2List(value: Array<number>): void;
  addPublicCards2(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageShowPublicCards.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageShowPublicCards): ServerMessageShowPublicCards.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageShowPublicCards, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageShowPublicCards;
  static deserializeBinaryFromReader(message: ServerMessageShowPublicCards, reader: jspb.BinaryReader): ServerMessageShowPublicCards;
}

export namespace ServerMessageShowPublicCards {
  export type AsObject = {
    status: number,
    publicCardsList: Array<number>,
    round: Def.RoundMap[keyof Def.RoundMap],
    publicCards2List: Array<number>,
  }
}

export class ClientMessageShowdown extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  clearShowCardsList(): void;
  getShowCardsList(): Array<number>;
  setShowCardsList(value: Array<number>): void;
  addShowCards(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageShowdown.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageShowdown): ClientMessageShowdown.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageShowdown, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageShowdown;
  static deserializeBinaryFromReader(message: ClientMessageShowdown, reader: jspb.BinaryReader): ClientMessageShowdown;
}

export namespace ClientMessageShowdown {
  export type AsObject = {
    room?: Room.AsObject,
    showCardsList: Array<number>,
  }
}

export class ServerMessageShowdown extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageShowdown.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageShowdown): ServerMessageShowdown.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageShowdown, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageShowdown;
  static deserializeBinaryFromReader(message: ServerMessageShowdown, reader: jspb.BinaryReader): ServerMessageShowdown;
}

export namespace ServerMessageShowdown {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageSquidInActive extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getEnable(): boolean;
  setEnable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageSquidInActive.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageSquidInActive): ClientMessageSquidInActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageSquidInActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageSquidInActive;
  static deserializeBinaryFromReader(message: ClientMessageSquidInActive, reader: jspb.BinaryReader): ClientMessageSquidInActive;
}

export namespace ClientMessageSquidInActive {
  export type AsObject = {
    room?: Room.AsObject,
    enable: boolean,
  }
}

export class ServerMessageSquidInActive extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageSquidInActive.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageSquidInActive): ServerMessageSquidInActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageSquidInActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageSquidInActive;
  static deserializeBinaryFromReader(message: ServerMessageSquidInActive, reader: jspb.BinaryReader): ServerMessageSquidInActive;
}

export namespace ServerMessageSquidInActive {
  export type AsObject = {
    status: number,
  }
}

export class ClientMessageStandupActive extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getCancelStandup(): boolean;
  setCancelStandup(value: boolean): void;

  getManualChangeRoom(): boolean;
  setManualChangeRoom(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageStandupActive.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageStandupActive): ClientMessageStandupActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageStandupActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageStandupActive;
  static deserializeBinaryFromReader(message: ClientMessageStandupActive, reader: jspb.BinaryReader): ClientMessageStandupActive;
}

export namespace ClientMessageStandupActive {
  export type AsObject = {
    room?: Room.AsObject,
    cancelStandup: boolean,
    manualChangeRoom: boolean,
  }
}

export class ServerMessageStandupActive extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getSeatId(): number;
  setSeatId(value: number): void;

  getChips(): number;
  setChips(value: number): void;

  getWillStandup(): boolean;
  setWillStandup(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageStandupActive.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageStandupActive): ServerMessageStandupActive.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageStandupActive, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageStandupActive;
  static deserializeBinaryFromReader(message: ServerMessageStandupActive, reader: jspb.BinaryReader): ServerMessageStandupActive;
}

export namespace ServerMessageStandupActive {
  export type AsObject = {
    status: number,
    seatId: number,
    chips: number,
    willStandup: boolean,
  }
}

export class ClientMessageStoreChips extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getStore(): number;
  setStore(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageStoreChips.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageStoreChips): ClientMessageStoreChips.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageStoreChips, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageStoreChips;
  static deserializeBinaryFromReader(message: ClientMessageStoreChips, reader: jspb.BinaryReader): ClientMessageStoreChips;
}

export namespace ClientMessageStoreChips {
  export type AsObject = {
    room?: Room.AsObject,
    store: number,
  }
}

export class ServerMessageStoreChips extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getChips(): number;
  setChips(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageStoreChips.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageStoreChips): ServerMessageStoreChips.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageStoreChips, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageStoreChips;
  static deserializeBinaryFromReader(message: ServerMessageStoreChips, reader: jspb.BinaryReader): ServerMessageStoreChips;
}

export namespace ServerMessageStoreChips {
  export type AsObject = {
    status: number,
    chips: number,
  }
}

export class ClientMessageSyncEnter extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageSyncEnter.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageSyncEnter): ClientMessageSyncEnter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageSyncEnter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageSyncEnter;
  static deserializeBinaryFromReader(message: ClientMessageSyncEnter, reader: jspb.BinaryReader): ClientMessageSyncEnter;
}

export namespace ClientMessageSyncEnter {
  export type AsObject = {
    room?: Room.AsObject,
  }
}

export class ServerMessageSyncEnter extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getGameStatus(): Def.GameStatusMap[keyof Def.GameStatusMap];
  setGameStatus(value: Def.GameStatusMap[keyof Def.GameStatusMap]): void;

  hasRoomInfo(): boolean;
  clearRoomInfo(): void;
  getRoomInfo(): RoomInfo | undefined;
  setRoomInfo(value?: RoomInfo): void;

  hasHandInfo(): boolean;
  clearHandInfo(): void;
  getHandInfo(): HandInfo | undefined;
  setHandInfo(value?: HandInfo): void;

  clearPlayersList(): void;
  getPlayersList(): Array<Player>;
  setPlayersList(value: Array<Player>): void;
  addPlayers(value?: Player, index?: number): Player;

  hasMyInfo(): boolean;
  clearMyInfo(): void;
  getMyInfo(): MyGameInfo | undefined;
  setMyInfo(value?: MyGameInfo): void;

  clearOperatorList(): void;
  getOperatorList(): Array<Operator>;
  setOperatorList(value: Array<Operator>): void;
  addOperator(value?: Operator, index?: number): Operator;

  hasMttInfo(): boolean;
  clearMttInfo(): void;
  getMttInfo(): MTTInfo | undefined;
  setMttInfo(value?: MTTInfo): void;

  hasMttProgress(): boolean;
  clearMttProgress(): void;
  getMttProgress(): MTTProgress | undefined;
  setMttProgress(value?: MTTProgress): void;

  hasMttRoom(): boolean;
  clearMttRoom(): void;
  getMttRoom(): Room | undefined;
  setMttRoom(value?: Room): void;

  getMuted(): boolean;
  setMuted(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageSyncEnter.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageSyncEnter): ServerMessageSyncEnter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageSyncEnter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageSyncEnter;
  static deserializeBinaryFromReader(message: ServerMessageSyncEnter, reader: jspb.BinaryReader): ServerMessageSyncEnter;
}

export namespace ServerMessageSyncEnter {
  export type AsObject = {
    status: number,
    gameStatus: Def.GameStatusMap[keyof Def.GameStatusMap],
    roomInfo?: RoomInfo.AsObject,
    handInfo?: HandInfo.AsObject,
    playersList: Array<Player.AsObject>,
    myInfo?: MyGameInfo.AsObject,
    operatorList: Array<Operator.AsObject>,
    mttInfo?: MTTInfo.AsObject,
    mttProgress?: MTTProgress.AsObject,
    mttRoom?: Room.AsObject,
    muted: boolean,
  }
}

export class ClientMessageViewPlayerCardsNum extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageViewPlayerCardsNum.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageViewPlayerCardsNum): ClientMessageViewPlayerCardsNum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageViewPlayerCardsNum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageViewPlayerCardsNum;
  static deserializeBinaryFromReader(message: ClientMessageViewPlayerCardsNum, reader: jspb.BinaryReader): ClientMessageViewPlayerCardsNum;
}

export namespace ClientMessageViewPlayerCardsNum {
  export type AsObject = {
    room?: Room.AsObject,
  }
}

export class ServerMessageViewPlayerCardsNum extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getPayTimes(): number;
  setPayTimes(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageViewPlayerCardsNum.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageViewPlayerCardsNum): ServerMessageViewPlayerCardsNum.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageViewPlayerCardsNum, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageViewPlayerCardsNum;
  static deserializeBinaryFromReader(message: ServerMessageViewPlayerCardsNum, reader: jspb.BinaryReader): ServerMessageViewPlayerCardsNum;
}

export namespace ServerMessageViewPlayerCardsNum {
  export type AsObject = {
    status: number,
    payTimes: number,
  }
}

export class ClientMessageViewPlayerCards extends jspb.Message {
  hasRoom(): boolean;
  clearRoom(): void;
  getRoom(): Room | undefined;
  setRoom(value?: Room): void;

  getTargetSeatId(): number;
  setTargetSeatId(value: number): void;

  getTargetUserRid(): number;
  setTargetUserRid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientMessageViewPlayerCards.AsObject;
  static toObject(includeInstance: boolean, msg: ClientMessageViewPlayerCards): ClientMessageViewPlayerCards.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientMessageViewPlayerCards, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientMessageViewPlayerCards;
  static deserializeBinaryFromReader(message: ClientMessageViewPlayerCards, reader: jspb.BinaryReader): ClientMessageViewPlayerCards;
}

export namespace ClientMessageViewPlayerCards {
  export type AsObject = {
    room?: Room.AsObject,
    targetSeatId: number,
    targetUserRid: number,
  }
}

export class ServerMessageViewPlayerCards extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageViewPlayerCards.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageViewPlayerCards): ServerMessageViewPlayerCards.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageViewPlayerCards, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageViewPlayerCards;
  static deserializeBinaryFromReader(message: ServerMessageViewPlayerCards, reader: jspb.BinaryReader): ServerMessageViewPlayerCards;
}

export namespace ServerMessageViewPlayerCards {
  export type AsObject = {
    status: number,
  }
}
