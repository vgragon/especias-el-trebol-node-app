let express = require('express');
let router = express.Router();
let salesUtil = require('./../app/sales');

router.get('/', function (req, res) {
    let {id, load} = req.query;
    load = load || "";
    load = load.split(',');
    salesUtil.read(id, load).then((sales) => {
        res.send(sales);
    });
});

router.post('/create', function (req, res) {
    let params = req.body;
    salesUtil.create(params).then(function (_response) {
        res.status(201).json(_response)
    }).catch(function (err) {
        res.status(400).json({error: err});
    });
});

router.delete('/delete', function (req, res) {
    let params = req.body;
    let {id} = params;
    salesUtil.delete(id).then(function (_response) {
        res.status(201).json(_response)
    }).catch(function (err) {
        res.status(400).json({error: err});
    });
});

module.exports = router;