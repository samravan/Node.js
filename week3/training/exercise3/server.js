const express = require('express');
const axios = require('axios');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    axios.get('https://randomfox.ca/floof')
        .then(response => {
            res.render('home', {image: response.data.image });
        })
        .catch(error => console.log(error.response.status))
});

app.listen(3000);