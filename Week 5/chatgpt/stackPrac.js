class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class StackList {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size++;
  }
  delIdx(){
    if(this.empty()){
        return null
    }
  }
  pop(){
    if (this.empty()) {
        return null
    }else{
        let removedNode=this.top
        this.top=removedNode.next
        this.size--
        return removedNode.value
    }
  }
  empty() {
    return this.size === 0;
  }
  size() {
    return this.size;
  }
  peek() {
    if (this.empty()) {
      return null;
    }
    return this.top.value;
  }
  print() {
    if (this.empty()) {
      return null;
    } 
      let currentNode = this.top;
      while (currentNode) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
      }
    
  }
}
const stack = new StackList();
stack.push(10)
stack.push(20);
stack.push(30)
console.log(stack.pop());


stack.print()
