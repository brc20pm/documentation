---
id: quickly-create-b721
title: Quickly Create B721 Token
sidebar_label: Quickly Create B721 Token
slug: /guide/quickly-create-b721
---  

# Quickly Create B721 Token

In order for developers to quickly deploy and manage non-fungible tokens,
We provide a built-in B721 template. This template class encapsulates all required functionality

**You can create a custom token system by inheriting and extending this base class**

```javascript
class Contract extends B721{

    init(){
        this._tokenIdCounter = 1000;
        this._name = 'Bit-721';
        this._symbol = 'K721';
        this._baseUrl = 'baseUrl://';
        this._owners = new Map();//Note that MAP must be re-created
        this._balances = new Map();//Note that MAP must be re-created
        this._tokenExist = new Map();//Note that MAP must be re-created
        this._tokenApprovals = new Map();//Note that MAP must be re-created
        this._operatorApprovals = new Map();//Note that MAP must be re-created
        this._tokenUrl = new Map();//Note that MAP must be re-created
    } 

}
```