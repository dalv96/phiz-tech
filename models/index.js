'use strict';

var models = ['Account', 'Calendar', 'Gallery', 'News'];

models.forEach(model => {
    module.exports[model] = require('./' + model);
});
