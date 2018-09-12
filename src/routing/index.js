let salesRouter = require('./sales');
let clientsRouter = require('./clients');
let employeesRouter = require('./employees');

module.exports = {
    '/sales': salesRouter,
    '/clients': clientsRouter,
    '/employees': employeesRouter
};