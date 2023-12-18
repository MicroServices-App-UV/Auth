const express = require("express");
const passport = require("passport");
const router = express.Router();

// @ desc Auth with Google
// @route GET /auth/google
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// @ desc Google Auth Callback
// @route GET /auth/google/callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("http://localhost:3001");
  }
);

module.exports = router;
