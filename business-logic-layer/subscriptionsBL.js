const SubscriptionModel = require("../data-access-layer/models/subscriptionModel");

const getAllSubscriptions = async () => {
  return await SubscriptionModel.find({});
};

const getSubscriptionById = async (id) => {
  return await SubscriptionModel.findById(id);
};

const addSubscription = async (subscription) => {
  const newSubscription = new SubscriptionModel(subscription);
  return await newSubscription.save();
};

const updateSubscription = async (id, subscription) => {
  return await SubscriptionModel.findByIdAndUpdate(id, subscription);
};

const deleteSubscription = async (id) => {
  return await SubscriptionModel.findByIdAndDelete(id);
};

module.exports = {
  getAllSubscriptions,
  getSubscriptionById,
  addSubscription,
  updateSubscription,
  deleteSubscription,
};
