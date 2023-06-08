function insertion(a){
    for(i=1;i<a.length;i++){
        let current=a[i]
        let j=i-1
        while(j>=0 && a[j]>current){
            a[j+1]=a[j]
            j--
        }
        a[j+1]=current
    }
    return a
}
console.log(insertion([4,2,6,1,9,2]));