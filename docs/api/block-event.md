---
id: block-event
title: Block Event
sidebar_label: Block Event
slug: /api/block/event 
--- 



# Block Events

## Interface overview

This interface provides the ability to obtain a list of events generated under the block based on the block number.

## Request parameters

* `number`: 'Required parameter, block number'

## Request example

### Request URL

`http://127.0.0.1:8765/api/block/logs/:number`

### Request method

GET

### Request sample parameters

* `number=2588458`


### Response example

```json
{
	"code": 200,
	"data": [
		{
			"e_hash": "feaf4f07446e054f1e293e8a88ee7300f96ea168121831ac90e2b37949180e61",
			"height": 2588458,
			"tx_hash": "84873f52a254e62eadd8339801562ab1b70fc0ac81f50fe3d50a4430e6978c3f",
			"kid": "bitc99046834c9cf08c0caefe78b7345b3d0e04445",
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