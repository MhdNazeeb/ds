function power (n){
    if(n<=2){
        return true
    }else{
       for(i=3;i<=n;i++){
        if(n%2===0){
            return "it is power"
        }else{
            return "not power"
        }
       }
    }
}
console.log(power(5));