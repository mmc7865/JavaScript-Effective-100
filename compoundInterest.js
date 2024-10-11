// Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)


let p = +prompt("Enter your principle ammount");
let r = +prompt("Enter rate of interest");
let t = +prompt("Enter time period");
let n = +prompt("Enter how many times interest applied");

r = r/100;
let A = Math.pow((1 +r/n),n*t)*p;

console.log(A);
