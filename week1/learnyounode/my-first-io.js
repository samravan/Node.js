const fs = require('fs');

// let content = fs.readFileSync("./baby-steps.js", {encoding: 'utf8'});
filePath = process.argv[2];
fileBuffer =  fs.readFileSync(filePath);
to_string = fileBuffer.toString();
split_lines = to_string.split("\n");
console.log(split_lines.length-1);