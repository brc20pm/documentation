---
id: quickly-create-b20
title: Quickly Create B20 Token
sidebar_label: Quickly Create B20 Token
slug: /guide/quickly-create-b20
---  



# Quickly Create B20 Token

In order for developers to quickly deploy and manage tokens, we provide a built-in B20 template. This template class encapsulates all required functionality

**You can create a custom token system by inheriting and extending this base class**

```javascript
class Contract extends B20{

     init() {
         this._name = 'B20';
         this._symbol = 'K2';
		 this._allowances = new Map();//Note that MAP must be re-created
		 this._balances = new Map();//Note that MAP must be re-created
         this._totalSupply = SafeMath.val(100000000);
         this._balances.setBucket(this._msgSender(), this._totalSupply);
         this.event({
             name: 'Transfer',
             from: 'BitScpt',
             to: this._msgSender(),
             amount: this._totalSupply
         });
     }

}
```