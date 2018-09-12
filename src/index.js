const express = require('express');
const routes = require('./routing');
const morgan = require('morgan');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(morgan('combined', {
    skip: function (req, res) {
        return res.statusCode < 400
    }
}));

app.get('/', function (req, res) {
    res.send('Hello World');
});

for (let route in routes) {
    if (routes.hasOwnProperty(route)) app.use(route, routes[route]);
}

app.listen(3000);