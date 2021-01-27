const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs({ defaultLayout: false }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/weather', (req, res) => {
  const data = req.body;
  res.send(data)
})

const PORT = process.env.PORT || 3000;
app.listen(3000, () => { console.log(`Server is running on port ${PORT}`) });