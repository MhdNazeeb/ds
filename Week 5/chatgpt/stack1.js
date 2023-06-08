class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Stack{
    constructor(){
        this.top=null
        this.size=0
    }
    push(value){
        const node=new Node(value)
        node.next=this.top
        this.top=node
        this.size++
    }
    pop(){
        if(this.isEmpty()){
            return null
        }
        const removedNode=this.top
        this.top=removedNode.next
        removedNode.next=null
        this.size--
        return removedNode.value
    }
    isEmpty(){
        return this.size===0
    }
    size(){
        return this.size
    }
    print(){
        let currentNode=this.top
        while(currentNode){
            console.log(currentNode.value);
            currentNode=currentNode.next
        }
    }
}
const stack=new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()
stack.isEmpty()
stack.print()
