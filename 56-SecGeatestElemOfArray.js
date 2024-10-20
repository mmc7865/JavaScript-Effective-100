// Find the second greatest element 
//       {2, 96, 69, 77, 145, 20} = Second greatest element = 96

let arr = [2, 96, 69, 107, 145, 20];
let max = 0;
let secMax = 0;
arr.forEach((e, index) => {
    if (e > arr[max]) {
        secMax = max;
        max = index;
    }
});
console.log('Second greatest number is = '+ arr[secMax]);
