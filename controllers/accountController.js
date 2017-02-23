'use strict'

var models = require('../models');
var Account = models.Account;


module.exports = {

    getPageCreate: function (req, res) {
        res.render('admin/createUser');
    },

    getListAccounts: function (req, res) {
        res.render('admin/users');
    },

    getOneAccount: function (req, res) {
        res.render('admin/editUser');
    },

    createAccount: function (req, res) {

    },

    editAccount: function (req, res) {

    },

    editPassword: function (req, res) {

    },

    deleteAccount: function (req, res) {

    },

    blockAccount: function (req, res) {

    }

};
