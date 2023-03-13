const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");
const passportLocal = require("passport-local");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

router.get("/register", (req, res) => {
  res.render("register");
});
router.post("/register", async (req, res, next) => {
  try {
    let { username, password, email } = req.body;
    let user = new User({ username: username, email: email });
    let newUser = await User.register(user, password);
    req.login(newUser, (err) => {
      if (err) return next(err);
      req.flash("success", "welcome to Trakin Zone");
      res.json(req.user.username);
    });
  } catch (e) {
    req.flash("error", e.message);
    res.json(e.message);
  }
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/auth/fail",
  }),
  (req, res) => {
    req.flash("success", "welcome back!");
    const user_data = { id: req.user._id, name: req.user.username };
    res.json(user_data);
  }
);

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success", "GOOD Bye!! see you soon");
  res.redirect("/");
});

//callback route for google strategy
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  console.log(req.session);
  res.redirect(req.session.returnTo);
});

router.get("/fail", (req, res) => {
  res.json("incorrect username or password");
});

const sendEmail = (receiver, text, subject) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "atishay.bhl@gmail.com",
      pass: "ASDFGHJ@11",
    },
  });

  const mailOptions = {
    from: "atishay.bhl@gmail.com",
    to: receiver,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

router.post("/reset-password", async (req, res) => {
  const { email, username } = req.body;

  if (email) {
    let foundUser = await User.findOne({ email: email });
    if (foundUser) {
      const Token = crypto.randomBytes(32).toString("hex");
      for (let i = 0; i <= foundUser.reset.length; i++) {
        foundUser.reset.pop();
      }
      foundUser.reset.push({
        Token: Token,
        Expires: Date.now() + 60 * 60 * 1000,
      });
      let savedUser = await foundUser.save();
      sendEmail(
        foundUser.email,
        ` please reset your password here :http://localhost:3000/auth/reset-password-authenticate-mail/${foundUser._id}/${Token}`,
        `Password Reset Link`
      );

      return res.json(
        "A password reset link has been sent to your registered email address"
      );
    } else {
      return res.json("no user found with the entered email address");
    }
  } else {
    if (username) {
      let foundUser = await User.findOne({ username: username });

      if (foundUser) {
        const Token = crypto.randomBytes(32).toString("hex");
        for (let i = 0; i <= foundUser.reset.length; i++) {
          foundUser.reset.pop();
        }
        foundUser.reset.push({
          Token: Token,
          Expires: Date.now() + 60 * 60 * 1000,
        });

        let savedUser = await foundUser.save();
        sendEmail(
          foundUser.email,
          ` please reset your password here :http://localhost:3000/auth/reset-password-authenticate-mail/${foundUser._id}/${Token}`,
          `Password Reset Link`
        );

        return res.json(
          "A password reset link has been sent to your registered email address"
        );
      } else {
        return res.json("no user found with the entered username");
      }
    }
  }

  return res.json("Internal server error");
});

router.get("/reset-password-authenticate-mail/:id/:token", async (req, res) => {
  let { id, token } = req.params;
  let foundUser = await User.findById(id);
  if (foundUser) {
    let dateNow = Date.now();
    console.log(dateNow);

    let dateFromDatabase = foundUser.reset[0].Expires;
    console.log(dateFromDatabase);
    if (foundUser.reset[0].Token == token && dateNow <= dateFromDatabase) {
      res.render("newCredentials", { token, id });
    } else {
      res.send("you are not allowed to do that");
    }
  }
});

router.post("/reset-password-new-credentials/:id/:token", async (req, res) => {
  let { id, token } = req.params;
  let { password } = req.body;
  let foundUser = await User.findById(id);
  if (foundUser) {
    let dateNow = Date.now();
    let dateFromDatabase = foundUser.reset[0].Expires;
    if (foundUser.reset[0].Token == token && dateNow <= dateFromDatabase) {
      await foundUser.setPassword(password);
      await foundUser.save();
      req.flash("success", "password changed successfully");
      req.login(foundUser, (err) => {
        if (err) return next(err);
      });
      res.redirect("/");
    } else {
      req.flash("error", "please try again");
      res.redirect("/");
    }
  }
});

router.get("/ui", (req, res) => {
  res.render("newCredentials");
});
module.exports = router;
