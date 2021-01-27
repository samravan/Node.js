const express = require('express')
const app = express()
const fs = require('fs');
const path = require('path');
app.use(express.json());

//Creating new posts
app.post('/blogs', function (req, res) {
  if (typeof req.body == "undefined" ||
    typeof req.body.title == "undefined" ||
    typeof req.body.content == "undefined") {
    res.status(400);
    res.send('invalid request');
    return
  }

  const title = req.body.title;
  const content = req.body.content;

  fs.writeFileSync(path.join(__dirname, '/posts', title), content);
  res.end('post added')
});

//updating existing posts
app.put('/posts/:title', (req, res) => {
  if (typeof req.body == "undefined" ||
    typeof req.body.title == "undefined" ||
    typeof req.body.content == "undefined") {
    res.status(400);
    res.send('invalid request');
    return
  }

  const title = req.body.title;
  const content = req.body.content;

  if (fs.existsSync(path.join(__dirname, '/posts', title))) {
    fs.writeFileSync(path.join(__dirname, '/posts', title), content);
    res.end('ok')
  }
  else {

    res.end('This post does not exist!')
  }
});

//Deleting posts
app.delete('/posts/:title', (req, res) => {

  const title = req.params.title;

  if (fs.existsSync(path.join(__dirname, '/posts', title))) {
    fs.unlinkSync(path.join(__dirname, '/posts', title));
    res.end('post deleted');
  } else {
    res.end('This post does not exist!')
  }
});

//Reading posts
app.get('/blogs/:title', (req, res) => {
  const title = req.params.title;
  if (fs.existsSync(path.join(__dirname, '/posts', title))) {
    const post = fs.readFileSync(path.join(__dirname, '/posts', title));
    res.setHeader('Content-Type', 'application/json');
    res.send(post);
  } else {
    res.end('This post does not exist!')
  }
})

//Reading all posts
app.get('/blogs', (req, res) => {
  const directory = path.join(__dirname, '/posts');

  fs.readdir(directory, function (err, files) {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    res.send(files);
  });
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server's running on port ${PORT}`));