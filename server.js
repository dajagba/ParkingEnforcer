//Install express server

const express = require('express');
const http = require('http')
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

//Include api calls 
const api = require('./routes/api')

//Used for login system 
app.use(bodyParser.json())
app.use('/api',api)
//Paths to static file 
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(__dirname + '/assets'));

//Getting the index.html file from the dist folder (Created after running ng serve --aot -prod)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

//Set port to listen on with response 
const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('running'));