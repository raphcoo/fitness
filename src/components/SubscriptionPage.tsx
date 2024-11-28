// src/components/SubscriptionPage.tsx
import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';

const SubscriptionPage: React.FC = () => {
  return (
    <Container sx={{ paddingTop: '50px', textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Choose Your Subscription Plan
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
            <Typography variant="h6">Basic Plan</Typography>
            <Typography variant="body1">$10/month</Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>Select</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
            <Typography variant="h6">Pro Plan</Typography>
            <Typography variant="body1">$20/month</Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>Select</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
            <Typography variant="h6">Premium Plan</Typography>
            <Typography variant="body1">$30/month</Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>Select</Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SubscriptionPage;
