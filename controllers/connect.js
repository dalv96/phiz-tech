'use strict'

var conf = require('../conf');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var options = { promiseLibrary: global.Promise };

var uri = 'mongodb://localhost/test';

mongoose.connect(uri, options);

mongoose.connection.on('connected', function () {
    console.log('Connected to DB.');
});

module.exports = mongoose;
