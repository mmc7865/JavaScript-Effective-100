// - Shop discount - Description on Graphic

let totalBill = +prompt('Enter your total bill value')
if (totalBill >= 1000) {
    console.log('Congratulations! You have 10% of discount');
    
} else if(totalBill >= 2000){
    console.log('Congratulations! You have 15% of discount');
    
}
 else if(totalBill >= 3000){
    console.log('Congratulations! You have 20% of discount');
    
}
 else if(totalBill >= 5000){
    console.log('Congratulations! You have 30% of discount');
    
}else{
    console.log(`Sorry! You don't have any discount if you add ${1000 - totalBill}rs items then you got 10% Discount:`);
    
}