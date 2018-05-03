var express = require('express');
var router = express.Router({mergeParams: true});

var ChatDto = require('../dto/ChatDto');
var ResultDto = require('../dto/ResultDto');

// 채팅 입력
router.post('/', function(req, res, next) {
  req.body.projectId = req.params.projectId;
  let chat = new ChatDto(req.body);
  let result = new ResultDto();

  // todo

  res.json(result);
});

// 채팅 조회
router.get('/', function(req, res, next) {
  let projectId = req.params.projectId;
  let result = new ResultDto();

  // todo

  res.json(result);
});

module.exports = router;
