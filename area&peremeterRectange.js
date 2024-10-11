// Accept the length and width of a rectangle. Calculate & print the area and perimiter.

let length = +prompt("Enter the value of length:");
let width = +prompt("Enter the value of width:");

let area = length * width;
let peri = 2*(length + width);

console.log("Area of Rectangle is: "+area);
console.log("Perimeter of Rectangle is: "+peri);
