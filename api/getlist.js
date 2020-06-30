'use strict';
const mysql = require('mysql');

exports.index = (req, res, next) => {
  let connection = mysql.createConnection({
    host     : '47.92.141.244',
    user     : 'root',
    password : '012399lee',
    database : 'lijing'
  });
  
  connection.connect();

  let  sql = 'SELECT * FROM users';
  //查
  connection.query(sql,function (err, result) {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
    }
    res.json({
      code: 200,
      message: 'success',
      data: {
        list: result
      }
    });
  });
  connection.end();
};