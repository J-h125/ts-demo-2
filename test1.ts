#!/usr/bin/env ts-node
{
class Person{
    public children : Person[];
    constructor(public name,public age){

    }
    sayHi(){
        console.log('hello,my name is:'+this.name)
    }
    addChild(child:Person):void{
        this.children.push(child)
    }
}
let father = new Person('father',48)
let son1 = new Person('son1',48)
let son2 = new Person('son2',48)

father.addChild(son1)
father.addChild(son2)
}