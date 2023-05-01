const userModel = require("../data-access-layer/models/userModel");

const getAllUsers = async () => {
  return await userModel.find({});
};

const getUserById = async (id) => {
  return await userModel.findById(id);
};

const addUser = async (user) => {
  const newUser = new userModel(user);
  return await newUser.save();
};

const updateUser = async (id, user) => {
  return await userModel.findByIdAndUpdate(id, user);
};

const deleteUser = async (id) => {
  return await userModel.findByIdAndDelete(id);
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};
