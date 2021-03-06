/**
* Middleware for allowing Cross-Origin Requests
* TODO: make origin, methods and headers configurable....chances of needing that???
*/

module.exports = (req, res, next) => {

    //set headers to allow cross origin request.
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
};
