'use strict'

var models = require('../models');
var Account = models.Account;
var password = require('./passwordController');

module.exports = {

    getPageCreate: function (req, res) {
        res.render('admin/createUser');
    },

    getListAccounts: function (req, res) {
        Account.find().then(a => {
            res.render('admin/users', {users: a});
        }).catch(error => {
            console.error(error);
        });
    },

    getOneAccount: function (req, res) {
        if (!req.errorFlag) {
            Account.find({ login: req.params.login }).then(a => {
                if(a.length != 0)
                    res.render('admin/editUser', {user: a[0]});
                else
                    res.status(404).send('Этого пользователя не существует!!!');
            })
        } else {
            res.send('error');
        }
    },

    createAccount: function (req, res) {
        if(!req.errorFlag) {
            Account.find({login: req.body.login}).then(a => {
                if(a.length == 0) {
                    var acc = new Account({
                        login:  req.body.login,
                        password: password.createHash(req.body.password),
                        role: req.body.role,
                        fullName: req.body.fullName
                    });
                    return acc.save();
                } else {
                    return 'true';
                }
            }).then( r => {
                if(r != 'true') res.redirect('/admin/users')
                else res.send('Логин занят');
            })
        } else {
            res.send('error');
        }
    },

    editAccount: function (req, res) {
        if(!req.errorFlag) {
            Account.find({login: req.params.login}).then(a => {
                a[0].fullName = req.body.fullName;
                a[0].role = req.body.role;
                return a[0].save();
            }).then( () => res.redirect('/admin/users') )
        } else {
            res.send('error');
        }
    },

    editPassword: function (req, res) {
        console.log(req.body.data);
    },

    deleteAccount: function (req, res) {
        console.log(req.body);
    },

    blockAccount: function (req, res) {
        console.log(req.body);
    }

};
