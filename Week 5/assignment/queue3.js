class Queue {
    constructor() {
      this.queue = [];
      this.front = 0;
      this.rear = -1;
    }
  
    isEmpty() {
      return this.front > this.rear;
    }
  
    enqueue(element) {
      this.rear++;
      this.queue[this.rear] = element;
    }
  
    dequeue() {
      if (this.isEmpty()) {
        console.log('Queue is empty.');
        return null;
      }
      const removedElement = this.queue[this.front];
      this.front++;
      return removedElement;
    }
  
    peek() {
      if (this.isEmpty()) {
        console.log('Queue is empty.');
        return null;
      }
      return this.queue[this.front];
    }
  
    display() {
      if (this.isEmpty()) {
        console.log('Queue is empty.');
        return;
      }
      for (let i = this.front; i <= this.rear; i++) {
        console.log(this.queue[i]);
      }
    }
  }
  const queue = new Queue();
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  queue.display();
  console.log('Dequeued element:', queue.dequeue());
  console.log('Peeked element:', queue.peek());
  queue.display();