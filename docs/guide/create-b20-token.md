---
id: create-b20-token
title: Create B20 Token
sidebar_label: Create B20 Token
slug: /guide/create-b20-token
--- 


# Create B20 Token on OrdScript

**BIP-20**
The standard requires the following functionality to be implemented to ensure the operation and management of the token:
- ``$name()`` Gets the name of the token.
- ``$symbol()`` Gets the token's symbol.
- ``$totalSupply()`` Gets the total amount of tokens issued
- ``$balanceOf(address)`` Gets the number of tokens held by the specified address.
- ``$allowance(owner, sender)`` Get the owner's authorization amount for another address
- ``transfer(to, tokenId)`` transfers tokens from the current caller to another address.
- ``transferFrom(from, to, tokenId)`` transfers from one address to another, provided the caller is authorized.
- ``approve(to, tokenId)`` authorizes an address to manage a specific token.
- ``increaseAllowance(spender, addedValue)`` increases the quota management of a specific address
- ``decreaseAllowance(spender, subtractedValue)`` reduces the quota management of a specific address

**Script source code**


```javascript
class Contract {

	_name;
	_symbol;
	_totalSupply;
	_balances;
	_allowances;

	init() {
		this._allowances = new Map();
		this._balances = new Map();

		this._name = 'BIP20';
		this._symbol = 'B20';
		this._totalSupply = SafeMath.val(100000000);
		this._balances.setBucket(this._msgSender(), this._totalSupply);
		this.event({
			name: 'Transfer',
			from: 'Satoshi',
			to: this._msgSender(),
			amount: this._totalSupply
		});
	}

	$name() {
		return this._name;
	};

	$symbol() {
		return this._symbol;
	}

	$totalSupply() {
		return SafeMath.val(this._totalSupply);
	};

	$balanceOf(account) {
		return SafeMath.val(this._balances.getBucket(account));
	};

	approve(sender, amount) {
		this._approve(this._msgSender(), sender, amount);
		return true;
	};

	increaseAllowance(spender, addedValue) {
		let aOld = this._allowances.getBucket(this._msgSender(), sender);
		this._approve(this._msgSender(), spender, SafeMath.add(aOld, addedValue));
		return true;
	};

	decreaseAllowance(spender, subtractedValue) {
		let aOld = this._allowances.getBucket(this._msgSender(), sender);
		this._approve(this._msgSender(), spender, SafeMath.sub(aOld, subtractedValue));
		return true;
	};

	$allowance(owner, sender) {
		return SafeMath.val(this._allowances.getBucket(owner, sender));
	};

	transfer(recipient, amount) {
		this._transfer(this._msgSender(), recipient, amount);
		return true;
	};

	transferFrom(sender, recipient, amount) {
		let aOld = this._allowances.getBucket(sender, this._msgSender());
		require(SafeMath.gte(aOld, amount), 'B20: transfer amount exceeds allowance');
		this._transfer(sender, recipient, amount);
		this._approve(sender, this._msgSender(), SafeMath.sub(aOld, amount));
		return true;
	};

	_approve(owner, sender, amount) {
		if (owner === sender) {
			return
		}
		this._allowances.setBucket(owner, sender, SafeMath.val(amount));
		this.event({
			name: 'Approve',
			from: owner,
			to: sender,
			amount: amount
		})
	};

	_transfer(owner, recipient, amount) {
		let oldO = this._balances.getBucket(owner);

		require(SafeMath.gte(oldO, amount), 'B20: transfer amount exceeds balance');

		let oldR = this._balances.getBucket(recipient)

		this._balances.setBucket(owner, SafeMath.sub(oldO, amount));
		this._balances.setBucket(recipient, SafeMath.add(oldR, amount))

		this.event({
			name: 'Transfer',
			from: owner,
			to: recipient,
			amount: amount
		});
	};

	_msgSender() {
		return this.msgSender;
	}
};
```