/* Express with Routing */
const path = require('path');
const express = require('express');
const app = express();
app.get('/',function(req,res){
    console.log("Req at: /");
    res.send("Hello World! in plain text");
});
app.get('/th',function(req,res){
    console.log("Req at: /th");
    res.sendFile(path.join(__dirname+'/greeting_th.html'));
});
app.get('/cn',function(req,res){
    console.log("Req at: /cn");
    res.sendFile(path.join(__dirname+'/greeting_cn.html'));
});
app.get('/IWantToSleep',function(req,res){
    console.log("Req at: /IWantToSleep");
    res.status(404).send("Where are you going?");
});
app.listen(3030);
console.log('Running at Port 3030');
