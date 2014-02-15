
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , data = require('./routes/data')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use('spec', express.static(path.join(__dirname, 'spec')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
 
app.get('/', function(req, res){
  res.sendfile('./public/blueprints.html');
});

app.get('tests', function(req, res){
  res.sendfile('./public/tests.html');
});

app.get('/users', user.list);
app.get('/data/blueprints', data.blueprints);
app.get('/data/characters', data.characters);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
