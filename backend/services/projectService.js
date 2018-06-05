var projectDao = require('../dao/projectDao');
var projectMemberDao = require('../dao/projectMemberDao');


exports.add = async function (project, userId, result) {
  try {
    let row = await projectDao.create(project);
    project.projectId = row.insertId
    await projectMemberDao.create({projectId: project.projectId, userId: userId, isAdmin: 1});
    result.success = 1;
    result.message = "ok";
    result.data = project;
  } catch (err) {
    result.success = 0;
    result.message = err;
  }
}


exports.delete = async function (projectId, result) {
  try {
    await projectDao.delete(projectId);
    await projectMemberDao.deleteInProject(projectId);
    result.success = 1;
    result.message = "ok";
    result.data = null;
  } catch (err) {
    result.success = 0;
    result.message = err;
  }
}


exports.getAll = async function (userId, result) {
  try {
    let rows = await projectDao.getAll(userId);
    result.success = 1;
    result.message = "ok";
    result.data = rows;
  } catch (err) {
    result.success = 0;
    result.message = err;
  }
}