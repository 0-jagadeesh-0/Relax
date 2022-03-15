const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authToken;
    if (authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json("Token Invalid.")
            }
            req.user = user;
            next();
        });

    }
    else {
        res.status(400).json("Invalid User.")
    }
}

module.exports = { verifyToken };
