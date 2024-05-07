---
id: cruels 
title: Cruel things
sidebar_label: CRUEL THINGS
slug: /cruels 
---


## Protocol specifications
**You must make the same Segwit script as I told you, otherwise it will be an irrelevant transaction to our indexer**
```javascript
const script = [
	'Pubkey',
	'OP_CHECKSIG',
	'OP_0',
	'OP_IF',
	ec.encode('bits'),
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
- **TestNet: tb1pg5rkxtyrc7ctlg5yza5ddcchrxrpzx7zjuz3w85hn48w9zr6naaq7g9z80**
- **MainNet: bc1pzme2kr5zxg8f9vp7x4jze3pyw4p9n47h8e6f3lvayxw8ctka64ms9w48jc**
:::

## Deployment fee
**Yes...yes...that's right! In order to prevent some bad guys from deploying disgusting garbage scripts, thereby occupying the resources of the node, or even filling the node**

**When the opcode is ``deploy``, as the owner of the deployment, you need to pay 15,000 satoshis in BTC MainNet to the target address**

**Otherwise the indexer will filter out transactions as irrelevant!!!**


:::success
- **2000 satoshis in BTC TestNet**
- **15,000 satoshis in BTC MainNet**
:::



