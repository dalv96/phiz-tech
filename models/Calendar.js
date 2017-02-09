'use strict';

var mongoose = require('../controllers/connect');

var Calendar = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

var calendar =  mongoose.model('Calendar', Calendar);


module.exports = calendar;
