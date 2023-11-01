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

const updateUser = async (userId, updatedFields) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updatedFields },
      { new: true }
    );
    return updatedUser;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  addUser,
  getUser,
  updateUser,
};
