// @generated by protoc-gen-es v1.7.2
// @generated from file greet/v1/greet.proto (package greet.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message greet.v1.GreetRequest
 */
export declare class GreetRequest extends Message<GreetRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  constructor(data?: PartialMessage<GreetRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "greet.v1.GreetRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GreetRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GreetRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GreetRequest;

  static equals(a: GreetRequest | PlainMessage<GreetRequest> | undefined, b: GreetRequest | PlainMessage<GreetRequest> | undefined): boolean;
}

/**
 * @generated from message greet.v1.GreetResponse
 */
export declare class GreetResponse extends Message<GreetResponse> {
  /**
   * @generated from field: string greeting = 1;
   */
  greeting: string;

  constructor(data?: PartialMessage<GreetResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "greet.v1.GreetResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GreetResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GreetResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GreetResponse;

  static equals(a: GreetResponse | PlainMessage<GreetResponse> | undefined, b: GreetResponse | PlainMessage<GreetResponse> | undefined): boolean;
}
