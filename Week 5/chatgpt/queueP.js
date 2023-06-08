class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Queue{
    constructor(){
        this.front=null
        this.rear=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    size(){
        return this.size
    }
    enqueue(value){
        const node =new Node(value)
        if(this.isEmpty()){
            this.front=node
            this.rear=node
        }else{
            this.rear.next=node
            this.rear=node
        }
        this.size++
    }
    dequeue(){
        if (this.isEmpty()) {
            console.log("List is empty");
            return
        }
        const dequeueNode=this.front
        this.front=this.front.next
        if(this.front===null){
            this.rear=null
        }
        this.size--
        return dequeueNode.value
    }
    display(){
        if (this.isEmpty()) {
            return null
        }else{
            let curr=this.front
            while(curr!=null){
                console.log(curr.value);
                curr=curr.next
            }
        }
    }
}
const queue=new Queue()
queue.enqueue(5)
queue.enqueue(6)
queue.dequeue()
queue.display()