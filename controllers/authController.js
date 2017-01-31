'use strict'

var models = require('../models');
var Account = models.Account;


module.exports = {

    checkAuthorisation : function (req, res) {
        Account.find({username: req.body.login}).then( a => {
            if((a.length != 0) && (a[0].password == req.body.password)) {
                res.status(200).send('Вы успешно авторизировались!');
            } else {
                res.status(200).redirect('/');
            }
        });
    }

}
