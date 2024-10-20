// Array left rotation by K elements

let arr = [1,2,3,4,5,6,7,8,9]
console.log(arr);
let k = 8;
console.log([...arr.slice(k,arr.length), ...arr.slice(0,k)]);
// logic-2 if user input greater than array length than this logic work
// let n = arr.length-1
// k = k / n;
// let reverse = arr.slice(k).concat(arr.slice(0,k))
// console.log(reverse)