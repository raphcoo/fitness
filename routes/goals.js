const express = require('express');
const router = express.Router();
const Goal = require('../models/Goal');

router.post('/', async (req, res) => {
  const newGoal = new Goal(req.body);
  await newGoal.save();
  res.status(201).send(newGoal);
});

router.get('/', async (req, res) => {
  const goals = await Goal.find();
  res.status(200).send(goals);
});

router.put('/:id', async (req, res) => {
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).send(updatedGoal);
});

router.delete('/:id', async (req, res) => {
  await Goal.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
