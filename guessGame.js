// Project - Guess Game
//       Write a program that generates a random number and asks the user to guess what the number is.
//       If the user's guess is higher than the random number, the program should display "Too high, try again."
//       If the user's guess is lower than the random number, the program should display "Too low, try again."
//       The program should use a loop that repeats until the user correctly guesses the random number.


let a = Math.floor(Math.random() * 100);
// console.log(a);
let guess;
do {
    
  guess = +prompt('Guess the number')
//   console.log(guess);
  
  if (a < guess) {
    console.log('Too High, Try again!');
    
  } else if (a > guess) {
    console.log('Too Low, Try again!');
    
  } else {
    console.log('Congratulations! You guess right');
    
  }
} while (a != guess);

