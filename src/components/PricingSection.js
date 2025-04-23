import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const PricingSection = () => {
  const handleWhatsAppClick = () => {
    const number = "+2347055432421";
    const message = encodeURIComponent("Hello, I'm interested in your service.");
    const url = `https://api.whatsapp.com/send?phone=${number}&text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <Box id="pricing-section" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{ mb: 6 }}
        >
          Pricing
        </Typography>

        <Paper
          elevation={3}
          sx={{
            p: 6,
            borderRadius: 2,
            background: 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)',
          }}
        >
          <Typography
            variant="h3"
            component="h3"
            align="center"
            sx={{ mb: 2, color: 'primary.main' }}
          >
            ScaleReady Accelerator
          </Typography>
          
          <Typography
            variant="h4"
            component="div"
            align="center"
            sx={{ mb: 4 }}
          >
            $12,000 upfront
            <Typography
              variant="subtitle1"
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              (save $1,000 vs. $3,250/month)
            </Typography>
          </Typography>

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h5"
              component="h4"
              sx={{ mb: 2, color: 'error.main' }}
            >
              What's at stake if you wait?
            </Typography>
            <Grid container spacing={2}>
              {[
                "Your competitors will lock down your market",
                "Investor FOMO will fade",
                "Your team's hope will turn to burnout"
              ].map((item, index) => (
                <Grid item xs={12} key={index}>
                  <Typography variant="body1" color="text.secondary">
                    • {item}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              variant="h6"
              color="error.main"
              sx={{ mb: 2 }}
            >
              Only 5 spots left for our next cohort
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={handleWhatsAppClick}
              startIcon={<RocketLaunchIcon sx={{ fontSize: '1.5rem' }} />}
              sx={{
                py: 2,
                px: 6,
                fontSize: '1.2rem',
                borderRadius: 2,
                '&:hover': {
                  transform: 'translateY(-2px)',
                  transition: 'transform 0.3s ease',
                }
              }}
            >
              Claim Your Spot
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default PricingSection; 