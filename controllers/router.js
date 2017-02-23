'use strict'

// var conf = require('../conf');
var Authorization = require('./authController');
var Account = require('./accountController');
var News = require('./newsController');
var Gallery = require('./galleryController');
var upload = require('./uploadController').init();

module.exports = function(app) {

    app.get('*', Authorization.isLoggedIn);

    app.get('/', function(req, res) {
        res.render('mainPage');
    });

    app.get('/login', function(req, res) {
        res.render('login');
    });

    app.get('/logout', Authorization.loggout);

    app.post('/login', Authorization.checkAuthorisation);

    app.get('/gallery', Gallery.getPhotos);

    // ******************* АДМИНИСТРАТОР ************************************
    app.all('/admin/*', Authorization.isAdmin);

    app.get('/admin/users', Account.getListAccounts);

    app.get('/admin/editUser', Account.getOneAccount);

    app.get('/admin/createUser', Account.getPageCreate);

    // ******************* РЕДАКТОР ************************************
    app.all('/editor/*', Authorization.isEditor);

    app.get('/editor/addPhotos', Gallery.getPageAdd);

    app.post('/editor/addPhotos', upload.any(), Gallery.addPhotos);

    app.get('/editor/addNews', News.getPageAdd);

    app.post('/editor/addNews', upload.any(), News.addNews);

}
