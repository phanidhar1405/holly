const fs = require('fs');


const quote = 'Live more , worry less 😒😊';


for(var c = 0 ; c < 10 ; c++){
    fs.writeFile(`text-${c}.html` , quote , (err) => {
        console.log('completed Writing 🤝🤝');
    })
}

