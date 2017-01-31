'use strict'

var conf 	= require('../conf');
var express = require('express');
var Authorization = require('./authController');

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render('mainPage');
    });

    app.get('/login', function (req, res) {
        res.render('login');
    });

    app.post('/login', Authorization.checkAuthorisation);

}
