// Accept a number and check if it is a strong number or not (Sum of factorial of each digit)
//        Ex- 145 = 1! + 4! + 5! = 145


let num = +prompt('Enter your number')
let temp = num;
let strong = 0;

while(temp != 0){
    let rem = temp % 10;
    let fact = 1;
    while (rem != 0) {
        fact *= rem;
        rem--;
    }
    strong += fact;
    temp = Math.floor(temp / 10);
}
console.log(strong);
if (num == strong) {
    console.log('Your number is Strong');
    
} else {
    console.log('Your number is not Strong');
    
}

