const express = require("express");
const passport = require("passport");
const { getUser } = require("../controllers/UserController");
const router = express.Router();

// @ desc Auth with Google
// @route GET /auth/google
router.get("/:id", getUser, (req, res) => {
  res.send(req.user);
});

module.exports = router;
