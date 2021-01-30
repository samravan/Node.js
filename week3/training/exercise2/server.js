const express = require('express')
const axios = require('axios');

const app = express()

app.get('/', function (req, res) {
    axios.get('https://randomfox.ca/floof')
        .then(response => {
            const image =   response.data.image;
            res.set('Content-Type', 'text/html');
            res.send(Buffer.from(`
            <html>
                <head>
                    <title>HYF Image</title>
                    <body>
                        <h1> New Fox </h1>
                        <img src = "${image}"></img>
                        <form action = '/' method = "GET">
                            <input type = "submit" value = "Next!" />
                        </form>
                    </body>
                </head>
            </html>
            `));
        })
        .catch(error => console.log(error.response.status))
});

app.listen(3000)