const router = require("express").Router();
const Workout = require("../models/workout");

// New Workout
router.post("/api/workout", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
      // res.status(400).json(err);
    });
});

// Continue Workout
// router.post("/api/workout", ({ body }, res) => {
//     Workout.create(body)
//     .then(dbWorkout => {
//         res.json(dbWorkout);
//     })
//     .catch(err => {
//         res.json(err);
//     });
// });

// Fitness Tracker Dashboard
router.get("/api/workout", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      // res.json(err);
      res.status(400).json(err);
    });
});

module.exports = router;
