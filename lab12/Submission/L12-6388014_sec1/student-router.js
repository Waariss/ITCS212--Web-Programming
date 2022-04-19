const express = require('express');
const student = express.Router()

const studentJSON = require('../models/student-model').studentJSON;
student.get('/', function(req, res){
    console.log("Retrieve the studente JSON");
    res.render('student',{'student': studentJSON });
})

module.exports = student;