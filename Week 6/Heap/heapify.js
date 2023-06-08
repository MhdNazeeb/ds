class MaxHeap {
    constructor() {
      this.values = [];
    }
  
    insert(element) {
      this.values.push(element);
      this.sinkUp();
      return this.values;
    }
  
    sinkUp() {
      let i = this.values.length - 1;
      const element = this.values[i];
      while (i > 0) {
        let parentIdx = Math.floor((i - 1) / 2);
        let parent = this.values[parentIdx];
        if (element <= parent) break;
        this.values[parentIdx] = element;
        this.values[i] = parent;
        i = parentIdx;
      }
    }
  
    deleteMax() {
      const max = this.values[0];
      const end = this.values.pop();
      if (this.values.length > 0) {
        this.values[0] = end;
        this.sinkDown();
      }
      return max;
    }
  
    sinkDown(idx = 0) {
      const left = 2 * idx + 1;
      const right = 2 * idx + 2;
      const length = this.values.length;
      let largest = idx;
  
      if (left < length && this.values[left] > this.values[largest]) {
        largest = left;
      }
  
      if (right < length && this.values[right] > this.values[largest]) {
        largest = right;
      }
  
      if (largest !== idx) {
        [this.values[idx], this.values[largest]] = [this.values[largest],this.values[idx]];
        this.sinkDown(largest);
      }
    }
  
    display() {
      console.log(this.values);
    }
  
    heapify(arr) {
      this.values = arr;
      for (let i = Math.floor(this.values.length / 2); i >= 0; i--) {
        this.sinkDown(i);
      }
    }
  }
const mx=new MaxHeap()  
mx.heapify([4,1,2,7,1,10,5,100])
mx.display()