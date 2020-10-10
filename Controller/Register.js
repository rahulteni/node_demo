var express = require('express');
var router = express.Router();
const DataModel = require('../Models/Model');
var db = require('../db/db');

router.post('/register', function(req, res, next) {
    const model = new DataModel.Model();
    var FirstName = req.body.FirstName;
    var LastName = req.body.LastName;
    var Password = req.body.Password
    var Email = req.body.Email;
    var Mobile = req.body.Mobile;
    var Gender = req.body.Gender;
  
    model.setFirstName(FirstName);
    model.setEmail(Email);
    model.setLastName(LastName);
    model.setPassword(Password);
    model.setMobile(Mobile);
    model.setGender(Gender);
  
    db.RegistrationUser(model, res);
  
  });
  
module.exports = router;