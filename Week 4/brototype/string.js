let str = ['s', 'a', 'j', 'a', 'd'];
let char = [];
let newkey = 5 % 26;

for (let i = 0; i < str.length; i++) {
  let charCode = str[i].charCodeAt(0);
  let shiftedCode = charCode + newkey;
  if (shiftedCode > 122) {
    shiftedCode = 96 + (shiftedCode % 122);
  }
  char[i] = String.fromCharCode(shiftedCode);
  console.log(char[i]);
}
