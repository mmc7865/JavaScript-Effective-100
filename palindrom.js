// Accept a number and check if it is a pallindromic number (If number and its reverse are equal)
//        Ex - 12321 - Rerverse - 12321


let num = +prompt('Enter your number')
let temp = num;
let reverse = 0;
while(temp != 0){
    let rem = temp % 10;
        reverse = reverse * 10 + rem;
        temp = Math.floor(temp / 10);
}
if(reverse == num){
    console.log("Your number is palindrom");
    
}else{
    console.log("Your number is not palindrom");

}