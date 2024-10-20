// Print the sum of all factors of a number, 50 -> 1 + 2 + 5 + 10 + 25 = 43


const num = prompt('Enter a positive number: ');
console.log(`The factors of ${num} is:`);
let sum = 0;
for(let i = 1; i < num; i++) {

    if(num % i == 0) {
        console.log(i);
        sum = sum + i;
    }
}
console.log('Sum of factors is = '+sum);
