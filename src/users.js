const express=require("express");
const app=express()
const path=require("path")
const subscribermodel=require("./model/schema")
const bodyParser = require("body-parser");




app.use(bodyParser.urlencoded({ extended:true}))
app.use(bodyParser.json());



app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../index.html"))
});




app.get("/subscribers", async (req, res) => {
    try {
        let subscribers = await subscribermodel.find({});
        console.log(subscribers);
        res.send(JSON.stringify({ subscribers}));
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal server error");
        next(err);
    }
});



app.get("/subscribers/:id",async(req,res)=>{

    try{
        const id=req.params.id;
        if(!id){
            res.statusMessage(400).json({message:"no id provided"});
            return;
        }
        const Subscriberss=await subscribermodel.findById(id);
        if(!subscribermodel){
            res.status(400).json({message:"subscriber not found"})
            return;
        }
        res.send(Subscriberss);
    }
    catch(error){
        res.status(400).json({message: error.message});
        // next(err);
    }
});





app.get("/subscriberss/names",async (req,res)=>{
    
    try{
      


        let Subscribers =  await subscribermodel.find(
            {},
            {name:1,subscribedChannel:1,_id:0});

        res.status(200).json(Subscribers);
        // res.send(JSON.stringify({ Subscribersss}));
        // res.send(subscribers)
    }
    catch(err){
        res.status(400);
        next(err);
       
    }
});



// Dummy API route
app.get('/dummyapi', (req, res) => {
    res.send("Dummy API is working");
});








module.exports=app;