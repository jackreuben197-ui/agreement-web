// package: holdem.pb
// file: protobuf/holdem/recv_g_user_order_audit.proto

import * as jspb from "google-protobuf";

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

  clearRewardPropsList(): void;
  getRewardPropsList(): Array<RechargeRewardProp>;
  setRewardPropsList(value: Array<RechargeRewardProp>): void;
  addRewardProps(value?: RechargeRewardProp, index?: number): RechargeRewardProp;

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
    rewardPropsList: Array<RechargeRewardProp.AsObject>,
  }
}

export class RechargeRewardProp extends jspb.Message {
  getPropId(): number;
  setPropId(value: number): void;

  getPropName(): string;
  setPropName(value: string): void;

  getPropValue(): number;
  setPropValue(value: number): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RechargeRewardProp.AsObject;
  static toObject(includeInstance: boolean, msg: RechargeRewardProp): RechargeRewardProp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RechargeRewardProp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RechargeRewardProp;
  static deserializeBinaryFromReader(message: RechargeRewardProp, reader: jspb.BinaryReader): RechargeRewardProp;
}

export namespace RechargeRewardProp {
  export type AsObject = {
    propId: number,
    propName: string,
    propValue: number,
    quantity: number,
  }
}

