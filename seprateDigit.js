// Seprate each digit of a number and print it on the new line ex - 123 
// 	Output
// 		3
// 		2
// 		1


let num = +prompt('Enter your number')

console.log(`Sepration of ${num} is:`);

while (num != 0) {
    let rem = num % 10;
    console.log(rem);
    num = Math.floor(num / 10);
}