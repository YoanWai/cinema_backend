const MemberModel = require("../data-access-layer/models/memberModel");

const getAllMembers = async () => {
  return await MemberModel.find({});
};

const getMemberById = async (id) => {
  return await MemberModel.findById(id);
};

const addMember = async (member) => {
  const newMember = new MemberModel(member);
  return await newMember.save();
};

const updateMember = async (id, member) => {
  return await MemberModel.findByIdAndUpdate(id, member);
};

const deleteMember = async (id) => {
  return await MemberModel.findByIdAndDelete(id);
};

module.exports = {
  getAllMembers,
  getMemberById,
  addMember,
  updateMember,
  deleteMember,
};
