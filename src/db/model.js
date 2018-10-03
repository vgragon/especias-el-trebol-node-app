const mongoose = require('mongoose');
const schemas = require('./schema');

module.exports = {
    Employee: mongoose.model('Employee', schemas.EmployeeSchema, 'employee'),
    Client: mongoose.model('Client', schemas.ClientSchema, 'client'),
    Sale: mongoose.model('Sale', schemas.SaleSchema, 'sale')
};

