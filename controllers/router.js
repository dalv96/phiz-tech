'use strict'

// var conf 	= require('../conf');
var Authorization = require('./authController');

module.exports = function (app) {

    app.get('*', Authorization.isLoggedIn);

    app.get('/', function (req, res) {
        res.render('mainPage');
    });

    app.get('/login', function (req, res) {
        res.render('login');
    });

    app.get('/logout', Authorization.loggout);

    app.post('/login', Authorization.checkAuthorisation);

}
