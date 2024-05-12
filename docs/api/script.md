---
id: script
title: Script
sidebar_label: Script
slug: /api/script
---  

# Query Script

## Interface overview

This interface provides access to script information based on the script address.

## Request parameters

* `kid`: 'Required parameters, script address'

## Request example

### Request URL

`http://127.0.0.1:8765/api/script/:kid`

### Request method

GET

### Request sample parameters

* `kid=ord47abb2fbaa4c85cd388b2fcc4bd430ed152208563958d519944d327b26`


### Response example

```json
{
	"code": 200,
	"data": {
		"kid": "ord47abb2fbaa4c85cd388b2fcc4bd430ed152208563958d519944d327b26",
		"script": "636c61737320436f6e747261637420657874656e6473204b464332307b696e697428297b746869732e5f6e616d653d224b46432d55534454222c746869732e5f73796d626f6c3d224b55534454222c746869732e5f746f74616c537570706c793d3965382c746869732e5f62616c616e6365732e7365744275636b657428746869732e5f6d736753656e64657228292c746869732e5f746f74616c537570706c79292c746869732e6576656e74287b6e616d653a225472616e73666572222c66726f6d3a223030303030222c746f3a746869732e5f6d736753656e64657228292c616d6f756e743a746869732e5f746f74616c537570706c797d297d7d",
		"abi": "[{\"name\":\"$name\",\"params\":[]},{\"name\":\"$symbol\",\"params\":[]},{\"name\":\"$totalSupply\",\"params\":[]},{\"name\":\"$balanceOf\",\"params\":[\"account\"]},{\"name\":\"approve\",\"params\":[\"sender\",\"amount\"]},{\"name\":\"increaseAllowance\",\"params\":[\"spender\",\"addedValue\"]},{\"name\":\"decreaseAllowance\",\"params\":[\"spender\",\"subtractedValue\"]},{\"name\":\"$allowance\",\"params\":[\"owner\",\"sender\"]},{\"name\":\"transfer\",\"params\":[\"recipient\",\"amount\"]},{\"name\":\"transferFrom\",\"params\":[\"sender\",\"recipient\",\"amount\"]}]",
		"owner": "2N7TYrDKNeZf4eVGXDVJyRKWaPdbx4qvCJj",
		"create_hash": "286b3ce4daef3b8aed6b69716c3c1f63b3871ef8990d972375a1a216fb5209cc",
		"create_time": 1705027792
	},
	"msg": "success"
}
```