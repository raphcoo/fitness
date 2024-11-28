// // src/App.tsx
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
// import Login from './components/Auth/Login';
// import Signup from './components/Auth/Signup';
// import Dashboard from './components/Dashboard/Dashboard';
// import Goals from './components/Goals/Goals';
// import Workouts from './components/Workouts/Workouts';
// import Meals from './components/Meals/Meals';
// import BodyTypeSelection from './components/BodyTypeSelection';
// import Exercises from './components/Exercises';

// const App: React.FC = () => {
//   return (
//     <Router>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" style={{ flexGrow: 1 }}>
//             Fitness Tracker
//           </Typography>
//           <Button color="inherit" component={Link} to="/login">Login</Button>
//           <Button color="inherit" component={Link} to="/signup">Signup</Button>
//           <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
//           <Button color="inherit" component={Link} to="/goals">Goals</Button>
//           <Button color="inherit" component={Link} to="/workouts">Workouts</Button>
//           <Button color="inherit" component={Link} to="/meals">Meals</Button>
//         </Toolbar>
//       </AppBar>
//       <Container>
//         <Routes>
//           <Route path="/" element={<BodyTypeSelection />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/goals" element={<Goals />} />
//           <Route path="/workouts" element={<Workouts />} />
//           <Route path="/meals" element={<Meals />} />
//           <Route path="/exercises/:gender/:bodyType" element={<Exercises />} />
//         </Routes>
//       </Container>
//     </Router>
//   );
// };

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './components/pages/LandingPage';
// import Login from './components/Auth/Login';
// import Signup from './components/Auth/Signup';
// import Dashboard from './components/Dashboard/Dashboard';
// import BodyTypeSelection from './components/BodyTypeSelection';

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/body-type" element={<BodyTypeSelection />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
// import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import Login from './components/Auth/Login';
import SubscriptionPage from './components/SubscriptionPage';
import Workout from './components/pages/Workout';
import Nutrition from './components/pages/Nutrition';
import RecipeIdeas from './components/pages/RecipeIdeas';
import ProfilePage from './components/pages/ProfilePage';

const App: React.FC = () => {
  return (
    <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/nutrition" element={<Nutrition />} /> 
        <Route path="/recipe-ideas" element={<RecipeIdeas />} /> 
        <Route path="/profile/:username" element={<ProfilePage />} /> {/* Route dynamique */}
      </Routes>
    </Router>
  );
};

export default App;
