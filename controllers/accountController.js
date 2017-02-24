'use strict'

var models = require('../models');
var Account = models.Account;


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
        Account.find({ login: req.params.login }).then(a => {
            if(a.length != 0)
                res.render('admin/editUser', {user: a[0]});
            else
                res.status(404).send('Этого пользователя не существует!!!');
        })
    },

    createAccount: function (req, res) {
        console.log(req.body);
    },

    editAccount: function (req, res) {
        console.log(req.body);
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
