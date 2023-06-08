let a = ['A','A','A','B','B','C'];
let item = [];
let count = 1;
for(let i=0 ; i<a.length ; i++) {
        if (a[i] === a[i+1]) {
            count++;
        }else{
            total = count 
            item.push(a[i]+ '=' +total)
            count = 1
        }
    }
console.log('New array : ' + item);
