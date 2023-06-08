function bub(a){
    for(i=0;i<a.length-1;i++){
        for(j=0;j<a.length-i-1;j++){
            if(a[j]>a[j+1]){
                temp=a[j]
                a[j]=a[j+1]
                a[j+1]=temp
            }
        }
    }
    return a
}
console.log(bub([4,2,6,1,7]));