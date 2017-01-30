'use strict'

var conf = require('./conf');
var fs =  require("fs");
var bodyParser = require('body-parser');
var express = require('express');
var router = require('./controllers/router');
var app = express();
var db = require('./controllers/dbController');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


router(app);

app.listen(conf.get("server:port"), function () {
    console.log( 'Server listening on port ' + conf.get("server:port") );
});
