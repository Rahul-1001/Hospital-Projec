const express=require("express");
const router = require("./routes/signupRoutes");
const app=express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

 app.use('/',router)
// app.get('/',(req,res)=>{
//     res.send("success")
// })
const port=2000;
app.listen( port,()=>{
    console.log("server is running on port ", port)
})
