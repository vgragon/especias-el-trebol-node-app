let mongoose = require('mongoose');

const url = "mongodb://vicentegrajeda:EspeciasTrebol1@ds163382.mlab.com:63382/especias-trebol";
let _dbClient;

const MongoUtil = {
    connect: function () {
        return mongoose.connect(url, {useNewUrlParser: true}).then(client => {
            _dbClient = client;
            return _dbClient;
        });
    },
    getDatabaseClient: function () {
        return _dbClient;
    }
};

module.exports = MongoUtil;