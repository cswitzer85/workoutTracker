const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true
});

// app.use(require("./routes/views"));
require("./routes/expressApiRoutes")(app);

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.get("/exercise", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/exercise.html"));
});

// Stats page
app.get("/stats", function(req, res) {
  res.sendFile(path.join(__dirname + "/public/stats.html"));
});

// app.LISTEN
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}!`);
});
