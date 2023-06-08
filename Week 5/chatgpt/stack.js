class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const removedNode = this.top;
    this.top = removedNode.next;
    removedNode.next = null;
    this.size--;
    return removedNode.value;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.top.value;
  }
  getSize() {
    return this.size;
  }
  print() {
    let currentNode = this.top;
    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }  
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

stack.print()
