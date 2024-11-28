const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  title: String,
  description: String,
  targetDate: Date,
});

module.exports = mongoose.model('Goal', goalSchema);
