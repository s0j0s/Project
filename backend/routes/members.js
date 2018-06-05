var express = require('express');
var router = express.Router({mergeParams: true});

var ProjectMemberService = require('../services/projectMemberService');

var ProjectMemberDto = require('../dto/ProjectMemberDto');
var ResultDto = require('../dto/ResultDto');

// 프로젝트 멤버 추가
router.post('/', async function(req, res, next) {
  req.body.projectId = req.params.projectId;
  let projectMember = new ProjectMemberDto(req.body);
  let result = new ResultDto();

  if (!projectMember.userId || !projectMember.projectId || projectMember.isAdmin == undefined) {
    result.success = 0;
    result.message = "Not full body";
  } else {
    await ProjectMemberService.create(projectMember, result)
  }

  res.json(result);
});

// 프로젝트 멤버 조회
router.get('/', async function(req, res, next) {
  let projectId = req.params.projectId;
  let result = new ResultDto();

  if (!projectId) {
    result.success = 0;
    result.message = "Not full body";
  } else {
    await ProjectMemberService.getAll(projectId, result)
  }

  res.json(result);
});

// 프로젝트 멤버 삭제
router.delete('/:userId', async function(req, res, next) {
  let projectId = req.params.projectId;
  let userId = req.params.userId;
  let result = new ResultDto();

  if (!projectId || !userId) {
    result.success = 0;
    result.message = "Not full body";
  } else {
    await ProjectMemberService.delete(projectId, userId, result)
  }

  res.json(result);
});

module.exports = router;
