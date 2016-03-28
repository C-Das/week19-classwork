var express = require('express');
var path = require('path');
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var mongoose = require('mongoose');
var PORT = 3000;

//connect to Mongodb
mongoose.connect("mongodb://localhost/yard-sale");
require('./models/user.js');
require('./models/comment.js');
require('./models/item.js');

var index = require('./routes/index');
var api = require('./routes/api');
var authenticate = require('./routes/authenticate')(passport);

var app = express();

app.use(logger('dev'));
app.use(session({
  secret: 'Super secret'
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(__dirname +"/public"));
app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session());

require('./models/models.js');

var initPassport = require('./passport-init');
initPassport(passport);

app.use('/',index);
app.use('/api',api);
app.use('/auth',authenticate);

app.listen(PORT,function (){
  console.log("Application is listening on PORT:"+PORT)
})
