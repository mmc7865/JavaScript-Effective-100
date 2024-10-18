// Find the greatest element.
//       {2, 96, 69, 77, 145, 20} = Max element = 145 found at 4 index

let arr = [23, 34, 45, 455, 6, 47];
let max = 0;
arr.forEach(e => {
    if (max < e) {
        max = e;
    }
});
console.log(max);
