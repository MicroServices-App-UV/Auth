const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

// @ desc Login/Landing page
// @route GET /
router.get("/login", (req, res) => {
  res.render("login", { layout: "login" });
});

// @ desc SignUp page
// @route GET /signup
router.get("/signup", (req, res) => {
  res.render("signup", { layout: "login" });
});

// @ desc SignUp post receiver
// @route POST /signup
router.post("/signup", userController.registerUser);

// @ desc Register
// @route GET /register
router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/", (req, res) => {
  res.render("landing", { layout: "landing" });
});

module.exports = router;
