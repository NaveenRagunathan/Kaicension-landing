import { Avatar, Box, Container, Grid, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I Was Ashamed of My Metrics",
      text: "Kaicension rebuilt our unit economics. We went from $5K MRR to $75K—and closed a $1.2M seed round.",
      author: "Priya",
      role: "Fintech Founder",
      location: "Southeast Asia"
    },
    {
      quote: "Investors Called Us 'Too Risky'",
      text: "They turned our healthtech into a telemedicine leader. 4 VCs fought to lead our round.",
      author: "Marco",
      role: "HealthTech Founder",
      location: "Europe"
    }
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{ mb: 6 }}
        >
          Founder Stories
        </Typography>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
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
                    sx={{ mb: 2, color: 'primary.main', fontStyle: 'italic' }}
                  >
                    "{testimonial.quote}"
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ mb: 4, fontSize: '1.1rem' }}
                  >
                    {testimonial.text}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
                    <Avatar
                      sx={{
                        width: 56,
                        height: 56,
                        bgcolor: 'primary.main',
                        mr: 2
                      }}
                    >
                      {testimonial.author[0]}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {testimonial.author}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role} ({testimonial.location})
                      </Typography>
                    </Box>
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

export default Testimonials; 