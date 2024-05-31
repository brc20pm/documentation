---
id: standard 
title: New Standards
sidebar_label: 🕵️ Standard 
slug: /standard
---

In this standard, we will no longer use the address in the output script as the owner, but the fee payer of the relay transaction as the owner

|  Key   | Required?  | Description |
|  ----  | ----  	  | ---- |
| 	src  | option   |	Programmable module (high priority): When op is deploy and src exists, it is considered a deployment script. When op is send and src exists, it is considered a call to the execution method,	|

Please check the complete standards [BRC20](https://domo-2.gitbook.io/brc-20-experiment)


## Deploy 

```javascript
{ 
  "p": "brc-20",
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
  "p": "brc-20",
  "op": "send",
  "src": strToHex(JSON.stringify(calldata))
}
```

We should ensure that these keys always have a higher priority than other keys. When ```src``` exists, it will be recognized as a programmable module instruction and other keys will be excluded


## Minimum OutValue

The satoshis of the first output address should be greater than or equal to 2000