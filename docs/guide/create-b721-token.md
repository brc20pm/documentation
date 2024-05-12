---
id: create-b721-token
title: Create B721 Token
sidebar_label: Create B721 Token
slug: /guide/create-b721-token
--- 


# Create B721 Token on OrdScript

**BIP-721**
The standard requires the following functionality to be implemented to ensure the operation and management of the token:
- ``$name()`` Get the name of the token
- ``$symbol()`` Get the symbol of the token
- ``$totalSupply`` gets the total amount of tokens
- ``$baseUrl()`` Gets the base URL of the token, usually used to access the metadata of the token
- ``$balanceOf(address)`` Gets the number of tokens held by the specified address
- ``$ownerOf(tokenId)`` Query the owner of a specific token ID
- ``$tokenURI(tokenId)`` Gets the full resource locator for a specific token ID
- ``$getApproved(tokenId)`` finds addresses authorized to manage a specific token
- ``$isApprovedForAll(owner, operator)`` checks whether an operator is authorized by the owner to manage all tokens
- ``mint(data)`` mints a new token
- ``transfer(to, tokenId)`` transfers tokens from the current caller to another address
- ``transferFrom(from, to, tokenId)`` transfers from one address to another, provided the caller is authorized
- ``approve(to, tokenId)`` authorizes an address to manage a specific token
- ``setApprovalForAll(operator, approval)`` sets or revokes an operator's management permissions for all tokens

**Script source code**


```javascript
class Contract {

    _name;
    _symbol;
    _baseUrl;
    _owners;//tokenId -> address
    _balances;//address -> count
    _totalSupply;

    _tokenExist;//tokenId -> bool
    _tokenApprovals;//tokenId -> address
    _operatorApprovals;//address -> address -> bool

    _tokenUrl;//tokenId -> string
    _tokenIdCounter;

    init() {
        this._tokenIdCounter = 1000;
        this._name = 'BIP721';
        this._symbol = 'B721';
        this._baseUrl = 'baseUrl:';
        this._totalSupply = SafeMath.val(0);

        this._owners = new Map();
        this._balances = new Map();
        this._tokenExist = new Map();
        this._tokenApprovals = new Map();
        this._operatorApprovals = new Map();
        this._tokenUrl = new Map();
    }


    $name() {
        return this._name;
    }

    $symbol() {
        return this._symbol;
    }

    $baseUrl() {
        return this._baseUrl;
    }

    $totalSupply(){
        return SafeMath.val(this._totalSupply);
    }

    $balanceOf(address) {
        const balance = this._balances.get(address);
        if (!balance) {
            return 0;
        }
        return this._balances.get(address);
    }

    $ownerOf(tokenId) {
        this._tokenIdExist(tokenId);
        return this._owners.get(tokenId);
    }


    $tokenURI(tokenId) {
        this._tokenIdExist(tokenId);
        return this._tokenUrl.get(tokenId);
    }

    $getApproved(tokenId) {
        this._tokenIdExist(tokenId);
        return this._tokenApprovals.get(tokenId);
    }

    $isApprovedForAll(owner, operator) {
        const ApprovedAll = this._operatorApprovals.getBucket(owner, operator);
        if (!ApprovedAll) {
            return false;
        }
        return ApprovedAll;
    }

    mint(data){
        this._mint(this._msgSender(),data);
        return true;
    }

    transfer(to, tokenId) {
        this._tokenIdExist(tokenId);
        this._transfer(this._msgSender(), to, tokenId);
        return true;
    }

    transferFrom(from, to, tokenId) {
        this._tokenIdExist(tokenId);
        require(this._isApprovedOrOwner(this._msgSender(), tokenId), "B721: transfer caller is not owner nor approval");
        this._transfer(from, to, tokenId);
        return true;
    }


    approve(to, tokenId) {
        this._tokenIdExist(tokenId);
        const owner = this._owners.get(tokenId);
        require(to != owner, "B721: approval to current owner");
        require(this._msgSender() == owner || this.isApprovedForAll(owner, this._msgSender()),
            "B721: approval caller is not owner nor approved for all"
        );
        this._approve(to, tokenId);
        return true;
    }

    setApprovalForAll(operator, approval) {
        this._setApprovalForAll(this._msgSender(), operator, approval);
        return true;
    }

    _mint(to,data){
        const tokenId = this._tokenIdCounter++;
        this._tokenExist.set(tokenId,true);
        this._tokenUrl.set(tokenId,data)
        this._owners.set(tokenId,to);
        const oldL = this._balances.get(to);
        this._balances.set(to,SafeMath.add(oldL,1));

        this._totalSupply = SafeMath.add(this._totalSupply, 1)

        this.event({name:'Transfer',from:'Satoshi',to,tokenId})
    }

    _approve(to, tokenId) {
        this._tokenApprovals.set(tokenId, to);
        this.event({ name: 'Approvel', from: this.$ownerOf(tokenId), to, tokenId });
    }

    _unApproval(tokenId) {
        this._tokenApprovals.delete(tokenId);
        this.event({ name: 'UnApproval', from: this.$ownerOf(tokenId), tokenId });
    }

    _setApprovalForAll(owner, operator, approved) {
        require(owner != operator, "B721: approve to caller");
        this._operatorApprovals.setBucket(owner, operator, approved);
        this.event({ name: 'ApprovelForAll', from: owner, to: operator, approved })
    }

    _transfer(from, to, tokenId) {
        const owner = this._owners.get(tokenId);
        require(from == owner, 'B721: transfer from incorrect owner')
        this._unApproval(tokenId);

        const oldR = this._balances.get(from);
        const oldL = this._balances.get(to);

        this._balances.set(from,SafeMath.sub(oldR,1));
        this._balances.set(to,SafeMath.add(oldL,1));

        this._owners.set(tokenId,to);

        this.event({name:'Transfer',from,to,tokenId})
    }

    _isApprovedOrOwner(spender, tokenId) {
        const owner = this.$ownerOf(tokenId);
        return (spender == owner || this.$getApproved(tokenId) == spender || this.$isApprovedForAll(owner, spender));
    }

    _tokenIdExist(tokenId) {
        const exist = this._tokenExist.get(tokenId);
        require(exist, 'B721: nonexistent token');
    }

    _msgSender() {
        return this.msgSender;
    }

}
```