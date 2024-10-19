// Array left rotation by K elements

let arr = [1,2,3,4,5,6,7,8,9]
console.log(arr);
let k = 5;
console.log([...arr.slice(k,arr.length), ...arr.slice(0,k)]);