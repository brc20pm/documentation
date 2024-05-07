---
slug: blog
---

# B20 Token Experimental

## In order to test the initial trial operation of the mainnet, we deployed a B20 token called BitSpct. Everyone can mint freely. At the same time, it also has a complex recommendation reward mechanism. Let’s witness this moment together!


### `Name: BitScpt`

### `Symbol: Bits`

### `TotalSuppy: 400000000`

### `KID: bit000000000000000000000`

### `Method: mint(inviter)`

### `inviter: bc1qatc4mey2qudtqph7nvmtuw2znpx9r8cqvh7tm2`

:::success Send
```json
{
	"kid": "bit07b8a6dd5179b30990742a61dc2f3f7d750592e",
	"method": "mint",
	"params": ["bc1qatc4mey2qudtqph7nvmtuw2znpx9r8cqvh7tm2"]
}
```
:::


## Rules

### 1. When you share it with other people, when they mint, please ask them to fill in your wallet address, and you will get the recommendation reward.

### 2. The balance of the filled in inviter's address must be greater than or equal to 1000 Bits before you can mint successfully. This means that your recommender must have minted Bits before you.

### 3. The maximum supply is 400000000 Bits. When the maximum amount is reached, the remaining mint will be invalid.

## Pyramid Rewards	


```javascript
A & B 
A-1000、B-1000

A & B & C
A-500、B-500、C-1000

A & B & C & D 
A-100、B-400、C-500、D-1000
```

:::caution
The inviter's balance must be greater than or equal to 1000 Bits
:::

