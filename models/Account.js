'use strict';

var mongoose = require('../controllers/connect');

var Account = mongoose.Schema({
    login : {
		type: String,
		required: true,
		unique: true,
		lowercase: true
	},
    password: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    role: {
        type: Number,
        required: true
    },
    fullName: {
        type: String,
        required: true
    }

});

var account = mongoose.model('Account', Account);

account.find().then(a => {
    if (a.length == 0) {
        var admin = new account({
            login: 'admin',
            password: 'f0ffc4a880d4f4a9ee5282f8ea30fab070ffc81bd9961316428be3ce63e09506',
            status: 0,
            role: 0,
            fullName: 'Путин Владимир Владимирович'
        });
        admin.save();
        console.log('Created default admin.');
    }
});

module.exports = account;
