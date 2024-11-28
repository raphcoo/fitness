const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout');

router.post('/', async (req, res) => {
  const newWorkout = new Workout(req.body);
  await newWorkout.save();
  res.status(201).send(newWorkout);
});

router.get('/', async (req, res) => {
  const workouts = await Workout.find();
  res.status(200).send(workouts);
});

router.put('/:id', async (req, res) => {
  const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).send(updatedWorkout);
});

router.delete('/:id', async (req, res) => {
  await Workout.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
