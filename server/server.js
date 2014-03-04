var express = require('express');
var http = require('http');
var path = require('path');
var routes = require('./app/routes/routes.js');

var app = express();

app.use(express.static(path.join(__dirname, '/../public')));
app.use(app.router);

app.set('port', 8888);
routes(app);

var server = http.createServer(app);
server.listen(app.get('port'), function () {
  console.log('Nick E is running on port: ' + app.get('port'));
});