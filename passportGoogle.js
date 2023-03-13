if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const User = require("./models/user");

passport.serializeUser((user, done) => {
  done(null, user.id); //from here it will go to passport.deserializeUser()
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    //it will take the id and find that user in  our database and pass to /google/redirect route
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      //options for google stretegy      //this is when we first time use passport.authenticate("google")
      callbackURL:
        "https://desolate-badlands-28322.herokuapp.com/auth/google/redirect", //callback url for google
      clientID: `${process.env.clientID}`,
      clientSecret: `${process.env.clientSecret}`,
      passReqToCallback: true,
    },
    (req, accessToken, refreshToken, profile, done) => {
      // that's the callback function which run after the user is authenticated from google and google redirects to us  /////////////it hits because of the second passport.authenticate("google")
      User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          done(null, currentUser); //when found the user already in the database so passing the founduser to done
        }
        //if it's not found in our database we will create that user in our database
        else {
          new User({
            username: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
          })
            .save()
            .then((newUser) => {
              console.log(newUser);
              done(null, newUser); //pass the made user to done  ,so now it will call to serialize user to passport.serializeUser()
            });
        }
      });
    }
  )
);
