'use strict';

var mongoose = require('../controllers/connect');

var News = mongoose.Schema({
    title: {
        type: "String",
        required : true,
		unique : false,
    },
    description: {
        type: "String",
        required : true,
        unique : false,
    },
    image: {
        type: "String",
        required : false,
        unique : false,
    }
});

var news =  mongoose.model('News', News);

module.exports = account;
