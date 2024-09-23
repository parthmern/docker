const express = require("express");

const app = express();

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;

app.get("/", (req, res)=>{
    console.log("PING: / route hitted");
    return res.json({message: "hi"});
})

app.get("/home", (req, res)=>{
    console.log("PING: /HOME hitted");
    return res.json({message: "home open"});
})

app.get("/puppy", (req, res)=>{
    console.log("PING: /HOME hitted");
    return res.json({message: "home open"});
})

// chanfes

app.listen(PORT, ()=>{
    console.log(`server started running on ${PORT}`);
})