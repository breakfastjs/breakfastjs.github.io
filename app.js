var express = require('express');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
	res.status(200);
	res.render('layout');
});

app.listen(3000);