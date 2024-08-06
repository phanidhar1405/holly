console.log("lhello");


console.log(process.argv)


const double = (n) =>
    n + 2;

console.log(double(10));

const[ , , num] = process.argv


console.log(double(process.argv[2]));

// console.log(globalThis.setTimeout);//present only in node