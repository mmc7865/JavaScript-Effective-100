// Accept the three sides of triangle and calculate the area using herons formula


let a = +prompt("Enter first side")
let b = +prompt("Enter second side")
let c = +prompt("Enter third side")
 
let s = (a + b + c) / 2;
let area = s*(s-a)*(s-b)*(s-c);
let newArea = Math.sqrt(area)
console.log(newArea);
