var express = require('express');
var moment = require('moment');
var router = express.Router();

var projectService = require('../services/projectService');

var ProjectDto = require('../dto/ProjectDto');
var ResultDto = require('../dto/ResultDto');

// 팀 추가
router.post('/', async function(req, res, next) {
  let project = new ProjectDto(req.body);
  let userId = req.body.userId
  let result = new ResultDto();

  if (!project.projectDate) {
    project.projectDate = (moment().format()).substring(0, 19);
  }

  if (!project.projectName || !project.projectDate) {
    result.success = 0;
    result.message = "Not full body";
  } else {
    await projectService.add(project, userId, result);
  }

  res.json(result);
});

// 팀 조회
router.get('/:projectId', function(req, res, next) {
  let projectId = req.params.projectId;
  let result = new ResultDto();

  if (!projectId) {
    result.success = 0;
    result.message = "Not full body";
  } else {
    // todo - project get
  }

  res.json(result);
});

// 팀 수정
router.put('/:projectId', function(req, res, next) {
  req.body.projectId = req.params.projectId;
  let project = new ProjectDto(req.body);
  let result = new ResultDto();

  if (!project.projectId || !project.projectName || !project.projectDate) {
    result.success = 0;
    result.message = "Not full body";
  } else {
    // todo - project update
  }

  res.json(result);
});

// 팀 삭제
router.delete('/:projectId', async function(req, res, next) {
  let projectId = req.params.projectId;
  let result = new ResultDto();

  if (!projectId) {
    result.success = 0;
    result.message = "Not full body";
  } else {
    await projectService.delete(projectId, result);
  }

  res.json(result);
});

// 유저 팀 조회
router.get('/users/:userId', async function(req, res, next) {
  let userId = req.params.userId;
  let result = new ResultDto();

  if (!userId) {
    result.success = 0;
    result.message = "Not full body";
  } else {
    await projectService.getAll(userId, result);
  }

  res.json(result);
});

module.exports = router;
