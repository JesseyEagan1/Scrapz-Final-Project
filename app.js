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
var bcrypt = require('bcryptjs')


var db = require('./Models/db.js')

var app = express();

var port = process.env.PORT || '3000';
app.set('port', port);

var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// Session Setup
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: false
}));



passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    db.User.findById(id, function(err, user) {
        done(err, user);
    });
});

// Hook in passport to the middleware chain
app.use(passport.initialize());

// Hook in the passport session management into the middleware chain.
app.use(passport.session());

passport.use(new LocalStrategy(
    function(username, password, done) {
        db.User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            // If we got this far, then we know that the user exists. But did they put in the right password?
            bcrypt.compare(password, user.password, function(error, response){
                if (response === true){
                    return done(null,user)
                }
                else {
                    return done(null, false)
                }
            })
        });
    }
));





// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);
// app.use('/users', users);



// This route is designed to send back the logged in user (or undefined if they are NOT logged in)
app.get('/api/me', function(req, res){
  res.send(req.user)
});

app.get('/crafts/:id', function(req, res){
  res.sendFile('/html/craft.html', {root : './public'})
});

app.get('/api/crafts/:CraftID', function(req, res){
  console.log(req.params.CraftID + "blah")
  db.Craft.findOne({_id : req.params.CraftID}, function(err, craft){
   
   res.send(craft) 

  })
})

app.get('/api/get-crafts', function(req, res){
  db.Craft.find({}, function(err, document){
    // console.log(document)
    res.send(document)
  })
})

app.post('/signup', function(req, res){
    bcrypt.genSalt(10, function(error, salt){
        bcrypt.hash(req.body.password, salt, function(hashError, hash){
            var newUser = new db.User({
                firstName : req.body.firstName,
                lastName  : req.body.lastName,
                email     : req.body.email, 
                password  : hash

            });
            newUser.save(function(saveErr, user){
                if ( saveErr ) { res.send({ err:saveErr }) }
                else { 
                    req.login(user, function(loginErr){
                        if ( loginErr ) { res.send({ err:loginErr }) }
                        else { res.send({success: 'success'}) }
                    })
                }
            })
            
        })
    })
})

app.post('/login', function(req, res){
  console.log("string", req.body)

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


