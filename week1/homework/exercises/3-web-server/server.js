/**
 * Exercise 3: Create an HTTP web server
 */

let http = require('http');
let fs = require('fs');
let path = require('path');
//create a server

let server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.writeHead(200, {'content-type': 'text/html'}); // Sends a response back to the client
		fs.readFile('./index.html'), function(error, data) {
		if(error) {
			console.log(error);
		} else {
			res.write(data);
		}
	}
}
});

server.listen(3000); // The server starts to listen on port 3000

