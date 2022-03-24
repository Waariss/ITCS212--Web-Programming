const path = require("path");
const express = require("express");
const app = express();
const router = express.Router();
app.use("/", router)
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.get("/",function(req,res){
console.log("Accessed Contact Us");
    res.sendFile(path.join(__dirname+'/contact_us.html'));
});
router.post("/submit-form",function(req,res){
    console.log("Form submitted by " + req.body.name);
    res.send('Greeting ' + '<mark style="background-color: LightSkyBlue;">'+ 
    req.body.name + '</mark>'+
    ' The following message has been received: ' + '<mark style="background-color: Orange;">'+ 
    req.body.messages + '</mark>' + '.' +
    ' We will contact you via ' + '<mark style="background-color: MediumSpringGreen;">'+ 
    req.body.email+ '</mark>' + ' later');
})
app.listen(3030, function (){
    console.log("Server listening at Port 3030");
});