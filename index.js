const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const UsersModel=require("./models/Users")


const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://user:user123@cluster0.mbly2pm.mongodb.net/users_app?retryWrites=true&w=majority");

app.get("/",(req,res)=>{
    UsersModel.find().then(users=>res.json(users)).catch(err=>res.json(err))
});
app.post("/create",(req,res)=>{
    UsersModel.create(req.body).then(users=>res.json(users)).catch(err=>res.json(err))
});

app.put("/update/:id",(req,res)=>{
    const {id}=req.params
    const {name,email,age}=req.body
 
    UsersModel.findByIdAndUpdate({_id:id},{name,email,age}).then(users=>res.json(users)).catch(err=>res.json(err))
});

app.delete("/delete/:id",(req,res)=>{
    const {id}=req.params
    UsersModel.findByIdAndDelete({_id:id}).then(users=>res.json(users)).catch(err=>res.json(err))
});
app.listen("8000",()=>{
    console.log("i am running");
});