var express = require('express');
var router = express.Router();
const DataModel = require('../Models/Model');
var db = require('../db/db');

/* post login */
router.post('/login', function (req, res, next) {
    const model = new DataModel.Model();
    const Email = req.body.Email;
    const Password = req.body.Password;
    model.setEmail(Email);
    model.setPassword(Password);
    db.getLogin(model, res);
});

module.exports = router;