// class Node {
//     constructor(data) {
//         this.data = data;
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head=null;
//         this.tail=null;
//     }
// }
// function addNode(data){
//   var newNode = new Node(data);
// if (head==null){
//     head=newNode;
// }else{
// tail=newNode
// }
// tail=newNode;
// }

// function display(){
//     if(head==null){
//         console.log("empty");
//         return;
//     }
//     var temp=head;
//     while(temp!=null){
//         console.log(temp.data)
//         temp=temp.next;
//     }
// }
// var list=new LinkedList();
// list.display()
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNode(data) {
        var newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    display() {
        if (this.head == null) {
            console.log("empty");
            return;
        }
        var temp = this.head;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

var list = new LinkedList();
list.display(); // prints "empty"
list.addNode(5)
list.addNode(3)
list.display();