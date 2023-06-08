class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        if(this.isEmpty()){
            return null;
        }
        if()
    }
    print(){
        if(this.isEmpty()){
            console.log("list is empty");
        }else{
            let curr=this.head
            let listValues=''
            while(curr!=null){
                listValues+=`${curr.value}`
                curr=curr.next
            }
            console.log(listValues);
        }
    }
}
const list=new LinkedList()
console.log(list.print());