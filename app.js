var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require("method-override");
var session = require("express-session");
var csurf = require("csurf");
var flash = require("connect-flash");
var mongoose = require("mongoose");

var routes = require('./routes/index');
var users = require('./routes/users');


var socketio = require('socket.io');
var fs = require('fs');

var app = express();
// データベースを接続
mongoose.connect("mongodb://localhost/blog");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// HTTP METHOD を上書き
// https://github.com/expressjs/method-override#custom-logic
app.use(methodOverride(function(req, res){
  if( req.body && typeof req.body === "object" && "_method" in req.body ){
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

// SessionとCSRF、flashメッセージの設定
app.use(session({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: false,
}));
app.use(csurf());
app.use(flash());


app.use('/', routes);
app.use('/users', users);

// ...省略

module.exports = app;