const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.envPORT || 8000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(require("./routes/views"));
app.use(require("./routes/api"));


// app.LISTEN
    app.listen(PORT, () => {
    console.log(`app running on port ${PORT}!`);
    });