const fs = require('fs');
const path = require('path');

const directory = process.argv[2];
const ext = '.' + process.argv[3];
// console.log(ext)
// const file = process.argv[2];

fs.readdir(directory, function(err, list) {
    if (err) {
        console.log(err);
    }
    list.forEach(element => {
        // console.log(element)
        if (path.extname(element) === ext) {
            console.log(element);
        }
    })
})
