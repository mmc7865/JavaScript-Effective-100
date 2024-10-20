// Extend the previous program and handle the wrong inputs.
//       Print Good Morning sir for input m or M & Good morning Mam for input F or f 
//       else print Wrong Input

let gender = prompt("Enter the Gender")
if (gender == "male" || gender == "Male") {
    console.log("Good Morning Sir");
} else if(gender == "female" || gender == "Female"){
    console.log("Good Morning Mam");
}else{
    console.log("Wrong Input");
    
}