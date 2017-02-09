'use strict';

var mongoose = require('../controllers/connect');

var Gallery = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    photos: {
        type: [String]
    }
});

var gallery =  mongoose.model('Gallery', Gallery);


module.exports = gallery;
