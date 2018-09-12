let express = require('express');
let router = express.Router();

let sales = [
    {
        "id": "0",
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