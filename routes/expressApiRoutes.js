const router = require("express").Router();
const Workout = require("../models/workout");

// New Workout Put
router.post("/api/workouts", (req, res) => {
  console.log(req.body);
  res.send(req.body);
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

// Workout post
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});
// Workout Put
router.put("/api/workouts/:id", (req, res) => {
  db.workouts
    .update({ _id: req.params.id }, { $push: { exercises: body } })
    .catch(err => {
      req.json(err);
    });
});

// Workout Get
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(res.json(dbWorkout)
    )
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
