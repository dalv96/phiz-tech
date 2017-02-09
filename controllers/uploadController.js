'use strict'


var multer  = require('multer');


module.exports.init =  function () {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './uploads')
        },
        filename: function (req, file, cb) {
            cb(null,  Date.now() + '-' + file.originalname)
        }
    })
    return multer({ storage: storage });
}
