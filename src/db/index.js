const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://vicentegrajeda:EspeciasTrebol1@ds163382.mlab.com:63382/especias-trebol";
let _dbClient;

const MongoUtil = {
    connect: function () {
        return MongoClient.connect(url, {useNewUrlParser: true}).then(client => {
            _dbClient = client.db('especias-trebol');
            return _dbClient;
        });
    },
    getDatabaseClient: function () {
        return _dbClient;
    }
};

module.exports = MongoUtil;