const express = require("express");

const bodyparser = require("body-parser");

const app = express();

app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/signup.html");
});

app.post("/",(req,res)=>{
    res.sendFile(__dirname+"/failure.html");
});

app.listen(3000,()=>{
    console.log("服务器已在端口3000启动");
});