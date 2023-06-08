class MinBinaryHeap {
    constructor() {
      this.arr = [];
    }
  
    heapify(arr, n, i) {
      let smallest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
  
      if (left < n && arr[left] < arr[smallest]) {
        smallest = left;
      }
  
      if (right < n && arr[right] < arr[smallest]) {
        smallest = right;
      }
  
      if (smallest !== i) {
        let temp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = temp;
        this.heapify(arr, n, smallest);
      }
    }
  
    insert(data) {
      this.arr.push(data);
      let i = this.arr.length - 1;
  
      while (i > 0) {
        const parent = Math.floor((i - 1) / 2);
        if (this.arr[i] >= this.arr[parent]) {
          break;
        }
        let temp = this.arr[i];
        this.arr[i] = this.arr[parent];
        this.arr[parent] = temp;
  
        i = parent;
      }
    }
  
    remove() {
      const n = this.arr.length;
      if (n === 0) {
        return null;
      }
      let min = this.arr[0];
      this.arr[0] = this.arr[n - 1];
      this.arr.pop();
      this.heapify(this.arr, n - 1, 0);
      return min;
    }
  
    heapSort() {
      const n = this.arr.length;
  
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        this.heapify(this.arr, n, i);
      }
  
      for (let i = n - 1; i > 0; i--) {
        let temp = this.arr[0];
        this.arr[0] = this.arr[i];
        this.arr[i] = temp;
        this.heapify(this.arr, i, 0);
      }
      return this.arr;
    }
  }
  
  const h = new MinBinaryHeap();
  h.insert(20);
  h.insert(34);
  h.insert(100);
  h.insert(1);
  h.insert(14);
  h.insert(0);
  h.remove();
  h.heapSort();
  console.log(h.arr);
  