var express = require('express');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
	res.status(200);
	res.send('Welcome to BreakfastJS');
});

app.listen(3000);