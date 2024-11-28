import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

interface AddMealProps {
  open: boolean;
  handleClose: () => void;
  onMealAdded: () => void;
}

const AddMeal: React.FC<AddMealProps> = ({ open, handleClose, onMealAdded }) => {
  const [meal, setMeal] = useState('');
  const [calories, setCalories] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newMeal = { meal, calories: Number(calories) };

    axios.post('http://localhost:5000/meals', newMeal)
      .then(() => {
        onMealAdded();
        handleClose();
      })
      .catch(error => {
        console.error('There was an error adding the meal!', error);
      });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Meal</DialogTitle>
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
              Add
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddMeal;
