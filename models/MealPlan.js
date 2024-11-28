// models/MealPlan.js
const mongoose = require('mongoose');

const mealPlanSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  day: String,
  meals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Meal' }],
});

const MealPlan = mongoose.model('MealPlan', mealPlanSchema);

module.exports = MealPlan;
