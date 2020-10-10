var express = require('express');
var bodyParser = require('body-parser');
var constant = require('./utils/constant');
var login = require('./Controller/Login');
var register = require('./Controller/Register');
var app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use('/api/user', login);
app.use('/api/user', register);

app.get('/', function (req, res) {
    res.send('Your server is running');
 })

 
var port = constant.port;

var server = app.listen(constant.port, function () {
    console.log("Example app listening at", port)
 })

module.exports = app;