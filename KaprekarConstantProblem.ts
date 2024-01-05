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

function IsValid(inputNumber:number):boolean{
    let stringNumber = inputNumber.toString();
    if (isNaN(inputNumber) || stringNumber.match(/[a-zA-Z]/) || inputNumber < 1000 || inputNumber > 9999) {
        return false
    } else {
        return true
    }
}

const inputNumber = 3524;
if (IsValid(inputNumber)){
    const totalIterations = kaprekarRoutine(inputNumber);
    console.log(`Kaprekar's Routine reached 6174 in ${totalIterations} iterations.`);
}else{
    console.log('Invalid Input');
}



//test Cases
// kaprekarRoutine(3524)---->3;
// AddLeadingZeroes('123')---->'0123';
// IsValid(3524)---->true;
// IsValid(12345)---->false;
// IsValid('invalid')---->false;
// IsValid(999)---->false;
// IsValid(-1000)---->false;