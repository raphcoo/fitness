import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Typography } from '@mui/material';

const GenderSelection: React.FC = () => {
  const navigate = useNavigate();

  const handleSelection = (gender: string) => {
    console.log(`Gender selected: ${gender}`);
    navigate(`/body-type/${gender}`);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Select Your Gender
      </Typography>
      <Button variant="contained" color="primary" onClick={() => handleSelection('male')}>
        Male
      </Button>
      <Button variant="contained" color="secondary" onClick={() => handleSelection('female')}>
        Female
      </Button>
    </Container>
  );
};

export default GenderSelection;
