// Automorphic number 5 = 25 = 625 = 390625, 6=36, 76 = 5776

let num = +prompt("Enter your number");

let temp = num;
let sqr = Math.pow(temp, 2);
let length = 0;
console.log(`${num} square is = ` + sqr);

while (temp != 0) {
  temp % 10;
  length++;
  temp = Math.floor(temp / 10);
}
let rem = sqr % 10 ** length;
console.log(rem);
if (num == rem) {
  console.log(`${num} is Automorphic Number`);
} else {
  console.log(`${num} is not an Automorphic Number`);
}
