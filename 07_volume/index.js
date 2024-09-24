const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res)=>{
    console.log("PING: / route hitted");
    return res.json({message: "hi"});
})

app.get("/cutei", (req, res)=>{
    
    return res.json({message: "hi"});
})

app.listen(PORT, ()=>{
    console.log(`server started running on ${PORT}`);
})