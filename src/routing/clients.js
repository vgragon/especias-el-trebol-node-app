let express = require('express');
let router = express.Router();

let clients = [
    {
        "id": "1",
        "name": "Pueblo Bonito"
    },
    {
        "id": "0",
        "name": "Operadora Polar"
    }
];

router.get('/', function (req, res) {
    res.send(clients);
});

module.exports = router;