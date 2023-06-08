class Stack {
    constructor() {
        this.stack = []
        this.top = -1
    }

    isEmpty() {
        return this.top === -1
    }

    push(data) {
        this.top++
        this.stack[this.top] = data
    }

    pop() {
        if(this.isEmpty()) {
            console.log('Empty');
        }else{
           let rNode = this.stack[this.top]
           this.top--
           return this.stack[this.top]
        }
    }

    peek() {
        return this.stack[this.top]
    }

    display() {
        if(this.isEmpty()) {
            console.log('Empty');
        }else{
            for(let i=this.top ; i>=0 ; i--) {
                console.log(this.stack[i]);
            }
        }
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.display()
stack.pop()
stack.display()