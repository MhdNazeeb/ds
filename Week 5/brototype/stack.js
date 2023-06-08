class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop(element) {
    return this.items.pop(element);
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty(){
    return this.items.length===0
  }
  size(){
    return this.items.length
  }
  print(){
    console.log(this.items.toString());
  }
}
const stack=new Stack()
console.log(stack.isEmpty())
stack.push(90)
stack.push(80)

console.log(stack.size());
stack.print()
console.log(stack.pop());
stack.print()
console.log(stack.peek());