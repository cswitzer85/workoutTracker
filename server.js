const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.envPORT || 8000;

// var db = mongoose.connection;
const db = require("./models/workout");

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true
});
// db.on('error', console.error.bind(console, 'connection error: '));
// db.once('open', () => {
//     console.log('Connected to mongodb!!!');
// });

app.use(require("./routes/views"));
// app.use(require("./routes/expressApiRoutes"));




app.post("/api/workouts", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.put("/api/workouts/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);
  res.send(req.body);
});





// app.LISTEN
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}!`);
});
