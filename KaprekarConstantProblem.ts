function kaprekarRoutine(inputNumber: number): number {
    const KAPREKAR_CONSTANT = 6174;
    let iterations = 0;

    while (inputNumber !== KAPREKAR_CONSTANT) {
        let stringNumber=inputNumber.toString();
        stringNumber = AddLeadingZeroes(stringNumber);

        const NumberInDecendingOrder = parseInt([...stringNumber].sort((a, b) => b - a).join(''));
        const NumberInAscendingOrder = parseInt([...stringNumber].sort().join(''));
        inputNumber = NumberInDecendingOrder - NumberInAscendingOrder;
        iterations+=1;
        console.log(`${iterations}: ${NumberInDecendingOrder} - ${NumberInAscendingOrder} = ${inputNumber}`);
    }

    return iterations;
}

function AddLeadingZeroes(stringNumber:string):string {
    const zerosToAdd = Math.max(0, 4 - stringNumber.length);
    for (let i = 0; i < zerosToAdd; i++) {
        stringNumber += '0';
    }
    return stringNumber;
}

function isValid(inputNumber:number):boolean{
    let stringNumber = inputNumber.toString();
    if (isNaN(inputNumber) || stringNumber.match(/[a-zA-Z]/) || inputNumber < 1000 || inputNumber > 9999) {
        return false
    } else {
        return true
    }
}

const inputNumber = 3524;
if (isValid(inputNumber)){
    const totalIterations = kaprekarRoutine(inputNumber);
    console.log(`Kaprekar's Routine reached 6174 in ${totalIterations} iterations.`);
}else{
    console.log('Invalid Input');
}



//test Cases
// kaprekarRoutine(3524)---->3;
// AddLeadingZeroes('123')---->'0123';
// isValid(3524)---->true;
// isValid(12345)---->false;
// isValid('invalid')---->false;
// isValid(999)---->false;
// isValid(-1000)---->false;