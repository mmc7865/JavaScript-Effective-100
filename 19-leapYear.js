// Accept a year and check if it a leap year or not 

let year = +prompt("Enter Year")
if ((year % 400 == 0) || (year % 100 != 0) && (year % 4 == 0)) {
    console.log(`${year}, is a leap year`);
} else {
    console.log(`${year}, is not a leap year`);
    
}