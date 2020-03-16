const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Keys named based on public workout js file
const workoutSchema = new Schema({
  type: {
    type: String,
    required: "Please make a selection"
  },

  name: {
    type: String
  },

  duration: {
    type: Number,
    trim: true
  },

  weight: {
    type: Number,
    trim: true
  },

  reps: {
    type: Number,
    trim: true
  },
  sets: {
    type: Number,
    trim: true
  },
  distance: {
    type: Number,
    trim: true
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
