const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/db");
const { engine } = require("express-handlebars");
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");

// Load config
dotenv.config({ path: "./config/config.env" });

//Passport config
require("./config/passport")(passport);

//Database connection
connectDB();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Handlebars
app.engine(".hbs", engine({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", ".hbs");

//Body middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Sessions middleware
app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
//Static folder
app.use(express.static(path.join(__dirname, "public")));
//Routes
app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));
app.use("/graphql", require("./routes/graphql"));
app.use("/user", require("./routes/user"));

const PORT = process.env.PORT || 6000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

app.listen();
