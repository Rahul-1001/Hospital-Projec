const express=require("express")
const app=express();

app.get("/",(req,res)=>{
    res.json({
        name:"rahul",
    })
})
const port=2000;
app.listen( port,()=>{
    console.log("server is running on port ", port)
})
