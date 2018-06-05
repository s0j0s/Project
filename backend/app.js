var createError = require('http-errors');
var express = require('express');
var socket_io = require('socket.io')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var history = require('connect-history-api-fallback');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var projectsRouter = require('./routes/projects');
var diariesRouter = require('./routes/diaries');
var chatsRouter = require('./routes/chats');
var membersRouter = require('./routes/members');

var app = express();

var io = socket_io();
app.io = io;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// api-mapping
app.use('/api/users', usersRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/projects/:projectId/diaries', diariesRouter);
app.use('/api/projects/:projectId/chats', chatsRouter);
app.use('/api/projects/:projectId/members', membersRouter);
// history mode
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));
// page-mapping
app.use('/', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.io.on('connection', function (socket) {
  console.log('1 user connected..');
  socket.on('chat_msg', function (chat) {
    socket.broadcast.to(chat.projectId).emit('chat_msg', chat)
  });
  socket.on('join', function (room) {
    console.log('1 user join room.. ' + room);
    socket.join(room)
  });
  socket.on('leave', function (room) {
    console.log('1 user leave room.. ' + room);
    socket.leave(room)
  });
  socket.on('disconnect', function () {
    console.log('1 user disconnected');
  });
});

module.exports = app;
