const verifyToken = require("../utils/verifyTokenUtil");

const express = require("express");

const router = express.Router();

const MembersBL = require("../business-logic-layer/membersBL");

router.get("/", verifyToken, async (req, res) => {
  const members = await MembersBL.getAllMembers();
  res.status(200).json(members);
});

router.get("/:id", verifyToken, async (req, res) => {
  const id = req.params.id;
  const member = await MembersBL.getMemberById(id);
  res.status(200).json(member);
});

router.post("/", verifyToken, async (req, res) => {
  const member = req.body;
  const newMember = await MembersBL.addMember(member);
  res.status(200).json(newMember);
});

router.put("/:id", verifyToken, async (req, res) => {
  const id = req.params.id;
  const member = req.body;
  const updatedMember = await MembersBL.updateMember(id, member);
  res.status(200).json(updatedMember);
});

router.delete("/:id", verifyToken, async (req, res) => {
  const id = req.params.id;
  const deletedMember = await MembersBL.deleteMember(id);
  res.status(200).json(deletedMember);
});

module.exports = router;
