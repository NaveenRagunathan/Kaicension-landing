import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Avatar, Box, Container, IconButton, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{ mb: 6 }}
        >
          Founder Stories
        </Typography>

        <Box sx={{ position: 'relative', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 6,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 2,
                background: 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)',
                position: 'relative',
                minHeight: '400px'
              }}
            >
              <Typography
                variant="h4"
                component="h3"
                sx={{ 
                  mb: 3, 
                  color: 'primary.main', 
                  fontStyle: 'italic',
                  textAlign: 'center'
                }}
              >
                "{testimonials[currentIndex].quote}"
              </Typography>
              <Typography
                variant="body1"
                sx={{ 
                  mb: 4, 
                  fontSize: '1.2rem',
                  lineHeight: 1.6,
                  textAlign: 'center'
                }}
              >
                {testimonials[currentIndex].text}
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                mt: 'auto',
                gap: 2
              }}>
                <Avatar
                  sx={{
                    width: 64,
                    height: 64,
                    bgcolor: 'primary.main',
                    fontSize: '1.5rem'
                  }}
                >
                  {testimonials[currentIndex].author[0]}
                </Avatar>
                <Box>
                  <Typography variant="h6" fontWeight="bold">
                    {testimonials[currentIndex].author}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {testimonials[currentIndex].role} ({testimonials[currentIndex].location})
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </motion.div>

          <IconButton
            onClick={handlePrevious}
            sx={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'background.paper',
              '&:hover': { bgcolor: 'primary.main', color: 'white' }
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>

          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'background.paper',
              '&:hover': { bgcolor: 'primary.main', color: 'white' }
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>

          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            mt: 3,
            gap: 1
          }}>
            {testimonials.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: currentIndex === index ? 'primary.main' : 'grey.300',
                  cursor: 'pointer'
                }}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials; 