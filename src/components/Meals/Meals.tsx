import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddMeal from './AddMeal';
import EditMeal from './EditMeal';

interface Meal {
  _id: string;
  meal: string;
  calories: number;
}

const Meals: React.FC = () => {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [addMealOpen, setAddMealOpen] = useState(false);
  const [editMealOpen, setEditMealOpen] = useState(false);
  const [currentMealId, setCurrentMealId] = useState<string | null>(null);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = () => {
    axios.get('http://localhost:5000/meals')
      .then(response => {
        setMeals(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the meals!', error);
      });
  };

  const handleDelete = (id: string) => {
    axios.delete(`http://localhost:5000/meals/${id}`)
      .then(() => {
        fetchMeals();
      })
      .catch(error => {
        console.error('There was an error deleting the meal!', error);
      });
  };

  const handleEdit = (id: string) => {
    setCurrentMealId(id);
    setEditMealOpen(true);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Meals
      </Typography>
      <Button variant="contained" color="primary" onClick={() => setAddMealOpen(true)}>
        Add Meal
      </Button>
      <List>
        {meals.map(meal => (
          <ListItem key={meal._id}>
            <ListItemText
              primary={meal.meal}
              secondary={`Calories: ${meal.calories}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit" onClick={() => handleEdit(meal._id)}>
                Edit
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(meal._id)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <AddMeal open={addMealOpen} handleClose={() => setAddMealOpen(false)} onMealAdded={fetchMeals} />
      {currentMealId && (
        <EditMeal open={editMealOpen} handleClose={() => setEditMealOpen(false)} mealId={currentMealId} onMealUpdated={fetchMeals} />
      )}
    </Container>
  );
};

export default Meals;
