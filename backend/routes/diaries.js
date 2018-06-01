var express = require('express');
var router = express.Router({mergeParams: true});

var DiaryDto = require('../dto/DiaryDto');
var ResultDto = require('../dto/ResultDto');

// 일정 추가
router.post('/', function(req, res, next) {
  req.body.projectId = req.params.projectId;
  let diary = new DiaryDto(req.body);
  let result = new ResultDto();

  if (!diary.diaryId || !diary.projectId || !diary.content
        || !diary.startDate || !diary.endDate || !diary.importRating) {
    result.success = 0;
    result.message = "Not full body";
  } else {
    // todo - diary add
  }

  res.json(result);
});

// 일정 조회
router.get('/', function(req, res, next) {
  let projectId = req.params.projectId;
  let result = new ResultDto();

  if (!projectId) {
    result.success = 0;
    result.message = "Not full body";
  } else {
    // todo - diary all get
  }

  res.json(result);
});

// 일정 상제 조회
router.get('/:diaryId', function(req, res, next) {
  let projectId = req.params.projectId;
  let diaryId = req.params.diaryId;
  let result = new ResultDto();

  if (!projectId || !diaryId) {
    result.success = 0;
    result.message = "Not full body";
  } else {
    // todo - diary get
  }

  res.json(result);
});

// 일정 수정
router.put('/:diaryId', function(req, res, next) {
  req.body.projectId = req.params.projectId;
  req.body.diaryId = req.params.diaryId;
  let diary = new DiaryDto(req.body);
  let result = new ResultDto();

  if (!diary.diaryId || !diary.projectId || !diary.content
    || !diary.startDate || !diary.endDate || !diary.importRating) {
    result.success = 0;
    result.message = "Not full body";
  } else {
    // todo - diary update
  }

  res.json(result);
});

// 일정 삭제
router.delete('/:diaryId', function(req, res, next) {
  let projectId = req.params.projectId;
  let diaryId = req.params.diaryId;
  let result = new ResultDto();

  if (!projectId || !diaryId) {
    result.success = 0;
    result.message = "Not full body";
  } else {
    // todo - diary remove
  }

  res.json(result);
});

module.exports = router;
