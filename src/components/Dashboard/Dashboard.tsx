// src/components/Dashboard/Dashboard.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProgressChart from './ProgressChart';
import { Container, Typography } from '@mui/material';

const Dashboard: React.FC = () => {
  const [workoutData, setWorkoutData] = useState<any>(null);

  useEffect(() => {
    axios.get('http://localhost:5000/workouts')
      .then(response => {
        const workouts = response.data;
        const chartData = {
          labels: workouts.map((workout: any) => new Date(workout.date).toLocaleDateString()),
          datasets: [
            {
              label: 'Calories Burned',
              data: workouts.map((workout: any) => workout.caloriesBurned),
              borderColor: 'rgba(75,192,192,1)',
              fill: false,
            },
          ],
        };
        setWorkoutData(chartData);
      })
      .catch(error => {
        console.error('There was an error fetching the workouts!', error);
      });
  }, []);

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      {workoutData && <ProgressChart data={workoutData} />}
    </Container>
  );
};

export default Dashboard;
