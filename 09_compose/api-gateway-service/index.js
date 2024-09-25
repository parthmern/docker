const express = require("express");

const app = express();

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;

app.get("/", (req, res)=>{
    console.log("PING: / route hitted - API GATEWAY SERVICE");
    return res.json({message: "hi"});
})

app.get("/home", (req, res)=>{
    console.log("PING: /HOME hitted");
    return res.json({message: "home open- API GATEWAY SERVICE"});
})


app.listen(PORT, ()=>{
    console.log(`server started running- API GATEWAY SERVICE on ${PORT}`);
})