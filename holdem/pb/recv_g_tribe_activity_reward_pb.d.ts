// package: holdem.pb
// file: protobuf/holdem/recv_g_tribe_activity_reward.proto

import * as jspb from "google-protobuf";
import * as protobuf_holdem_recv_g_user_order_audit_pb from "../../protobuf/holdem/recv_g_user_order_audit_pb";

export class ServerMessageTribeActivityReward extends jspb.Message {
  getOrderNo(): string;
  setOrderNo(value: string): void;

  getTribeId(): number;
  setTribeId(value: number): void;

  getClubId(): number;
  setClubId(value: number): void;

  getRewardKind(): number;
  setRewardKind(value: number): void;

  getTier(): number;
  setTier(value: number): void;

  getRewardGold(): number;
  setRewardGold(value: number): void;

  clearRewardPropsList(): void;
  getRewardPropsList(): Array<protobuf_holdem_recv_g_user_order_audit_pb.RechargeRewardProp>;
  setRewardPropsList(value: Array<protobuf_holdem_recv_g_user_order_audit_pb.RechargeRewardProp>): void;
  addRewardProps(value?: protobuf_holdem_recv_g_user_order_audit_pb.RechargeRewardProp, index?: number): protobuf_holdem_recv_g_user_order_audit_pb.RechargeRewardProp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerMessageTribeActivityReward.AsObject;
  static toObject(includeInstance: boolean, msg: ServerMessageTribeActivityReward): ServerMessageTribeActivityReward.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServerMessageTribeActivityReward, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerMessageTribeActivityReward;
  static deserializeBinaryFromReader(message: ServerMessageTribeActivityReward, reader: jspb.BinaryReader): ServerMessageTribeActivityReward;
}

export namespace ServerMessageTribeActivityReward {
  export type AsObject = {
    orderNo: string,
    tribeId: number,
    clubId: number,
    rewardKind: number,
    tier: number,
    rewardGold: number,
    rewardPropsList: Array<protobuf_holdem_recv_g_user_order_audit_pb.RechargeRewardProp.AsObject>,
  }
}

