const mongoose=require("mongoose")
const UsersSchema=new mongoose.Schema({
   name:String,
   email:String,
   age:Number 
})

const UsersModel=mongoose.model("user",UsersSchema)
module.exports=UsersModel