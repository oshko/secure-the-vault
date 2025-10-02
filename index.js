let code1;
code1 = 7 + 3;
let code2 = 120 / 2 - 20;
let code3 = (15 % 4) + 36;
console.log("Checking all the codes: " + code1, code2, code3);

//message

const message = "The vault has been secured. The combination is:";

//Code A
let codeA = code1 + "-" + code2 + "-" + code3;
console.log("Checking the codeA: " + codeA);

// Code B
let codeB = `${code1}-${code2}-${code3}`;

console.log(message, codeA, codeB);
