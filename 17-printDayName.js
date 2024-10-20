// - Accept a day number between 1-7 and print the corresponding dayname with if else.

let num = prompt("Enter your number between 1 to 7")
if (num == 1) {
    console.log("It's Monday" );
    
} else if (num == 2) {
    console.log("It's Tuesday" );
    
} else if (num == 3) {
    console.log("It's Wednesday" );
    
} else if (num == 4) {
    console.log("It's Thursday" );
    
} else if (num == 5) {
    console.log("It's Friday" );
    
}  else if (num == 6) {
    console.log("It's Saturday" );
    
}else if (num == 7) {
    console.log("It's Sunday" );
    
}else{
    console.log("You entered invalid input please check and put 1 to 7 only.");
    
}