'use strict'

function testLogin(str) {
    return /^[a-zA-Z][a-zA-Z0-9]{3,20}$/.test(str);
}

function testOther(str) {
    return !/[~!#$%^;:"'<>,\.\\|/\[\]{}]/.test(str);
}

function testText(str) { //TODO: Replace html symbols
    return true;
}


module.exports = {

    testData: function (req, res, next) {
        Object.keys(req.body).forEach( (item, i) => {
            if(item == 'login')
                if (!testLogin(req.body.login)) {
                    req.body.error = true;
                    return;
                }
            if(!testOther(req.body[item])) {
                req.body.error = true;
                return;
            }
        });
        
        next();
    }
};
