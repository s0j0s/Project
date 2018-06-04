var chatDao = require('../dao/chatDao');


exports.creatChat = async function (chat, result) {
  try {
    let row = await chatDao.create(chat);
    result.success = 1;
    result.message = "ok";
    result.data = chat;
  } catch (err) {
    result.success = 0;
    result.message = err;
  }
}


exports.getAllChat = async function (projectId, result) {
  try {
    let rows = await chatDao.getAll(projectId);
    result.success = 1;
    result.message = "ok";
    result.data = rows;
  } catch (err) {
    result.success = 0;
    result.message = err;
  }
}