const capitalizeFirstLetter = require('./sources/functions.js');
const axios = require('axios');
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/weather', (req, res) => {
  const URL = `http://api.openweathermap.org/data/2.5/weather?q=${req.body.cityName}&units=metric&appid=${require('./sources/keys.json').API_KEY}`;
  axios.get(URL)
    .then(function (response) {
      res.render('index', { weatherText: `${capitalizeFirstLetter(req.body.cityName)} temperature is ${response.data.main.temp}` });
    })
    .catch(function (error) {
      res.render('index', { weatherText: "City is not found" });
    })
    .then(function () {
      console.log('New request to API has sent at ' + Date())
    });
})

const PORT = process.env.PORT || 3000;
app.listen(3000, () => { console.log(`Server is running on port ${PORT}`) });