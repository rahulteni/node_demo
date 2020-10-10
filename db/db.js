var mysql = require("mysql");
const constant = require("../utils/constant");
const fs = require('fs');

// config for your database
var config = {
  user: constant.DB_USER,
  password: constant.DB_PASSWORD,
  server: constant.DB_SERVER,
  options: { enableArithAbort: true },
  database: constant.DB_DATABASE,
};

//Login User
async function getLogin(model, res) {
  var connection;
  var responseJson={};
  try {
    if(model.data.Email=="test@test.com" && model.data.password=="password123"){
    responseJson={success:"true",response:"Login successfully"};
    }
    else{
    responseJson={success:"false",response:"Invalid credientials"};
    }
    res.json(responseJson);

    // new sql.Request().query(query, async (err, result) => {
//   if (result) {
//     res.json({
//       msg: "Token created",
//       operation: "success",
//       success: "true",
//     });
//   } else {
//     res.json({
//       msg: "Token creation failed",
//       operation: "failed",
//       success: "false",
//     });
//   }
// });
} catch (err) {
  console.log(err);
}
}

//Register User
async function RegistrationUser(model, res) {
  var connection;
  var responseJson={};
  try {
    responseJson={success:"true",response:"User registered successfully"};
    res.json(responseJson);
// new sql.Request().query(query, async (err, result) => {
//   if (result) {
//     res.json({
//       msg: "Token created",
//       operation: "success",
//       success: "true",
//     });
//   } else {
//     res.json({
//       msg: "Token creation failed",
//       operation: "failed",
//       success: "false",
//     });
//   }
// });
} catch (err) {
  console.log(err);
}
}

module.exports = {
  getLogin,
  RegistrationUser
};
