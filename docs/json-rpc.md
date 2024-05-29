---
id: json-rpc 
title: JSON-RPC
sidebar_label: 📄 JSON-RPC 
slug: /josnrpc
---


```bash
curl -X POST \
  http://xxx.xx:prot \
  -H 'Content-Type: application/json' \
```

## Port

**Local**
 - 6399

**TestNet**
 - 7399

**MainNet**
 - 8399


## ord_call
Called through the light client interface

```json
{
  "jsonrpc": "2.0",
  "method": "ord_call",
  "params": {
    "kid": "ord7b19b528298c3dfae6e588b91b40945eaec4ad56bc29bb92bc023860ee",
    "method":"$name",
    "params":[]
  },
  "id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"
}
```

## ocr_call
Calling through multi-node aggregation

```json
{
	"jsonrpc": "2.0",
	"method": "ocr_call",
	"params": {
		"quorum": 21, //Optional parameters, range 1-21, default 21
		"call_data": {
			"kid": "ord83633b22d3b7a211333081bece366c8f121994a",
			"method": "$name",
			"params": []
		}
	},
	"id": "dd7bce47-26de-44f5-a6ca-5b1d7b03b215"
}
```

## bestBlockNumber
Get the latest block number of the index

```json
{
  "jsonrpc": "2.0",
  "method": "bestBlockNumber",
  "params": {},
  "id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"
}
```


## getTransaction
Query Transaction

```json
{
  "jsonrpc": "2.0",
  "method": "getTransaction",
  "params": {
    "hash":"efd7a5bfc05c04c1c18834abaf076c23980f059cb8283f250d622c11b8ae6a89"
  },
  "id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"
}
```


## getEvents
Query the event log

```json
{
  "jsonrpc": "2.0",
  "method": "getEvents",
  "params": {
    "number":"8528700",
  },
  "id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"
}
```

## getBlockNumber
Query transactions contained in a block

```json
{
  "jsonrpc": "2.0",
  "method": "getBlockNumber",
  "params": {
    "number": "8528700"
  },
  "id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"
}
```


## getScriptModel
Query script model

```json
{
  "jsonrpc": "2.0",
  "method": "getScriptModel",
  "params": {
    "kid": "ordd266d91d0c96ca1cdc357f576571b26a662a7fa"
  },
  "id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"
}
```


## version
Query the indexer version

```json
{
  "jsonrpc": "2.0",
  "method": "version",
  "id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"
}
```


