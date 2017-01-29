'use strict';
var fs    = require('fs'),
    nconf = require('nconf');

nconf.argv()
    .env()
    .file({ file: 'conf/conf.json' });

module.exports = nconf;
