import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Typography } from '@mui/material';

const BodyTypeSelection: React.FC = () => {
  const navigate = useNavigate();

  const handleSelection = (bodyType: string) => {
    navigate(`/exercises/male/${bodyType}`);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Select Your Body Type
      </Typography>
      <Button variant="contained" color="primary" onClick={() => handleSelection('ectomorph')}>
        Ectomorph
      </Button>
      <Button variant="contained" color="secondary" onClick={() => handleSelection('mesomorph')}>
      <img src="./images/mesomorph.jpeg" alt="mesomorph" style={{ width: 20, height: 20 }} />
      
        Mesomorph 
        
      </Button>
      <Button variant="contained" color="inherit" onClick={() => handleSelection('endomorph')}>
        Endomorph
      </Button>
    </Container>
  );
};

export default BodyTypeSelection;
