import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BackgroundImage from '../../assets/background.jpg';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêche le rechargement de la page
  
    try {
      console.log('Sending login request:', { email, password }); // Log des données envoyées
  
      const response = await axios.post('http://192.168.1.76:5003/auth/login', { email, password });
  
      console.log('Response from server:', response.data); // Log de la réponse du serveur
  
      const username = response.data.user.username; // Récupération du username
      if (username) {
        navigate(`/profile/${username}`); // Redirection vers la page de profil
      } else {
        alert('Login successful, but username is missing.');
      }
    } catch (error) {
      console.error('Login error:', error); // Log en cas d'erreur
      alert('Invalid email or password.');
    }
  };
  

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          width: { xs: '90%', sm: '80%', md: '60%' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          padding: { xs: '20px', sm: '40px' },
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '10px',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, textAlign: 'center' }}
        >
          Login
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              backgroundColor: 'rgba(192, 192, 192, 0.8)',
              borderRadius: '5px',
              marginBottom: '16px',
            }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              backgroundColor: 'rgba(192, 192, 192, 0.8)',
              borderRadius: '5px',
              marginBottom: '20px',
            }}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              marginTop: '20px',
              backgroundColor: '#FF9800',
              color: '#fff',
              '&:hover': { backgroundColor: '#e68900' },
              width: '100%',
              fontSize: { xs: '0.9rem', md: '1rem' },
            }}
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
