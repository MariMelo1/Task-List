const expressJwt = require("express-jwt");
const {TOKEN_SECRET} = process.env;

exports.authMiddleware = expressJwt({ secret: TOKEN_SECRET, algorithms: ["HS256"] });