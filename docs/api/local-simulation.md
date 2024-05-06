---
id: local-simulation
title: Local Simulation
sidebar_label: Local Simulation
slug: /api/simulation 
---



## Interface overview

This interface provides local environment testing

## Request parameters

```json
{
	sender: account,
	operation: "send || deploy",
	source: str2Hex(arg)
}
```

## Request example

### Request URL

`http://127.0.0.1:8765/api/indexer`

### Request method

POST

### Request sample parameters

```json
{
    "sender": "10000",
    "operation": "send",
    "source": "123213"
}
```


