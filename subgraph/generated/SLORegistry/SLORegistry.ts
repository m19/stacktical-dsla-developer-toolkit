// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class SLORegistered extends ethereum.Event {
  get params(): SLORegistered__Params {
    return new SLORegistered__Params(this);
  }
}

export class SLORegistered__Params {
  _event: SLORegistered;

  constructor(event: SLORegistered) {
    this._event = event;
  }

  get sla(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get sloValue(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get sloType(): i32 {
    return this._event.parameters[2].value.toI32();
  }
}

export class SLORegistry__registeredSLOResult {
  value0: BigInt;
  value1: i32;

  constructor(value0: BigInt, value1: i32) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set(
      "value1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value1))
    );
    return map;
  }
}

export class SLORegistry extends ethereum.SmartContract {
  static bind(address: Address): SLORegistry {
    return new SLORegistry("SLORegistry", address);
  }

  isRespected(_value: BigInt, _slaAddress: Address): boolean {
    let result = super.call(
      "isRespected",
      "isRespected(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_value),
        ethereum.Value.fromAddress(_slaAddress)
      ]
    );

    return result[0].toBoolean();
  }

  try_isRespected(
    _value: BigInt,
    _slaAddress: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isRespected",
      "isRespected(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_value),
        ethereum.Value.fromAddress(_slaAddress)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  registeredSLO(param0: Address): SLORegistry__registeredSLOResult {
    let result = super.call(
      "registeredSLO",
      "registeredSLO(address):(uint256,uint8)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new SLORegistry__registeredSLOResult(
      result[0].toBigInt(),
      result[1].toI32()
    );
  }

  try_registeredSLO(
    param0: Address
  ): ethereum.CallResult<SLORegistry__registeredSLOResult> {
    let result = super.tryCall(
      "registeredSLO",
      "registeredSLO(address):(uint256,uint8)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new SLORegistry__registeredSLOResult(
        value[0].toBigInt(),
        value[1].toI32()
      )
    );
  }
}

export class RegisterSLOCall extends ethereum.Call {
  get inputs(): RegisterSLOCall__Inputs {
    return new RegisterSLOCall__Inputs(this);
  }

  get outputs(): RegisterSLOCall__Outputs {
    return new RegisterSLOCall__Outputs(this);
  }
}

export class RegisterSLOCall__Inputs {
  _call: RegisterSLOCall;

  constructor(call: RegisterSLOCall) {
    this._call = call;
  }

  get _sloValue(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _sloType(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get _slaAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class RegisterSLOCall__Outputs {
  _call: RegisterSLOCall;

  constructor(call: RegisterSLOCall) {
    this._call = call;
  }
}

export class SetSLARegistryCall extends ethereum.Call {
  get inputs(): SetSLARegistryCall__Inputs {
    return new SetSLARegistryCall__Inputs(this);
  }

  get outputs(): SetSLARegistryCall__Outputs {
    return new SetSLARegistryCall__Outputs(this);
  }
}

export class SetSLARegistryCall__Inputs {
  _call: SetSLARegistryCall;

  constructor(call: SetSLARegistryCall) {
    this._call = call;
  }
}

export class SetSLARegistryCall__Outputs {
  _call: SetSLARegistryCall;

  constructor(call: SetSLARegistryCall) {
    this._call = call;
  }
}
