const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const objectId = mongodb.ObjectID;
require("dotenv").config;

const express = require("express");
const app = express();

const port = process.env.PORT;
const dbURL = process.env.DB_URL;

app.get('/',(req, res)=>{
    res.send("Hi there..");
})
app.post('/createuser',(req,res)=>{
    try{
        let client = await mongoClient.connect(dbUrl);
        let db=client.db("MyFirst");
        console.log(req.body)
        const newUser={
          "name":req.body.name,
          "mail":req.body.mail
        }
      await db.collection("user").insertOne(newUser);
        res.status(200).json({message:"userCreated"});
        client.close();
      } catch(err)
      {
        console.log(err)
      }
})
app.listen(port,(err)=>{
    console.log("App started at ",port);
})