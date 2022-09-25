const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
    // middleware function has access to req and res object or cycle
    //Get token from the header
    const token = req.header('x-auth-token');

    // check if no token
    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied" })
    }

    // verify token
    try {
        const decoded = jwt.verify(token, process.env.JWTSECRETKEY);
        req.user = decoded.user;
        next();

    } catch (err) {
        res.status(401).json({msg:'Token is not valid'});
    }

}