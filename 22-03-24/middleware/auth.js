const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const authHeader = req.headers.authkey;
  const token = authHeader;

  if (token === null) {
    const response = {
      status: "ERROR",
      message: "Token non valido!",
    };
    return res.status(401).json(response);
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        const response = {
          status: "ERROR",
          message: err,
        };

        return res.status(403).json(response);
      }
      req.user = user;
      next();
    });
  }
};

module.exports = auth;
