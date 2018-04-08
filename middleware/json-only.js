const NOT_JSON = "Invalid Content Type. \n";

exports.jsonOnly = function(req, res, next) {
    if (req.headers['content-type'] === 'application/json')
        next();
    else {
        res.status(400);
        res.send(NOT_JSON);
    }
}