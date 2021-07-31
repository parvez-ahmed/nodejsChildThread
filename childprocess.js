process.on("message",(number)=>{
    calculate(number)
})

function calculate(number){
    console.log("In calculate child process")
    for(var i=0;i<number;i++){
        // do some expensive task
    }
    process.send("Result from child process");
}