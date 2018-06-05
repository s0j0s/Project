var mysql = require('promise-mysql');
var dbConfig = require('../config/database');

var pool = mysql.createPool(dbConfig);


exports.create = async function (project) {
  let sql = "INSERT INTO Project (projectName, projectDate) VALUES (?, ?)";
  try {
    let row = await pool.query(sql, [project.projectName, project.projectDate]);
    if (row.affectedRows == 0) throw "affectedRows Zero";
    return row;
  } catch (err) {
    throw err;
  }
}


exports.delete = async function (projectId) {
  let sql = "DELETE FROM Project WHERE projectId = ?";
  try {
    let row = await pool.query(sql, [projectId]);
    if (row.affectedRows == 0) throw "affectedRows Zero";
    return row;
  } catch (err) {
    throw err;
  }
}


exports.getAll = async function (userId) {
  let sql = "SELECT a.* FROM Project a, Project_Member b WHERE a.projectId = b.projectId and userId = ?";
  try {
    let rows = await pool.query(sql, [userId]);
    return rows;
  } catch (err) {
    throw err;
  }
}
