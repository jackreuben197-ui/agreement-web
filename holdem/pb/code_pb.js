/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.holdem.pb.Code', null, global);
/**
 * @enum {number}
 */
proto.holdem.pb.Code = {
  NONE: 0,
  MSG_D_HEARTBEAT: 1001,
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
  MSG_S_SHOW_PUBLIC_CARDS_OTHERS: 1100,
  MSG_S_SHOWCARDS: 1101,
  MSG_S_SEATED_OTHERS: 1102,
  MSG_S_START_INFO: 1103,
  MSG_S_PUBLIC_CARDS: 1104,
  MSG_S_SIDE_POTS: 1105,
  MSG_S_ADD_ON_FAIL: 1106,
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
  MSG_S_ERROR: 1121
};

goog.object.extend(exports, proto.holdem.pb);
