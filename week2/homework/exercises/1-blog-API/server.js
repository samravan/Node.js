const express = require('express')
const app = express();
const fs = require('fs');

app.use(express.json());
// YOUR CODE GOES IN HERE

app.post('/blog', (req, res) => {
  // console.log(req.body.title)

  const title = req.body.title;
  const content = req.body.content;
  fs.writeFileSync(title, content);
  res.writeHead(200, {'content-type': 'text/html'})
  res.end('OK');
})


app.put('/posts/:title', (req, res) => {
  console.log(req.params)
  // How to get the title and content from the request?
  const title = req.body.title;
  const content = req.body.content;
  // What if the request does not have a title and/or content?
  if (typeof req.body == "undefined" ||
    typeof req.body.title == "undefined" ||
    typeof req.body.content == "undefined") {
    res.status(400);
    res.send('invalid request');
    return
  }
  if (fs.existsSync(title)) {
    fs.writeFileSync(title, content);
    res.end('ok')
  }
  else {
    // Send response with error message
    res.end('This post does not exist!')

  }

})

app.delete('/blogs/:title', (req, res) => {
  // How to get the title from the url parameters?
  const title = req.params.title;
    if (fs.existsSync(title)) { // Add condition here
    fs.unlinkSync(title);
    res.end('ok');
  } else {
    // Respond with message here
    res.end('This post does not exist')
  }
})

app.get('/blogs/:title', (req, res) => {

  // How to get the title from the url parameters?
  const title = req.params.title;
  // check if post exists
  if (fs.existsSync(title)) {
    const post = fs.readFileSync(title);
    res.setHeader('Content-Type', 'application/Json')
    res.end(post)
  } else {
    res.end('There is problem!')
  }

  // send response
})

// Bonus: Reading all posts
app.get('/blogs', (req, res) => {

  const title = req.body;
  title.forEach(element => {
    console.log(element.title)
  });
  // send response
})

app.listen(3000)