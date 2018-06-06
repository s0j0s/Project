var express = require('express');
var moment = require('moment');
var router = express.Router({mergeParams: true});

var chatService = require('../services/chatService');

var ChatDto = require('../dto/ChatDto');
var ResultDto = require('../dto/ResultDto');

// 채팅 입력
router.post('/', async function(req, res, next) {
  req.body.projectId = req.params.projectId;
  let chat = new ChatDto(req.body);
  let result = new ResultDto();

  if (!chat.date) {
    chat.date = (moment().format()).substring(0, 19);
  }

  if (!chat.userId || !chat.projectId || !chat.content || !chat.date) {
    result.success = 0;
    result.message = "Not full body";
  } else {
    await chatService.creatChat(chat, result);
  }

  res.json(result);
});

// 채팅 조회
router.get('/', async function(req, res, next) {
  let projectId = req.params.projectId;
  let result = new ResultDto();

  if (!projectId) {
    result.success = 0;
    result.message = "Not full body";
  } else {
    await chatService.getAllChat(projectId, result);
  }

  res.json(result);
});

module.exports = router;
