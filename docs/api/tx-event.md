---
id: tx-event
title: Transaction Event
sidebar_label: Transaction Event
slug: /api/transaction/event 
--- 



# Transaction Event

## Interface overview

This interface provides a list of events generated under the transaction based on the transaction Hash.

## Request parameters

* `txHash`: 'Required parameter, transaction Hash value'

## Request example

### Request URL

`http://127.0.0.1:8765/api/tx/logs/:hash`

### Request method

GET

### Request sample parameters

* `txHash=286b3ce4daef3b8aed6b69716c3c1f63b3871ef8990d972375a1a216fb5209cc`


### Response example

```json
{
	"code": 200,
	"data": [
		{
			"e_hash": "feaf4f07446e054f1e293e8a88ee7300f96ea168121831ac90e2b37949180e61",
			"height": 2588458,
			"tx_hash": "84873f52a254e62eadd8339801562ab1b70fc0ac81f50fe3d50a4430e6978c3f",
			"kid": "ordc99046834c9cf08c0caefe78b7345b3d0e04445",
			"name": "Transfer",
			"args": {
				"amount": 900,
				"from": "tb1p0yfutsrnm4hfs4yvfqr2x7l906ttnksnw2df5n3q25n8e5kngecq8u4du0",
				"to": "tb1p34m75h6r6xd5ekx9pvt9uhgr69776pmelkwv2tpd756qxr94lh4qevaw80"
			},
			"timestamp": 1713718765
		}
	],
	"msg": "success"
}
```