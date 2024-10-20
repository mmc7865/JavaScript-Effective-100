// Array left Rotation by 1

let arr = [1,2,3,4,5,6,7,8,9]
console.log('Before shifting',arr);

console.log('After shifting',[ ...arr.slice(1), ...arr.slice(0,1)]);
