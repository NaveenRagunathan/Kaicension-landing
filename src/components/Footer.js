import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{ mb: 4 }}
        >
          Your startup isn't about you.
        </Typography>
        
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {[
            "The 10,000 small businesses waiting for your SaaS tool to save them time.",
            "The 100,000 patients your healthtech could empower.",
            "The investors desperate to back the next unicorn—if only they could find it."
          ].map((item, index) => (
            <Grid item xs={12} key={index}>
              <Typography
                variant="h5"
                component="p"
                align="center"
                sx={{ color: 'text.secondary' }}
              >
                {item}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h4"
            component="p"
            sx={{ mb: 4 }}
          >
            Let's make your startup impossible to ignore.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              py: 2,
              px: 6,
              fontSize: '1.2rem',
              borderRadius: 2,
            }}
          >
            Start Your 4-Month Transformation →
          </Button>
        </Box>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © 2024 Kaicension. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 