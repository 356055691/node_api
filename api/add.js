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

  let addSql = 'INSERT INTO users(id,name,age,sex,mobile) VALUES(0,?,?,?,?)';
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