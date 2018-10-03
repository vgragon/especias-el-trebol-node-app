let express = require('express');
let router = express.Router();
let clientsUtil = require('./../app/clients');

router.get('/', function (req, res) {
    let {id, load} = req.query;
    load = load || "";
    load = load.split(',');

    clientsUtil.read(id, load).then((clients) => {
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

router.post('/update', function (req, res) {
    let params = req.body;
    clientsUtil.update(params).then(function (_response) {
        res.status(201).json(_response)
    }).catch(function (err) {
        res.status(400).json({error: err});
    });
});

router.delete('/delete', function (req, res) {
    let params = req.body;
    let {id} = params;
    clientsUtil.delete(id).then(function (_response) {
        res.status(201).json(_response)
    }).catch(function (err) {
        res.status(400).json({error: err});
    });
});

module.exports = router;