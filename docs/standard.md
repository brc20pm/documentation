---
id: standard 
title: Standards
sidebar_label: 🕵️ Standard 
slug: /standard
---

In this standard, we will no longer use the address in the output script as the owner, but the fee payer of the relay transaction as the owner

|  Key   | Required  | Description |
|  ----  | ----  	  | ---- |
| 	p  | Yes   |	Protocol: Helps other systems identify and process brc20-pm events
| 	op  | Yes   |	Operation: Type of event (Deploy, Send, Call)
| 	src  | Yes   |	Operation instruction byte


## Deploy 

```javascript
{ 
  "p": "brc20-pm",
  "op": "deploy",
  "src": "source code hex"
}
```

## Send 

```javascript

calldata = {
	"kid":"",
	"method":"",
	"params":[...params]
}

{ 
  "p": "brc20-pm",
  "op": "send",
  "src": strToHex(JSON.stringify(calldata))
}
```


## Minimum OutValue

The satoshis of the first output address should be greater than or equal to 2000