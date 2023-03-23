require("dotenv").config();

const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

require("./backend/config/db");

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

// Check if token and create req.user
app.use(require("./backend/config/checkToken"));

//Routes:
app.use("/api/users", require("./backend/routes/api/users"));
app.use("/api/categories", require("./backend/routes/api/categories"));
app.use("/api/ideas", require("./backend/routes/api/ideas"));
app.use("/api/lists", require("./backend/routes/api/lists"));

// Put API routes here, before the "catch all" route

app.get("/api", (req, res) => {
  res.json({ message: "The API is alive!!!" });
});

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
