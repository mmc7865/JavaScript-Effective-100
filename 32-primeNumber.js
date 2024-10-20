// Check if the number is Prime or not.

let num = +prompt('Enter your number')
let isTrue = true;
if (num == 1) {
    console.log(`${num} is neither prime nor composite`);
    
} else {
for (let i = 2; i < num; i++) {
    
    if (num % i == 0) {
        isTrue = false;
        break;
    } 
}

if (isTrue) {
    console.log(`${num} is a prime number`);
} else {
    console.log(`${num} is not a prime number`);
}
}