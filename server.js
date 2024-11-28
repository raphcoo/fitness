const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

// Initialize the app
const app = express();
const port = 5003;

// CORS configuration: autoriser les origines pour localhost avec différents ports
app.use(cors({
  origin: ['http://localhost:3000', 'http://192.168.1.76:3000'], // Ajoutez les origines nécessaires
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));


// Middleware
app.use(express.json());
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      imgSrc: ["'self'", "data:"],
      // Ajoutez d'autres directives si nécessaire
    }
  }
}));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Importing routers
const authRouter = require('./routes/auth');
const goalsRouter = require('./routes/goals');
const workoutsRouter = require('./routes/workouts');
const mealsRouter = require('./routes/meals');

// Connexion à MongoDB
mongoose.connect('mongodb+srv://raphco:mathilde@educluster.vsxd94v.mongodb.net/?retryWrites=true&w=majority&appName=EDUCluster')
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Routes
app.use('/auth', authRouter); // Route pour authentification
app.use('/workouts', workoutsRouter);
app.use('/meals', mealsRouter);

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});

