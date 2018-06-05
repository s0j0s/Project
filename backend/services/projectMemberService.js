var projectMemberDao = require('../dao/projectMemberDao');


exports.getAll = async function (projectId, result) {
  try {
    let rows = await projectMemberDao.getAll(projectId);
    result.success = 1;
    result.message = "ok";
    result.data = rows;
  } catch (err) {
    result.success = 0;
    result.message = err;
  }
}

exports.create = async function (projectMember, result) {
  try {
    let row = await projectMemberDao.create(projectMember);
    result.success = 1;
    result.message = "ok";
    result.data = projectMember;
  } catch (err) {
    result.success = 0;
    result.message = err;
  }
}

exports.delete = async function (projectId, userId, result) {
  try {
    await projectMemberDao.delete(projectId, userId);
    result.success = 1;
    result.message = "ok";
    result.data = null;
  } catch (err) {
    result.success = 0;
    result.message = err;
  }
}