// Sum of digits of a number, 936 = 18

let num = +prompt('Enter your number')
let SOD = 0
while (num != 0) {
    let rem = num % 10;
    SOD += rem;
    num = Math.floor(num / 10);

}
console.log(SOD);
