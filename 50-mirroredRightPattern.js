// Mirrored Right Triangle
// 	        *
// 	      * *
// 	    * * *
// 	  * * * *
// 	* * * * *

let n = 5;
let line;
for (let i = 1; i <= n; i++) {
  line = "";
  for (let j = 1; j <= n - i; j++) {
    line +="  ";
  }
    for (let k = 1; k <= i ; k++) {
      line +=" *"     
    }
  
  console.log(line);
}
