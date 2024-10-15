// Accept an english alphabet from user and check if it is a consonent or a vowel using Switch;

let alphabet = prompt('Enter your alphabet')
switch (alphabet) {
    case 'a':
        console.log(`${alphabet} is a Vowel`);
        break;
    case 'e':
        console.log(`${alphabet} is a Vowel`);
        break;
    case 'i':
        console.log(`${alphabet} is a Vowel`);
        break;
    case 'o':
        console.log(`${alphabet} is a Vowel`);
        break;
    case 'u':
        console.log(`${alphabet} is a Vowel`);
        break;

    default:
        console.log(`${alphabet} is a consonent`);
        break;
}