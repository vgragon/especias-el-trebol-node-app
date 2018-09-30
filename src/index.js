let app = require('./app');
let MongoUtil = require('./db');
let playground = require('./playground.js');

const port = 3000;

MongoUtil.connect().then((dbClient) => {
    app.listen(port);
    console.log("App listening on port: %o", port);
    playground(app, dbClient);
});