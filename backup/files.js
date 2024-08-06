const fs = require('fs');


fs.appendFile("./fun.html" , "\n Good Morning " , (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("sucessful")
    }
})