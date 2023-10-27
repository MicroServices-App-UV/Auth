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
const getUser = async (userId) => {
  try {
    const user = await User.findById({ _id: userId.toString() });
    return user;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  addUser,
  getUser,
};
