var express = require('express');
var router = express.Router();

var userService = require('../services/userService');

var UserDto = require('../dto/UserDto');
var ResultDto = require('../dto/ResultDto');


router.post('/login', async function(req, res, next) {
  let user = new UserDto(req.body);
  let result = new ResultDto();

  if (!user.userId || !user.password) {
    result.success = 0;
    result.message = "Not full body";
  } else {
    await userService.login(user, result);
  }

  res.json(result);
});


router.post('/', async function(req, res, next) {
  let user = new UserDto(req.body);
  let result = new ResultDto();

  user.themeId = 0; // default
  if (!user.userId || !user.password || !user.name) {
    result.success = 0;
    result.message = "Not full body";
  } else {
    await userService.createUser(user, result);
  }

  res.json(result);
});


router.get('/:userId', async function(req, res, next) {
  let user = new UserDto(req.params);
  let result = new ResultDto();

  if (!user.userId) {
    result.success = 0;
    result.message = "Not full body";
  } else {
    await userService.getUser(user, result);
  }

  res.json(result);
});


router.put('/:userId', async function(req, res, next) {
  req.body.userId = req.params.userId;
  let user = new UserDto(req.body);
  let result = new ResultDto();
  if (!user.userId || !user.password || !user.name || user.themeId == undefined) {
    result.success = 0;
    result.message = "Not full body";
  } else {
    await userService.updateUser(user, result);
  }

  res.json(result);
});

router.delete('/:userId', async function(req, res, next) {
  let user = new UserDto(req.params);
  let result = new ResultDto();

  if (!user.userId) {
    result.success = 0;
    result.message = "Not full body";
  } else {
    await userService.deleteUser(user, result);
  }

  res.json(result);
});

module.exports = router;
