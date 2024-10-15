// Make a choice based calculator using do while

let choice = 5;
do {
    console.log('Choose an operation:\n1-Addition\n2-Substraction\n3-Multiplication\n4-Division\n5-Exit');
    choice = +prompt('Choose your operation')
    let num1, num2;
    if (choice >= 1 && choice < 5) {
        num1 = +prompt('Enter first number')
        num2 = +prompt('Enter second number')
        switch (choice) {
            case 1:
                console.log("Addition is = ",+num1+num2);
                break;
            case 2:
                console.log("Substraction is = ",+num1-num2);
                break;
            case 3:
                console.log("Multiplication is = ",+num1*num2);
                break;
            case 4:
                console.log("Division is = ",+num1/num2);
                break;
        }
    } else if(choice == 5) {
        console.log("Exit");
        
    }else{
        console.log("Wrong Input");
    }
    console.log(choice)
} while (choice < 5);
