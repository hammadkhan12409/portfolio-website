const express = require('express');
const app= express();
const path= require('path');
const nodemailer=require('nodemailer');


app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");


//adding static functionality for images
app.use(express.static('public'));


app.get('/',(req,res)=>{
    res.render('index')
})



app.listen(process.env.PORT || 3000,()=>{
    console.log('server is listening on port')
})