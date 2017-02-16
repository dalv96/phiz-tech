'use strict'
var models = require('../models');
var Gallery = models.Gallery;

module.exports = {

    getPhotos: function (req, res) {
        Gallery.find({title: 'Untiled'}).then(a => {
            if(a.length != 0) {
                res.render('gallery', {album: a[0].photos});
            }
        });
    },

    addPhotos: function (req, res) {
        Gallery.find({title: 'Untiled'}).then(a => {
            if(a.length != 0) {
                a[0].photos.push(req.files[0].filename);
                a[0].save();
            }
        }).then(() => res.redirect('/gallery'));
    }

}
