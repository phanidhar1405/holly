const fs = require("fs");

// var data = "good morning";
var data = "Good Morning";

fs.appendFile("./fun.html" , data , (err) => {
        console.log("the data");
})


fs.readFile("./fun.html" , 'utf-8', (err , data) =>{
    fs.writeFile("./fun.html" , "good morning " + "\n" + data , (err) => {
            console.log("data")
    })
})