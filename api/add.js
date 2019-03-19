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

  let addSql = 'INSERT INTO student(id,name,age,sex,mobile) VALUES(0,?,?,?,?)';
  let query = req.query;
  let addSqlParams = [query.name || '未知', query.age || '0', query.sex || 1, query.mobile || '00000000000'];
  //增
  connection.query(addSql,addSqlParams,function (err, result) {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
    }
    res.json({
      code: 200,
      message: '增加成功！',
    });
  });
  connection.end();
};