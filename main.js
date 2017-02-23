'use strict'

var conf = require('./conf');
var db = require('./controllers/connect').connections[0];
var fs = require("fs");
var bodyParser = require('body-parser');
var express = require('express');
var router = require('./controllers/router');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.set('views', './views');
app.set('view engine', 'pug');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

app.use(require('helmet')());

app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 15 * 60 * 1000 // 15 minutes
    },
    unset: 'destroy',
    secret: 'qwerty',
    store: new MongoStore({
        mongooseConnection: db,
        autoRemove: 'native',
        ttl: 14 * 24 * 60 * 60,
        touchAfter: 10 * 60,
        stringify: true
    })
}));

router(app);

app.listen(conf.get("server:port"), function() {
    console.log('Server listening on port ' + conf.get("server:port"));
});
