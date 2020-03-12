const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.envPORT || 8000;

const app = express();

const Workout = require("./workoutModel")           // May need to rename later

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true };)

// app.LISTEN
app.listen(PORT, () => {
console.log("app running on port ${PORT}!");
});
// app.POST
app.post("/submit", ({ body }, res) => {
    Exercise.create(body)
    .then(dbExercise => {                            // May need to rename later
        res.json(dbExercise);
    })
    .catch(err => {
        res.json(err);
    });
});

// app.GET
