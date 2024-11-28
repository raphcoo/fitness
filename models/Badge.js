// models/Badge.js
const mongoose = require('mongoose');

const badgeSchema = new mongoose.Schema({
  name: String,
  description: String,
  icon: String,
  criteria: String,
});

const Badge = mongoose.model('Badge', badgeSchema);

module.exports = Badge;
