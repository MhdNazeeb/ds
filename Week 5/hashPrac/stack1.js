class Stack{
    constructor(){
        this.top=0
        this.stack=[]
        this.b=[]
    }
    undo(){
        return this.b.push(this.stack.pop())
    }
    redo(){
        this.stack.push(this.b.pop())
    }
    push(value){
        this.stack.push(value)
    }
    display(){
        console.log(this.stack);
    }
    middle(){
        const mid=Math.floor(this.stack.length/2)
        for(let i=0;i<mid;i++){
            this.b.push(this.stack.pop())
        }
        this.stack.pop()
        for(let i=0;i<mid;i++){
            this.stack.push(this.b.pop())
        }
    }
}
const st=new Stack()
st.push(50)
st.push(30)
st.push(10)
st.middle()
st.redo()

st.display()