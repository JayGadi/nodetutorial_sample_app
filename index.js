const express = require("express");
const passport = require("passport");
const googleClientID = require("keys.js").googleClientID;
const googleClientSecret = require("keys.js").googleClientSecret;
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

passport.use(new GoogleStrategy());



const PORT = process.env.PORT || 5000;
app.listen(PORT);
