var jwt = require("jsonwebtoken");
var { secret } = require("./config");

module.exports = function (req, res, next) {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    var token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(400).json({ massage: "User is not authorized." });
    }
    var decodeData = jwt.verify(token, secret);
    req.user = decodeData;
    next();
  } catch (e) {
    return res.status(400).json({ massage: "User is not authorized." });
  }
};
