const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const ExpressError = require("../utils/Expresserror");
const Suggestion = require("../models/suggestion");
const Subscriber = require("../models/newsletter");
const Subscription = require("../models/subscriptions");
const { isLoggedIn } = require("../middleware");

const webpush = require("web-push");

router.post(
  "/suggestions",
  catchAsync(async (req, res) => {
    let { Name, email_id, suggestion } = req.body;
    let newSuggestion = new Suggestion({
      name: Name,
      email: email_id,
      suggestion: suggestion,
    });
    await newSuggestion.save();
    req.flash("success", "We Got your suggestion,promise we wil Improve");
    res.redirect(req.session.returnTo);
  })
);

router.post("/subscribe", async (req, res) => {
  let { email_id } = req.body;
  let newSubscriber = new Subscriber({ email: email_id });
  await newSubscriber.save();
  req.flash(
    "success",
    "Hola!! subscribed to the TrakinZone weekly newsletter "
  );
  res.redirect("/");
});

router.post("/saveSubscription", async (req, res) => {
  let { endpoint, auth, p256dh } = req.body;
  let iSubscription = await Subscription.findOne({ endpoint });

  if (iSubscription) {
    return res.send("already Sent");
  } else {
    let subscription = new Subscription({
      endpoint: endpoint,
      auth: auth,
      p256dh: p256dh,
    });
    await subscription.save();
    console.log(subscription);
    return res.send("DONE");
  }
});

router.post("/trigger-push-message", async (req, res) => {
  let subscriptions = await Subscription.find({});
  let dataTosend = {
    notification: {
      title: "Example title",
      body: "This will be the body text to the notification",
      icon: "https://desolate-badlands-28322.herokuapp.com/logo.png",
    },
  };
  dataTosend = JSON.stringify(dataTosend);

  try {
    for (let subs of subscriptions) {
      let subscription = {
        endpoint: `${subs.endpoint}`,
        keys: {
          auth: `${subs.auth}`,
          p256dh: `${subs.p256dh}`,
        },
      };

      console.log(subscription);

      let result = await triggerPushMessage(subscription, dataTosend);

      console.log(result);
    }
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({ data: { success: true } }));
  } catch (e) {
    console.log(e);
    res.status(500);
    res.setHeader("Content-Type", "application/json");
    res.send(
      JSON.stringify({
        error: {
          id: "unable-to-send-messages",
          message:
            `We were unable to send messages to all subscriptions : ` +
            `'${err.message}'`,
        },
      })
    );
  }
});

const triggerPushMessage = async (subscription, dataToSend) => {
  try {
    let result = await webpush.sendNotification(subscription, dataToSend);
    return result;
  } catch (e) {
    return e;
  }
};

module.exports = router;
