let express = require("express");
let app = express();
let mongoose =require("mongoose");
require("dotenv").config();
console.log(process.env.PORT);
app.get("/",(req,res)=>{
    try{
        return res.status(200).json("API working perfectly");
    }catch(err){
        console.log(err);
        return res.status(err);
    }
})

mongoose.connect(process.env.URL).then(()=>{
    console.log("connected to mongoose");
    app.listen(process.env.PORT,()=>{
        console.log("server is started")
    })
})
.catch((err)=>{
    console.log("there is some error with mongoose connection",err)
})