const addVal = (a , b) =>{
    return +a + +b;
};


const [ , , num1 , num2] = process.argv

console.log((addVal(process.argv[2] , process.argv[3])));

