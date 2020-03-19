const router = require("express").Router();
const Workout = require("../models/workout");

// New Workout
router.post("/api/workouts", (req, res) => {

  console.log(req.body)
  res.send(req.body)

});

router.put("/api/workouts/:id", ({ body }, res) => {

console.log(req.params.id)
console.log(req.body)
res.send(req.body)

});

// Continue Workout
// router.post("/api/workouts", ({ body }, res) => {
//     Workout.create(body)
//     .then(dbWorkout => {
//         res.json(dbWorkout);
//     })
//     .catch(err => {
//         res.json(err);
//     });
// });

// router.put("/api/workouts/id:", ({ body, params }, res) => {
//       Workout.findByIdAndUpdate(
//         params.id,
//         { $push: { exercises: body } }
//         )
//       .catch(err => {
//           res.json(err);
//       });
//   });

// // Fitness Tracker Dashboard
// router.get("/api/workouts", (req, res) => {
//   Workout.find({})
//     .sort({ date: -1 })
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       // res.json(err);
//       res.status(400).json(err);
//     });
// });


module.exports = router;