const verifyToken = require("../utils/verifyTokenUtil");

const express = require("express");

const router = express.Router();

const usersBL = require("../business-logic-layer/usersBL");

router.get("/", verifyToken, async (req, res) => {
  const users = await usersBL.getAllUsers();
  res.status(200).json(users);
});

router.get("/:id", verifyToken, async (req, res) => {
  const id = req.params.id;
  const user = await usersBL.getUserById(id);
  res.status(200).json(user);
});

router.post("/", verifyToken, async (req, res) => {
  const user = req.body;
  const newUser = await usersBL.addUser(user);
  res.status(200).json(newUser);
});

router.put("/:id", verifyToken, async (req, res) => {
  const id = req.params.id;
  const user = req.body;
  const updatedUser = await usersBL.updateUser(id, user);
  res.status(200).json(updatedUser);
});

router.delete("/:id", verifyToken, async (req, res) => {
  const id = req.params.id;
  const deletedUser = await usersBL.deleteUser(id);
  res.status(200).json(deletedUser);
});

module.exports = router;
