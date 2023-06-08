class Stack {
  constructor() {
    this.stack = [];
    this.top = -1;
    this.b=[];
  }
  isEmpty() {
    return this.top === -1;
  }
  undo(){
    this.b.push(this.stack.pop())
    this.top--
  }
  redo(){
    this.stack.push(this.b.pop())
    this.top++
  }
  push(value) {
    this.top++;
    this.stack[this.top] = value;
  }
  pop() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      const pop = this.stack[this.top];
      this.top--;
      return this.stack[this.top];
    }
  }
  peek() {
    return this.stack[this.top];
  }
  display() {
    if (this.isEmpty()) {
      console.log("list is empty");
    } else {
      for (let i = this.top; i >= 0; i--) {
        console.log(this.stack[i]);
      }
    }
  }
}
const st = new Stack();
st.push(5);
st.push(58);
st.undo()
console.log(st.peek());


st.display()
