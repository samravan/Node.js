const http = require('http');
const fs = require('fs');

const PORT = 3000;

const server = http.createServer((req, res) => {
    fs.readFile('/', (req, res) => {

    })
})

server.listen(PORT);
