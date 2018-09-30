let express = require('express');
let router = express.Router();
let employeesUtil = require('./../app/employees');

router.get('/', function (req, res) {
    employeesUtil.read({}).then((employees) => {
        res.send(employees);
    });
});

router.post('/create', function (req, res) {
    let params = req.body;
    employeesUtil.create(params).then(function (_response) {
        res.status(201).json(_response)
    }).catch(function (err) {
        res.status(400).json({error: err});
    });
});

module.exports = router;