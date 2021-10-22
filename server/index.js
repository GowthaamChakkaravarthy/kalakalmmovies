const express= require('express');
const mongoose= require('mongoose');

const app=express();

const port=9000;

app.use("/signup", (req,res)=>{
    console.log('welcome user');
}); 
app.listen(port, () =>{
    console.log(`Server started ${port}`);
})