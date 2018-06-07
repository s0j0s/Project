var mysql = require('promise-mysql');
var dbConfig = require('../config/database');

var pool = mysql.createPool(dbConfig);


exports.create = async function (projectMember) {
  let sql = "INSERT INTO Project_Member VALUES (?, ?, ?)";
  try {
    let row = await pool.query(sql, [projectMember.projectId, projectMember.userId, projectMember.isAdmin]);
    if (row.affectedRows == 0) throw "affectedRows Zero";
    return row;
  } catch (err) {
    throw err;
  }
}


exports.deleteInProject = async function (projectId) {
  let sql = "DELETE FROM Project_Member WHERE projectId = ?";
  try {
    let row = await pool.query(sql, [projectId]);
    if (row.affectedRows == 0) throw "affectedRows Zero";
    return row;
  } catch (err) {
    throw err;
  }
}


exports.getAll = async function (projectId) {
  let sql = "SELECT a.*, b.name FROM Project_Member a, User b WHERE a.userId = b.userId AND projectId = ?";
  try {
    let rows = await pool.query(sql, [projectId]);
    return rows;
  } catch (err) {
    throw err;
  }
}


exports.delete = async function (projectId, userId) {
  let sql = "DELETE FROM Project_Member WHERE projectId = ? and userId = ?";
  try {
    let row = await pool.query(sql, [projectId, userId]);
    if (row.affectedRows == 0) throw "affectedRows Zero";
    return row;
  } catch (err) {
    throw err;
  }
}