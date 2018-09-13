let express = require('express');
let router = express.Router();

let employees = [
    {
        "id": "0",
        "givenName": "Vicente",
        "familyName": "Grajeda"
    },
    {
        "id": "1",
        "givenName": "Dulce",
        "familyName": "Gonzalez"
    },
    {
        "id": "2",
        "givenName": "Juan",
        "familyName": "Perez"
    },
    {
        "id": "3",
        "givenName": "Jorge",
        "familyName": "Panes"
    }
];

router.get('/', function (req, res) {
    res.send(employees);
});

module.exports = router;