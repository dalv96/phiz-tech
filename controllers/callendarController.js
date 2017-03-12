'use strict'

var models = require('../models');
var Callendar = models.Callendar;


module.exports = {

    getListEvents: function (req, res) {
        Callendar.find().then( c => {
            var events;
            c.forEach( item => {
                events.push(
                    {
                        title: item.title,
                        date: item.date
                    }
                );
            });
            res.send(events).status(200);
        })
    },

    addEvent: function (req, res) {

    },

    editEvent: function (req, res) {

    },

    deleteEvent: function (req, res) {

    }

};
