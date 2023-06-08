class Node{
    constructor(value){
        this.value=value
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    prepend(value){
        const node=new Node()
        if(this.isEmpty()){
            this.head=node
        }else{
            let prev=this.head
            while(prev!=null){
                prev=prev.next
            }
            this.head=node
            node.next=this.head.next
        }
        this.size++
    }
    getSize(){
        return this.size
    }
    isEmpty(){
        return this.size===0;
    }
    insert(value,index){
        if(index<0 || index>this.size){
            return null
        }
        if(index===0){
            this.prepend(value)
        }else{
            let node=new Node(value)
            let prev=this.head
            while(prev.next!=null){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
        }
        this.size++
    }
    delete(value){
        if(this.isEmpty()){
            return null
        }
        let removeNode
        if(this.head.value==value){
            let node =new Node(value)
            removeNode=this.head
            this.head.next=this.head
        }else{
            let prev=this.head
            while(prev.next!=null){
                prev=prev.next
            }
            removeNode=this.prev.next
            prev.next=removeNode.next
        }
        this.size--
    }
    print(){
        if(this.isEmpty()){
            console.log("list is empty");
        }else{
            let curr=this.head
            let listValues=''
            while(curr.next!=null){
                listValues+=`${curr.value}`
                curr=curr.next
            }
            console.log(listValues);
        }
    }
}
const list=new LinkedList()
list.insert(2,0)
list.insert(3,1)
list.print()