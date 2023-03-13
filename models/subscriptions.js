let mongoose = require("mongoose");

let subscriptionSchema = new mongoose.Schema({
  endpoint: String,
  auth: String,
  p256dh: String,
});

let Subscription = mongoose.model("Subscription", subscriptionSchema);

module.exports = Subscription;
