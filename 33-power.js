// Write a program to take two inputs a, b & find the value of a  raised to the power of b. 
// 	Ex - a = 2, b = 5
// 	OP - 2^5 = 32


let a = +prompt('Enter first number')
let b = +prompt('Enter second number')

// let pow = Math.pow(a,b) 
// we also use this
let pow = a ** b;
console.log(`${a} to the power ${b} is = `+pow);
