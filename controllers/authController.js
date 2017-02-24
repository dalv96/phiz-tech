'use strict'

var models = require('../models');
var Account = models.Account;
const crypto = require('crypto');
const secret = 'azccnfjsyeggre62312jfgd';

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

        if(!req.body.error) {
            Account.find({login: req.body.login}).then( a => {
                const hash = crypto.createHmac('sha256', secret)
                .update(req.body.password)
                .digest('hex');
                if ((a.length != 0) && (a[0].password == hash)) {
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
