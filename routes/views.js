// Requiring path
var path = require("path");
const router = require("express").Router();
// var __dirname = path.resolve();

  // Index page
  router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // New workout page
  // router.get("/workout", function(req, res) {
  //   console.log("workout __dirname: ",  __dirname)
  //   res.sendFile(path.join(__dirname + "/workout.html"));
    // res.sendFile(path.join(__dirname, "../public/workout.html"));
  // });

  // Continue workout page
  // router.get("/workout?id=:id", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/workout.html"));
  // });

  router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  // Stats page
  router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });




module.exports = router;