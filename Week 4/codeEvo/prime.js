function power(n){
    if(n<=2){
     return true
    }else{
        while(n%2===0){
            n=n/2;
        }
        return n===1
    }
}
console.log(power(1));
