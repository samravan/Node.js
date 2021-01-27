/**
 * Exercise 3: Create an HTTP web server
 */

let http = require('http');
let fs = require('fs');
let path = require('path');
//create a server

let server = http.createServer((req, res) => {

	if(req.url === '/')	{
		fs.readFile('index.html',
		(error, data) => {
			if(error) throw error;
			res.writeHead(200, {'content-type': 'text/html'}); // Sends a response back to the client
			res.end(data);
		}
		)}
	if(req.url === '/index.js')	{
		fs.readFile('index.js',
		(error, data) => {
			if(error) throw error;
			res.writeHead(200, {'content-type': 'application/javascript'}); // Sends a response back to the client
			res.end(data);
		}
		)}
	if(req.url === '/style.css')	{
		fs.readFile('style.css',
		(error, data) => {
			if(error) throw error;
			res.writeHead(200, {'content-type': 'text/css'}); // Sends a response back to the client
			res.end(data);
		}
		)}

});

server.listen(3000); // The server starts to listen on port 3000

