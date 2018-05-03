var express = require('express');
var router = express.Router({mergeParams: true});

var ProjectMemberDto = require('../dto/ProjectMemberDto');
var ResultDto = require('../dto/ResultDto');

// 프로젝트 멤버 추가
router.post('/', function(req, res, next) {
  req.body.projectId = req.params.projectId;
  let projectMember = new ProjectMemberDto(req.body);
  let result = new ResultDto();

  // todo

  res.json(result);
});

// 프로젝트 멤버 조회
router.get('/', function(req, res, next) {
  let projectId = req.params.projectId;
  let result = new ResultDto();

  // todo

  res.json(result);
});

// 프로젝트 멤버 삭제
router.delete('/:userId', function(req, res, next) {
  let projectId = req.params.projectId;
  let userId = req.params.userId;
  let result = new ResultDto();

  // todo

  res.json(result);
});

module.exports = router;
