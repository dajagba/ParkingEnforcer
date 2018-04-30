//Install express server

const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
// [SH] Require Passport
var passport = require('passport');

// [SH] Bring in the data model
require('./app_api/models/db');
// [SH] Bring in the Passport config after model is defined
require('./app_api/config/passport');

const app = express();

//Include api calls 
const api = require('./app_api/routes/api')


//Used for login system 
app.use(passport.initialize());
app.use(bodyParser.json())
app.use('/api',api)

//Paths to static file 
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(__dirname + '/assets'));

//Getting the index.html file from the dist folder (Created after running ng serve --aot -prod)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});



//Error handlers 
// Catch unauthorized user errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

//Set port to listen on with response 
const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('running'));