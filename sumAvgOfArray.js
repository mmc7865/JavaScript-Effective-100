// Accept size n from user and create a n size array then take n inputs into the arry and finally print the sum & Avg of all elements.


let n = +prompt("Enter the size of the array:");
let arr = new Array(n);

for (let i = 0; i < n; i++) {
    arr[i] = +prompt(`Enter element ${i+1}:`);
}

console.log("Your array:", arr);
let sum = 0;
for (let index = 0; index < arr.length; index++) {
    sum += arr[index]
    
}
console.log('Sum is: '+sum);
console.log('Avg is: '+sum/n);


