// Print the count of subarrays whose sum is equal to the target.
// 	Ex - {1,2,3,7,5}, T = 12  O/P - 2 - [ {2,3,7}, {7,5} ] - Both the subarrays has sum 12 

let array = [1,2,3,7,5]
let target = 12;

for(let i = 0; i < array.length; i++) {
    let sum = 0;
    for(let j = i; j < array.length; j++) {
        sum += array[j];
        if(sum == target) {
            console.log(array.slice(i,j+1));
        }
    }
}
