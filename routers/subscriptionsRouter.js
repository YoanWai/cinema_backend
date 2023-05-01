const verifyToken = require("../utils/verifyTokenUtil");

const express = require("express");

const router = express.Router();

const SubscriptionsBL = require("../business-logic-layer/subscriptionsBL");

router.get("/", verifyToken, async (req, res) => {
  const subscriptions = await SubscriptionsBL.getAllSubscriptions();
  res.status(200).json(subscriptions);
});

router.get("/:id", verifyToken, async (req, res) => {
  const id = req.params.id;
  const subscription = await SubscriptionsBL.getSubscriptionById(id);
  res.status(200).json(subscription);
});

router.post("/", verifyToken, async (req, res) => {
  const subscription = req.body;
  const newSubscription = await SubscriptionsBL.addSubscription(subscription);
  res.status(200).json(newSubscription);
});

router.put("/:id", verifyToken, async (req, res) => {
  const id = req.params.id;
  const subscription = req.body;
  const updatedSubscription = await SubscriptionsBL.updateSubscription(
    id,
    subscription
  );
  res.status(200).json(updatedSubscription);
});

router.delete("/:id", verifyToken, async (req, res) => {
  const id = req.params.id;
  const deletedSubscription = await SubscriptionsBL.deleteSubscription(id);
  res.status(200).json(deletedSubscription);
});

module.exports = router;
