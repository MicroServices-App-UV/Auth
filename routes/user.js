const express = require("express");
const passport = require("passport");
const { getUser, updateUser } = require("../controllers/UserController");
const router = express.Router();

// @ desc Auth with Google
// @route GET /auth/google
router.get("/:id", getUser, (req, res) => {
  res.send(req.user);
});

router.put("/:id", updateUser, (req, res) => {
  res.send(req.updatedUser);
});

module.exports = router;
