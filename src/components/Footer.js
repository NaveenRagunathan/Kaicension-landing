import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import WhatsAppCTA from './WhatsAppCTA';

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
          <WhatsAppCTA
            text="Start Your 4-Month Transformation"
            section="footer"
            message="Hi, I'd like to start my 4-month transformation journey and make my startup investor-ready."
            subtitle="Contact us on WhatsApp to get started"
            isFinal={true}
          />
        </Box>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Kaicension. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 