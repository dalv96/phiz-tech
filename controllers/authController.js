'use strict'

var models = require('../models');
var Account = models.Account;
const crypto = require('crypto');
const secret = 'abcdeeqw23fg';

module.exports = {

    isLoggedIn: function(req, res, next) {
        // const hash = crypto.createHmac('sha256', secret)
        //                    .update('New')
        //                    .digest('hex');
        if (req.session.user) {
            Account.find({username: req.session.user}).then( a => {
                if(a.length != 0) {
                    a[0].password = '****'
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
        Account.find({username: req.body.login}).then( a => {
            if ((a.length != 0) && (a[0].password == req.body.password)) {
                req.session.user = a[0].username;
                res.status(200).redirect('/');
            } else {
                res.status(200).redirect('/');
            }
        });
    },

    isEditor: function(req, res, next) { // Заглушка
        next();
    },

    isAdmin: function(req, res, next) { // Заглушка
        next();
    },

    some: function () {

    }
}
