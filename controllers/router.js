'use strict'

// var conf = require('../conf');
var Authorization = require('./authController');
var Account = require('./accountController');
var News = require('./newsController');
var Gallery = require('./galleryController');
var upload = require('./uploadController').init();
var models = require('../models');
var common = require('./common');

module.exports = function(app) {

    app.locals.roles = models.Account.roles;

    app.get('*', Authorization.isLoggedIn);

    app.get('/', function(req, res) {
        res.render('mainPage');
    });

    app.get('/login', function(req, res) {
        res.render('login');
    });

    app.get('/logout', Authorization.loggout);

    app.post('/login', common.testData, Authorization.checkAuthorisation);

    app.get('/gallery', Gallery.getPhotos);

    // ******************* АДМИНИСТРАТОР ************************************
    app.all('/admin/*', Authorization.isAdmin);

    app.get('/admin/users', Account.getListAccounts);

    app.get('/admin/users/:login', common.testData, Account.getOneAccount);
    app.post('/admin/users/:login', common.testData, Account.editAccount);
    app.put('/admin/users/:login/pass', common.testData, Account.editPassword);
    app.put('/admin/users/:login/block', common.testData, Account.blockAccount);
    app.delete('/admin/users/:login/delete', common.testData, Account.deleteAccount);


    app.get('/admin/createUser', Account.getPageCreate);
    app.post('/admin/createUser', common.testData, Account.createAccount);


    // ******************* РЕДАКТОР ************************************
    app.all('/editor/*', Authorization.isEditor);

    app.get('/editor/addPhotos', Gallery.getPageAdd);

    app.post('/editor/addPhotos', common.testData, upload.any(), Gallery.addPhotos);

    app.get('/editor/addNews', News.getPageAdd);

    app.post('/editor/addNews', common.testData, upload.any(), News.addNews);

}
