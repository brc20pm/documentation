---
id: others 
title: Other Notes
sidebar_label: OTHERS 
slug: /others 
---


### Zero address

We use ``BitScpt`` instead of zero address

For example, there is a token transfer log

```javascript
this.event({
	name:'...'
	from:'BitScpt',
	to:'...'
})
```

The indexer will consider this to be a mint event from address zero

Although this does seem ridiculous, we can't think of a better way to solve this matter...


### How to use the front end for script interaction?

### TestNet || MianNet

#### `send || deploy`

```javascript

You can use the BTC related js library to build a Taproot transaction that complies with the BitScpt protocol rules and broadcast it to the chain.

//JavaScript Source Code
let javaScript= '...'


//Operation
let callData = {
	kid: 'kid',
	method: 'method',
	params: [...params],
}


//Script example
const script = [
	'Your Pubkey',
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

//OutAddress in TestNet: tb1pg5rkxtyrc7ctlg5yza5ddcchrxrpzx7zjuz3w85hn48w9zr6naaq7g9z80
//OutAddress in MainNet: bc1pzme2kr5zxg8f9vp7x4jze3pyw4p9n47h8e6f3lvayxw8ctka64ms9w48jc

const tx_data = await tapScript.Tx.create({
	version: 2,
	vin: [...],
	vout: [{
		value: 1000_00,
		// This is the new script that we are locking our funds to.
		scriptPubKey: tapScript.Address.toScriptPubKey('OutAddress')
	}]
})

```

:::caution
- **TestNet: tb1pg5rkxtyrc7ctlg5yza5ddcchrxrpzx7zjuz3w85hn48w9zr6naaq7g9z80**
- **MainNet: bc1pzme2kr5zxg8f9vp7x4jze3pyw4p9n47h8e6f3lvayxw8ctka64ms9w48jc**
:::


### TestNet || MianNet

#### `call`

```javascript
let callData = {
	kid: 'kid',
	method: 'method',
	params: [...params],
}

let arg = JSON.stringify(callData);

let hex = str2Hex(arg)

let data = {
	sender: account,
	source: hex
}

let response = await post(BitScptNode_Url + "/call", data);

console.log(response);
```

### LocalNet

#### `send || deploy`

```javascript
//Send
let callData = {
	kid: 'kid',
	method: 'method',
	params: [...params],
}

let arg = JSON.stringify(callData);

let data = {
	sender: account,
	operation: "send",
	source: str2Hex(arg)
}

//Deploy
//npm install uglifyJS
let code = codeMinify(cScript)

let data = {
	sender: account,
	operation: "deploy",
	source: str2Hex(code)
}

let response = await post(BitScptNode_Url + "/indexer", data);

console.log(response);

function codeMinify(code) {
	const options = {
		warnings: true,
		keep_fargs: true,
		keep_fnames: true
	};
	const result = uglifyJS.minify(code, options);
	if (result.error) throw result.error;
	return result.code
}
```

### LocalNet

#### `call`

```javascript
let callData = {
	kid: 'kid',
	method: 'method',
	params: [...params],
}

let arg = JSON.stringify(callData);

//Convert to hexadecimal string
let hex = str2Hex(arg)
//Build data
let data = {
	sender: account,
	source: hex
}

let response = await post(BitScptNode_Url + "/call", data);

console.log(response);
```

### Where is the script stored?

```bash
script source code and operation instructions are stored on the BTC chain
You can use any method to perform deduction from the block number starting from BitScpt to the latest block number to obtain the latest results.
```



### Who runs BitScpt’s nodes?

```bash
Anyone can run BitScpt node
```
