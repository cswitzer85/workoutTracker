// Requiring path
var path = require("path");
module.exports = function(app) {

  // Index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // New Workout page
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  // Continue Workout page
  app.get("/exercise?", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  // Stats page
  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

};
