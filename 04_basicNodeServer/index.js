const express = require("express");

const app = express();

app.get("/", (req,res)=>{
    console.log("PING: hitted home route");
    res.json({message: "ok"})
})

const PORT = 3000 ;
app.listen(PORT, ()=>{
    console.log(`starting server on ${PORT}`);
})