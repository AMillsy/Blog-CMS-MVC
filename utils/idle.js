const idleAuth = (req, res, next) => {
  console.log(req.session.idle);
  if (req.session.idle) {
    return res.status(400).json({ message: "relogin" });
  } else {
    next();
  }
};

module.exports = idleAuth;
