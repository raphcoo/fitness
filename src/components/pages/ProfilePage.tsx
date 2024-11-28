import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import BackgroundImage from '../../assets/background.jpg';

const ProfilePage = () => {
  const { username } = useParams<{ username: string }>(); // Récupère le paramètre username
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    if (username) {
      // Simuler la récupération des informations d'utilisateur, ou utiliser une requête API réelle
      setUser({ name: username });
    }
  }, [username]);

  return (
    <div style={{
      height: '100vh',
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Container
        maxWidth="sm"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          padding: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '10px',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Bonjour {user ? user.name : 'Invité'}, heureux de vous revoir !
        </Typography>
        <Typography variant="body1" gutterBottom>
          En quoi puis-je vous aider aujourd'hui ?
        </Typography>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><a href="/workout" style={{ color: '#FF9800', textDecoration: 'none' }}>Workout</a></li>
          <li><a href="/nutrition" style={{ color: '#FF9800', textDecoration: 'none' }}>Nutrition</a></li>
          <li><a href="/recipe-ideas" style={{ color: '#FF9800', textDecoration: 'none' }}>recipes</a></li>
        </ul>
      </Container>
    </div>
  );
};

export default ProfilePage;
