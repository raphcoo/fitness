const mongoose = require('mongoose');

const nutritionSchema = new mongoose.Schema({
  meal: String,
  calories: Number,
});

module.exports = mongoose.model('Nutrition', nutritionSchema);
