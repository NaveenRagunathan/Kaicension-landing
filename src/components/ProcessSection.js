import { Box, Container, Grid, Paper, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const ProcessSection = () => {
  const phases = [
    {
      title: "Phase 1: Fix the Cracks",
      duration: "Weeks 1-5",
      items: [
        "Business Model Autopsy: 'Why users won't pay' → 'what they'll bleed for'",
        "Brand Triage: From 'meh' to 'category king'",
        "Financial CPR: Stop the cash bleed. Fast."
      ]
    },
    {
      title: "Phase 2: Traction on Steroids",
      duration: "Weeks 6-10",
      items: [
        "PMF Sprint: Validate demand with paying users, not surveys",
        "Growth Loops: Engineer systems that scale without you"
      ]
    },
    {
      title: "Phase 3: Investor Domination",
      duration: "Weeks 11-16",
      items: [
        "Pitch Deck Bloodbath: Replace jargon with a story VCs can't ignore",
        "Warm Intros: Get in front of 50+ global VCs hunting for high-potential startups"
      ]
    }
  ];

  return (
    <Box id="process-section" sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{ mb: 6 }}
        >
          How We Do It
        </Typography>

        <Stepper
          alternativeLabel
          sx={{ mb: 8 }}
        >
          {phases.map((phase, index) => (
            <Step key={index} active={true}>
              <StepLabel>{phase.title}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Grid container spacing={4}>
          {phases.map((phase, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)',
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h3"
                    sx={{ mb: 1, color: 'primary.main' }}
                  >
                    {phase.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ mb: 3, color: 'text.secondary' }}
                  >
                    {phase.duration}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {phase.items.map((item, itemIndex) => (
                      <Typography
                        key={itemIndex}
                        component="li"
                        variant="body1"
                        sx={{ mb: 2 }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProcessSection; 