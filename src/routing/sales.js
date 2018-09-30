let express = require('express');
let router = express.Router();
let salesUtil = require('./../app/sales');

router.get('/', function (req, res) {
    salesUtil.read({}).then((sales) => {
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

module.exports = router;