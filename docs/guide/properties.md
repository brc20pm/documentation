---
id: properties
title: Properties
sidebar_label: Properties
slug: /guide/properties
--- 



# Script Properties

**Zero address**
```javascript
address(0) //Don't pass anything except 0.，only 0 only 0 only 0
```

**Block height**
```javascript
this.height
```

**Current script address**
```javascript
this.address
```

**Transaction source address**
```javascript
this.txOrigin
```

**Current calling address**
```javascript
this.msgSender
```

**Transaction Memo**
```javascript
this.memo //Parse from the last output script, empty if there is none
```

**Block timestamp**
```javascript
this.timeStamp
```

**Transaction Hash**
```javascript
this.txHash
```


**Load external script**
```javascript
let script = this.Caller("kid");
script.call("funcName",...params);
```

**script Event**
```javascript
//There is no return allowed below the event code line. If you want to return other data after the event, you need to define another function to record the event.
//The first Key must be name (event name), there can be multiple arg parameters
this.event({name:'EventName',arg1:'arg1',arg2:'arg2'});
```

**Random Number - Integer**
```javascript
let min = 1;
let max = 100;
this.randomInt(min,max);
```

**Random Number-Decimal**
```javascript
let min = 0.0001;
let max = 100.00;
this.randomFloat(min,max);
```


**MD5 encryption**
```javascript
md5e("Hello, World!");
```


**sha256 encryption**
```javascript
sha256e("Hello, World!");
```


**keccak256 encryption**
```javascript
keccak256("Hello, World!");
```


**Base64 encoding**
```javascript
base64e("Hello, World!");
```

**Base64 decoding**
```javascript
base64d("SGVsbG8sIFdvcmxkIQ==");
```

**SafeMath**
```javascript
SafeMath.add(2,-1);

SafeMath.sub(3,2);

SafeMath.mul(2,3);

SafeMath.div(6,2);

SafeMath.mod(2,4);

SafeMath.pow(2,3);

SafeMath.fixed(100.03123,2)

SafeMath.val(1);

SafeMath.num(1);

SafeMath.eq(1,1);

SafeMath.neq(1,1);

SafeMath.gt(2,1);

SafeMath.lt(1,2);

SafeMath.qte(1,2);

SafeMath.lte(1,2);
```


**forAny**
```javascript
// do while && while && for && array.forEach is disable
// do while && while && for && array.forEach is disable
// do while && while && for && array.forEach is disable

forAny((key,value)=>{
   
},object,[endIndex],[startIndex])

forAny((key,value)=>{
   //iterable object or array
},object)

forAny((key,value)=>{
   //Iterate over an array and specify the end and start indexes
},array,10,2)

forAny((key,value)=>{
	//Iterate completely and specify starting index
},array,-1,2)

forAny((key,value)=>{

},array,10)

forAny((key,value)=>{
   //Specify the number of iterations
},null,1000)

forAny((key,value)=>{
   //Specify the number of iterations and specify the starting index
},null,1000,200)
```

**Map**
```javascript
class Contract {

     name;
     _tMap = new Map();


     init() {
         this.name = "123";
     }

     setMap(k,v){
        this._tMap.set(k,v)
     }

     $getMap(k){
         return this._tMap.get(k)
     }

     delete(key){
         this._tMap.delete(key)
     }

     $hasKey(key){
         return this._tMap.hasKey(key)
     }

     $getName(){
         return this.name;
     }

     setBucket(){
         this._tMap.setBucket("key1", "key2", "value")
     }

     $getBucket(){
         const value = this._tMap.getBucket("key1");
         if(typeof value === 'object'){
             return JSON.stringify(value);
         }else{
             return value;
         }
     }

     delBucket(){
         this._tMap.delBucket("key1","key2")
     }
}
```

**BigNumber**

We have built-in bigNumber.js library, you can use it to complete high-precision business processing

```javascript
new BigNumber(1)
```