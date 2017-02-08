'use strict'

var models = require('../models');
var Account = models.Account;


module.exports = {

    isLoggedIn : function (req, res, next) {
        if(req.session.user) {
            Account.find({username: req.session.user}).then( a => {
                if(a.length != 0) {
                    a[0].password = '****'
                    res.locals.user = a[0];
                    next();
                }
            })
        } else next();
    },

    loggout : function (req, res) {
        req.session.destroy();
        res.redirect('/');
    },

    checkAuthorisation : function (req, res) {
        Account.find({username: req.body.login}).then( a => {
            if((a.length != 0) && (a[0].password == req.body.password)) {
                req.session.user = a[0].username;
                res.status(200).redirect('/');
            } else {
                res.status(200).redirect('/');
            }
        });
    },

    isEditor : function (req, res, next) { // Заглушка
        next();
    }

}
