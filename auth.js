const db = require("./db/models");

const loginUser = (req, res, user) => {
  req.session.auth = {
    userId: user.id,
  };
};

const logoutUser = (req, res) => {
  // req.session.auth = "undefined"
  console.log(req.session.auth)
  delete req.session.auth;
};

module.exports = { loginUser, logoutUser };
