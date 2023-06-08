class Queue{
    constructor(){
        this.queue=[]
        this.front=0
        this.rear=-1
    }
    isEmpty(){
        return this.front>this.rear
    }
    peek(){
        if(this.isEmpty()){
            return null
        }
           return this.queue[this.front]
    }
    enqueue(element){
        this.rear++
        this.queue[this.rear]=element
    }
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        let remove=this.queue[this.front]
        this.front++
        return remove
    }
    display(){
        if(this.isEmpty()){
            console.log("lsit is empty");
        }else{
            for(let i=this.front;i<=this.rear;i++){
                console.log(this.queue[i]);
            }
        }
    }
}
const qu =new Queue()
qu.enqueue(5)
qu.enqueue(7)
qu.enqueue(9)
qu.dequeue()
console.log(qu.peek());
qu.display()