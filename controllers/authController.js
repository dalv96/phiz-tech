'use strict'

var models = require('../models');
var Account = models.Account;
var password = require('./passwordController');

module.exports = {

    isLoggedIn: function(req, res, next) {
        if (req.session.user) {
            Account.find({login: req.session.user}).then( a => {
                if(a.length != 0) {
                    a[0].password = '****';
                    res.locals.user = a[0];
                    next();
                }
            })
        } else next();
    },

    loggout: function(req, res) {
        req.session.destroy();
        res.redirect('/');
    },

    checkAuthorisation: function (req, res) {

        if(!req.errorFlag) {
            Account.find({login: req.body.login}).then( a => {
                if ((a.length != 0) &&
                    (a[0].password == password.createHash(req.body.password))) {
                    req.session.user = a[0].login;
                    res.redirect('/');
                } else {
                    res.send("Error logging");
                }
            });
        } else {
            console.error("Special symbols!");
            res.send("Error logging");
        }

    },

    isEditor: function(req, res, next) { // Заглушка
        next();
    },

    isAdmin: function(req, res, next) { // Заглушка
        next();
    }
}
