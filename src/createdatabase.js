// const mongoose=require("mongoose")
// const express=require("express")
// const backendsss=require("./model/schema")

// const data=require("./model/data")



// // connect to database
// const DATABASE_URL = "mongodb+srv://testforcode:4O1FvTMDv6xbc1DU@cluster0.uxepwdo.mongodb.net/youtube?retryWrites=true&w=majority";
// // const Database_URL="mongodb://127.0.0.1:27017/";
// // const Database_URL="mongodb://localhost:27017";
// // mongoose.connect(DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true});
// // const db=mongoose.connection

// // db.on("error",(err)=>console.log(err))
// // db.once("open",()=>console.log("database created"))


// app.listen(port,()=>{
//     console.log("server is running on the port 8010")
// })


// mongoose.connect(DATABASE_URL)
// .then(()=>console.log("mongodb succeful connected"))
// .catch(err=>console.log(err))






// // const refreshAll=async()=>{
// //     await subscribermodel.deleteMany({})

// //     await subscribermodel.insertMany(data)
// //     await mongoose.disconnect();
// // }

// // refreshAll();

// const refreshAll=async()=>{
//     await backendsss.deletemany({})
//     await backendsss.insertmany(data)
//     await mongoose.disconnect();
// }

// refreshAll();



const mongoose = require('mongoose')
const subscriberModel = require('./model/schema')
const data = require('./model/data')

// Connect to DATABASE
// const DATABASE_URL="mongodb+srv://parasharneetesh75:Neetesh123@cluster0.gogpguc.mongodb.net/?retryWrites=true&w=majority"
const DATABASE_URL = "mongodb+srv://testforcode:4O1FvTMDv6xbc1DU@cluster0.uxepwdo.mongodb.net/youtube?retryWrites=true&w=majority";
// const DATABASE_URL="mongodb://127.0.0.1:27017/"
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await subscriberModel.deleteMany({})
    // console.log(connection)
    await subscriberModel.insertMany(data)
    await mongoose.disconnect();
}
refreshAll()