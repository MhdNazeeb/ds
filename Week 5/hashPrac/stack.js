class Stack{
    constructor(){
        this.stack=[]
        this.top=-1
    }
    isEmpty(){
        return this.top===-1
    }
    push(value){
        this.top++
        this.stack[this.top]=value
    }
    pop(){
        if (this.isEmpty()) {
            console.log("underflow");
            return
        }
        let rNode=this.stack[this.top]
        this.top--
        return rNode
    }
    middle(){
        if (this.isEmpty()) {
            return null
        }
        const middle=Math.floor(this.stack.length/2)
        return this.stack[middle]
    }
    removemid(){
        const middle=Math.floor(this.stack.length/2)
        let remove=this.stack[middle]
        
        return remove
        
    }
    display(){
        if(this.isEmpty()){
            return null
        }
        for(let i=this.stack.length-1;i>=0;i--){
            console.log(this.stack[i]);
        }
    }
}
const st=new Stack()
st.push(50)
st.push(10)
st.push(20)
console.log(st.middle());
console.log(st.removemid());
// console.log(st.pop());
st.display()