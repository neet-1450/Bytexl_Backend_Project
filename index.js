const express=require("express")

const dotenv=require("dotenv").config();

const app=require("./src/users")


const cors=require("cors")
const mongoose=require("mongoose");

// const bodyParser=require("body-parser")
const port=1002
app.use(cors());

// connect to database
// const DATABASE_URL="mongodb+srv://parasharneetesh75:Neetesh123@cluster0.gogpguc.mongodb.net/?retryWrites=true&w=majority"
const DATABASE_URL = "mongodb+srv://testforcode:4O1FvTMDv6xbc1DU@cluster0.uxepwdo.mongodb.net/youtube?retryWrites=true&w=majority";
// const DATABASE_URL="mongodb://127.0.0.1:27017/";
// const DATABASE_URL="mongodb://localhost:27017";

mongoose.connect(DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true})
const db=mongoose.connection
db.on('error',(err)=>console.log(err))

db.once('open',()=>console.log("connected to database"))


app.listen(port,()=>console.log(`app listening on port ${port}!`))



