// Requiring path
var path = require("path");
var __dirname = path.resolve();
module.exports = function(app) {

  // Index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // New workout page
  app.get("/workout", function(req, res) {
    console.log("workout __dirname:",  __dirname)
    res.sendFile(path.join(__dirname + "/workout.html"));
    // res.sendFile(path.join(__dirname, "../public/workout.html"));
  });

  // Continue workout page
  // app.get("/workout?id=:id", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/workout.html"));
  // });

  // Stats page
  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

};
