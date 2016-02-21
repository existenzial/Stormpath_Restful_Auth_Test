var express = require('express');
var stormpath = require('express-stormpath');

var app = express();

app.use(stormpath.init(app, {
  application: process.env.STORMPATH_URL,
}));

app.get('/', function(req, res){
  res.send('Welcome to the Stormpath Test App. Please <a href='/login'>login</a>');
});

app.listen(process.env.PORT || 3000);
