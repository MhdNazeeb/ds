class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
            this.size++
    }
    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let prev=this.head
            while(prev.next!=null){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
        }
        this.size++
    }
    insert(value,index){
        if(index<0 || index>this.size){
            return null
        }
        const node =new Node(value)
        if(index===0){
            this.prepend(value)
        }else{
            let prev=this.head
            if(prev.next!=null){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
        }
        this.size++
    }
    deleteInd(value,index){
        if(index<0 || index>=this.size){
            return null
        }
        let removeNode
        if(index===0){
           let removeNode=this.head
            this.head=this.head.next
            this.size--
            return removeNode.value
        }else{
            prev=this.head
            for(i=0;i<index-1;i++){
                prev=prev.next
            }
            removeNode=prev.next
            prev.next=removeNode.next
            this.size--
        }
    }
    reverse(){
        if(this.isEmpty()){
            return null
        }else{
            let curr=this.head
            let prev=null
            while(curr!=null){
                let next=curr.next
                curr.next=prev
                prev=curr
                curr=next
            }
            this.head = prev
        }
    }
    delete(value){
        if(this.isEmpty()){
            return null
        }
        let removeNode;
        if(this.head.value===value){
            this.head=this.head.next
            this.size--
        }else{
            let prev=this.head
            while(prev.next&&prev.next.value!==value){
                prev=prev.next
            }
            if(prev.next){
                removeNode=prev.next
            prev.next=removeNode.next
            this.size--
            return value
            }
            return null
        }
    }
    print(){
        if(this.isEmpty()){
            console.log("list is empty");
        }else{
            let listValues=''
            let curr=this.head
            while(curr){
                listValues+=`${curr.value}`
                curr=curr.next
        }
        console.log(listValues);
    }
}
}
const list=new LinkedList()
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.reverse()
list.print()

