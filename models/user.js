const mongoose = require("mongoose");
const passportLocalmongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email field can not be empty"],
  },
  reset: [
    {
      Token: {
        type: String,
      },
      Expires: {
        type: Number,
      },
    },
  ],
  googleId: String,
  facebookId: String,
  twitterId: String,
});

userSchema.plugin(passportLocalmongoose);

const User = mongoose.model("User", userSchema);
module.exports = User;
