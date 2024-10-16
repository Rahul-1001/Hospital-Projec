const mongoose=require("mongoose");


const url="mongodb://localhost:27017/Hospital"
const mongooseConnect= async(url)=>{

    await mongoose.connect(url)
    console.log(`connected to mongodb`);
    
}
mongooseConnect(url)
module.exports=mongooseConnect;