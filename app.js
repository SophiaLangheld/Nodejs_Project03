const calculator=require("./calculator.js");
console.log(calculator);

let addResult = calculator.add(1, 2);
console.log(`1 + 2 = ${addResult}`);

let multiplicationResult = calculator.multiplication(1, 2);
console.log(`1 * 2 = ${multiplicationResult}`);

let divisionResult = calculator.division(4, 2);
console.log(`4 / 2 = ${divisionResult}`);