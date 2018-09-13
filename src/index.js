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

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

for (let route in routes) {
    if (routes.hasOwnProperty(route)) app.use(route, routes[route]);
}

app.listen(3000);