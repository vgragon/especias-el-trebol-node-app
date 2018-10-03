const {ObjectID} = require('mongodb'); // or ObjectID
const models = require('./../db/model');

module.exports = {
    read: function (id, load) {
        let queryParams = {};
        if (typeof id !== "undefined") queryParams["_id"] = id;

        let query = models.Sale.find(queryParams).populate('employee', 'givenName familyName').populate('client', 'name');

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
    create: function (salesObject) {
        return new Promise((resolve, reject) => {
            let original_id = ObjectID();
            let promise = models.Sale.create({"_id": original_id, ...salesObject});

            promise.then((result) => {
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
            let promise = models.Sale.findOneAndDelete({_id: id});

            promise.then((result) => {
                resolve(result);
            }).catch(err => reject(err));
        });
    }
};