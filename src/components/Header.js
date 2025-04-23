import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Container, IconButton, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // 3D Flip animation variants
  const flipVariants = {
    front: {
      rotateY: 0,
      transition: { duration: 0.6, ease: "easeInOut" }
    },
    back: {
      rotateY: 180,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  const menuItemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      },
    },
  };

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
      setIsMobileMenuOpen(false);
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
                    fontSize: { xs: '1.5rem', sm: '1.8rem' },
                    cursor: 'pointer',
                  }}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Kaicension
                </Typography>
              </motion.div>

              <Box sx={{ flexGrow: 1 }} />

              {/* Desktop Menu */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                {navItems.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.button
                      onClick={() => scrollToSection(item.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        color: isScrolled ? '#1A1A1A' : '#8A4FFF',
                        fontWeight: 600,
                        fontSize: '1rem',
                        backgroundColor: isScrolled ? 'transparent' : 'rgba(255, 255, 255, 0.9)',
                      }}
                      whileHover={{
                        backgroundColor: isScrolled ? 'rgba(138, 79, 255, 0.1)' : 'rgba(255, 255, 255, 1)',
                      }}
                    >
                      {item.label}
                    </motion.button>
                  </motion.div>
                ))}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.button
                    onClick={() => scrollToSection('pricing-section')}
                    style={{
                      background: 'linear-gradient(135deg, #8A4FFF 0%, #A375FF 100%)',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '12px 24px',
                      borderRadius: '30px',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '1rem',
                    }}
                    whileHover={{
                      background: 'linear-gradient(135deg, #A375FF 0%, #8A4FFF 100%)',
                    }}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              </Box>

              {/* Mobile Menu Button */}
              <IconButton
                sx={{ 
                  display: { xs: 'flex', md: 'none' },
                  color: isScrolled ? '#1A1A1A' : '#8A4FFF',
                  zIndex: 2000
                }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMobileMenuOpen ? "close" : "menu"}
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                  </motion.div>
                </AnimatePresence>
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>

        {/* 3D Flip Mobile Menu */}
        <motion.div
          style={{
            display: { xs: 'block', md: 'none' },
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            perspective: '1500px',
            zIndex: 1500,
            pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
          }}
        >
          <motion.div
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              transformStyle: 'preserve-3d',
            }}
            initial="front"
            animate={isMobileMenuOpen ? "back" : "front"}
            variants={flipVariants}
          >
            {/* Front face (main content) */}
            <motion.div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                background: 'transparent',
              }}
            />

            {/* Back face (menu) */}
            <motion.div
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #8A4FFF 0%, #A375FF 100%)',
                backfaceVisibility: 'hidden',
                rotateY: 180,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              {/* Menu Content Container - Prevent click propagation */}
              <motion.div
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                }}
              >
                {/* Close Button */}
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'white',
                    zIndex: 2000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '12px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CloseIcon style={{ fontSize: '24px' }} />
                </motion.button>

                <AnimatePresence>
                  {isMobileMenuOpen && (
                    <motion.div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '2rem',
                        marginTop: '60px',
                      }}
                    >
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.label}
                          variants={menuItemVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          custom={index}
                          style={{ perspective: 'none' }}
                        >
                          <motion.button
                            onClick={() => {
                              scrollToSection(item.id);
                              setIsMobileMenuOpen(false);
                            }}
                            style={{
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              padding: '1rem 2rem',
                              color: 'white',
                              fontSize: '2rem',
                              fontWeight: '600',
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {item.label}
                          </motion.button>
                        </motion.div>
                      ))}
                      <motion.div
                        variants={menuItemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        custom={navItems.length}
                        style={{ perspective: 'none' }}
                      >
                        <motion.button
                          onClick={() => {
                            scrollToSection('pricing-section');
                            setIsMobileMenuOpen(false);
                          }}
                          style={{
                            background: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '1rem 2rem',
                            borderRadius: '30px',
                            color: '#8A4FFF',
                            fontSize: '1.5rem',
                            fontWeight: '600',
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Get Started
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Header; 