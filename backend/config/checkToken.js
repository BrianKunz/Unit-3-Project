const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  console.log("header", req.headers);
  let token = req.get("Authorization") || req.query.token;
  console.log("Token:", token); // add this line to log the token
  if (token) {
    token = token.replace("Bearer ", "");
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
      req.user = err ? null : decoded.user;
      req.exp = err ? null : new Date(decoded.exp * 1000);
    });
    return next();
  } else {
    req.user = null;
    return next();
  }
};
