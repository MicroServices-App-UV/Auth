const userService = require("../services/userService");

const registerUser = async (req, res, next) => {
  try {
    await userService.addUser(req.body);
    res.send("<h1> El usario se ha registrado correctamente</h1>");
    next();
  } catch (err) {
    console.error(err);
    res.send("<h1>El usuario NO se ha podido registrar</h1>");
  }
};

module.exports = {
  registerUser,
};
