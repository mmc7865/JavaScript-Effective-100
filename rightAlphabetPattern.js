// Right Triangle - Alphabet
// 	A
// 	A B
// 	A B C
// 	A B C D
// 	A B C D E


let n = 70;
for (let i = 65; i < n; i++) {
    let line = ''    
    for (let j = 65; j <= i; j++) {
    line += String.fromCharCode(j)+ '  '     
    }
    console.log(line);
    
}