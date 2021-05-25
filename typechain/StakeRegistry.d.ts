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
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface StakeRegistryInterface extends ethers.utils.Interface {
  functions: {
    "DSLATokenAddress()": FunctionFragment;
    "addAllowedTokens(address)": FunctionFragment;
    "allowedTokens(uint256)": FunctionFragment;
    "createDToken(string,string)": FunctionFragment;
    "distributeVerificationRewards(address,address,uint256)": FunctionFragment;
    "getActivePool(address)": FunctionFragment;
    "getStakingParameters()": FunctionFragment;
    "isAllowedToken(address)": FunctionFragment;
    "lockDSLAValue(address,address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "periodIsVerified(address,uint256)": FunctionFragment;
    "registerStakedSla(address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "returnLockedValue(address)": FunctionFragment;
    "setSLARegistry()": FunctionFragment;
    "setStakingParameters(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint64)": FunctionFragment;
    "slaLockedValue(address)": FunctionFragment;
    "slaRegistry()": FunctionFragment;
    "slaWasStakedByUser(address,address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "userStakedSlas(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DSLATokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addAllowedTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createDToken",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "distributeVerificationRewards",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getActivePool",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakingParameters",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAllowedToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lockDSLAValue",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "periodIsVerified",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "registerStakedSla",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "returnLockedValue",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setSLARegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setStakingParameters",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "slaLockedValue",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "slaRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "slaWasStakedByUser",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "userStakedSlas",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "DSLATokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addAllowedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createDToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributeVerificationRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActivePool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakingParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAllowedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockDSLAValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "periodIsVerified",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerStakedSla",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnLockedValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSLARegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStakingParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "slaLockedValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "slaRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "slaWasStakedByUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userStakedSlas",
    data: BytesLike
  ): Result;

  events: {
    "DTokenCreated(address,address,string,string)": EventFragment;
    "LockedValueReturned(address,address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "StakingParametersModified(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint64)": EventFragment;
    "ValueLocked(address,address,uint256)": EventFragment;
    "VerificationRewardDistributed(address,address,uint256,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DTokenCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LockedValueReturned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StakingParametersModified"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ValueLocked"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "VerificationRewardDistributed"
  ): EventFragment;
}

export class StakeRegistry extends BaseContract {
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

  interface: StakeRegistryInterface;

  functions: {
    DSLATokenAddress(overrides?: CallOverrides): Promise<[string]>;

    addAllowedTokens(
      _tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    allowedTokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    createDToken(
      _name: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    distributeVerificationRewards(
      _sla: string,
      _verificationRewardReceiver: string,
      _periodId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getActivePool(
      _slaOwner: string,
      overrides?: CallOverrides
    ): Promise<
      [
        ([string, BigNumber, string, string] & {
          SLAAddress: string;
          stake: BigNumber;
          assetName: string;
          assetAddress: string;
        })[]
      ]
    >;

    getStakingParameters(
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        DSLAburnRate: BigNumber;
        dslaDepositByPeriod: BigNumber;
        dslaPlatformReward: BigNumber;
        dslaMessengerReward: BigNumber;
        dslaUserReward: BigNumber;
        dslaBurnedByVerification: BigNumber;
        maxTokenLength: BigNumber;
        maxLeverage: BigNumber;
      }
    >;

    isAllowedToken(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    lockDSLAValue(
      _slaOwner: string,
      _sla: string,
      _periodIdsLength: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    periodIsVerified(
      _sla: string,
      _periodId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    registerStakedSla(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    returnLockedValue(
      _sla: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSLARegistry(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setStakingParameters(
      DSLAburnRate: BigNumberish,
      dslaDepositByPeriod: BigNumberish,
      dslaPlatformReward: BigNumberish,
      dslaMessengerReward: BigNumberish,
      dslaUserReward: BigNumberish,
      dslaBurnedByVerification: BigNumberish,
      maxTokenLength: BigNumberish,
      maxLeverage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    slaLockedValue(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        lockedValue: BigNumber;
        slaPeriodIdsLength: BigNumber;
        dslaDepositByPeriod: BigNumber;
        dslaPlatformReward: BigNumber;
        dslaMessengerReward: BigNumber;
        dslaUserReward: BigNumber;
        dslaBurnedByVerification: BigNumber;
      }
    >;

    slaRegistry(overrides?: CallOverrides): Promise<[string]>;

    slaWasStakedByUser(
      _user: string,
      _sla: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userStakedSlas(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  DSLATokenAddress(overrides?: CallOverrides): Promise<string>;

  addAllowedTokens(
    _tokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  allowedTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  createDToken(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  distributeVerificationRewards(
    _sla: string,
    _verificationRewardReceiver: string,
    _periodId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getActivePool(
    _slaOwner: string,
    overrides?: CallOverrides
  ): Promise<
    ([string, BigNumber, string, string] & {
      SLAAddress: string;
      stake: BigNumber;
      assetName: string;
      assetAddress: string;
    })[]
  >;

  getStakingParameters(
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      DSLAburnRate: BigNumber;
      dslaDepositByPeriod: BigNumber;
      dslaPlatformReward: BigNumber;
      dslaMessengerReward: BigNumber;
      dslaUserReward: BigNumber;
      dslaBurnedByVerification: BigNumber;
      maxTokenLength: BigNumber;
      maxLeverage: BigNumber;
    }
  >;

  isAllowedToken(
    _tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  lockDSLAValue(
    _slaOwner: string,
    _sla: string,
    _periodIdsLength: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  periodIsVerified(
    _sla: string,
    _periodId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  registerStakedSla(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  returnLockedValue(
    _sla: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSLARegistry(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setStakingParameters(
    DSLAburnRate: BigNumberish,
    dslaDepositByPeriod: BigNumberish,
    dslaPlatformReward: BigNumberish,
    dslaMessengerReward: BigNumberish,
    dslaUserReward: BigNumberish,
    dslaBurnedByVerification: BigNumberish,
    maxTokenLength: BigNumberish,
    maxLeverage: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  slaLockedValue(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      lockedValue: BigNumber;
      slaPeriodIdsLength: BigNumber;
      dslaDepositByPeriod: BigNumber;
      dslaPlatformReward: BigNumber;
      dslaMessengerReward: BigNumber;
      dslaUserReward: BigNumber;
      dslaBurnedByVerification: BigNumber;
    }
  >;

  slaRegistry(overrides?: CallOverrides): Promise<string>;

  slaWasStakedByUser(
    _user: string,
    _sla: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userStakedSlas(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    DSLATokenAddress(overrides?: CallOverrides): Promise<string>;

    addAllowedTokens(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    allowedTokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    createDToken(
      _name: string,
      _symbol: string,
      overrides?: CallOverrides
    ): Promise<string>;

    distributeVerificationRewards(
      _sla: string,
      _verificationRewardReceiver: string,
      _periodId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getActivePool(
      _slaOwner: string,
      overrides?: CallOverrides
    ): Promise<
      ([string, BigNumber, string, string] & {
        SLAAddress: string;
        stake: BigNumber;
        assetName: string;
        assetAddress: string;
      })[]
    >;

    getStakingParameters(
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        DSLAburnRate: BigNumber;
        dslaDepositByPeriod: BigNumber;
        dslaPlatformReward: BigNumber;
        dslaMessengerReward: BigNumber;
        dslaUserReward: BigNumber;
        dslaBurnedByVerification: BigNumber;
        maxTokenLength: BigNumber;
        maxLeverage: BigNumber;
      }
    >;

    isAllowedToken(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    lockDSLAValue(
      _slaOwner: string,
      _sla: string,
      _periodIdsLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    periodIsVerified(
      _sla: string,
      _periodId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    registerStakedSla(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    returnLockedValue(_sla: string, overrides?: CallOverrides): Promise<void>;

    setSLARegistry(overrides?: CallOverrides): Promise<void>;

    setStakingParameters(
      DSLAburnRate: BigNumberish,
      dslaDepositByPeriod: BigNumberish,
      dslaPlatformReward: BigNumberish,
      dslaMessengerReward: BigNumberish,
      dslaUserReward: BigNumberish,
      dslaBurnedByVerification: BigNumberish,
      maxTokenLength: BigNumberish,
      maxLeverage: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    slaLockedValue(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        lockedValue: BigNumber;
        slaPeriodIdsLength: BigNumber;
        dslaDepositByPeriod: BigNumber;
        dslaPlatformReward: BigNumber;
        dslaMessengerReward: BigNumber;
        dslaUserReward: BigNumber;
        dslaBurnedByVerification: BigNumber;
      }
    >;

    slaRegistry(overrides?: CallOverrides): Promise<string>;

    slaWasStakedByUser(
      _user: string,
      _sla: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    userStakedSlas(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    DTokenCreated(
      dTokenAddress?: string | null,
      sla?: string | null,
      name?: null,
      symbol?: null
    ): TypedEventFilter<
      [string, string, string, string],
      { dTokenAddress: string; sla: string; name: string; symbol: string }
    >;

    LockedValueReturned(
      sla?: string | null,
      owner?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { sla: string; owner: string; amount: BigNumber }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    StakingParametersModified(
      DSLAburnRate?: null,
      dslaDepositByPeriod?: null,
      dslaPlatformReward?: null,
      dslaMessengerReward?: null,
      dslaUserReward?: null,
      dslaBurnedByVerification?: null,
      maxTokenLength?: null,
      maxLeverage?: null
    ): TypedEventFilter<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ],
      {
        DSLAburnRate: BigNumber;
        dslaDepositByPeriod: BigNumber;
        dslaPlatformReward: BigNumber;
        dslaMessengerReward: BigNumber;
        dslaUserReward: BigNumber;
        dslaBurnedByVerification: BigNumber;
        maxTokenLength: BigNumber;
        maxLeverage: BigNumber;
      }
    >;

    ValueLocked(
      sla?: string | null,
      owner?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { sla: string; owner: string; amount: BigNumber }
    >;

    VerificationRewardDistributed(
      sla?: string | null,
      requester?: string | null,
      userReward?: null,
      platformReward?: null,
      messengerReward?: null,
      burnedDSLA?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        sla: string;
        requester: string;
        userReward: BigNumber;
        platformReward: BigNumber;
        messengerReward: BigNumber;
        burnedDSLA: BigNumber;
      }
    >;
  };

  estimateGas: {
    DSLATokenAddress(overrides?: CallOverrides): Promise<BigNumber>;

    addAllowedTokens(
      _tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    allowedTokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createDToken(
      _name: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    distributeVerificationRewards(
      _sla: string,
      _verificationRewardReceiver: string,
      _periodId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getActivePool(
      _slaOwner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakingParameters(overrides?: CallOverrides): Promise<BigNumber>;

    isAllowedToken(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lockDSLAValue(
      _slaOwner: string,
      _sla: string,
      _periodIdsLength: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    periodIsVerified(
      _sla: string,
      _periodId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerStakedSla(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    returnLockedValue(
      _sla: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSLARegistry(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setStakingParameters(
      DSLAburnRate: BigNumberish,
      dslaDepositByPeriod: BigNumberish,
      dslaPlatformReward: BigNumberish,
      dslaMessengerReward: BigNumberish,
      dslaUserReward: BigNumberish,
      dslaBurnedByVerification: BigNumberish,
      maxTokenLength: BigNumberish,
      maxLeverage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    slaLockedValue(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    slaRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    slaWasStakedByUser(
      _user: string,
      _sla: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userStakedSlas(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DSLATokenAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addAllowedTokens(
      _tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    allowedTokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createDToken(
      _name: string,
      _symbol: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    distributeVerificationRewards(
      _sla: string,
      _verificationRewardReceiver: string,
      _periodId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getActivePool(
      _slaOwner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStakingParameters(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAllowedToken(
      _tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lockDSLAValue(
      _slaOwner: string,
      _sla: string,
      _periodIdsLength: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    periodIsVerified(
      _sla: string,
      _periodId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerStakedSla(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    returnLockedValue(
      _sla: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSLARegistry(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setStakingParameters(
      DSLAburnRate: BigNumberish,
      dslaDepositByPeriod: BigNumberish,
      dslaPlatformReward: BigNumberish,
      dslaMessengerReward: BigNumberish,
      dslaUserReward: BigNumberish,
      dslaBurnedByVerification: BigNumberish,
      maxTokenLength: BigNumberish,
      maxLeverage: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    slaLockedValue(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    slaRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    slaWasStakedByUser(
      _user: string,
      _sla: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userStakedSlas(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}