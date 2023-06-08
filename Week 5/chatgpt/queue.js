class QueueNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
    class Queue {
    constructor() {
      this.front = null;
      this.rear = null;
      this.size = 0;
    }
    isEmpty() {
      return this.size === 0;
    }
    getSize() {
      return this.size;
    }
    enqueue(value) {
      const newNode = new QueueNode(value);
  
      if (this.isEmpty()) {
        this.front = newNode;
        this.rear = newNode;
      } else {
        this.rear.next = newNode;
        this.rear = newNode;
      }
  
      this.size++;
    }
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
  
      const dequeuedNode = this.front;
      this.front = this.front.next;
  
      if (this.front === null) {
        this.rear = null;
      }
  
      this.size--;
      return dequeuedNode.value;
    }
    peek() {
      if (this.isEmpty()) {
        return null;
      }
  
      return this.front.value;
    }
    print() {
        if (this.isEmpty()) {
          console.log("Queue is empty");
          return;
        }
    
        let currentNode = this.front;
        while (currentNode !== null) {
          console.log(currentNode.value);
          currentNode = currentNode.next;
        }
      }
  }
  const queue = new Queue();
  queue.enqueue(10);
  
  queue.enqueue(20);
  queue.dequeue()
  queue.enqueue(30);


  queue.print()
  