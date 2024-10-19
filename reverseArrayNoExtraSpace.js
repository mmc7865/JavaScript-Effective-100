// - Array Reverse Without Using Extra space

let array = [1,2,3,4,5,6,7,8,9]
console.log(array);
let left = 0;
let right = array.length - 1;
while( left < right) {
    // let temp = array[left];
       array [left] = array[left] + array[right];
       array[right] = array[left] - array[right];
       array[left] = array[left] - array[right];
       left++;
       right--;
}
console.log(array);