// Binary Search. If element found print the index else -1

let array = [11,12,13,14,15,8,7,6,9,10];
array.sort((a, b) => a - b);
console.log(array);

let search = 12;
function binarySearch(array , search) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (array[mid] === search) {
            return mid;
        } else if(array[mid] > search){
            right = mid - 1;
    
        }else if(array[mid] < search){
            left = mid + 1;
        }
    }
    return -1;
}
const ans = binarySearch(array, search)
console.log(ans);
