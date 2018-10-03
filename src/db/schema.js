const Schema = require('mongoose').Schema;

const EmployeeSchema = new Schema({
    _id: Schema.Types.ObjectId,
    givenName: String,
    familyName: String,
    jobPosition: String,
    telephoneNumber: String,
    emailAddress: String
});

const ClientSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    address: String,
    googleMapsUrl: String,
    telephoneNumber: String,
    emailAddress: String
});

const SaleSchema = new Schema({
    _id: Schema.Types.ObjectId,
    date: Date,
    amount: Number,
    employee: {type: Schema.Types.ObjectId, ref: 'Employee'},
    client: {type: Schema.Types.ObjectId, ref: 'Client'},
});

module.exports = {
    EmployeeSchema: EmployeeSchema,
    ClientSchema: ClientSchema,
    SaleSchema: SaleSchema
};