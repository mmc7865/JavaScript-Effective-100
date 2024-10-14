// Print hello until user gives wrong input using do while

let num = +prompt('Enter your number')
let temp = num;
do {
    console.log("Hello-World");
    num--;
} while (num == temp);