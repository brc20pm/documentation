---
id: dialogue
title: Script Dialogue
sidebar_label: Dialogue
slug: /guide/dialogue
--- 

# Script Dialogue

```javascript
class Contract{

     init(){

     }

     testCall(){
         //Create script instance
         let s = this.Caller("kid");
         //Call the script read-only function
         k.call("sayHello");
         //Call the script writing function
         k.call("setHello","World");
     };

}
```