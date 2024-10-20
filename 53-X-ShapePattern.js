// print X- Pattern

// *       *
//   *   *
//     *
//   *   *
// *       *


let n = 3;
let line;
for (let i = 1; i <= 2*n ; i++) {
    line = '';
    for(let j = 1; j < 2*n; j++){
       if (i == j || i + j == 2*n) {
        line +="* "
       } else {
        line +="  " 
       }
    }
 console.log(line);
     
}