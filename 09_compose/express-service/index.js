const express = require("express");
const app = express();

const PORT = 4000;

app.get("/", (req, res)=>{
    console.log("PING: / route hitted - express servie");
    return res.json({message: "hi"});
})

app.get("/cutei", (req, res)=>{
    
    return res.json({message: "hi"});
})

app.listen(PORT, ()=>{
    console.log(`server started running - express servie on ${PORT}`);
})