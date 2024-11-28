// routes/challenges.js
const express = require('express');
const Challenge = require('../models/Challenge');
const router = express.Router();

router.get('/', async (req, res) => {
  const challenges = await Challenge.find();
  res.json(challenges);
});

router.post('/', async (req, res) => {
  const challenge = new Challenge(req.body);
  await challenge.save();
  res.status(201).json(challenge);
});

module.exports = router;
