// Accept three numbers and print the greatest among them


let num1 = +prompt('Enter your first number')
let num2 = +prompt('Enter your second number')
let num3 = +prompt('Enter your third number')

if (num1 > num2 && num1 > num3) {
    console.log(`${num1}, is greatest`);
    
} else if(num2 > num1 && num2 > num3){
    console.log(`${num2}, is greatest`);
    
}else if(num3 > num1 && num3 > num2){
    console.log(`${num3}, is greatest`);
    
}else{
    console.log("All numbers are equal.");
    
}