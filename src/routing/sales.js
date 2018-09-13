let express = require('express');
let router = express.Router();

let sales = [
    {
        "id": "0",
        "date": "2018-01-03T20:00:00Z",
        "amount": "1000",
        "employee": {
            "id": "0",
            "givenName": "Vicente",
            "familyName": "Grajeda"
        },
        "client": {
            "id": "0",
            "name": "Operadora Polar"
        }
    },
    {
        "id": "1",
        "date": "2018-03-10T06:20:20Z",
        "amount": "2340",
        "employee": {
            "id": "1",
            "givenName": "Dulce",
            "familyName": "Gonzalez"
        },
        "client": {
            "id": "0",
            "name": "Operadora Polar"
        }
    },
    {
        "id": "2",
        "date": "2017-12-29T10:23:00Z",
        "amount": "12800",
        "employee": {
            "id": "2",
            "givenName": "Juan",
            "familyName": "Perez"
        },
        "client": {
            "id": "1",
            "name": "Pueblo Bonito"
        }
    }
];

router.get('/', function (req, res) {
    res.send(sales);
});

module.exports = router;