let MongoUtil = require('./../db');
const {ObjectID} = require('mongodb'); // or ObjectID
const models = require('./../db/model');

module.exports = {
    read: function (id, load = []) {
        let queryParams = {};
        if (typeof id !== "undefined") queryParams["_id"] = id;

        let query = models.Client.find(queryParams);

        return new Promise((resolve, reject) => {
            query.exec()
                .then(result => {
                    resolve(result);
                })
                .catch(err => {
                    console.error(err);
                });
        });
    },
    create: function (clientObject) {
        return new Promise((resolve, reject) => {
            let original_id = ObjectID();

            let promise = models.Client.create({
                "_id": original_id,
                ...clientObject
            });

            promise.then((result) => {
                resolve(result);
            }).catch(err => reject(err));
        });
    },
    update: function (clientObject) {
        return new Promise((resolve, reject) => {
            let promise = models.Client.findOneAndUpdate({_id: clientObject["_id"]}, clientObject, {new: true});

            promise.then((result) => {
                resolve(result);
            }).catch(err => reject(err));
        });
    },
    delete: function (id) {
        return new Promise((resolve, reject) => {
            let promise = models.Client.findOneAndDelete({_id: id});

            promise.then((result) => {
                resolve(result);
            }).catch(err => reject(err));
        });
    }
};