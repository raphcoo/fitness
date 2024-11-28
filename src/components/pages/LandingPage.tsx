import React, { useState } from 'react';
import { Container, Typography, Button, Grid, Select, MenuItem, FormControl, InputLabel, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Radio, RadioGroup, FormControlLabel, Alert } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import BackgroundImage from '../../assets/background.jpg';

const LandingPage: React.FC = () => {
  const [ageRange, setAgeRange] = useState('');
  const [bodyType, setBodyType] = useState('');
  const [gender, setGender] = useState('male');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleStart = () => {
    if (!gender || !ageRange || !bodyType) {
      setErrorMessage('Please select your gender, age range, and body type to continue.');
      return;
    }
    setErrorMessage('');
    navigate('/login');
  };

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const handleMenuClick = (route: string) => {
    navigate(route);
    setDrawerOpen(false);
  };

  const gridBackgroundColor = 'rgba(192, 192, 192, 0.8)';

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundImage: `url(${BackgroundImage})`, 
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton 
            edge="start" 
            color="inherit" 
            aria-label="menu" 
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Fitness Tracker
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: gridBackgroundColor,
            color: '#000',
          }
        }}
      > 
    
        <List>
          <ListItem button onClick={() => handleMenuClick('/workout')}>
            <ListItemText primary="Workouts" />
          </ListItem>
          <ListItem button onClick={() => handleMenuClick('/nutrition')}>
            <ListItemText primary="Nutrition" />
          </ListItem>
          <ListItem button onClick={() => handleMenuClick('/recipe-ideas')}>
            <ListItemText primary="Recipe Ideas" />
          </ListItem>
        </List>
      </Drawer>

      <Container 
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
          marginTop: { xs: '80px', sm: '100px' }, 
        }}
      >
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, textAlign: 'center' }}
        >
          Welcome to Fitness Tracker
        </Typography>
        <Typography 
          variant="h6" 
          gutterBottom 
          sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, textAlign: 'center' }}
        >
          Please choose your gender, age range, and body type
        </Typography>

        {errorMessage && (
          <Alert severity="error" sx={{ marginBottom: '20px', width: '100%' }}>
            {errorMessage}
          </Alert>
        )}

        <FormControl component="fieldset" sx={{ marginBottom: '20px' }}>
          <RadioGroup
            row
            aria-label="gender"
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </RadioGroup>
        </FormControl>

        <Grid container spacing={3} sx={{ width: '100%' }}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined" sx={{ backgroundColor: gridBackgroundColor, borderRadius: '10px' }}>
              <InputLabel>Age group</InputLabel>
              <Select
                value={ageRange}
                onChange={(e) => setAgeRange(e.target.value as string)}
                label="Age group"
              >
                <MenuItem value="18-25">18-25</MenuItem>
                <MenuItem value="26-35">26-35</MenuItem>
                <MenuItem value="36-45">36-45</MenuItem>
                <MenuItem value="46+">46+</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined" sx={{ backgroundColor: gridBackgroundColor, borderRadius: '10px' }}>
              <InputLabel>Body type</InputLabel>
              <Select
                value={bodyType}
                onChange={(e) => setBodyType(e.target.value as string)}
                label="Body type"
              >
                <MenuItem value="ectomorph">Ectomorph</MenuItem>
                <MenuItem value="mesomorph">Mesomorph</MenuItem>
                <MenuItem value="endomorph">Endomorph</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Button 
          variant="contained" 
          sx={{ marginTop: '30px', backgroundColor: '#FF9800', color: '#fff', '&:hover': { backgroundColor: '#e68900' }, width: '100%' }}
          onClick={handleStart}
        >
          <b>Let's start</b>
        </Button>
      </Container>
    </div>
  );
};

export default LandingPage;
