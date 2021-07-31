/*
 This file contain two path one is default / and second one is /:number

 default path is normal function that return normal test to the website

 and /:number is the path that take number as the parameter path and
 run the loop upto the number
 if you pass small number then our program will work fine
 but if you pass large number then this will block our main thread
 and our server will not be able to server other request

*/
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000

app.get("/",(req,res)=>{
    res.send("default path working fine")
})


app.get("/:number",(req,res)=>{
    // pass the maximum number in the parameter so that we can make this expensive task
    for(var i=0;i<req.params.number;i++){
        // do some task that take a lot of time
    }
    res.send("Path with id working")
})


app.listen(PORT,()=>{
    console.log("server is listening on port number ",PORT)
})