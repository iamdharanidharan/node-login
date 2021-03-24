const express = require("express");
const app = express();

const port = process.env.PORT;

app.get('/',(req, res)=>{
    res.send("Hi there..");
})

app.listen(port,(err)=>{
    console.log("App started at ",port);
})