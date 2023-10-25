const User = require("../models/User");

const addUser = async (userData) => {
  try {
    const newUser = new User(userData);
    await newUser.save();
    return newUser;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  addUser,
};
