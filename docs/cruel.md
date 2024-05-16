---
id: cruels 
title: Cruel things
sidebar_label: CRUEL THINGS
slug: /cruels 
---

## Execution time
**The duration of each trading operation is only 3 seconds. If the limit is exceeded, execution will fail. It should be noted that you should not rely on execution duration. Instead, the code limits the stack depth to 512 and the forAny iteration limit to 5000 times for optimization****

## Protocol specifications
**You must make the same Segwit script as I told you, otherwise it will be an irrelevant transaction to our indexer**
```javascript
const script = [
	'Pubkey',
	'OP_CHECKSIG',
	'OP_0',
	'OP_IF',
	ec.encode('ord'),
	'01',
	ec.encode('send' || 'deploy'),
	'OP_0',
	ec.encode(javaScript || JSON.stringify(callData)),
	'OP_ENDIF'
]
```

## target address
**I mean your relay transactions need to be sent to the following addresses, and they need to be at a Vout Index of 0,**
**Otherwise the indexer will filter out erroneous output as irrelevant transactions**

:::caution
- **MainNet: 3LAoUiU2X2cKRURL3hTHMufHM15Xrk2K9s**
- **TestNet: 2N4vkrW97TmqdtdkHvMpfuRMqJF17CSvbFC**
:::




