const fs = require("fs")

fs.writeFile("message.txt",'Hello Rohit!', (err)=>{
    if(err) throw err
    console.log("File has been saved")
})