var express = require('express');
var router = express.Router();

var userService = require('../services/userService');
var UserDto = require('../dto/UserDto');

router.post('/login', async function(req, res) {
  let user = new UserDto(req.body);
  let result = { };

  if (!user.userId || !user.password) {
    result.success = 0;
    result.message = "not id or pw";
  } else {
    await userService.login(user, result);
  }

  if (result.success) {
    res.cookie('userId', user.userId);
  }

  res.json(result);
});

router.post('/', async function(req, res, next) {
  let user = new UserDto(req.body);
  let result = { };

  if (!user.userId || !user.password || !user.name) {
    result.success = 0;
    result.message = "not full body";
  } else {
    //await userService.createUser(user, result);
  }

  if (result.success) {
    res.cookie('userId', user.userId);
  }

  res.json(result);
});

router.get('/:userId', async function(req, res, next) {
  let userId = req.params.userId;
  let result = { };

  if (!userId) {
    result.success = 0;
    result.message = "userId is empty";
  } else {
    //await userService.getUser(userId, result);
  }

  res.json(result);
});

router.put('/:userId', async function(req, res, next) {
  let user = new UserDto(req.body);
  let result = { };

  if (!user.userId || !user.password || !user.name || !user.themaId) {
    result.success = 0;
    result.message = "not full body";
  } else {
    //await userService.updateUser(user, result);
  }

  res.json(result);
});

router.delete('/:userId', async function(req, res, next) {
  let userId = req.params.userId;
  let result = { };

  if (!userId) {
    result.success = 0;
    result.message = "userId is empty";
  } else {
    //await userService.deleteUser(userId, result);
  }

  res.json(result);
});

module.exports = router;
