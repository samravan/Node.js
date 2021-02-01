const express = require('express')
const axios = require('axios');

const app = express()

app.get('/', function (req, res) {
    axios.get('https://randomfox.ca/floof')
        .then(response => {
            const image =   response.data.image;
            res.redirect(image)})
        .catch(error => console.log(error.response.status))
});

app.listen(3000)