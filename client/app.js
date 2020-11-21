const socket = io();

/* Sends the message to the server */
$('form').on('submit', function() {
	const text = $('#message').val();			// takes the input from the button with ID: message
	const name = $('#name').val();
	if (text && name) {
	socket.emit('message', text, name);
	}
	$('#message').val('');
	$('#name').val('');
	return false;								// stops the broswer
})

/* Whenever a message has been recieved from the server, create a list item in history  */
socket.on('message', function(msg, user) {
	$('<li>').text(user + ': ' + msg).appendTo('#history');
})

