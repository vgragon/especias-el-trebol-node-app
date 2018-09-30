let express = require('express');
let router = express.Router();
let clientsUtil = require('./../app/clients');

router.get('/', function (req, res) {
    clientsUtil.read({}).then((clients) => {
        res.send(clients);
    });
});

router.post('/create', function (req, res) {
    let params = req.body;
    clientsUtil.create(params).then(function (_response) {
        res.status(201).json(_response)
    }).catch(function (err) {
        res.status(400).json({error: err});
    });
});

module.exports = router;