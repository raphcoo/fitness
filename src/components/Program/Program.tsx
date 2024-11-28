import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';

const Program: React.FC = () => {
  const { type } = useParams<{ type: string }>();

  const getProgramDetails = (type: string) => {
    switch (type) {
      case 'Ectomorph':
        return 'Ectomorphs have a high metabolism and struggle to gain weight. A high-calorie diet and strength training program are recommended.';
      case 'Mesomorph':
        return 'Mesomorphs are naturally muscular and respond well to both strength training and cardio. A balanced diet and varied workout routine are ideal.';
      case 'Endomorph':
        return 'Endomorphs tend to gain weight easily. A combination of cardio and strength training with a focus on a clean diet is recommended.';
      default:
        return 'Select a valid body type.';
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        {type} Program
      </Typography>
      <Typography variant="body1">
        {getProgramDetails(type || '')}
      </Typography>
    </Container>
  );
};

export default Program;
