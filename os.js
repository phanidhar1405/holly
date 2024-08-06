const os = require("os")

const psycho = (a) =>{
    return a.toFixed(3) + " GB ";
};

// const percentVal = (a , b) =>{
//     return  `${((1-free / total) * 100).toFixed(2)} %`;
// }


// const convertToGB = (num)  => num / 1024 ** 3;
// const roundoff = (num) => num.toFixed(2);
// const formatting = (num) => `${num} GB`



console.log(psycho(os.freemem() /1024 / 1024 / 1024));
console.log(percentVal((os.freemem() /1024 / 1024 / 1024) , (os.totalmem() /1024 / 1024 / 1024)));
// console.log(os.freemem() /1024 / 1024 / 1024);
// console.log(os.totalmem() /1024 / 1024 / 1024);


console.log(os.version());
console.log(os.cpus())


const fs = require('fs');

fs.writeFile("names.txt" , data , (err) =>{
    console.log('completed writing !!');
})


//fs - file System

