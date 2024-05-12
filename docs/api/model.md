---
id: model
title: Script Model
sidebar_label: Script Model
slug: /api/model 
---  


# ScriptModel

## Interface overview

This interface provides the ability to obtain the corresponding ABI and BIP standards based on KID.

## Request parameters

* `kid`: 'Required parameters, script address'

## Request example

### Request URL

`http://127.0.0.1:8765/api/script/:kid`

### Request method

POST

### Request sample parameters

* `kid=ordc99046834c9cf08c0caefe78b7345b3d0e04445`


### Response example

```json
{
	"code": 200,
	"data": {
		"kid": "ordc99046834c9cf08c0caefe78b7345b3d0e04445",
		"script": "class Contract{_name;_symbol;_totalSupply;_balances;_allowances;_owner;init(){this._allowances=new Map,this._balances=new Map,this._name=\"SBTC\",this._symbol=\"SBTC\",this._totalSupply=SafeMath.val(0),this._owner=this._msgSender()}$name(){return this._name}$symbol(){return this._symbol}$totalSupply(){return SafeMath.val(this._totalSupply)}$balanceOf(account){return SafeMath.val(this._balances.getBucket(account))}$getOwner(){return this._owner}$allowance(owner,sender){return SafeMath.val(this._allowances.getBucket(owner,sender))}approve(sender,amount){return this._approve(this._msgSender(),sender,amount),!0}increaseAllowance(spender,addedValue){var e=this._allowances.getBucket(this._msgSender(),sender);return this._approve(this._msgSender(),spender,SafeMath.add(e,addedValue)),!0}decreaseAllowance(spender,subtractedValue){var e=this._allowances.getBucket(this._msgSender(),sender);return this._approve(this._msgSender(),spender,SafeMath.sub(e,subtractedValue)),!0}transfer(recipient,amount){return this._transfer(this._msgSender(),recipient,amount),!0}transferFrom(sender,recipient,amount){var e=this._allowances.getBucket(sender,this._msgSender());return require(SafeMath.gte(e,amount),\"B20: transfer amount exceeds allowance\"),this._transfer(sender,recipient,amount),this._approve(sender,this._msgSender(),SafeMath.sub(e,amount)),!0}mint(account,amount){return require(this._msgSender()===this._owner,\"B20: caller is not the owner\"),this._mint(account,amount),!0}burn(amount){return this._burn(this._msgSender(),amount),!0}renounceOwnership(){return this.transferOwnership(\"Satoshi\")}transferOwnership(newOwner){return require(this._msgSender()===this._owner,\"B20: caller is not the owner\"),this.event({name:\"OwnershipTransferred\",previousOwner:this._owner,newOwner:newOwner}),this._owner=newOwner,!0}_mint(owner,amount){this._totalSupply=SafeMath.add(this._totalSupply,amount);var e=this._balances.getBucket(owner);this._balances.setBucket(owner,SafeMath.add(e,amount)),this.event({name:\"Transfer\",from:\"Satoshi\",to:owner,amount:amount})}_burn(owner,amount){var e=this._balances.getBucket(owner);require(SafeMath.gte(e,amount),\"B20: burn amount exceeds balance\"),this._totalSupply=SafeMath.sub(this._totalSupply,amount),this._balances.setBucket(owner,SafeMath.sub(e,amount)),this.event({name:\"Transfer\",from:owner,to:\"Satoshi\",amount:amount})}_approve(owner,sender,amount){owner!==sender&&(this._allowances.setBucket(owner,sender,SafeMath.val(amount)),this.event({name:\"Approve\",from:owner,to:sender,amount:amount}))}_transfer(owner,recipient,amount){require(SafeMath.gt(amount,0),\"B20: transfer amount need gt 0\");var e=this._balances.getBucket(owner),t=(require(SafeMath.gte(e,amount),\"B20: transfer amount exceeds balance\"),this._balances.getBucket(recipient));this._balances.setBucket(owner,SafeMath.sub(e,amount)),this._balances.setBucket(recipient,SafeMath.add(t,amount)),this.event({name:\"Transfer\",from:owner,to:recipient,amount:amount})}_msgSender(){return this.msgSender}}",
		"abi": "[{\"name\":\"$name\",\"params\":[]},{\"name\":\"$symbol\",\"params\":[]},{\"name\":\"$totalSupply\",\"params\":[]},{\"name\":\"$balanceOf\",\"params\":[\"account\"]},{\"name\":\"$getOwner\",\"params\":[]},{\"name\":\"$allowance\",\"params\":[\"owner\",\"sender\"]},{\"name\":\"approve\",\"params\":[\"sender\",\"amount\"]},{\"name\":\"increaseAllowance\",\"params\":[\"spender\",\"addedValue\"]},{\"name\":\"decreaseAllowance\",\"params\":[\"spender\",\"subtractedValue\"]},{\"name\":\"transfer\",\"params\":[\"recipient\",\"amount\"]},{\"name\":\"transferFrom\",\"params\":[\"sender\",\"recipient\",\"amount\"]},{\"name\":\"mint\",\"params\":[\"account\",\"amount\"]},{\"params\":[\"amount\"],\"name\":\"burn\"},{\"name\":\"renounceOwnership\",\"params\":[]},{\"name\":\"transferOwnership\",\"params\":[\"newOwner\"]}]",
		"creator": "tb1p0yfutsrnm4hfs4yvfqr2x7l906ttnksnw2df5n3q25n8e5kngecq8u4du0",
		"create_hash": "3096189e23d310fd3568764a17ebfb2265bbcbeda9ae05979d75bdfa54e08685",
		"create_time": 1713717325
	},
	"msg": "success"
}
```