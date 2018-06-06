var diaryDao = require('../dao/diaryDao');


exports.create = async function (diary, result) {
  try {
    let row = await diaryDao.create(diary);
    diary.diaryId = row.insertId
    result.success = 1;
    result.message = "ok";
    result.data = diary;
  } catch (err) {
    result.success = 0;
    result.message = err;
  }
}


exports.delete = async function (diaryId, result) {
  try {
    await diaryDao.delete(diaryId);
    result.success = 1;
    result.message = "ok";
    result.data = null;
  } catch (err) {
    result.success = 0;
    result.message = err;
  }
}


exports.update = async function (diary, result) {
  try {
    await diaryDao.update(diary);
    result.success = 1;
    result.message = "ok";
    result.data = diary;
  } catch (err) {
    result.success = 0;
    result.message = err;
  }
}


exports.getAll = async function (projectId, result) {
  try {
    let rows = await diaryDao.getAll(projectId);
    result.success = 1;
    result.message = "ok";
    result.data = rows;
  } catch (err) {
    result.success = 0;
    result.message = err;
  }
}