const http = require('http');
let bl = require ('bl');

const url = process.argv[2];

http
    .get(url, resp => {

        resp.pipe(bl(function(err, data) {
            if(err) {
                return console.error(err);
            }
            console.log(data.toString().length);
            console.log(data.toString());
        }))



});
