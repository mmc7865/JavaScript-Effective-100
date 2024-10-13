// Sum up to n terms.

let n = +prompt('Enter your number')
let res = 0;
for (let i = 0; i <= n; i++) {
    res = res + i;
}
console.log(res);