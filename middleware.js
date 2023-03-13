module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.returnTo = req.originalUrl;
    req.flash("error", "you must be signed in first");
    return res.json("you must be signed in first");
  }
  next();
};

module.exports.isAdmin = (req, res, next) => {
  if (req.user.username === "admin") {
    return next();
  }
  req.flash("error", "you must be an admin for that");

  res.redirect("/");
};

module.exports.sessionify = (req, res, next) => {
  if (req.session.viewed) {
    if (req.session.viewed.length > 10) {
      req.session.viewed.length = 0;
    }
    if (!req.session.viewed.includes(req.originalUrl)) {
      req.session.viewed.push(req.originalUrl);
    }
  } else {
    req.session.viewed = [];
    req.session.viewed.push(req.originalUrl);
  }

  next();
};
