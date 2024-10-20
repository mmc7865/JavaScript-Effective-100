// Check if array is sorted in increasing order or not.
//        Ex 1 - { 1, 5, 8,  9, 10, 15 } - OP = "YES"
//        Ex 2 - { 1, 8, 6, 9, 10, 15 } - OP = "NO"


let arr = [1, 5, 8, 9, 10, 15];
let isTrue = true;
let sort = 0;
for (let index = 0; index < arr.length; index++) {
    if(arr[index] >= sort){
        sort = arr[index];
    } else{
        isTrue = false;        
    }    
}
console.log(isTrue);
