const isDev = (req, res, next) => {
  if (req.body.user.roles.includes("dev")) {
    next();
    req.body.userRole = "dev";
  } else {
    next();
  }
};

module.exports = isDev;
