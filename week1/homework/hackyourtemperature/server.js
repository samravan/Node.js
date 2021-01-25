const express = require('express');
const fs = require('fs');
const exphbs  = require('express-handlebars');

const app = express();

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: false }));


// app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/weather', function (req, res) {
   const cityName = req.body;
   res.send(cityName)
})


app.get('/', function (req, res) {
    res.render('index');
});

app.listen(3000);