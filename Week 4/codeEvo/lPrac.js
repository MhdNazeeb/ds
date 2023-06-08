class Node{
constructor(value){
    this.value=value;
    this.next=null;
}
}
class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null
        this.size=0;
    }
    getSize(){
        return this.size
    }
    isEmpty(){
        return this.size==0
    }
}
const list = new LinkedList()
console.log(list.isEmpty());
console.log(list.getSize());
