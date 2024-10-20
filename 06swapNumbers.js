// Accept two numbers from user and swap their values
// Part 2 - Swap without using third variable
 
let a = +prompt("Enter the first Value: ")
let b = +prompt("Enter the second Value: ")
console.log("Before swaping\nvalue of 'a' is: " +a, "\nvalue of 'b' is: " +b);

// let c = a;
// a = b;
// b = c;
// console.log("After swaping\nvalue of 'a' is: " +a, "\nvalue of 'b' is: " +b);


// part 2 without using third variable

b = a + b;
a = b - a;
b = b - a;
console.log("After swaping\nvalue of 'a' is: " +a, "\nvalue of 'b' is: " +b);