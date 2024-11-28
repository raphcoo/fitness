import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const MenuBurger: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setOpen(open);
  };

  return (
    <>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon style={{ color: 'white' }} />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button component={Link} to="/workouts">
            <ListItemText primary="Workouts" />
          </ListItem>
          <ListItem button component={Link} to="/nutrition">
            <ListItemText primary="Nutrition" />
          </ListItem>
          <ListItem button component={Link} to="/goals">
            <ListItemText primary="Goals" />
          </ListItem>
          <ListItem button component={Link} to="/recipe-ideas">
            <ListItemText primary="Recipe Ideas" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default MenuBurger;
