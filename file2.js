/*
 In this file,
 I'm trying to solve the problem that i have mentioned in the file1
 For the expensive operation, I'm spin up the separate thread. so this thread will
 execute sepately and will not block our main thread. so our main thread will able to serve the response to the next request
*/


const express = require("express");
const app = express();
const { fork } = require("child_process");
const PORT = process.env.PORT || 8000;


app.get('/',(req,res)=>{
    res.send("default path is working");
})

app.get("/:number",(req,res)=>{
    const childProcess = fork("./childprocess.js");
    childProcess.send(req.params.number);
    childProcess.on("message",msg=>{
        res.send(msg);
    })
})


app.listen(PORT,()=>{
    console.log("server is listening on port number",PORT)
})
