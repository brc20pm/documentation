---
id: extends
title: Script Extends
sidebar_label: Extends
slug: /guide/extends
--- 



# Script Extends

I believe this is a very easy thing for students who have learned `JavaScript`

So let's stop talking nonsense and come and take a look!

```javascript
class TestName {

     _name;

     init(){
        
     }
    
     setName(name){
         this._name = name;
     }
    
     $getName(){
         return this._name;
     }
    
}


class script extends TestName{

     init(){

     }

}
```

**That's right! That's it, our script has inherited all the functions of TestName**

**In addition, you can also inherit other parent classes on TestName**

For example like this

```javascript
let D = {
	sayHello: function() {
		return "hello";
	}
};

class C {
	dd = D;
	name = "123";

	$sayHello() {
		return this.dd.sayHello();
	}

	setName(name) {
		this.name = name;
	}

	$viewName() {
		return this.name;
	};

}

class B extends C {

	$viewName2() {
		return 12;
	};
}

class A extends B {
	$viewName23() {
		return 12;
	};

}

class script {
	aa = new A();

	init() {

	}

	set(name) {
		this.aa.setName(name)
	}
	$view() {
		return this.aa.$viewName();
	}
}
```

:::caution
**script itself and its inherited parent classes cannot have explicit functions**

```javascript
testSetName2 = function(name){
     this.setName(name);
}
```
:::