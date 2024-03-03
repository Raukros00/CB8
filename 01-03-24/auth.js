const auth = (req, res, next) => {
  if (req.url === "/login") return next();

  if (!req.session.isAuth) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = auth;
