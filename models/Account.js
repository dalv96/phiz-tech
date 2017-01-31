'use strict';

var mongoose = require('../controllers/connect');

var Account = mongoose.Schema({
    username: String,
    password: String
});

var account =  mongoose.model('Account', Account);

account.find().then( a => { // Временно
    if(a.length==0) {
        var admin = new account({username: 'admin', password: 'admin'});
        admin.save();
        console.log('Created default admin.');
    }
});

module.exports = account;
