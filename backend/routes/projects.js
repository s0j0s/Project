var express = require('express');
var router = express.Router();

var ProjectDto = require('../dto/ProjectDto');
var ResultDto = require('../dto/ResultDto');

// 프로젝트 추가
router.post('/', function(req, res, next) {
  let project = new ProjectDto(req.body);
  let result = new ResultDto();

  if (!project.projectId || !project.projectName || !project.projectDate) {
    result.success = 0;
    result.message = "Not full body";
  } else {
    // todo - project add
  }

  res.json(result);
});

// 프로젝트 조회
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

// 프로젝트 수정
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

// 프로젝트 삭제
router.delete('/:projectId', function(req, res, next) {
  let projectId = req.params.projectId;
  let result = new ResultDto();

  if (!projectId) {
    result.success = 0;
    result.message = "Not full body";
  } else {
    // todo - project remove
  }

  res.json(result);
});

module.exports = router;
