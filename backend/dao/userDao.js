var mysql = require('promise-mysql');
var dbConfig = require('../config/database');

var pool = mysql.createPool(dbConfig);

exports.login = async function (user) {
  let sql = "SELECT * FROM User WHERE userId = ? AND password = ?";
  try {
    let rows = await pool.query(sql, [user.userId, user.password]);
    if (!rows[0]) throw "none account";
    return rows[0];
  } catch (err) {
    throw err;
  }
}


exports.create = async function (user) {
  let sql = "INSERT INTO User VALUES (?, ?, ?, ?, ?)";
  try {
    let row = await pool.query(sql, [user.userId, user.password, user.name, user.email, user.themeId]);
    if (row.affectedRows == 0) throw "affectedRows Zero";
    return row;
  } catch (err) {
    throw err;
  }
}


exports.get = async function (user) {
  let sql = "SELECT * FROM User WHERE userId = ?";
  try {
    let rows = await pool.query(sql, [user.userId]);
    if (!rows[0]) throw "none account";
    return rows[0];
  } catch (err) {
    throw err;
  }
}


exports.update = async function (user) {
  let sql = "UPDATE User SET ? WHERE userId = ?";
  try {
    let row = await pool.query(sql, [user, user.userId]);
    if (row.affectedRows == 0) throw "affectedRows Zero";
    return row;
  } catch (err) {
    throw err;
  }
}


exports.delete = async function (user) {
  let sql = "DELETE FROM User WHERE userId = ?";
  try {
    let row = await pool.query(sql, [user.userId]);
    if (row.affectedRows == 0) throw "affectedRows Zero";
    return row;
  } catch (err) {
    throw err;
  }
}
