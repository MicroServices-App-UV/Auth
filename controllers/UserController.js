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

module.exports = {
  registerUser,
};
