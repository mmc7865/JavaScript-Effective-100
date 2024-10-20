// Take n integer inputs from user and store them in an array.
//        Now, copy all the elements in an another array but in reverse order and print it.

let n = +prompt("Enter the langth of an Array:");
let array = new Array(n);
for (let index = 0; index < array.length; index++) {
  array[index] = +prompt(`Enter element of ${index + 1}`);
}
console.log(array);
// console.log(array.reverse()); // We also Choose function for reversing an array 
let copyArray = [];
array.forEach(element => {
    copyArray.unshift(element);
});
console.log(copyArray);
