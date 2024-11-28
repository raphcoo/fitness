import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

interface EditMealProps {
  open: boolean;
  handleClose: () => void;
  mealId: string;
  onMealUpdated: () => void;
}

const EditMeal: React.FC<EditMealProps> = ({ open, handleClose, mealId, onMealUpdated }) => {
  const [meal, setMeal] = useState('');
  const [calories, setCalories] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/meals/${mealId}`)
      .then(response => {
        const { meal, calories } = response.data;
        setMeal(meal);
        setCalories(calories);
      })
      .catch(error => {
        console.error('There was an error fetching the meal!', error);
      });
  }, [mealId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedMeal = { meal, calories: Number(calories) };

    axios.put(`http://localhost:5000/meals/${mealId}`, updatedMeal)
      .then(() => {
        onMealUpdated();
        handleClose();
      })
      .catch(error => {
        console.error('There was an error updating the meal!', error);
      });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Meal</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Meal"
            fullWidth
            margin="normal"
            value={meal}
            onChange={(e) => setMeal(e.target.value)}
          />
          <TextField
            label="Calories"
            type="number"
            fullWidth
            margin="normal"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Update
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditMeal;
