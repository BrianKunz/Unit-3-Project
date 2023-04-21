require("dotenv").config();
require("./backend/config/db");
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cors = require("cors");
const ensureLoggedIn = require("./backend/config/ensureLoggedIn");

const app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

app.use((req, res, next) => {
  res.locals.data = {};
  next();
});

//Routes:
app.use(require("./backend/config/checkToken"));
app.use("/api/users", require("./backend/routes/api/users"));
// app.use("/api/ideas", ensureLoggedIn, require("./backend/routes/api/ideas"));
// app.use("/api/lists", ensureLoggedIn, require("./backend/routes/api/lists"));
app.use("/api/ideas", require("./backend/routes/api/ideas"));
app.use("/api/lists", require("./backend/routes/api/lists"));
app.use(
  "/api/categories",
  ensureLoggedIn,
  require("./backend/routes/api/categories")
);

// Put API routes here, before the "catch all" route

app.get("/api", (req, res) => {
  res.json({ message: "The API is alive!!!" });
});

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "App.js"));
// });

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
