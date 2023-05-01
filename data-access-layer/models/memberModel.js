const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema(
  {
    email: String,
    city: String,
    name: String,
  },
  { versionKey: false }
);

const Member = mongoose.model("member", memberSchema);

module.exports = Member;
