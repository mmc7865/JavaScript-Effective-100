// Linear Search an array - If element found print the index else -1

let array = [12,43,42,51,54,56,23,61,53,98,87,79]
// console.log(array);

let found = 55;

function linear(found ){
    for  (let index = 0; index < array.length; index++) {
        if(array[index] === found){
            return index;
        }
    }
     return -1;
}
console.log(linear(found));
