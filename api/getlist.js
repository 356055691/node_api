'use strict';
const mysql = require('mysql');

exports.index = (req, res, next) => {
    let connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '123456',
      database : 'students_manage'
    });
    
    connection.connect();
 
    let  sql = 'SELECT * FROM student';
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