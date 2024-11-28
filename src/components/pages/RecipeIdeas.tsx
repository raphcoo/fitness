import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Container, Typography, Card, CardContent, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Recipe type
type Recipe = {
  name: string;
  description: string;
  ingredients: string[];
};

// Recipes by body type
type RecipePlan = {
  ectomorph: Recipe[];
  mesomorph: Recipe[];
  endomorph: Recipe[];
};

// Sample recipe data
const recipes: RecipePlan = {
  ectomorph: [
    { name: 'Protein Smoothie', description: 'A protein-rich smoothie for muscle mass gain.', ingredients: ['200g Greek yogurt', '1 banana', '30g protein powder', '200ml almond milk'] },
    { name: 'Chicken Pasta', description: 'A balanced meal to help with weight gain.', ingredients: ['100g whole wheat pasta', '150g grilled chicken', 'Broccoli', 'Olive oil'] },
    { name: 'Avocado Toast', description: 'A healthy and quick snack.', ingredients: ['2 slices whole wheat bread', '1 avocado', 'Salt', 'Pepper'] },
  ],
  mesomorph: [
    { name: 'Quinoa Salad', description: 'A balanced meal rich in protein and carbs to maintain a healthy weight.', ingredients: ['100g quinoa', '100g chicken', 'Avocado', 'Cherry tomatoes', 'Feta cheese'] },
    { name: 'Vegetable and Tofu Bowl', description: 'A vegetarian meal rich in protein.', ingredients: ['Tofu', 'Spinach', 'Sweet potato', 'Olive oil', 'Spices'] },
    { name: 'Grilled Salmon', description: 'A nutrient-rich meal for overall health.', ingredients: ['150g salmon', 'Lemon juice', 'Asparagus', 'Olive oil'] },
  ],
  endomorph: [
    { name: 'Vegetable Soup', description: 'A low-calorie, high-fiber meal for weight loss support.', ingredients: ['Zucchini', 'Carrots', 'Celery', 'Onions', 'Spices'] },
    { name: 'Spinach and Salmon Salad', description: 'A light salad rich in omega-3.', ingredients: ['Spinach', '150g salmon', 'Avocado', 'Chia seeds', 'Light dressing'] },
    { name: 'Berry Parfait', description: 'A light dessert or snack.', ingredients: ['Greek yogurt', 'Mixed berries', 'Granola', 'Honey'] },
  ],
};

const RecipeIdeas: React.FC = () => {
  const [bodyType, setBodyType] = useState<'ectomorph' | 'mesomorph' | 'endomorph'>('ectomorph');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(recipes[bodyType][0]);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const generateRandomRecipe = () => {
    const bodyTypeRecipes = recipes[bodyType];
    const randomRecipe = bodyTypeRecipes[Math.floor(Math.random() * bodyTypeRecipes.length)];
    setSelectedRecipe(randomRecipe);
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#000', 
      color: '#fff', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center', 
      padding: '0',
    }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#FF9800', width: '100%' }}>
        <Toolbar>
          <Button 
            variant="contained" 
            onClick={handleHomeClick} 
            sx={{ 
              backgroundColor: '#FF9800', 
              color: '#fff', 
              '&:hover': { backgroundColor: '#e68900' } 
            }}
          >
            Home
          </Button>
        </Toolbar>
      </AppBar>

      <Toolbar />

      <Container 
        sx={{
          width: { xs: '90%', sm: '80%', md: '60%' },
          padding: { xs: '50px 20px', sm: '100px' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '10px',
          marginTop: '20px',
        }}
      >
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{
            fontSize: { xs: '1.5rem', md: '2rem' },
          }}
        >
          Recipe Ideas for {bodyType.charAt(0).toUpperCase() + bodyType.slice(1)}
        </Typography>

        <FormControl fullWidth sx={{ marginBottom: '20px' }}>
          <InputLabel sx={{ color: '#fff' }}>Body Type</InputLabel>
          <Select
            value={bodyType}
            onChange={(e) => {
              setBodyType(e.target.value as 'ectomorph' | 'mesomorph' | 'endomorph');
              setSelectedRecipe(recipes[e.target.value as 'ectomorph' | 'mesomorph' | 'endomorph'][0]);
            }}
            label="Body Type"
            sx={{ backgroundColor: 'rgba(192, 192, 192, 0.8)', borderRadius: '5px' }}
          >
            <MenuItem value="ectomorph">Ectomorph</MenuItem>
            <MenuItem value="mesomorph">Mesomorph</MenuItem>
            <MenuItem value="endomorph">Endomorph</MenuItem>
          </Select>
        </FormControl>

        <Card sx={{ backgroundColor: '#333', marginBottom: '20px', width: '100%' }}>
          <CardContent>
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#fff', 
                fontSize: { xs: '1.2rem', sm: '1.5rem' } 
              }}
            >
              {selectedRecipe?.name}
            </Typography>
            <Typography sx={{ color: '#ccc', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              {selectedRecipe?.description}
            </Typography>
            <Typography sx={{ color: '#fff', marginTop: '10px' }}>Ingredients:</Typography>
            <ul>
              {selectedRecipe?.ingredients.map((ingredient, i) => (
                <li 
                  key={i} 
                  style={{ color: '#ccc', fontSize: '0.9rem' }}
                >
                  {ingredient}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Button 
          variant="contained" 
          onClick={generateRandomRecipe}
          sx={{
            backgroundColor: '#FF9800',
            color: '#fff',
            '&:hover': { backgroundColor: '#e68900' },
            fontSize: { xs: '0.9rem', md: '1rem' },
          }}
        >
          Generate New Recipe
        </Button>
      </Container>
    </div>
  );
};

export default RecipeIdeas;
