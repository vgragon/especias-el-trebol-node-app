let MongoUtil = require('./../db');
const {ObjectID} = require('mongodb'); // or ObjectID
const models = require('./../db/model');

module.exports = {
    read: function (id, load = []) {
        let queryParams = {};
        if (typeof id !== "undefined") queryParams["_id"] = id;

        let query = models.Employee.find(queryParams);

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
    create: function (employeeObject) {
        return new Promise((resolve, reject) => {
            let original_id = ObjectID();

            let promise = models.Employee.create({
                "_id": original_id,
                ...employeeObject
            });

            promise.then((result) => {
                resolve(result);
            }).catch(err => reject(err));
        });
    },
    update: function (employeeObject) {
        return new Promise((resolve, reject) => {
            let promise = models.Employee.findOneAndUpdate({_id: employeeObject["_id"]}, employeeObject, {new: true});

            promise.then((result) => {
                resolve(result);
            }).catch(err => reject(err));
        });
    },
    delete: function (id) {
        return new Promise((resolve, reject) => {
            let promise = models.Employee.findOneAndDelete({_id: id});

            promise.then((result) => {
                resolve(result);
            }).catch(err => reject(err));
        });
    }
};