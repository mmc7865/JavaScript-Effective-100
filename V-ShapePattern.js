// V - Min Height = 3
// 		*       * 
// 		 *     *  
// 		  *   *   
// 		   * *    
// 		    * 


let n = 5;
let line;
for (let i = 1; i <= n ; i++) {
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