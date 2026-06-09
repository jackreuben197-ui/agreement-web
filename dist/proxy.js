(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory(module.exports);
  } else {
    root.HoldemPBProxy = factory(root.HoldemPBProxy || {});
  }
}(typeof self !== 'undefined' ? self : this, function(exports) {
  'use strict';

  // 获取 window.HoldemPB（惰性 — 可能尚未加载）
  function getPB() {
    return (typeof window !== 'undefined' ? window : global).HoldemPB;
  }

  // class 构造函数：惰性 getter，首次访问时才解析
  function lazy(name) {
    var val, resolved = false;
    Object.defineProperty(exports, name, {
      get: function() {
        if (!resolved) {
          var pb = getPB();
          val = pb ? pb[name] : undefined;
          resolved = true;
        }
        return val;
      },
      configurable: true,
      enumerable: true
    });
  }

  // enum / 常量映射 — 内联值，import 时立即可用
  exports.Code = {
  NONE: 0,
  MSG_D_REGISTER: 1,
  MSG_D_HEARTBEAT: 2,
  MSG_S_ERROR: 99,
  MSG_S_NOTIFICATION_ROOM_READY: 101,
  MSG_S_USER_BAN: 102,
  MSG_S_NOTIFICATION_SYSTEM_MAINTAIN: 103,
  MSG_S_ROOM_READY_FOR_ENTER: 104,
  MSG_S_MTT_READY_FOR_APPLY: 105,
  MSG_S_USER_KICKED_FROM_CLUB: 106,
  MSG_S_NOTIFICATION_MTT_WILL_START: 107,
  MSG_S_SYSTEM_MESSAGE: 108,
  MSG_S_GET_MESSAGE: 109,
  MSG_S_USER_GAME_WATCH: 110,
  MSG_S_FRIEND_ROOM_BRING_IN_APPLY_TO_ADMIN: 111,
  MSG_S_FRIEND_ROOM_BRING_IN_APPLY_TO_USER: 112,
  MSG_S_CLUB_ROOM_BRING_IN_APPLY_TO_ADMIN: 113,
  MSG_S_CLUB_ROOM_BRING_IN_APPLY_TO_USER: 114,
  MSG_S_CLUB_ROOM_BRING_IN_APPLY_AUDIT: 116,
  MSG_S_ADMIN_ROOM_USER_STANDUP: 117,
  MSG_S_ADMIN_ROOM_USER_LEAVE: 118,
  MSG_S_ROOM_DELAY_APPLY_TO_ADMIN: 119,
  MSG_S_CLUB_ROOM_DELAY_APPLY_AUDIT: 120,
  MSG_S_USER_IS_BLOCKED: 121,
  MSG_S_CLUB_USER_IS_BLOCKED: 122,
  MSG_S_TODO_LIST: 123,
  MSG_S_USER_DEVICE_IS_BLOCKED: 124,
  MSG_S_OFFLINE_TICKETS: 125,
  MSG_S_SNATCH_TREASURE_HRL: 126,
  MSG_S_SNATCH_TREASURE_WIN_POPUP: 127,
  MSG_S_JACKPOT_MARQUEE: 128,
  MSG_S_MATCHING_RESULT: 129,
  MSG_S_SELF_PROFIT_PAY: 130,
  MSG_S_LIMIT_HAND_NUMBER: 131,
  MSG_S_ROOM_USER_SEND_DIAMOND: 132,
  MSG_S_USER_ORDER_AUDIT: 133,
  MSG_S_USER_WHEEL_HAND_NUM: 134,
  MSG_S_CACHE_DATA_UPDATE: 135,
  MSG_S_SUPPORT_MESSAGE: 136,
  MSG_S_USER_IS_MUTE: 137,
  MSG_S_USER_DIAMOND_CHANGE: 138,
  MSG_S_TRIBE_BLACK_USER_MTT: 139,
  MSG_S_ROOM_CHANGE_NOTIFY: 140,
  MSG_S_USER_GOLD_CHANGE: 141,
  MSG_S_TRIBE_BLACK_USER: 142,
  MSG_S_USER_TRADER_ORDER_NOTIFY: 143,
  MSG_S_ROOM_MTT_SETTLE_NOTIFY: 144,
  MSG_S_USER_USDT_ORDER_NOTIFY: 145,
  MSG_S_FRIEND_ROOM_CREATOR_SETTLE: 146,
  MSG_S_MTT_AWARD_NOTIFY: 147,
  MSG_S_USER_JOIN_CLUB: 148,
  MSG_S_CLUB_ROOM_MTT_SETTLE_NOTIFY: 149,
  MSG_S_USER_CLUB_ROLE_CHANGE: 150,
  MSG_S_USER_MTT_CHANGE_NOTIFY: 151,
  MSG_S_USER_SNG_CHANGE_NOTIFY: 152,
  MSG_S_MTT_SERIES_NOTIFY: 153,
  MSG_D_USER_PLAYING: 201,
  MSG_R_ROOMS: 202,
  MSG_R_QUICK_JOIN: 203,
  MSG_R_MTT_DETAIL: 204,
  MSG_R_JOIN_MATCHING: 205,
  MSG_R_ROOMS_SIMPLE: 206,
  MSG_S_UTIL_FACE_RECOGNIZE: 901,
  MSG_S_UTIL_ANTI_CHEAT_ROOM_VIDEO: 902,
  MSG_D_ENTER_ROOM: 1002,
  MSG_D_SEATED: 1003,
  MSG_D_ADD_ON: 1004,
  MSG_D_BRING_IN: 1005,
  MSG_D_ACTION: 1006,
  MSG_D_AUTO_OP_ACTIVE: 1007,
  MSG_D_SET_AUTO_ON_TABLE: 1008,
  MSG_D_STANDUP_ACTIVE: 1009,
  MSG_D_LEAVE: 1010,
  MSG_D_KEEP_SEAT_ACTIVE: 1011,
  MSG_D_SHOWDOWN: 1012,
  MSG_D_SHOW_PUBLIC_CARDS: 1013,
  MSG_D_ADD_TIME: 1014,
  MSG_D_BUY_INSURANCE_ACTIVE: 1015,
  MSG_D_AGREE_POST: 1016,
  MSG_D_STORE_CHIPS: 1017,
  MSG_D_PUBLIC_REPLAY: 1018,
  MSG_D_BROADCAST_MSG: 1019,
  MSG_D_PRIVATE_MSG: 1020,
  MSG_D_ROOMERS: 1021,
  MSG_D_AGREE_SECOND_PCS_ACTIVE: 1022,
  MSG_D_OBSERVERS: 1023,
  MSG_D_SQUID_IN_ACTIVE: 1024,
  MSG_D_SYNC_ENTER: 1025,
  MSG_D_VIEW_PLAYER_CARDS: 1026,
  MSG_D_PLAYER_JACKPOT_SUMMARY: 1027,
  MSG_D_CHAT_MEMBERS: 1028,
  MSG_D_VIEW_PLAYER_CARDS_NUM: 1029,
  MSG_D_ROOM_INSURANCE: 1030,
  MSG_S_SHOW_PUBLIC_CARDS_OTHERS: 1100,
  MSG_S_SHOWCARDS: 1101,
  MSG_S_SEATED_OTHERS: 1102,
  MSG_S_START_INFO: 1103,
  MSG_S_PUBLIC_CARDS: 1104,
  MSG_S_SIDE_POTS: 1105,
  MSG_S_CHIPS_CHANGE: 1107,
  MSG_S_ACTION_ALL: 1108,
  MSG_S_AUTO_OP: 1109,
  MSG_S_STANDUP: 1110,
  MSG_S_KEEP_SEAT: 1111,
  MSG_S_WINNER: 1112,
  MSG_S_ADD_TIME_OTHERS: 1113,
  MSG_S_LEAVE_NOTIFICATION: 1114,
  MSG_S_INSURANCE_TRIGGED: 1115,
  MSG_S_BUY_INSURANCE: 1116,
  MSG_S_POST_STATUS_CHANGE: 1117,
  MSG_S_BRING_IN_OR_STORE_FAIL: 1118,
  MSG_S_HAND_CLEAR: 1119,
  MSG_S_UP_BLIND: 1120,
  MSG_S_GET_MSG: 1121,
  MSG_S_AGREE_SECOND_PCS_TRIGGED: 1122,
  MSG_S_AGREE_SECOND_PCS: 1123,
  MSG_S_SYNC_HAND: 1124,
  MSG_S_SQUID_IN: 1125,
  MSG_S_NEXT_CHANGE: 1126,
  MSG_S_SHOW_VIEW_CARDS: 1127,
  MSG_S_ENCRYPT_CARDS: 1128,
  MSG_S_JACKPOT_GOLD_CHANGE: 1129,
  MSG_S_JACKPOT_AWARD: 1130,
  MSG_S_INSURANCE_OUTS_CARDS: 1131,
  MSG_S_FORCE_VIDEO: 1132,
  MSG_S_VIDEO_MASK_CHANGE: 1133,
  MSG_S_WAIT_CHECK_AUTO_ADD_TIME: 1134,
  MSG_D_FT_ENTER_ROOM: 1202,
  MSG_D_FT_SEATED: 1203,
  MSG_D_FT_BRING_IN: 1204,
  MSG_D_FT_ACTION: 1205,
  MSG_D_FT_AUTO_OP_ACTIVE: 1206,
  MSG_D_FT_STANDUP_ACTIVE: 1207,
  MSG_D_FT_LEAVE: 1208,
  MSG_D_FT_KEEP_SEAT_ACTIVE: 1209,
  MSG_D_FT_ADD_TIME: 1210,
  MSG_D_FT_PUBLIC_REPLAY: 1211,
  MSG_D_FT_BROADCAST_MSG: 1212,
  MSG_D_FT_PRIVATE_MSG: 1213,
  MSG_D_FT_ROOMERS: 1214,
  MSG_D_FT_SET_AUTO_ON_TABLE: 1215,
  MSG_D_FT_PAIR: 1216,
  MSG_D_FT_OBSERVERS: 1217,
  MSG_D_FT_SYNC_ENTER: 1218,
  MSG_D_FT_CHAT_MEMBERS: 1219,
  MSG_S_FT_SEATED_OTHERS: 1301,
  MSG_S_FT_START_INFO: 1302,
  MSG_S_FT_PUBLIC_CARDS: 1303,
  MSG_S_FT_CHIPS_CHANGE: 1304,
  MSG_S_FT_ACTION_ALL: 1305,
  MSG_S_FT_AUTO_OP: 1306,
  MSG_S_FT_STANDUP: 1307,
  MSG_S_FT_KEEP_SEAT: 1308,
  MSG_S_FT_WINNER: 1309,
  MSG_S_FT_ADD_TIME_OTHERS: 1310,
  MSG_S_FT_LEAVE_NOTIFICATION: 1311,
  MSG_S_FT_BRING_IN_FAIL: 1313,
  MSG_S_FT_HAND_CLEAR: 1314,
  MSG_S_FT_GET_MSG: 1315,
  MSG_S_FT_PAIR_ALL: 1316,
  MSG_S_FT_VIDEO_MASK_CHANGE: 1317,
  MSG_D_CB_ENTER_ROOM: 2001,
  MSG_D_CB_PLAY: 2002,
  MSG_D_CB_CANCEL_PLAY: 2003,
  MSG_D_CB_LEAVE: 2004,
  MSG_D_CB_CHAT: 2005,
  MSG_D_CB_TOP: 2006,
  MSG_D_CB_WAYMAP: 2007,
  MSG_D_CB_LAST_GAMES: 2008,
  MSG_D_CB_BRING_IN: 2009,
  MSG_D_CB_WAYMAP_SPEC: 2010,
  MSG_D_CB_ONLINE: 2011,
  MSG_D_CB_SYNC_ENTER: 2012,
  MSG_S_CB_GAME_START: 2100,
  MSG_S_CB_GAME_PLAY_INFO: 2101,
  MSG_S_CB_GAME_PLAY_END: 2102,
  MSG_S_CB_GAME_RESULT: 2103,
  MSG_S_CB_WAYMAP_UPDATE: 2104,
  MSG_S_CB_ROOM_CLOSE: 2105,
  MSG_S_CB_CHAT_OTHERS: 2106,
  MSG_S_CB_LEAVE_NOTIFICATION: 2107,
  MSG_S_CB_STANDUP_NOTIFICATION: 2108,
  MSG_S_CB_ENCRYPT_CARDS: 2109,
  MSG_D_MJ_ENTER_ROOM: 3001,
  MSG_D_MJ_SEATED: 3002,
  MSG_D_MJ_BRING_IN: 3003,
  MSG_D_MJ_EXCHANGE_TILES: 3004,
  MSG_D_MJ_VOID_SUIT: 3005,
  MSG_D_MJ_ACTION: 3006,
  MSG_D_MJ_AUTO_OP_ACTIVE: 3007,
  MSG_D_MJ_STANDUP_ACTIVE: 3008,
  MSG_D_MJ_LEAVE: 3009,
  MSG_D_MJ_KEEP_SEAT_ACTIVE: 3010,
  MSG_D_MJ_ADD_TIME: 3011,
  MSG_D_MJ_BROADCAST_MSG: 3012,
  MSG_D_MJ_PRIVATE_MSG: 3013,
  MSG_D_MJ_ROOMERS: 3014,
  MSG_D_MJ_SET_AUTO_ON_TABLE: 3015,
  MSG_D_MJ_OBSERVERS: 3016,
  MSG_D_MJ_SYNC_ENTER: 3017,
  MSG_D_MJ_REPLAY: 3018,
  MSG_D_MJ_CHAT_MEMBERS: 3019,
  MSG_D_MJ_RAISE: 3020,
  MSG_D_MJ_REJECT_BRING_IN: 3021,
  MSG_S_MJ_SEATED_OTHERS: 3051,
  MSG_S_MJ_START_INFO: 3052,
  MSG_S_MJ_EXCHANGE_TILES_COMPLETE: 3053,
  MSG_S_MJ_VOID_SUIT_COMPLETE: 3054,
  MSG_S_MJ_CHIPS_CHANGE: 3055,
  MSG_S_MJ_ACTION_ALL: 3056,
  MSG_S_MJ_AUTO_OP: 3057,
  MSG_S_MJ_STANDUP: 3058,
  MSG_S_MJ_KEEP_SEAT: 3059,
  MSG_S_MJ_RESULT: 3060,
  MSG_S_MJ_ADD_TIME_OTHERS: 3061,
  MSG_S_MJ_LEAVE_NOTIFICATION: 3062,
  MSG_S_MJ_BRING_IN_FAIL: 3063,
  MSG_S_MJ_HAND_CLEAR: 3064,
  MSG_S_MJ_GET_MSG: 3065,
  MSG_S_MJ_WAIT_TURN_ACTION: 3066,
  MSG_S_MJ_ACTION_FAIL: 3067,
  MSG_S_MJ_PREPARE: 3068,
  MSG_S_MJ_RAISE_COMPLETE: 3069,
  MSG_S_MJ_FOLLOW_DEALER: 3070,
  MSG_S_MJ_NEED_BRING_IN: 3071,
  MSG_S_MJ_NEED_BRING_IN_COMPLETE: 3072,
  MSG_S_MJ_VIDEO_MASK_CHANGE: 3073,
  MSG_S_MJ_UP_BLIND: 3074,
  MSG_S_MJ_SYNC_HAND: 3075,
  MSG_D_GD_ENTER_ROOM: 4001,
  MSG_D_GD_SEATED: 4002,
  MSG_D_GD_BRING_IN: 4003,
  MSG_D_GD_READY_START: 4004,
  MSG_D_GD_WINRATE_ADD: 4005,
  MSG_D_GD_TRIBUTE_GIVE: 4006,
  MSG_D_GD_TRIBUTE_RETURN: 4007,
  MSG_D_GD_ACTION: 4008,
  MSG_D_GD_AUTO_OP_ACTIVE: 4009,
  MSG_D_GD_STANDUP_ACTIVE: 4010,
  MSG_D_GD_LEAVE: 4011,
  MSG_D_GD_KEEP_SEAT_ACTIVE: 4012,
  MSG_D_GD_ADD_TIME: 4013,
  MSG_D_GD_BROADCAST_MSG: 4014,
  MSG_D_GD_PRIVATE_MSG: 4015,
  MSG_D_GD_ROOMERS: 4016,
  MSG_D_GD_SET_AUTO_ON_TABLE: 4017,
  MSG_D_GD_OBSERVERS: 4018,
  MSG_D_GD_SYNC_ENTER: 4019,
  MSG_D_GD_REPLAY: 4020,
  MSG_D_GD_CHAT_MEMBERS: 4021,
  MSG_S_GD_SEATED_OTHERS: 4101,
  MSG_S_GD_START_INFO: 4102,
  MSG_S_GD_WINRATE_ADD_COMPLETE: 4103,
  MSG_S_GD_TRIBUTE_GIVE_COMPLETE: 4104,
  MSG_S_GD_TRIBUTE_RETURN_COMPLETE: 4105,
  MSG_S_GD_CHIPS_CHANGE: 4106,
  MSG_S_GD_ACTION_ALL: 4107,
  MSG_S_GD_AUTO_OP: 4108,
  MSG_S_GD_STANDUP: 4109,
  MSG_S_GD_KEEP_SEAT: 4110,
  MSG_S_GD_RESULT: 4111,
  MSG_S_GD_ADD_TIME_OTHERS: 4112,
  MSG_S_GD_LEAVE_NOTIFICATION: 4113,
  MSG_S_GD_BRING_IN_FAIL: 4114,
  MSG_S_GD_HAND_CLEAR: 4115,
  MSG_S_GD_GET_MSG: 4116,
  MSG_S_GD_READY_START_ALL: 4117,
  MSG_S_GD_WAIT_READY_START: 4118,
  MSG_S_GD_VIDEO_MASK_CHANGE: 4119
};;

  // class 构造函数 — 惰性加载
  lazy('ActionLimit');
  lazy('ActionShortcutLimit');
  lazy('AllInWinCardsInfo');
  lazy('BlackInfo');
  lazy('BoardsDetailFT');
  lazy('CBGame');
  lazy('CBGameHistorySummary');
  lazy('CBGameResult');
  lazy('CBHandResult');
  lazy('CBHistoryItem');
  lazy('CBHistorySimpleItem');
  lazy('CBPlayResult');
  lazy('CBPlaySummary');
  lazy('CBRoom');
  lazy('CBSetting');
  lazy('CBSlotUserPlaySummary');
  lazy('CBUser');
  lazy('CBUserPlay');
  lazy('CBUserPlaySummary');
  lazy('CBWayPointMap');
  lazy('CBWayPointMove');
  lazy('CBWayPointPreview');
  lazy('CBWayPointStatic');
  lazy('Card');
  lazy('CardsGroup');
  lazy('ChangeRoomInfo');
  lazy('ClaimAction');
  lazy('ClaimValidAction');
  lazy('ClientMessageAction');
  lazy('ClientMessageAddOn');
  lazy('ClientMessageAddTime');
  lazy('ClientMessageAgreePost');
  lazy('ClientMessageAgreeSecondPcsActive');
  lazy('ClientMessageAutoOpActive');
  lazy('ClientMessageBringIn');
  lazy('ClientMessageBroadcastMsg');
  lazy('ClientMessageBuyInsuranceActive');
  lazy('ClientMessageCbBringIn');
  lazy('ClientMessageCbCancelPlay');
  lazy('ClientMessageCbChat');
  lazy('ClientMessageCbEnterRoom');
  lazy('ClientMessageCbLastGames');
  lazy('ClientMessageCbLeave');
  lazy('ClientMessageCbOnline');
  lazy('ClientMessageCbPlay');
  lazy('ClientMessageCbSyncEnter');
  lazy('ClientMessageCbTop');
  lazy('ClientMessageCbWaymap');
  lazy('ClientMessageCbWaymapSpec');
  lazy('ClientMessageChatMembers');
  lazy('ClientMessageEnterRoom');
  lazy('ClientMessageFtAction');
  lazy('ClientMessageFtAddTime');
  lazy('ClientMessageFtAutoOpActive');
  lazy('ClientMessageFtBringIn');
  lazy('ClientMessageFtBroadcastMsg');
  lazy('ClientMessageFtChatMembers');
  lazy('ClientMessageFtEnterRoom');
  lazy('ClientMessageFtKeepSeatActive');
  lazy('ClientMessageFtLeave');
  lazy('ClientMessageFtObservers');
  lazy('ClientMessageFtPair');
  lazy('ClientMessageFtPrivateMsg');
  lazy('ClientMessageFtPublicReplay');
  lazy('ClientMessageFtRoomers');
  lazy('ClientMessageFtSeated');
  lazy('ClientMessageFtSetAutoOnTable');
  lazy('ClientMessageFtStandupActive');
  lazy('ClientMessageFtSyncEnter');
  lazy('ClientMessageGdAction');
  lazy('ClientMessageGdAddTime');
  lazy('ClientMessageGdAutoOpActive');
  lazy('ClientMessageGdBringIn');
  lazy('ClientMessageGdBroadcastMsg');
  lazy('ClientMessageGdChatMembers');
  lazy('ClientMessageGdEnterRoom');
  lazy('ClientMessageGdKeepSeatActive');
  lazy('ClientMessageGdLeave');
  lazy('ClientMessageGdObservers');
  lazy('ClientMessageGdPrivateMsg');
  lazy('ClientMessageGdReadyStart');
  lazy('ClientMessageGdReplay');
  lazy('ClientMessageGdRoomers');
  lazy('ClientMessageGdSeated');
  lazy('ClientMessageGdSetAutoOnTable');
  lazy('ClientMessageGdStandupActive');
  lazy('ClientMessageGdSyncEnter');
  lazy('ClientMessageGdTributeGive');
  lazy('ClientMessageGdTributeReturn');
  lazy('ClientMessageGdWinrateAdd');
  lazy('ClientMessageHeartbeat');
  lazy('ClientMessageJoinMatching');
  lazy('ClientMessageKeepSeatActive');
  lazy('ClientMessageLeave');
  lazy('ClientMessageMjAction');
  lazy('ClientMessageMjAddTime');
  lazy('ClientMessageMjAutoOpActive');
  lazy('ClientMessageMjBringIn');
  lazy('ClientMessageMjBroadcastMsg');
  lazy('ClientMessageMjChatMembers');
  lazy('ClientMessageMjEnterRoom');
  lazy('ClientMessageMjExchangeTiles');
  lazy('ClientMessageMjKeepSeatActive');
  lazy('ClientMessageMjLeave');
  lazy('ClientMessageMjObservers');
  lazy('ClientMessageMjPrivateMsg');
  lazy('ClientMessageMjRaise');
  lazy('ClientMessageMjRejectBringIn');
  lazy('ClientMessageMjReplay');
  lazy('ClientMessageMjRoomers');
  lazy('ClientMessageMjSeated');
  lazy('ClientMessageMjSetAutoOnTable');
  lazy('ClientMessageMjStandupActive');
  lazy('ClientMessageMjSyncEnter');
  lazy('ClientMessageMjVoidSuit');
  lazy('ClientMessageMttDetail');
  lazy('ClientMessageObservers');
  lazy('ClientMessagePlayerJackpotSummary');
  lazy('ClientMessagePrivateMsg');
  lazy('ClientMessagePublicReplay');
  lazy('ClientMessageQuickJoin');
  lazy('ClientMessageRegister');
  lazy('ClientMessageRoomInsurance');
  lazy('ClientMessageRoomers');
  lazy('ClientMessageRooms');
  lazy('ClientMessageRoomsSimple');
  lazy('ClientMessageSeated');
  lazy('ClientMessageSetAutoOnTable');
  lazy('ClientMessageShowPublicCards');
  lazy('ClientMessageShowdown');
  lazy('ClientMessageSquidInActive');
  lazy('ClientMessageStandupActive');
  lazy('ClientMessageStoreChips');
  lazy('ClientMessageSyncEnter');
  lazy('ClientMessageUserPlaying');
  lazy('ClientMessageViewPlayerCards');
  lazy('ClientMessageViewPlayerCardsNum');
  lazy('CowboyConfig');
  lazy('Def');
  lazy('DefCB');
  lazy('DefFT');
  lazy('DefGD');
  lazy('DefMJ');
  lazy('ExchangeFlower');
  lazy('ExternalHandChange');
  lazy('ExternalPools');
  lazy('ExternalResultMJ');
  lazy('GPS');
  lazy('GroupResultFT');
  lazy('HandCardIndexGroup');
  lazy('HandInfo');
  lazy('HandInfoFT');
  lazy('InsuranceOdds');
  lazy('InsuranceOddsForPotsUserCount');
  lazy('InsurancePotInvalid');
  lazy('InsurancePotLimit');
  lazy('JackpotAward');
  lazy('JackpotAwardLog');
  lazy('JackpotTemplateUpdateInfo');
  lazy('Luckycards');
  lazy('MTTBlindLevelDelayTime');
  lazy('MTTInfo');
  lazy('MTTMore');
  lazy('MTTPrize');
  lazy('MTTProgress');
  lazy('MTTRecord');
  lazy('MTTUserStatus');
  lazy('MatchInfoGD');
  lazy('MatchInfoMJ');
  lazy('ModeSetting');
  lazy('MultiLangName');
  lazy('MyGameInfo');
  lazy('MyGameInfoFT');
  lazy('MyGameInfoGD');
  lazy('MyGameInfoMJ');
  lazy('MyWheelInfo');
  lazy('NeedBringInPlayer');
  lazy('NeedBringInResult');
  lazy('Operator');
  lazy('OperatorFT');
  lazy('OperatorGD');
  lazy('OperatorMJ');
  lazy('OutsCard');
  lazy('Player');
  lazy('PlayerAllInShowCardWinCardsLength');
  lazy('PlayerCards');
  lazy('PlayerCardsGroup');
  lazy('PlayerChipChange');
  lazy('PlayerChipChangeFT');
  lazy('PlayerChipChangeGD');
  lazy('PlayerChipChangeMJ');
  lazy('PlayerFT');
  lazy('PlayerGD');
  lazy('PlayerGoldGD');
  lazy('PlayerInsurance');
  lazy('PlayerInsuranceOutsCards');
  lazy('PlayerJackpotSummary');
  lazy('PlayerMJ');
  lazy('PlayerPrepareMJ');
  lazy('PlayerRaise');
  lazy('PlayerStartInfo');
  lazy('PlayerStartInfoFT');
  lazy('PlayerStartInfoGD');
  lazy('PlayerStartInfoMJ');
  lazy('PlayerSummary');
  lazy('PlayerSummaryFT');
  lazy('PlayerSummaryGD');
  lazy('PlayerSummaryMJ');
  lazy('PlayerVoidSuit');
  lazy('PostStatusChange');
  lazy('PotInsuranceBuy');
  lazy('PrizeGoods');
  lazy('ReadyTile');
  lazy('Result');
  lazy('ResultDetailMJ');
  lazy('ResultFT');
  lazy('ResultGD');
  lazy('ResultMJ');
  lazy('Room');
  lazy('RoomAdmin');
  lazy('RoomChange');
  lazy('RoomInfo');
  lazy('RoomInfoFT');
  lazy('RoomInfoGD');
  lazy('RoomInfoMJ');
  lazy('RoomJackpotConfig');
  lazy('RoomRecord');
  lazy('RoomRecordSimple');
  lazy('RoomTemplateUpdateInfo');
  lazy('RoomTribeClubRelate');
  lazy('RoomUserInfo');
  lazy('RoomWithType');
  lazy('Roomer');
  lazy('RuleUnit');
  lazy('SecondPublicCardsPlayerAllInShowCardSummary');
  lazy('ServerMessageAction');
  lazy('ServerMessageActionAll');
  lazy('ServerMessageAddOn');
  lazy('ServerMessageAddTime');
  lazy('ServerMessageAddTimeOthers');
  lazy('ServerMessageAdminRoomUserLeave');
  lazy('ServerMessageAdminRoomUserStandup');
  lazy('ServerMessageAgreePost');
  lazy('ServerMessageAgreeSecondPcs');
  lazy('ServerMessageAgreeSecondPcsActive');
  lazy('ServerMessageAgreeSecondPcsTrigged');
  lazy('ServerMessageAutoOp');
  lazy('ServerMessageAutoOpActive');
  lazy('ServerMessageBringIn');
  lazy('ServerMessageBringInOrStoreFail');
  lazy('ServerMessageBroadcastMsg');
  lazy('ServerMessageBuyInsurance');
  lazy('ServerMessageBuyInsuranceActive');
  lazy('ServerMessageCacheDataUpdate');
  lazy('ServerMessageCbBringIn');
  lazy('ServerMessageCbCancelPlay');
  lazy('ServerMessageCbChat');
  lazy('ServerMessageCbChatOthers');
  lazy('ServerMessageCbEncryptCards');
  lazy('ServerMessageCbEnterRoom');
  lazy('ServerMessageCbGamePlayEnd');
  lazy('ServerMessageCbGamePlayInfo');
  lazy('ServerMessageCbGameResult');
  lazy('ServerMessageCbGameStart');
  lazy('ServerMessageCbLastGames');
  lazy('ServerMessageCbLeave');
  lazy('ServerMessageCbLeaveNotification');
  lazy('ServerMessageCbOnline');
  lazy('ServerMessageCbPlay');
  lazy('ServerMessageCbRoomClose');
  lazy('ServerMessageCbStandupNotification');
  lazy('ServerMessageCbSyncEnter');
  lazy('ServerMessageCbTop');
  lazy('ServerMessageCbWaymap');
  lazy('ServerMessageCbWaymapSpec');
  lazy('ServerMessageCbWaymapUpdate');
  lazy('ServerMessageChatMembers');
  lazy('ServerMessageChipsChange');
  lazy('ServerMessageClubRoomBringInApplyAudit');
  lazy('ServerMessageClubRoomBringInApplyToAdmin');
  lazy('ServerMessageClubRoomBringInApplyToUser');
  lazy('ServerMessageClubRoomDelayApplyAudit');
  lazy('ServerMessageClubRoomMttSettleNotify');
  lazy('ServerMessageClubUserIsBlocked');
  lazy('ServerMessageEncryptCards');
  lazy('ServerMessageEnterRoom');
  lazy('ServerMessageError');
  lazy('ServerMessageForceVideo');
  lazy('ServerMessageFriendRoomBringInApplyToAdmin');
  lazy('ServerMessageFriendRoomBringInApplyToUser');
  lazy('ServerMessageFriendRoomCreatorSettle');
  lazy('ServerMessageFtAction');
  lazy('ServerMessageFtActionAll');
  lazy('ServerMessageFtAddTime');
  lazy('ServerMessageFtAddTimeOthers');
  lazy('ServerMessageFtAutoOp');
  lazy('ServerMessageFtAutoOpActive');
  lazy('ServerMessageFtBringIn');
  lazy('ServerMessageFtBringInFail');
  lazy('ServerMessageFtBroadcastMsg');
  lazy('ServerMessageFtChatMembers');
  lazy('ServerMessageFtChipsChange');
  lazy('ServerMessageFtEnterRoom');
  lazy('ServerMessageFtGetMsg');
  lazy('ServerMessageFtHandClear');
  lazy('ServerMessageFtKeepSeat');
  lazy('ServerMessageFtKeepSeatActive');
  lazy('ServerMessageFtLeave');
  lazy('ServerMessageFtLeaveNotification');
  lazy('ServerMessageFtObservers');
  lazy('ServerMessageFtPair');
  lazy('ServerMessageFtPairAll');
  lazy('ServerMessageFtPrivateMsg');
  lazy('ServerMessageFtPublicCards');
  lazy('ServerMessageFtPublicReplay');
  lazy('ServerMessageFtRoomers');
  lazy('ServerMessageFtSeated');
  lazy('ServerMessageFtSeatedOthers');
  lazy('ServerMessageFtSetAutoOnTable');
  lazy('ServerMessageFtStandup');
  lazy('ServerMessageFtStandupActive');
  lazy('ServerMessageFtStartInfo');
  lazy('ServerMessageFtSyncEnter');
  lazy('ServerMessageFtVideoMaskChange');
  lazy('ServerMessageFtWinner');
  lazy('ServerMessageGdAction');
  lazy('ServerMessageGdActionAll');
  lazy('ServerMessageGdAddTime');
  lazy('ServerMessageGdAddTimeOthers');
  lazy('ServerMessageGdAutoOp');
  lazy('ServerMessageGdAutoOpActive');
  lazy('ServerMessageGdBringIn');
  lazy('ServerMessageGdBringInFail');
  lazy('ServerMessageGdBroadcastMsg');
  lazy('ServerMessageGdChatMembers');
  lazy('ServerMessageGdChipsChange');
  lazy('ServerMessageGdEnterRoom');
  lazy('ServerMessageGdGetMsg');
  lazy('ServerMessageGdHandClear');
  lazy('ServerMessageGdKeepSeat');
  lazy('ServerMessageGdKeepSeatActive');
  lazy('ServerMessageGdLeave');
  lazy('ServerMessageGdLeaveNotification');
  lazy('ServerMessageGdObservers');
  lazy('ServerMessageGdPrivateMsg');
  lazy('ServerMessageGdReadyStart');
  lazy('ServerMessageGdReadyStartAll');
  lazy('ServerMessageGdReplay');
  lazy('ServerMessageGdResult');
  lazy('ServerMessageGdRoomers');
  lazy('ServerMessageGdSeated');
  lazy('ServerMessageGdSeatedOthers');
  lazy('ServerMessageGdSetAutoOnTable');
  lazy('ServerMessageGdStandup');
  lazy('ServerMessageGdStandupActive');
  lazy('ServerMessageGdStartInfo');
  lazy('ServerMessageGdSyncEnter');
  lazy('ServerMessageGdTributeGive');
  lazy('ServerMessageGdTributeGiveComplete');
  lazy('ServerMessageGdTributeReturn');
  lazy('ServerMessageGdTributeReturnComplete');
  lazy('ServerMessageGdVideoMaskChange');
  lazy('ServerMessageGdWaitReadyStart');
  lazy('ServerMessageGdWinrateAdd');
  lazy('ServerMessageGdWinrateAddComplete');
  lazy('ServerMessageGetMessage');
  lazy('ServerMessageGetMsg');
  lazy('ServerMessageHandClear');
  lazy('ServerMessageHeartbeat');
  lazy('ServerMessageInsuranceOutsCards');
  lazy('ServerMessageInsuranceTrigged');
  lazy('ServerMessageJackpotAward');
  lazy('ServerMessageJackpotGoldChange');
  lazy('ServerMessageJackpotMarquee');
  lazy('ServerMessageJoinMatching');
  lazy('ServerMessageKeepSeat');
  lazy('ServerMessageKeepSeatActive');
  lazy('ServerMessageLeave');
  lazy('ServerMessageLeaveNotification');
  lazy('ServerMessageLimitHandNumber');
  lazy('ServerMessageMatchingResult');
  lazy('ServerMessageMjAction');
  lazy('ServerMessageMjActionAll');
  lazy('ServerMessageMjActionFail');
  lazy('ServerMessageMjAddTime');
  lazy('ServerMessageMjAddTimeOthers');
  lazy('ServerMessageMjAutoOp');
  lazy('ServerMessageMjAutoOpActive');
  lazy('ServerMessageMjBringIn');
  lazy('ServerMessageMjBringInFail');
  lazy('ServerMessageMjBroadcastMsg');
  lazy('ServerMessageMjChatMembers');
  lazy('ServerMessageMjChipsChange');
  lazy('ServerMessageMjEnterRoom');
  lazy('ServerMessageMjExchangeTiles');
  lazy('ServerMessageMjExchangeTilesComplete');
  lazy('ServerMessageMjFollowDealer');
  lazy('ServerMessageMjGetMsg');
  lazy('ServerMessageMjHandClear');
  lazy('ServerMessageMjKeepSeat');
  lazy('ServerMessageMjKeepSeatActive');
  lazy('ServerMessageMjLeave');
  lazy('ServerMessageMjLeaveNotification');
  lazy('ServerMessageMjNeedBringIn');
  lazy('ServerMessageMjNeedBringInComplete');
  lazy('ServerMessageMjObservers');
  lazy('ServerMessageMjPrepare');
  lazy('ServerMessageMjPrivateMsg');
  lazy('ServerMessageMjRaise');
  lazy('ServerMessageMjRaiseComplete');
  lazy('ServerMessageMjRejectBringIn');
  lazy('ServerMessageMjReplay');
  lazy('ServerMessageMjResult');
  lazy('ServerMessageMjRoomers');
  lazy('ServerMessageMjSeated');
  lazy('ServerMessageMjSeatedOthers');
  lazy('ServerMessageMjSetAutoOnTable');
  lazy('ServerMessageMjStandup');
  lazy('ServerMessageMjStandupActive');
  lazy('ServerMessageMjStartInfo');
  lazy('ServerMessageMjSyncEnter');
  lazy('ServerMessageMjSyncHand');
  lazy('ServerMessageMjUpBlind');
  lazy('ServerMessageMjVideoMaskChange');
  lazy('ServerMessageMjVoidSuit');
  lazy('ServerMessageMjVoidSuitComplete');
  lazy('ServerMessageMjWaitTurnAction');
  lazy('ServerMessageMttAwardNotify');
  lazy('ServerMessageMttDetail');
  lazy('ServerMessageMttReadyForApply');
  lazy('ServerMessageMttSeriesNotify');
  lazy('ServerMessageNextChange');
  lazy('ServerMessageNotificationMttWillStart');
  lazy('ServerMessageNotificationRoomReady');
  lazy('ServerMessageNotificationSystemMaintain');
  lazy('ServerMessageObservers');
  lazy('ServerMessageOfflineTickets');
  lazy('ServerMessagePlayerJackpotSummary');
  lazy('ServerMessagePostStatusChange');
  lazy('ServerMessagePrivateMsg');
  lazy('ServerMessagePublicCards');
  lazy('ServerMessagePublicReplay');
  lazy('ServerMessageQuickJoin');
  lazy('ServerMessageRegister');
  lazy('ServerMessageRoomChangeNotify');
  lazy('ServerMessageRoomDelayApplyToAdmin');
  lazy('ServerMessageRoomInsurance');
  lazy('ServerMessageRoomMttSettleNotify');
  lazy('ServerMessageRoomReadyForEnter');
  lazy('ServerMessageRoomUserSendDiamond');
  lazy('ServerMessageRoomers');
  lazy('ServerMessageRooms');
  lazy('ServerMessageRoomsSimple');
  lazy('ServerMessageSeated');
  lazy('ServerMessageSeatedOthers');
  lazy('ServerMessageSelfProfitPay');
  lazy('ServerMessageSetAutoOnTable');
  lazy('ServerMessageShowPublicCards');
  lazy('ServerMessageShowPublicCardsOthers');
  lazy('ServerMessageShowViewCards');
  lazy('ServerMessageShowcards');
  lazy('ServerMessageShowdown');
  lazy('ServerMessageSidePots');
  lazy('ServerMessageSnatchTreasureHrl');
  lazy('ServerMessageSnatchTreasureWinPopup');
  lazy('ServerMessageSquidIn');
  lazy('ServerMessageSquidInActive');
  lazy('ServerMessageStandup');
  lazy('ServerMessageStandupActive');
  lazy('ServerMessageStartInfo');
  lazy('ServerMessageStoreChips');
  lazy('ServerMessageSupportMessage');
  lazy('ServerMessageSyncEnter');
  lazy('ServerMessageSyncHand');
  lazy('ServerMessageSystemMessage');
  lazy('ServerMessageTodoList');
  lazy('ServerMessageTribeBlackUser');
  lazy('ServerMessageTribeBlackUserMtt');
  lazy('ServerMessageUpBlind');
  lazy('ServerMessageUserBan');
  lazy('ServerMessageUserClubRoleChange');
  lazy('ServerMessageUserDeviceIsBlocked');
  lazy('ServerMessageUserDiamondChange');
  lazy('ServerMessageUserGameWatch');
  lazy('ServerMessageUserGoldChange');
  lazy('ServerMessageUserIsBlocked');
  lazy('ServerMessageUserIsMute');
  lazy('ServerMessageUserJoinClub');
  lazy('ServerMessageUserKickedFromClub');
  lazy('ServerMessageUserMttChangeNotify');
  lazy('ServerMessageUserOrderAudit');
  lazy('ServerMessageUserPlaying');
  lazy('ServerMessageUserSngChangeNotify');
  lazy('ServerMessageUserTraderOrderNotify');
  lazy('ServerMessageUserUsdtOrderNotify');
  lazy('ServerMessageUserWheelHandNum');
  lazy('ServerMessageUtilAntiCheatRoomVideo');
  lazy('ServerMessageUtilFaceRecognize');
  lazy('ServerMessageVideoMaskChange');
  lazy('ServerMessageViewPlayerCards');
  lazy('ServerMessageViewPlayerCardsNum');
  lazy('ServerMessageWaitCheckAutoAddTime');
  lazy('ServerMessageWinner');
  lazy('SettleSetting');
  lazy('SidePot');
  lazy('SourceMJ');
  lazy('SplitedResult');
  lazy('SquidCountRateConfig');
  lazy('SquidDetail');
  lazy('SubRoomConfig');
  lazy('Tile');
  lazy('TributeCard');
  lazy('TurnValidAction');
  lazy('UserInsuranceResult');
  lazy('UserMttRecord');
  lazy('UserMttRecordChange');
  lazy('UserOuts');
  lazy('UserPlayStatus');
  lazy('UserSNGRecord');
  lazy('UserSNGRecordChange');
  lazy('ValidAction');
  lazy('ValidCards');
  lazy('WheelTemplateUpdateInfo');
  lazy('WinCard');
  lazy('WinTypeRule');
  lazy('WinTypeWithPoint');

  return exports;
}));
