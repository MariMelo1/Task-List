const auth = require("../controllers/auth");

module.exports = function (app) {
  app.post("/login", auth.login);
  app.post("/register", auth.register)
};
