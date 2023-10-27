const userService = require("../services/userService");

const registerUser = async (req, res, next) => {
  try {
    const newUser = await userService.addUser(req.body);
    const userId = newUser._id;
    req._id = userId;
    next();
  } catch (err) {
    console.error(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = await userService.getUser(req.params.id);
    req.user = user;
    next();
  } catch (err) {}
};

module.exports = {
  registerUser,
  getUser,
};
