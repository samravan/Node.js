/**
 * Exercise 3: Create an HTTP web server
 */

const http = require('http');
const fs = require('fs');

//create a server
let server = http.createServer(function (req, res) {
  // YOUR CODE GOES IN HERE
  if (req.url === '/') {
    fs.readFile('index.html',
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      })
  };

  if (req.url === '/index.js') {
    fs.readFile('index.js',
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        res.end(content);
      })
  };

  if (req.url === '/style.css') {
    fs.readFile('style.css',
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(content);
      })
  };
});

server.listen(3000, () => {
  console.log('Server is running on port 3000')
}); // The server starts to listen on port 3000