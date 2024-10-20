// Inverted Right Triangle
// 	* * * * *
// 	* * * *
// 	* * *
// 	* *
// 	*


let n = 5
let line;
for (let i = 5; i >= 0; i--) {
    line = '';
    for(let j = 1; j <= i; j++){

        line +="* ";
    }  
    console.log(line);
}
