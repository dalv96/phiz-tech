'use strict';

var mongoose = require('../controllers/connect');

var Schema = mongoose.Schema;

var News = mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: false,
    },
    description: {
        type: String,
        required: true,
        unique: false,
    },
    image: {
        type: String,
        required: false,
        unique: false,
    },
    author: {
		type: Schema.Types.ObjectId,
		ref: 'Account',
		required: true
	},
    date: {
        type: Date,
        required: true
    }

});

var news = mongoose.model('News', News);

module.exports = news;
