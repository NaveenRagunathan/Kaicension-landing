import { AppBar, Box, Button, Container, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { label: 'About', id: 'problem-section' },
    { label: 'Process', id: 'process-section' },
    { label: 'Pricing', id: 'pricing-section' }
  ];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(138, 79, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            boxShadow: isScrolled ? '0 4px 30px rgba(138, 79, 255, 0.1)' : 'none',
            transition: 'all 0.3s ease',
          }}
        >
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #8A4FFF 0%, #A375FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '1.8rem',
                    cursor: 'pointer',
                  }}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Kaicension
                </Typography>
              </motion.div>

              <Box sx={{ flexGrow: 1 }} />

              <Box sx={{ display: 'flex', gap: 2 }}>
                {navItems.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => scrollToSection(item.id)}
                      sx={{
                        color: isScrolled ? '#1A1A1A' : '#8A4FFF',
                        fontWeight: 600,
                        position: 'relative',
                        backgroundColor: isScrolled ? 'transparent' : 'rgba(255, 255, 255, 0.9)',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        '&:hover': {
                          backgroundColor: isScrolled ? 'rgba(138, 79, 255, 0.1)' : 'rgba(255, 255, 255, 1)',
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    onClick={() => scrollToSection('pricing-section')}
                    sx={{
                      background: 'linear-gradient(135deg, #8A4FFF 0%, #A375FF 100%)',
                      color: 'white',
                      fontWeight: 600,
                      '&:hover': {
                        background: 'linear-gradient(135deg, #A375FF 0%, #8A4FFF 100%)',
                      },
                    }}
                  >
                    Get Started
                  </Button>
                </motion.div>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </motion.div>
    </AnimatePresence>
  );
};

export default Header; 