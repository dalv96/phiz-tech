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

var gallery = mongoose.model('Album', Gallery);

gallery.find().then(a => {
    if (a.length == 0) {
        var album = new gallery({
            title: 'Untiled'
        });
        album.save();
        console.log('Created default album.');
    }
});

module.exports = gallery;
