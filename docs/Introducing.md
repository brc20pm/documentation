---
id: introducing 
title: Introducing OrdScript
sidebar_label: INTRODUCING 
slug: /introducing
---
 
# introduce
 

### OrdScript: Bitcoin smart contract inscription implementation based on Ordinals

Regarding the implementation of the ideas in Ordnals [discussions](https://github.com/ordinals/ord/discussions/2217), it ended up being somewhat different but mostly inspired by his ideas.

In June 2023, [danny huuep](https://twitter.com/huuep) proposed the idea of "OrdScript" in the Ordinals discussion and [posted](https://twitter.com/huuep/status/1672369925929975809) on the social platform X.com, triggering heated discussions. Developing a dedicated language is a very large project and very difficult! So we use the existing programming language JavaScript to accomplish this. Although the final implementation is different from danny huuep's idea, it can be fully compatible or incorporated into Ordinals.

The final ideal implementation: It should be like the ChainLink decentralized oracle network, solving the existing indexer centralization problem through Offchain Reporting (OCR)

### Development background
- In March 2023, the Bitcoin network witnessed an epoch-making evolution—the launch of the Ordinal Protocol. The protocol specifies a way to seamlessly run tokens and NFTs on the Bitcoin network.
- In May 2023, with the rise of Unisat, MagicEden and other platforms, a flourishing Bitcoin ecosystem was rapidly formed. While these advancements advance Bitcoin’s token mechanics, they lack a key component—developer programming autonomy.
- OrdScript was born from this vision. It is a revolutionary tool that unlocks endless possibilities for developers. Like Ethereum’s smart scripts, OrdScript makes it possible to develop and execute decentralized applications. However, what sets it apart is its use of JavaScript, a language well-known among developers for its ubiquity and ease of use.
- OrdScript is designed to make anything you imagine possible. It brings the versatility of Ethereum smart scripts to the reliable, secure Bitcoin network, but with a twist – using JavaScript. This approach not only makes blockchain development easier, but also opens up new horizons for innovation that were previously limited to more complex programming languages.

### Conclusion

  **OrdScript** is an important expansion of the Bitcoin ecosystem. It is not just an enhancement to existing technology, but a bridge that perfectly combines the stability of Bitcoin with the innovation of modern blockchain technology. Through OrdScript, developers can deploy complex smart scripts on the Bitcoin network, perform cross-chain transactions, and even develop and manage decentralized applications, while maintaining the core security and decentralization features of the Bitcoin network.

## What can it do?

Implement anything you want, just like Ethereum’s **Smart Contract**

The difference is programming with **JavaScript**

Here is a simple script example:
```javascript
/*
Generate a simple script template.
Note: You should not have constructors
*/
class Contract {
	
      init(){
        
      }
	
}
```
:::caution
- The name of the entry class must be Contract
- Constructors should not be implemented in entry classes
- The init function must exist whether or not it is encoded in the function body
:::

are you ready? Next let's show off our skills!