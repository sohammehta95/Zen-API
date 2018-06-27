var mongoose = require('mongoose');
mongoose.set('debug', true);

var url = process.env.DATABASEURL || "mongodb://localhost/zendb";

mongoose.connect(url, { useMongoClient: true });

mongoose.Promise = Promise;

module.exports.Zen = require("./zen");