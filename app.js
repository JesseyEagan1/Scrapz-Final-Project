var http = require('http');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var uiRouter = require('angular-ui-router');
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/scrapz')


var db = require('./Models/db.js')

var app = express();

var port = process.env.PORT || '3000';
app.set('port', port);

var session = require('express-session');
var passport = require('passport');

var passportConfig = require('./config/passport'); // Load in our passport configuration that decides how passport actually runs and authenticates


// Session Setup
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: false
}));

// Hook in passport to the middleware chain
app.use(passport.initialize());

// Hook in the passport session management into the middleware chain.
app.use(passport.session());


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);
// app.use('/users', users);


// Routes \\
var authenticationController = require('./controllers/authentication');

// Our get request for viewing the login page
app.get('/auth/login', authenticationController.login);

// Post received from submitting the login form
app.post('/auth/login', authenticationController.processLogin);

// Post received from submitting the signup form
app.post('/auth/signup', authenticationController.processSignup);

// Any requests to log out can be handled at this url
app.get('/auth/logout', authenticationController.logout);

// This route is designed to send back the logged in user (or undefined if they are NOT logged in)
app.get('/api/me', function(req, res){
  res.send(req.user)
});

app.get('/crafts/:id', function(req, res){
  res.sendFile('/html/craft.html', {root : './public'})
});

app.get('/api/crafts/:CraftID', function(req, res){
  // console.log('/api/crafts/:craftID')
  db.Craft.findOne({_id : req.params.craftID}, function(err, craft){
   
   res.send(craft) 

  })
})

app.get('/api/get-crafts', function(req, res){
  db.Craft.find({}, function(err, document){
    console.log(document)
    res.send(document)
  })
})
// ***** IMPORTANT ***** //
// By including this middleware (defined in our config/passport.js module.exports),
// We can prevent unauthorized access to any route handler defined after this call
// to .use()
// app.use(passportConfig.ensureAuthenticated);


app.get('/', function(req, res){
  res.sendFile('/html/index.html', {root : './public'})
});
// app.get('/superSensitiveDataRoute')

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.sendFile('error.html', {
//       root : './public/html'
//     });
//   });
// }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

});


