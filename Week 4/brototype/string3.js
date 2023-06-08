let str = 'malayalam';
let palindrome = true ;

for(let i=0;i<str.length;i++) {
    if (str[i] !== str[str.length-1-i]) {
        palindrome = false
    }
}
if(palindrome) {
    console.log('Palindrome');
}else{
    console.log('Not palindrome');
}