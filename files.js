const fs = require('fs');


const quote = 'Stay hungry , Stay foolish 😒😊';

fs.writeFile('cool.txt' , quote , (err) => {
    console.log('completed Writing 🤝🤝');
})
