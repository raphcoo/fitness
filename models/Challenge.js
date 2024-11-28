// models/Challenge.js
const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
  title: String,
  description: String,
  startDate: Date,
  endDate: Date,
});

const Challenge = mongoose.model('Challenge', challengeSchema);

module.exports = Challenge;
