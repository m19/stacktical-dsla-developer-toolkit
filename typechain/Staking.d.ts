/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface StakingInterface extends ethers.utils.Interface {
  functions: {
    "DSLAburnRate()": FunctionFragment;
    "addAllowedTokens(address)": FunctionFragment;
    "addUsersToWhitelist(address[])": FunctionFragment;
    "allowedTokens(uint256)": FunctionFragment;
    "dpTokenRegistry(address)": FunctionFragment;
    "duTokenRegistry(address)": FunctionFragment;
    "getAllowedTokensLength()": FunctionFragment;
    "getTokenStake(address,uint256)": FunctionFragment;
    "isAllowedToken(address)": FunctionFragment;
    "leverage()": FunctionFragment;
    "owner()": FunctionFragment;
    "providerPool(address)": FunctionFragment;
    "registeredStakers(address)": FunctionFragment;
    "removeUsersFromWhitelist(address[])": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "slaID()": FunctionFragment;
    "stakers(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "usersPool(address)": FunctionFragment;
    "whitelist(address)": FunctionFragment;
    "whitelistedContract()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DSLAburnRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addAllowedTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addUsersToWhitelist",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "dpTokenRegistry",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "duTokenRegistry",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllowedTokensLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenStake",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isAllowedToken",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "leverage", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "providerPool",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "registeredStakers",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeUsersFromWhitelist",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "slaID", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "stakers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "usersPool", values: [string]): string;
  encodeFunctionData(functionFragment: "whitelist", values: [string]): string;
  encodeFunctionData(
    functionFragment: "whitelistedContract",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "DSLAburnRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addAllowedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addUsersToWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dpTokenRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "duTokenRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllowedTokensLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAllowedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "leverage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "providerPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registeredStakers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeUsersFromWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "slaID", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usersPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "whitelistedContract",
    data: BytesLike
  ): Result;

  events: {
    "DTokensCreated(address,address,string,string,address,string,string)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "ProviderRewardGenerated(uint256,address,uint256,uint256,uint256)": EventFragment;
    "UserCompensationGenerated(uint256,address,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DTokensCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProviderRewardGenerated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UserCompensationGenerated"): EventFragment;
}

export type DTokensCreatedEvent = TypedEvent<
  [string, string, string, string, string, string, string] & {
    tokenAddress: string;
    dpTokenAddress: string;
    dpTokenName: string;
    dpTokenSymbol: string;
    duTokenAddress: string;
    duTokenName: string;
    duTokenSymbol: string;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type ProviderRewardGeneratedEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber, BigNumber] & {
    periodId: BigNumber;
    tokenAddress: string;
    rewardPercentage: BigNumber;
    rewardPercentagePrecision: BigNumber;
    rewardAmount: BigNumber;
  }
>;

export type UserCompensationGeneratedEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber, BigNumber] & {
    periodId: BigNumber;
    tokenAddress: string;
    usersStake: BigNumber;
    leverage: BigNumber;
    compensation: BigNumber;
  }
>;

