const User = require("../models/User");

const addUser = async (userData) => {
  try {
    console.log("El userData es", userData);
    const newUser = new User(userData);
    await newUser.save();
  } catch (error) {
    throw error;
  }
};
module.exports = {
  addUser,
};
