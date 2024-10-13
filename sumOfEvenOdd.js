// Print the sum of all even & odd numbers in a range seperately.

let num = +prompt('Enter your number')
let even = 0;
let odd = 0;
for (let i = 0; i <= num ; i++) {
    if (i % 2 == 0) {
        even = even + i;
    }else{
        odd = odd + i;
    }
}
console.log('Even = '+even);
console.log('Odd = '+odd);