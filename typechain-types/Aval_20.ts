/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace Aval_20 {
  export type ItemsStruct = {
    id: BigNumberish;
    itemName: string;
    price: BigNumberish;
  };

  export type ItemsStructOutput = [
    id: bigint,
    itemName: string,
    price: bigint
  ] & { id: bigint; itemName: string; price: bigint };
}

export interface Aval_20Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "addItems"
      | "balances"
      | "burn"
      | "getBalance"
      | "getItems"
      | "itemID"
      | "mint"
      | "name"
      | "owner"
      | "redeemToken"
      | "redeem_items"
      | "symbol"
      | "totalSupply"
      | "transfer"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addItems",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balances",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "getBalance",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "getItems", values?: undefined): string;
  encodeFunctionData(functionFragment: "itemID", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "redeemToken",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "redeem_items",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addItems", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getItems", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "itemID", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "redeemToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeem_items",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
}

export interface Aval_20 extends BaseContract {
  connect(runner?: ContractRunner | null): Aval_20;
  waitForDeployment(): Promise<this>;

  interface: Aval_20Interface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addItems: TypedContractMethod<
    [_name: string, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  balances: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  burn: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

  getBalance: TypedContractMethod<[_address: AddressLike], [bigint], "view">;

  getItems: TypedContractMethod<[], [Aval_20.ItemsStructOutput[]], "view">;

  itemID: TypedContractMethod<[], [bigint], "view">;

  mint: TypedContractMethod<
    [reciever: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  name: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  redeemToken: TypedContractMethod<[_id: BigNumberish], [void], "nonpayable">;

  redeem_items: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, bigint] & { id: bigint; itemName: string; price: bigint }
    ],
    "view"
  >;

  symbol: TypedContractMethod<[], [string], "view">;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  transfer: TypedContractMethod<
    [reciever: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addItems"
  ): TypedContractMethod<
    [_name: string, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "balances"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "burn"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getBalance"
  ): TypedContractMethod<[_address: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getItems"
  ): TypedContractMethod<[], [Aval_20.ItemsStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "itemID"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "mint"
  ): TypedContractMethod<
    [reciever: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "redeemToken"
  ): TypedContractMethod<[_id: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "redeem_items"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [bigint, string, bigint] & { id: bigint; itemName: string; price: bigint }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "symbol"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transfer"
  ): TypedContractMethod<
    [reciever: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  filters: {};
}
