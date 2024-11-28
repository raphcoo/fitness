import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Container, Typography, TextField, List, ListItem, ListItemText, IconButton, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

interface Meal {
  name: string;
  calories: number;
}

const dailyCalorieLimit = 2000;

const Nutrition: React.FC = () => {
  const [mealName, setMealName] = useState('');
  const [calories, setCalories] = useState<number | string>('');
  const [meals, setMeals] = useState<Meal[]>([]);
  const [totalCalories, setTotalCalories] = useState(0);
  const navigate = useNavigate();

  const handleAddMeal = () => {
    if (!mealName || !calories) return;

    const mealCalories = parseInt(calories as string);
    const newMeal: Meal = { name: mealName, calories: mealCalories };

    setMeals([...meals, newMeal]);
    setTotalCalories(totalCalories + mealCalories);
    setMealName('');
    setCalories('');
  };

  const handleDeleteMeal = (index: number) => {
    const mealToDelete = meals[index];
    setMeals(meals.filter((_, i) => i !== index));
    setTotalCalories(totalCalories - mealToDelete.calories);
  };

  const remainingCalories = dailyCalorieLimit - totalCalories;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar position="static" sx={{ backgroundColor: '#FF9800' }}>
        <Toolbar>
          <Button color="inherit" onClick={() => navigate('/')}>
            Home
          </Button>
        </Toolbar>
      </AppBar>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ flexGrow: 1, backgroundColor: '#222' }}
      >
        <Container
          sx={{
            width: { xs: '90%', sm: '80%', md: '60%' },
            padding: { xs: '20px', sm: '40px' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderRadius: '8px',
            color: '#fff',
          }}
        >
          <Typography 
            variant="h4" 
            gutterBottom 
            sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, textAlign: 'center' }}
          >
            Daily Nutrition Tracker
          </Typography>

          <TextField
            label="Meal Name"
            fullWidth
            value={mealName}
            onChange={(e) => setMealName(e.target.value)}
            sx={{ marginBottom: '16px', backgroundColor: '#fff', borderRadius: '4px' }}
          />

          <TextField
            label="Calories"
            fullWidth
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            sx={{ marginBottom: '16px', backgroundColor: '#fff', borderRadius: '4px' }}
          />

          <Button 
            variant="contained" 
            onClick={handleAddMeal}
            sx={{ 
              backgroundColor: '#FF9800', 
              color: '#fff', 
              '&:hover': { backgroundColor: '#e68900' }, 
              width: '100%', 
              marginBottom: '20px' 
            }}
          >
            Add Meal
          </Button>

          <Typography variant="h6" sx={{ marginTop: '20px', fontSize: { xs: '1rem', md: '1.2rem' }, textAlign: 'center' }}>
            Remaining Calories: {remainingCalories < 0 ? `Over by ${-remainingCalories}` : remainingCalories}
          </Typography>

          <List sx={{ width: '100%', maxWidth: '500px', bgcolor: 'rgba(255, 255, 255, 0.1)', borderRadius: '5px', marginTop: '10px' }}>
            {meals.map((meal, index) => (
              <ListItem 
                key={index} 
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteMeal(index)}>
                    <DeleteIcon sx={{ color: '#FF9800' }} />
                  </IconButton>
                }
              >
                <ListItemText primary={`${meal.name} - ${meal.calories} calories`} />
              </ListItem>
            ))}
          </List>
        </Container>
      </Grid>
    </div>
  );
};

export default Nutrition;
