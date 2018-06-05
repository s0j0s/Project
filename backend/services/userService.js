var userDao = require('../dao/userDao');

exports.login = async function (user, result) {
  try {
    let row = await userDao.login(user);
    result.success = 1;
    result.message = "ok";
    result.data = row;
  } catch (err) {
    result.success = 0;
    result.message = err;
  }
}


exports.createUser = async function (user, result) {
  try {
    let row = await userDao.create(user);
    result.success = 1;
    result.message = "ok";
    result.data = user;
  } catch (err) {
    result.success = 0;
    result.message = err;
  }
}


exports.getUser = async function (user, result) {
  try {
    let row = await userDao.get(user);
    result.success = 1;
    result.message = "ok";
    result.data = row;
  } catch (err) {
    result.success = 0;
    result.message = err;
  }
}


exports.updateUser = async function (user, result) {
  try {
    await userDao.update(user);
    result.success = 1;
    result.message = "ok";
    result.data = user;
  } catch (err) {
    result.success = 0;
    result.message = err;
  }
}


exports.deleteUser = async function (user, result) {
  try {
    await userDao.delete(user);
    result.success = 1;
    result.message = "ok";
    result.data = null;
  } catch (err) {
    result.success = 0;
    result.message = err;
  }
}


exports.getLikeUsers = async function (userId, projectId, result) {
  try {
    let rows = await userDao.getLikes(userId, projectId);
    result.success = 1;
    result.message = "ok";
    result.data = rows;
  } catch (err) {
    result.success = 0;
    result.message = err;
  }
}