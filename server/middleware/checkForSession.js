module.exports = function(req, res, next) {
    if (!req.session.user) {
      console.log("creating new session");
      req.session.user = {
        username: "",
        loggedIn: false,
        }
      };
    next();
  };