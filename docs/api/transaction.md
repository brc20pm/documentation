---
id: transaction
title: Transaction
sidebar_label: Transaction
slug: /api/transaction
--- 



# Query Transactions

## Interface overview

This interface provides a transaction Hash to obtain transaction details.

## Request parameters

* `txHash`: 'Required parameter, transaction hash value'

## Request example

### Request URL

`http://127.0.0.1:8765/api/tx/:txHash`

### Request method

GET

### Request sample parameters

* `txHash=84873f52a254e62eadd8339801562ab1b70fc0ac81f50fe3d50a4430e6978c3f`


### Response example

```json
{
	"code": 200,
	"data": {
		"tx_hash": "84873f52a254e62eadd8339801562ab1b70fc0ac81f50fe3d50a4430e6978c3f",
		"height": 2588458,
		"sender": "tb1p0yfutsrnm4hfs4yvfqr2x7l906ttnksnw2df5n3q25n8e5kngecq8u4du0",
		"kid": "ordc99046834c9cf08c0caefe78b7345b3d0e04445",
		"op": "send",
		"input": "7b226b6964223a22626974633939303436383334633963663038633063616566653738623733343562336430653034343435222c226d6574686f64223a227472616e73666572222c22706172616d73223a5b227462317033346d373568367236786435656b783970767439756867723639373736706d656c6b77763274706437353671787239346c683471657661773830222c3930305d7d",
		"out": true,
		"logs": ["feaf4f07446e054f1e293e8a88ee7300f96ea168121831ac90e2b37949180e61"],
		"timestamp": 1713718765,
		"status": 1
	},
	"msg": "success"
}
```