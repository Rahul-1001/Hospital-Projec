const {mongooseConnect}=require('../config/db')
const bcrypt=require("bcrypt");
const userModel=require('../model/User.model')

const handleSignup= async(req,res)=>{

    const body=req.body;
    const plainText=body.password;
    const saltRounds=10;
    bcrypt.genSalt (saltRounds, async function (err, salt) {
        bcrypt.hash(plainText, salt,async function(err, hash) {
            // Store hash in your password DB
            const result= await userModel.create({
                firstName:body.firstName,
                lastName:body.lastName,
                email:body.email,
                password:hash,
                contactNo:body.contactNo
            })
            console.log(result);
        });
    });

   
    res.json({
       success:true 
    })
    
}
module.exports=handleSignup; 
