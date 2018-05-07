var mysql = require('promise-mysql');
var dbConfig = require('../config/database');

var pool = mysql.createPool(dbConfig);

exports.create = async function (chat) {
  let sql = "INSERT INTO chat VALUES (?, ?, ?, ?)";
  try {
    let row = await pool.query(sql, [chat.projectId, chat.userId, chat.content, chat.date]);
    if (row.affectedRows == 0) throw "affectedRows Zero";
    return row;
  } catch (err) {
    throw err;
  }
}


exports.getAll = async function (projectId) {
  let sql = "SELECT * FROM Chat WHERE projectId = ?";
  try {
    let rows = await pool.query(sql, [projectId]);
    return rows;
  } catch (err) {
    throw err;
  }
}