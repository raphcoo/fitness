import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

interface ExercisesData {
  [key: string]: {
    [key: string]: string[];
  };
}

const exercisesData: ExercisesData = {
  male: {
    ectomorph: ['Exercice 1', 'Exercice 2', 'Exercice 3'],
    mesomorph: ['Exercice 4', 'Exercice 5', 'Exercice 6'],
    endomorph: ['Exercice 7', 'Exercice 8', 'Exercice 9'],
  },
  female: {
    ectomorph: ['Exercice 10', 'Exercice 11', 'Exercice 12'],
    mesomorph: ['Exercice 13', 'Exercice 14', 'Exercice 15'],
    endomorph: ['Exercice 16', 'Exercice 17', 'Exercice 18'],
  },
};

const Exercises: React.FC = () => {
  const { gender, bodyType } = useParams<{ gender: string; bodyType: string }>();

  console.log(`Gender: ${gender}, Body Type: ${bodyType}`);

  if (!gender || !bodyType) {
    return <Typography variant="h6">Invalid selection</Typography>;
  }

  const exercises = exercisesData[gender][bodyType];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Exercises for {bodyType}
      </Typography>
      <ul>
        {exercises.map((exercise, index) => (
          <li key={index}>{exercise}</li>
        ))}
      </ul>
    </Container>
  );
};

export default Exercises;
