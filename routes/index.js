const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/UserController");
// @ desc Login/Landing page
// @route GET /
router.get("/login", (req, res) => {
  res.render("login", { layout: "login" });
  // res.redirect("http://localhost:3001");
});

router.get("/menu", (req, res) => {
  res.redirect("http://localhost:3001");
});

// @ desc SignUp page
// @route GET /signup
router.get("/signup", (req, res) => {
  res.render("signup", { layout: "login" });
});

// @ desc SignUp post receiver
// @route POST /signup
router.post("/signup", registerUser, (req, res) => {
  delete req.body.password;
  req.body._id = req._id;
  req.session.user = req.body;
  res.redirect("/graphql/signup");
});

// @ desc Register
// @route GET /register
router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/", (req, res) => {
  res.render("landing", { layout: "landing" });
});

module.exports = router;
