const expressJwt = require("express-jwt");

exports.authMiddleware = expressJwt({ secret: process.env.TOKEN_SECRET, algorithms: ["HS256"] });