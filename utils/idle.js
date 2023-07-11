const idleAuth = (req, res, next) => {
  if (req.session.idle) {
    req.redirect("/relogin");
  }
  next();
};

module.exports = idleAuth;
