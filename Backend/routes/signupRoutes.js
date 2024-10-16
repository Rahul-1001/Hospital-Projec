const express=require("express")

const router=express.Router();


const handleSignup=require('../controller/handleSignup')

router.post("/signup",handleSignup);

module.exports =router;