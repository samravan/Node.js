const express = require('express');
const exphbs  = require('express-handlebars');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: false }));

app.use(express.static('public'));

app.get('/', function (req, res) {

    res.render('index');
});

app.post('/weather', function (req, res) {
    const cityName = req.body.CityName;
    // const API_KEY = require('./sources/keys.json').API_KEY;
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${require('./sources/keys.json').API_KEY}`;

    // Make a request for a user with a given ID
    axios.get(URL)
        .then(function (response) {
            res.render('index', {weatherText: `${cityName} temperature  is ${response.data.main.temp}`})

        })
        .catch(function (error) {
        // handle error
        res.render('index', { weatherText: "City is not found!"})

        })
        .then(function () {
        // always executed

        });

});

app.listen(3000);