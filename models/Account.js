'use strict';

var mongoose = require('../controllers/connect');

var Account = mongoose.Schema({
    username: String,
    password: String,
    status: Number
});

var account = mongoose.model('Account', Account);

account.find().then(a => {
    if (a.length == 0) {
        var admin = new account({
            username: 'admin',
            password: 'f0ffc4a880d4f4a9ee5282f8ea30fab070ffc81bd9961316428be3ce63e09506',
            status: 0
        });
        admin.save();
        console.log('Created default admin.');
    }
});

module.exports = account;
