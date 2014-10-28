var express			= require('express'),
	app				= express();

//routes
app.get('/', function(req,res) {
	res.sendFile(__dirname + '/client/views/index.html');
});
app.get('/nfsw', function(req,res) {
	res.sendFile(__dirname+'/client/views/login.html');
});
app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));

app.listen(3000, function() {
	console.log('Listening at port 3000');
})