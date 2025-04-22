import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const ProblemSection = () => {
  const problems = [
    {
      title: "Users like my product... but won't pay",
      description: "Your 'MVP' feels like a hobby project, not a business.",
    },
    {
      title: "Growth hacks work... until they don't",
      description: "Your CAC burns cash, but retention is a leaky bucket.",
    },
    {
      title: "Investors keep ghosting... even though we're SO close",
      description: "Your pitch deck feels like begging, not storytelling.",
    },
  ];

  return (
    <Box id="problem-section" sx={{ py: 8, bgcolor: 'background.paper', mt: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{ mb: 6 }}
        >
          The Agony of Being "Almost"
        </Typography>
        
        <Grid container spacing={4}>
          {problems.map((problem, index) => (
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
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ mb: 2, color: 'primary.main' }}
                  >
                    {problem.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                  >
                    {problem.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography
            variant="h5"
            component="h3"
            sx={{ mb: 2, color: 'error.main' }}
          >
            The cost of staying here?
          </Typography>
          <Typography variant="body1" color="text.secondary">
            • Your team loses faith • Competitors raise rounds • Your market slips away while you're stuck in limbo
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ProblemSection; 