const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema(
  {
    movieId: String,
    memberId: String,
    date: String,
  },
  { versionKey: false }
);

const Subscription = mongoose.model("subscription", subscriptionSchema);

module.exports = Subscription;
