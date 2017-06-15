var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');
//采用connect-mongodb中间件作为Session存储  
var session = require('express-session');  
var Settings = require('./database/settings');  
var MongoStore = require('connect-mongodb');  
var db = require('./database/msession'); 

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
app.engine('html',require('ejs').renderFile);
app.set('view engine','html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//session配置
 app.use(session({
     cookie: { maxAge: 600000 },
     secret: Settings.COOKIE_SECRET,
     store: new MongoStore({  
         username: Settings.USERNAME,
         password: Settings.PASSWORD,
         url: Settings.URL,
         db: db})
 }))
 app.use(function(req, res, next){
     res.locals.user = req.session.user;
     next();
 });

app.use(express.static(path.join(__dirname, 'public')));

app.use('/',routes);
// app.use('/', routes);
app.use('/users', users);
app.use('/login', routes);
app.use('/zhuce', routes);
app.use('/logout', routes);
app.use('/home', routes);
app.use('/list1',routes);
app.use('/list2',routes);
app.use('/list3',routes);
app.use('/liu',routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;
