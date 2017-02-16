'use strict'

var multer = require('multer');
var conf = require('../conf');
const mkdirp = require('mkdirp-promise');

module.exports.init = function() {
    var storage = multer.diskStorage({
        destination: function(req, file, cb) {
            mkdirp(conf.get('file:path')).then( () => {
                cb(null, conf.get('file:path'));
            })
        },
        filename: function(req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname)
        }
    })
    return multer({
        storage: storage
    });
}
