import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Container, Typography, Grid, Card, CardContent, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Type des exercices
type Exercise = {
  name: string;
  description: string;
  videoUrl: string;
};

// Type des exercices par type de corps
type WorkoutPlan = {
  ectomorph: Exercise[];
  mesomorph: Exercise[];
  endomorph: Exercise[];
};

// Exemple de données avec vidéos
const workouts: WorkoutPlan = {
  ectomorph: [
    { name: 'Push Ups', description: 'Do 3 sets of 15 push-ups.', videoUrl: 'https://www.youtube.com/embed/_l3ySVKYVJ8' },
    { name: 'Pull Ups', description: 'Do 3 sets of 10 pull-ups.', videoUrl: 'https://www.youtube.com/embed/eGo4IYlbE5g' },
    { name: 'Plank', description: 'Hold the plank for 30 seconds.', videoUrl: 'https://www.youtube.com/embed/pSHjTRCQxIw' },
  ],
  mesomorph: [
    { name: 'Squats', description: 'Do 3 sets of 20 squats.', videoUrl: 'https://www.youtube.com/embed/aclHkVaku9U' },
    { name: 'Lunges', description: 'Do 3 sets of 12 lunges on each leg.', videoUrl: 'https://www.youtube.com/embed/QOVaHwm-Q6U' },
    { name: 'Deadlift', description: 'Perform 3 sets of 8 repetitions.', videoUrl: 'https://www.youtube.com/embed/r4MzxtBKyNE' },
  ],
  endomorph: [
    { name: 'Jumping Jacks', description: 'Do 3 sets of 30 jumping jacks.', videoUrl: 'https://www.youtube.com/embed/c4DAnQ6DtF8' },
    { name: 'High Knees', description: 'Do 3 sets of 30 seconds.', videoUrl: 'https://www.youtube.com/embed/OAJ_J3EZkdY' },
    { name: 'Mountain Climbers', description: 'Do 3 sets of 20 reps per leg.', videoUrl: 'https://www.youtube.com/embed/zT-9L3DT7bE' },
  ],
};

const Workout: React.FC = () => {
  const [bodyType, setBodyType] = useState<'ectomorph' | 'mesomorph' | 'endomorph'>('ectomorph');
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(workouts[bodyType][0]);
  const navigate = useNavigate();

  const generateRandomExercise = () => {
    const bodyTypeWorkouts = workouts[bodyType];
    const randomExercise = bodyTypeWorkouts[Math.floor(Math.random() * bodyTypeWorkouts.length)];
    setSelectedExercise(randomExercise);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#000', 
      color: '#fff', 
      display: 'flex', 
      flexDirection: 'column',
    }}>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: '#FF9800' }}>
        <Toolbar>
          <Button color="inherit" onClick={() => navigate('/')}>
            Home
          </Button>
        </Toolbar>
      </AppBar>

      {/* Contenu principal centré */}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ flexGrow: 1, padding: '20px' }}
      >
        <Container 
          sx={{
            width: { xs: '90%', sm: '80%', md: '60%' }, // Largeur responsive
            padding: { xs: '20px', sm: '40px' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '10px',
          }}
        >
          <Typography 
            variant="h4" 
            gutterBottom 
            sx={{ 
              fontSize: { xs: '1.5rem', md: '2rem' }, 
              textAlign: 'center',
            }}
          >
            Select Your Body Type and Get an Exercise
          </Typography>

          {/* Sélection du type de corps */}
          <FormControl fullWidth sx={{ marginBottom: '20px' }}>
            <InputLabel sx={{ color: '#fff' }}>Body Type</InputLabel>
            <Select
              value={bodyType}
              onChange={(e) => {
                setBodyType(e.target.value as 'ectomorph' | 'mesomorph' | 'endomorph');
                setSelectedExercise(workouts[e.target.value as 'ectomorph' | 'mesomorph' | 'endomorph'][0]);
              }}
              label="Body Type"
              sx={{ backgroundColor: 'rgba(192, 192, 192, 0.8)', borderRadius: '5px' }}
            >
              <MenuItem value="ectomorph">Ectomorph</MenuItem>
              <MenuItem value="mesomorph">Mesomorph</MenuItem>
              <MenuItem value="endomorph">Endomorph</MenuItem>
            </Select>
          </FormControl>

          <Card sx={{ backgroundColor: '#333', marginBottom: '20px', width: '100%' }}>
            <CardContent>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#fff', 
                  fontSize: { xs: '1.2rem', sm: '1.5rem' },
                  textAlign: 'center',
                }}
              >
                {selectedExercise?.name}
              </Typography>
              <Typography sx={{ color: '#ccc', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                {selectedExercise?.description}
              </Typography>
              <iframe
                width="100%"
                height="200"
                src={selectedExercise?.videoUrl}
                title={selectedExercise?.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ marginTop: '10px', borderRadius: '5px' }}
              ></iframe>
            </CardContent>
          </Card>

          <Button 
            variant="contained" 
            onClick={generateRandomExercise}
            sx={{
              backgroundColor: '#FF9800',
              color: '#fff',
              '&:hover': { backgroundColor: '#e68900' },
              fontSize: { xs: '0.9rem', md: '1rem' },
            }}
          >
            Generate New Exercise
          </Button>
        </Container>
      </Grid>
    </div>
  );
};

export default Workout;
