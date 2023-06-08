class MaxHeap{
    constructor(){
        this.arr=[]
    }
    insert(data){
        this.arr.push(data)
        let i=this.arr.length-1
        while(i>0){
            const parent=Math.floor((i-1)/2)
            if(this.arr[i]<=this.arr[parent]){
                break
            }
            [this.arr[i],this.arr[parent]]=[this.arr[parent],this.arr[i]]
            i=parent
        }
    }
    remove(){
        const n=this.arr.length
        if(n===0){
            return null
        }
        let max=this.arr[0]
        this.arr[0]=this.arr[n-1]
        this.arr.pop()
        this.heapify(this.arr,n-1,0)
        return max
    }
    heapify(arr,n,i){
        let largest=i
        let left=2*i+1
        let right=2*i+2
        if(left<n && arr[left]>arr[largest]){
            largest=left
        }
        if(right<n && arr[right]>arr[largest]){
            largest=right
        }
        if(largest!==i){
            [arr[i],arr[largest]]=[arr[largest],arr[i]]
            this.heapify(arr,n,largest)
        }
    }
    heapSort(){
        const n=this.arr.length
        for(let i=Math.floor(n/2)-1;i>=0;i--){
            this.heapify(this.arr,n,i)
        }
        for(let i=n-1;i>0;i--){
            [this.arr[0],this.arr[i]]=[this.arr[i],this.arr[0]]
            this.heapify(this.arr,i,0)
        }
        return this.arr
    }
}
const max=new MaxHeap()
max.insert(10)
max.insert(40)
max.insert(1)
max.insert(150)
max.insert(100)
// max.heapSort()
console.log(max.arr);