export class Staking extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: StakingInterface;

  functions: {
    DSLAburnRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    addAllowedTokens(
      _tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addUsersToWhitelist(
      _userAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    allowedTokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    dpTokenRegistry(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    duTokenRegistry(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    getAllowedTokensLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTokenStake(
      _staker: string,
      _allowedTokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber] & { tokenAddress: string; stake: BigNumber }
    >;

    isAllowedToken(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    leverage(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    providerPool(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    registeredStakers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    removeUsersFromWhitelist(
      _userAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    slaID(overrides?: CallOverrides): Promise<[BigNumber]>;

    stakers(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    usersPool(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    whitelist(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    whitelistedContract(overrides?: CallOverrides): Promise<[boolean]>;
  };

  DSLAburnRate(overrides?: CallOverrides): Promise<BigNumber>;

  addAllowedTokens(
    _tokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addUsersToWhitelist(
    _userAddresses: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  allowedTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  dpTokenRegistry(arg0: string, overrides?: CallOverrides): Promise<string>;

  duTokenRegistry(arg0: string, overrides?: CallOverrides): Promise<string>;

  getAllowedTokensLength(overrides?: CallOverrides): Promise<BigNumber>;

  getTokenStake(
    _staker: string,
    _allowedTokenIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { tokenAddress: string; stake: BigNumber }>;

  isAllowedToken(
    _tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  leverage(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  providerPool(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  registeredStakers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  removeUsersFromWhitelist(
    _userAddresses: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  slaID(overrides?: CallOverrides): Promise<BigNumber>;

  stakers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  usersPool(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  whitelist(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  whitelistedContract(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    DSLAburnRate(overrides?: CallOverrides): Promise<BigNumber>;

    addAllowedTokens(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addUsersToWhitelist(
      _userAddresses: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    allowedTokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    dpTokenRegistry(arg0: string, overrides?: CallOverrides): Promise<string>;

    duTokenRegistry(arg0: string, overrides?: CallOverrides): Promise<string>;

    getAllowedTokensLength(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenStake(
      _staker: string,
      _allowedTokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber] & { tokenAddress: string; stake: BigNumber }
    >;

    isAllowedToken(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    leverage(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    providerPool(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    registeredStakers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    removeUsersFromWhitelist(
      _userAddresses: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    slaID(overrides?: CallOverrides): Promise<BigNumber>;

    stakers(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    usersPool(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    whitelist(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    whitelistedContract(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    "DTokensCreated(address,address,string,string,address,string,string)"(
      tokenAddress?: string | null,
      dpTokenAddress?: string | null,
      dpTokenName?: null,
      dpTokenSymbol?: null,
      duTokenAddress?: string | null,
      duTokenName?: null,
      duTokenSymbol?: null
    ): TypedEventFilter<
      [string, string, string, string, string, string, string],
      {
        tokenAddress: string;
        dpTokenAddress: string;
        dpTokenName: string;
        dpTokenSymbol: string;
        duTokenAddress: string;
        duTokenName: string;
        duTokenSymbol: string;
      }
    >;

    DTokensCreated(
      tokenAddress?: string | null,
      dpTokenAddress?: string | null,
      dpTokenName?: null,
      dpTokenSymbol?: null,
      duTokenAddress?: string | null,
      duTokenName?: null,
      duTokenSymbol?: null
    ): TypedEventFilter<
      [string, string, string, string, string, string, string],
      {
        tokenAddress: string;
        dpTokenAddress: string;
        dpTokenName: string;
        dpTokenSymbol: string;
        duTokenAddress: string;
        duTokenName: string;
        duTokenSymbol: string;
      }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "ProviderRewardGenerated(uint256,address,uint256,uint256,uint256)"(
      periodId?: BigNumberish | null,
      tokenAddress?: string | null,
      rewardPercentage?: null,
      rewardPercentagePrecision?: null,
      rewardAmount?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, BigNumber, BigNumber],
      {
        periodId: BigNumber;
        tokenAddress: string;
        rewardPercentage: BigNumber;
        rewardPercentagePrecision: BigNumber;
        rewardAmount: BigNumber;
      }
    >;

    ProviderRewardGenerated(
      periodId?: BigNumberish | null,
      tokenAddress?: string | null,
      rewardPercentage?: null,
      rewardPercentagePrecision?: null,
      rewardAmount?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, BigNumber, BigNumber],
      {
        periodId: BigNumber;
        tokenAddress: string;
        rewardPercentage: BigNumber;
        rewardPercentagePrecision: BigNumber;
        rewardAmount: BigNumber;
      }
    >;

    "UserCompensationGenerated(uint256,address,uint256,uint256,uint256)"(
      periodId?: BigNumberish | null,
      tokenAddress?: string | null,
      usersStake?: null,
      leverage?: null,
      compensation?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, BigNumber, BigNumber],
      {
        periodId: BigNumber;
        tokenAddress: string;
        usersStake: BigNumber;
        leverage: BigNumber;
        compensation: BigNumber;
      }
    >;

    UserCompensationGenerated(
      periodId?: BigNumberish | null,
      tokenAddress?: string | null,
      usersStake?: null,
      leverage?: null,
      compensation?: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber, BigNumber, BigNumber],
      {
        periodId: BigNumber;
        tokenAddress: string;
        usersStake: BigNumber;
        leverage: BigNumber;
        compensation: BigNumber;
      }
    >;
  };

  estimateGas: {
    DSLAburnRate(overrides?: CallOverrides): Promise<BigNumber>;

    addAllowedTokens(
      _tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addUsersToWhitelist(
      _userAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    allowedTokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    dpTokenRegistry(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    duTokenRegistry(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAllowedTokensLength(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenStake(
      _staker: string,
      _allowedTokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isAllowedToken(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    leverage(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    providerPool(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    registeredStakers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeUsersFromWhitelist(
      _userAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    slaID(overrides?: CallOverrides): Promise<BigNumber>;

    stakers(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    usersPool(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    whitelist(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    whitelistedContract(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DSLAburnRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addAllowedTokens(
      _tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addUsersToWhitelist(
      _userAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    allowedTokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    dpTokenRegistry(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    duTokenRegistry(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAllowedTokensLength(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenStake(
      _staker: string,
      _allowedTokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAllowedToken(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    leverage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    providerPool(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registeredStakers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeUsersFromWhitelist(
      _userAddresses: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    slaID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stakers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    usersPool(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    whitelist(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    whitelistedContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
