import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';
import BackgroundImage from '../../assets/background.jpg'; // Assurez-vous que le chemin est correct

const Signup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [prenom, setPrenom] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5003/auth/signup', {
        email,
        password,
        prenom,
      });
      setMessage(response.data.message); // Message de succès
    } catch (error) {
      setMessage("Erreur lors de l'inscription !");
      console.error('Erreur lors de l’inscription', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Signup
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Prénom"
          fullWidth
          margin="normal"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Signup
        </Button>
        {message && <Typography>{message}</Typography>}
      </form>
    </Container>
  );
};

export default Signup;