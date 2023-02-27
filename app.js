const express = require("express");

const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static('public'));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/signup.html");
});

app.post("/",(req,res)=>{
    let emailAddress = req.body.email;
    let familyName = req.body.familyName;
    let name = req.body.name;
    console.log(emailAddress + familyName + name);
});

app.listen(3000,()=>{
    console.log("服务器已在端口3000启动");
});