const fs = require('fs');


const quote = 'Live more , worry less 😒😊';

console.log(process.argv[2]);


const dolfin = (c) =>{
    const Max_NO_FILES = 100;

    for(let i = 0 ; i < c ; i++){
        fs.writeFile(`text-${+c + i}.html` , quote , (err) => {
            console.log('completed Writing 🤝🤝');
        })
    }
}

const [ , , nooffiles] = process.argv;
dolfin(nooffiles);







