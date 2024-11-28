// routes/badges.js
const express = require('express');
const Badge = require('../models/Badge');
const router = express.Router();

router.get('/', async (req, res) => {
  const badges = await Badge.find();
  res.json(badges);
});

router.post('/', async (req, res) => {
  const badge = new Badge(req.body);
  await badge.save();
  res.status(201).json(badge);
});

module.exports = router;
