var express			= require('express'),
	app				= express();
	http 			= require('http');

//routes
app.get('/', function(req,res) {
	res.sendFile(__dirname + '/client/views/index.html');
});
app.get('/nfsw', function(req,res) {
	res.sendFile(__dirname+'/client/views/login.html');
});
app.use('/js', express.static(__dirname + '/client/js'));
app.use('/views', express.static(__dirname + '/client/views'));
app.use('/css', express.static(__dirname + '/client/css'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

var port = process.env.port || 3000;
app.listen(port);
