// routes/mealPlans.js
const express = require('express');
const MealPlan = require('../models/MealPlan');
const router = express.Router();

router.get('/:userId', async (req, res) => {
  const mealPlans = await MealPlan.find({ userId: req.params.userId });
  res.json(mealPlans);
});

router.post('/', async (req, res) => {
  const mealPlan = new MealPlan(req.body);
  await mealPlan.save();
  res.status(201).json(mealPlan);
});

module.exports = router;
