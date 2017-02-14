'use strict'

var multer = require('multer');
var conf = require('../conf');

module.exports.init = function() {
    var storage = multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, conf.get('file:path'))
        },
        filename: function(req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname)
        }
    })
    return multer({
        storage: storage
    });
}
