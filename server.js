const express = require('express');
const app = express();

const http = require('http');
const server = http.Server(app);

app.use(express.static('client'));

const io = require('socket.io')(server);

io.on('connection', function(socket) {
	socket.on('message', function(msg, user) {
		io.emit('message', msg, user);
	});
});

server.listen(8080, function() {
	console.log('Chat server running...');
});