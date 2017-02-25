'use strict'

const crypto = require('crypto');
const secret = 'azccnfjsyeggre62312jfgd';

module.exports = {
    createHash: function (pass) {
        return crypto.createHmac('sha256', secret)
            .update(pass)
            .digest('hex');
    }
}
