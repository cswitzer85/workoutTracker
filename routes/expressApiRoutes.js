// const router = require("express").Router();
// const Workout = require("../models/workout");
const db = require("../models");

module.exports = function(app) {
  // Workout Get
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        dbWorkout.forEach(workout => {
          var total = 0;
          workout.exercises.forEach(e => {
            total += e.duration;
          });
          workout.totalDuration = total;
        });
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  // Workout Put
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findOneAndUpdate(
      { _id: req.params.id },
      {
        // $inc: { totalDuration: req.body.duration },
        $push: { exercises: req.body }
      },
      { new: true }
    )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  // Workout post
  app.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

  // router.put("/api/workouts/:id", (req, res) => {
//   db.Workout.findOneAndUpdate(
//     { _id: req.params.id },
//     {
//       $push: { exercises: req.body }
//     }
//   ).catch(err => {
//     res.json(err);
//   });
// });


};

// module.exports = router;
