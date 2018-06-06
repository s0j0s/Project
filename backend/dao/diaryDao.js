var mysql = require('promise-mysql');
var dbConfig = require('../config/database');

var pool = mysql.createPool(dbConfig);


exports.create = async function (diary) {
  let sql = "INSERT INTO Diary (projectId, title, start, end, importance) VALUES (?, ?, ?, ?, ?)";
  try {
    let row = await pool.query(sql, [diary.projectId, diary.title, diary.start, diary.end, diary.importance]);
    if (row.affectedRows == 0) throw "affectedRows Zero";
    return row;
  } catch (err) {
    throw err;
  }
}


exports.delete = async function (diaryId) {
  let sql = "DELETE FROM Diary WHERE diaryId = ?";
  try {
    let row = await pool.query(sql, [diaryId]);
    if (row.affectedRows == 0) throw "affectedRows Zero";
    return row;
  } catch (err) {
    throw err;
  }
}


exports.update = async function (diary) {
  let sql = "UPDATE Diary SET ? WHERE diaryId = ?";
  try {
    let row = await pool.query(sql, [diary, diary.diaryId]);
    if (row.affectedRows == 0) throw "affectedRows Zero";
    return row;
  } catch (err) {
    throw err;
  }
}


exports.getAll = async function (projectId) {
  let sql = "SELECT * FROM Diary WHERE projectId = ?";
  try {
    let rows = await pool.query(sql, [projectId]);
    return rows;
  } catch (err) {
    throw err;
  }
}
