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


## bestBlockNumber
```json
{
  "jsonrpc": "2.0",
  "method": "bestBlockNumber",
  "params": {},
  "id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"
}
```


## getTransaction
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
```json
{
  "jsonrpc": "2.0",
  "method": "version",
  "id": "243a718a-2ebb-4e32-8cc8-210c39e8a14b"
}
```


