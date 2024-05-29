---
id: others 
title: Other Notes
sidebar_label: Others Notes
slug: /others 
---

### Disabled attributes
**for**
**while**
**do while**
**.forEach**
**Date**
**Math.random**

### Execution restrictions
**The duration of each trading operation is only 3 seconds. If the limit is exceeded, execution will fail. It should be noted that you should not rely on execution duration. Instead, the code limits the stack depth to 512 and the forAny iteration limit to 5000 times for optimization****


### Minimum OutValue
The first output address's satoshi should be greater than or equal to **2000**

### Zero address

We use ``ord000000000000000000000000000000000000000`` instead of zero address

For example, there is a token transfer log

```javascript
this.event({
	name:'...'
	from:'ord000000000000000000000000000000000000000',
	to:'...'
})
```

The indexer will consider this to be a mint event from address zero

Although this does seem ridiculous, we can't think of a better way to solve this matter...


### How to use the front end for script interaction?

#### TestNet || MainNet

##### `send || deploy`

```javascript
//You can use the BTC related js library to build a Taproot transaction that complies with the OrdScript protocol rules and broadcast it to the chain.

//JavaScript Source Code
let code = '...'


//Operation
let callData = {
	kid: 'kid',
	method: 'method',
	params: [...params],
}


//Script example
const marker = ec.encode('ord')
const mimetype = ec.encode('text/plain;charset=utf-8')

const brc20JSON = {
	"p": "brc-20",
	"op": "send || deploy",
	"src": textToHex(code || JSON.stringify(calldata))
}


// Basic format of an 'inscription' script.
const script = [
	'Your PubKey',
	'OP_CHECKSIG',
	'OP_0',
	'OP_IF',
	marker,
	'01',
	mimetype,
	'OP_0',
	ec.encode(JSON.stringify(brc20JSON)),
	'OP_ENDIF'
]

function textToHex(text) {
	var encoder = ec.encode(text);
	return [...new Uint8Array(encoder)]
		.map(x => x.toString(16).padStart(2, "0"))
		.join("");
}

```



#### LocalNet

##### `send || deploy`

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

let response = await post(OrdScriptNode_Url + "/indexer", data);

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

### Where is the script stored?

```bash
script source code and operation instructions are stored on the BTC chain
You can use any method to perform deduction from the block number starting from OrdScript to the latest block number to obtain the latest results.
```



### Who runs OrdScript’s nodes?

```bash
Anyone can run OrdScript node
```
