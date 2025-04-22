import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(138, 79, 255, 0.05) 0%, rgba(163, 117, 255, 0.1) 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(138, 79, 255, 0.1) 0%, transparent 25%)',
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 80,
                  height: 4,
                  background: 'linear-gradient(90deg, #8A4FFF, transparent)',
                  borderRadius: 2,
                },
              }}
            >
              Create a Dominant & Profitable Brand
            </Typography>
            <Typography
              variant="h4"
              sx={{ mb: 4, color: 'text.secondary', fontWeight: 500 }}
            >
              Your Audience, Potential Investors & You fall in love with
            </Typography>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  mt: 2,
                  fontSize: '1.2rem',
                }}
              >
                Go to my Featured Section
              </Button>
            </motion.div>
          </motion.div>
        </Box>

        {/* Floating shapes */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: 60,
            height: 60,
            background: 'linear-gradient(45deg, #8A4FFF, #A375FF)',
            borderRadius: '50%',
            opacity: 0.1,
            animation: 'float 6s ease-in-out infinite',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '15%',
            right: '10%',
            width: 40,
            height: 40,
            background: 'linear-gradient(45deg, #8A4FFF, #A375FF)',
            borderRadius: '12px',
            transform: 'rotate(45deg)',
            opacity: 0.1,
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        
        {/* Additional decorative elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '40%',
            right: '15%',
            width: 100,
            height: 100,
            background: 'linear-gradient(45deg, #8A4FFF, #A375FF)',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            opacity: 0.05,
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '30%',
            left: '15%',
            width: 80,
            height: 80,
            background: 'linear-gradient(45deg, #8A4FFF, #A375FF)',
            borderRadius: '63% 37% 37% 63% / 43% 37% 63% 57%',
            opacity: 0.05,
            animation: 'float 10s ease-in-out infinite',
          }}
        />
      </Container>
    </Box>
  );
};

export default Hero; 