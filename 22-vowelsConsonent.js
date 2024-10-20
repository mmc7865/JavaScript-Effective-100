// Accept an english alphabet from user and check if it is a consonent or a vowel;

let letter = prompt('Enter alphabet from A to Z ')
if (letter == 'a' || letter == 'A' || letter == 'e' || letter == 'E' || letter == 'i' || letter == 'I' || letter == 'o' || letter == 'O' || letter == 'u' ||letter == 'U') {
    console.log(`${letter} is vowel `);
    
} else {
    console.log(`${letter} is consonent `);
    
}