// Accept a number and print its reverse

let num = +prompt('Enter your number');
let temp = num;
let reverse = 0;
while(temp != 0){

    let rem = temp % 10;
    reverse = reverse * 10 + rem;
    temp = Math.floor(temp / 10);
}
console.log(`${num} reverse is = `+reverse);
