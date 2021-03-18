#!/usr/bin/env ts-node

function createPrefix(n){
    return '--'.repeat(n)
}
{
    class Person{
        children:Person[] = []
        constructor(public name){
        }
        addChildren(child){
             this.children.push(child)
        }
        introduce(n:number=1):void{
            console.log(`${createPrefix(n-1)}:${this.name}`)
            this.children.forEach((child)=>{
                child.introduce(n+1)
            })
        }
    }
    let father = new Person('爸爸')
    let son1 = new Person('儿子1')
    let son2 = new Person('儿子1')
    let son3 = new Person('儿子1')
    let grandson1 = new Person('孙子1')
    let grandson2 = new Person('孙子2')

    father.addChildren(son1)
    father.addChildren(son2)
    father.addChildren(son3)
    son1.addChildren(grandson1)
    son2.addChildren(grandson2)
    father.introduce()
}

































