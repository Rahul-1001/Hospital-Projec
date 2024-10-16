const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    contactNo:{
           type:String,
           required:true
    }
   

},
{
    timestamps:true
})
const userModel=mongoose.model("user" ,userSchema );
module.exports=userModel;