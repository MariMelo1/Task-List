const crypto = require("crypto");

exports.encryptSHA256 = function (input) {
    return crypto.createHash("sha256").update(input).digest("hex");
  };