// var i;
// var count = 0;
// require('fs').createReadStream(process.argv[2])
//   .on('data', function(chunk) {
//     for (i=0; i < chunk.length; ++i)
//       if (chunk[i] == 10) count++;
//   })
//   .on('end', function() {
//     console.log(count);
//   });


  const fs = require('fs');
  const file = process.argv[2];

  fs.readFile(file, function(err, contents){
      if (err) {
          return console.log(err);
      }
      const lines = contents.toString().split('\n').length -1
      console.log(lines)
  })