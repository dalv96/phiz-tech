'use strict'

function testLogin(str) {
    return /^[a-zA-Z][a-zA-Z0-9]{2,20}$/.test(str);
}

function testOther(str) {
    return !/[~!#$%^;:"'<>,\.\\|/\[\]{}]/.test(str);
}

function testText(str) { //TODO: Replace html symbols
    return true;
}


module.exports = {

    testData: function (req, res, next) {

        if(Object.keys(req.body).length != 0) {
            Object.keys(req.body).forEach( (item, i) => {
                if(item == 'login')
                    if (!testLogin(req.body.login)) {
                        console.log('login');
                        req.errorFlag = true;
                        return;
                    }
                if(!testOther(req.body[item])) {
                    console.log('other');
                    req.errorFlag = true;
                    return;
                }
            });
        }

        if(Object.keys(req.params).length != 0) {
            if(req.params.login)
                if (!testLogin(req.body.login)) {
                    req.errorFlag = true;
                    return;
                }
        }

        next();
    }
};
