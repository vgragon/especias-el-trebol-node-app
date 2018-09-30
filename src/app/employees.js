let MongoUtil = require('./../db');
const {ObjectID} = require('mongodb'); // or ObjectID

module.exports = {
    read: function (query) {
        return new Promise((resolve, reject) => {
            let dbClient = MongoUtil.getDatabaseClient();

            dbClient.collection("employees").find(query).toArray(function (err, result) {
                if (err) reject(err);
                resolve(result);
            });
        });
    },
    create: function (employeeObject) {
        return new Promise((resolve, reject) => {
            let dbClient = MongoUtil.getDatabaseClient();
            let original_id = ObjectID();

            let promise = dbClient.collection('employees').insertOne({
                "_id": original_id,
                ...employeeObject
            });

            promise.then((result) => {
                return dbClient.collection('employees').findOne({'_id': result.insertedId});
            }).then((result) => {
                resolve(result);
            }).catch(err => reject(err));
        });
    },
    update: function (id, salesObject) {
        return new Promise((resolve, reject) => {

        });
    },
    delete: function (id) {
        return new Promise((resolve, reject) => {

        });
    }
};