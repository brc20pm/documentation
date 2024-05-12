---
id: block
title: Block
sidebar_label: Block
slug: /api/block
--- 


# Query Block

## Interface overview

This interface provides a method to obtain the transaction list contained in the block based on the block number.

## Request parameters

* `number`: 'Required parameter, block number'

## Request example

### Request URL

`http://127.0.0.1:8765/api/block/:number`

### Request method

GET

### Request sample parameters

* `number=2588382`


### Response example
```json
{
	"code": 200,
	"data": [{
		"tx_hash": "c171b0fbde21dfd05b2ac7c51c3b884a156c7d3922124e49d8fc60f5f5f4dc9b",
		"height": 2588382,
		"sender": "tb1p0yfutsrnm4hfs4yvfqr2x7l906ttnksnw2df5n3q25n8e5kngecq8u4du0",
		"kid": "ord07b8a6dd5179b30990742a61dc2f3f7d750592e",
		"op": "send",
		"input": "7b226b6964223a22626974303762386136646435313739623330393930373432613631646332663366376437353035393265222c226d6574686f64223a227472616e73666572222c22706172616d73223a5b227462317173616b79756373786b63647232617934397634706d703671663273347473736d6c7a64686864222c3130305d7d",
		"out": true,
		"logs": [
			"2cbd975e18c9b3c511c4c18ca7df986cc3743200417986bd7bd27a92f38a5de8"
		],
		"timestamp": 1713677154,
		"status": 1
	}],
	"msg": "success"
}
```