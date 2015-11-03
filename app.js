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

var modelController = require('./Models/modelController.js')
var app = express();


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
        db.User.findOne({ email: username }, function (err, user) {
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


// var craftCtrl = require('/html/main.js')
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

app.post('/login', function(req, res, next){
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.send({error : 'something went wrong :('}); }
    req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.send({success: req.user });
    });
  })(req, res, next);

})
app.get('/logout', function(req, res){
  req.logout();
  res.send('goodbye');
});

app.post('/api/crafts', function(req, res){
  var newCraft = new db.Craft({
    craftThumbnail    : req.body.craftThumbnail,
    craftName      : req.body.craftName,
    craftMaterials        : req.body.craftMaterials.split(', '),
    craftDirections   : req.body.steps,
    
  })

  newCraft.save( function(err, doc){
    res.send(doc)
  } )

});


app.get('/', function(req, res){
  res.sendFile('/html/index.html', {root : './public'})
});

app.post('/api/craft-search', modelController.craftSearch);

// app.post("/api/myCraftBox", function(req, res){
//     User.update({_id: request.user._id}, request.body, function(err, apiResponse){
//         response.send('good job saving more info')
//     })
// })


// Creating Server and Listening for Connections \\
var port = 80
app.listen(port, function(){
  console.log('Server running on port ' + port);

});


