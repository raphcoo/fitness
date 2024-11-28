const express = require('express');
const router = express.Router();
const Nutrition = require('../models/Nutrition');

router.post('/', async (req, res) => {
  const newMeal = new Nutrition(req.body);
  await newMeal.save();
  res.status(201).send(newMeal);
});

router.get('/', async (req, res) => {
  const meals = await Nutrition.find();
  res.status(200).send(meals);
});

router.put('/:id', async (req, res) => {
  const updatedMeal = await Nutrition.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).send(updatedMeal);
});

router.delete('/:id', async (req, res) => {
  await Nutrition.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
