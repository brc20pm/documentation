---
id: monetization 
title: Monetization
sidebar_label: 💴‍ Monetization
slug: /monetization	
---


The transaction fee model is a fundamental monetization strategy for platforms like OrdScript, which enhances Bitcoin's Layer 1 with advanced smart contract capabilities. This model involves charging users a fee for each transaction processed through the network's infrastructure. Here's how the transaction fee model could work for OrdScript:

- Fee Per Transaction: Users could be charged a small fee for every transaction executed on the OrdScript. This includes deploying smart contracts, conducting trades on decentralized exchanges (DEXs), minting ordinal NFTs, participating in DeFi protocols, or any other operation that involves smart contract execution on the network.

- Fee Distribution: Collected fees could be distributed in various ways to support the network's sustainability and growth. A portion could be allocated to node operators or validators who contribute to maintaining the network's security and efficiency. Another portion could be reinvested into the development and improvement of the OrdScript infrastructure.

- Incentives for Developers and Users: OrdScript could implement incentive mechanisms that reward developers for creating highly used smart contracts or users for participating in network activities. This could involve returning a portion of the transaction fees as a rebate or reward, encouraging continuous engagement and innovation on the platform.

- Transparent Fee Policy: To maintain trust and transparency, OrdScript would clearly communicate its fee structure to users, ensuring they understand the costs associated with their transactions. This transparency is crucial for user satisfaction and long-term platform adoption.

- The transaction fee model provides a direct, usage-based revenue stream for OrdScript, aligning the platform's earnings with its value to users. By carefully balancing fee levels to ensure competitiveness and affordability, OrdScript can attract a wide user base while ensuring the network's financial health and ongoing development.


### On Mainnet

**deploy** 
- 10000 address(0)s will be charged as a fee, regardless of the size of the bytecode to be deployed

**send** 
- 1000 address(0)s will be charged as a fee, regardless of the size of the bytecode to be executed

### On Testnet

**deploy** 
- 1000 address(0)s will be charged as a fee, regardless of the size of the bytecode to be deployed

**send** 
- 1000 address(0)s will be charged as a fee, regardless of the size of the bytecode to be executed


## Target address
Your relay transaction needs to be sent to the following addresses, they need to be at an index of 0 and pay the above transaction fee

:::caution
- **MainNet: 3LAoUiU2X2cKRURL3hTHMufHM15Xrk2K9s**
- **TestNet: 2N4vkrW97TmqdtdkHvMpfuRMqJF17CSvbFC**
:::


## Anchor Token Conversion

#### When the transaction operation code is Send, 50% of the transaction fee of 1000 Satoshis you paid and the excess will be automatically converted into the anchor token **ORDS** after 6-12 blocks are confirmed (1 ORDS = 1 Satoshis)