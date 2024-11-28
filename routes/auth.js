const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Modèle utilisateur

// Route de connexion
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Vérifiez si l'utilisateur existe déjà
    let user = await User.findOne({ email });

    if (!user) {
      // Si l'utilisateur n'existe pas, créez un nouvel utilisateur
      const hashedPassword = await bcrypt.hash(password, 10);
      user = new User({ email, password: hashedPassword });
      await user.save();

      console.log('New user created:', email);
      return res.status(201).json({
        message: 'User created and logged in successfully',
        user: {
          _id: user._id,
          email: user.email,
          username: email.split('@')[0],
        },
      });
    }

    // Si l'utilisateur existe, vérifiez le mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log('Invalid password');
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    console.log('User logged in:', email);
    res.status(200).json({
      message: 'Login successful',
      user: {
        _id: user._id,
        email: user.email,
        username: email.split('@')[0],
      },
    });
  } catch (error) {
    console.error('Error during login/signup:', error);
    res.status(500).send('Server error');
  }
});


// Route d'inscription
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  console.log('Signup attempt:', { email });

  try {
    // Vérifier si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Création d'un nouvel utilisateur
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    console.log('User created:', newUser);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
