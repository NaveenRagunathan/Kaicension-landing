import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Container, IconButton, Toolbar, useMediaQuery } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        ease: 'easeOut',
      },
    },
  };

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
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Problems', id: 'problem-section' },
    { label: 'Solution', id: 'solution-section' },
    { label: 'Process', id: 'process-section' },
    { label: 'Pricing', id: 'pricing-section' },
  ];

  const isMobile = useMediaQuery('(max-width:900px)');

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            background: '#fff',
            borderRadius: { xs: 0, md: '24px' },
            boxShadow: '0 4px 24px 0 rgba(200,162,240,0.08)',
            px: { xs: 1, md: 3 },
            py: 1,
            left: { xs: 0, md: 24 },
            right: { xs: 0, md: 24 },
            top: 18,
            maxWidth: { md: '1100px' },
            margin: { md: '0 auto' },
            zIndex: 2000,
            transition: 'box-shadow 0.3s',
          }}
        >
          <Container maxWidth={false} sx={{ px: { xs: 0.5, md: 2 } }}>
            <Toolbar disableGutters sx={{ minHeight: '64px', px: 0 }}>
              <Box
                component="img"
                src="/logo.png"
                alt="Kaicension Logo"
                sx={{
                  width: { xs: 52, md: 70 },
                  height: { xs: 44, md: 56 },
                  borderRadius: '12px',
                  boxShadow: '0 2px 16px 0 rgba(153,60,255,0.08)',
                  border: '1.5px solid #ede3ff',
                  mr: 3,
                  cursor: 'pointer',
                  transition: 'box-shadow 0.4s, transform 0.4s',
                  '&:hover': {
                    boxShadow: '0 6px 32px 0 rgba(153,60,255,0.13)',
                    transform: 'scale(1.04) rotate(-1deg)',
                  },
                }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />

              {!isMobile && (
                <Box sx={{ display: 'flex', gap: 2, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                  {navItems.map((item) => (
                    <Button
                      key={item.label}
                      onClick={() => scrollToSection(item.id)}
                      sx={{
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        color: '#222',
                        borderRadius: '18px',
                        px: 2.5,
                        py: 1,
                        textTransform: 'none',
                        '&:hover': {
                          background: '#f4edfa',
                          color: '#bb6aff',
                          transform: 'scale(1.05)',
                        },
                        transition: 'all 0.18s',
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>
              )}

              {!isMobile && (
                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', ml: 3 }}>
                  <Button
                    variant="outlined"
                    sx={{
                      border: '2.5px solid #C8A2F0',
                      color: '#bb6aff',
                      fontWeight: 700,
                      borderRadius: '22px',
                      px: 3,
                      py: 1.2,
                      fontSize: '1.08rem',
                      background: 'transparent',
                      boxShadow: 'none',
                      textTransform: 'none',
                      transition: 'all 0.18s',
                      '&:hover': {
                        background: '#f4edfa',
                        color: '#a47cff',
                        borderColor: '#a47cff',
                        transform: 'scale(1.05)',
                      },
                    }}
                    onClick={() => scrollToSection('solution-section')}
                  >
                    Learn More
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      background: '#111',
                      color: '#fff',
                      fontWeight: 800,
                      borderRadius: '22px',
                      px: 3.5,
                      py: 1.2,
                      fontSize: '1.08rem',
                      boxShadow: '0 4px 18px 0 rgba(153,60,255,0.07)',
                      textTransform: 'none',
                      ml: 1,
                      transition: 'all 0.18s',
                      '&:hover': {
                        background: '#bb6aff',
                        color: '#fff',
                        transform: 'scale(1.05)',
                      },
                    }}
                    onClick={() => scrollToSection('pricing-section')}
                  >
                    Book Your Slot
                  </Button>
                </Box>
              )}

              {isMobile && (
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => setIsMobileMenuOpen(true)}
                  sx={{ ml: 'auto', color: '#bb6aff', fontSize: 32 }}
                >
                  <MenuIcon fontSize="large" />
                </IconButton>
              )}
            </Toolbar>
          </Container>
        </AppBar>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.25 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                width: '100vw',
                height: '100vh',
                background: 'rgba(255,255,255,0.96)',
                zIndex: 3000,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingTop: 32,
              }}
            >
              <IconButton
                onClick={() => setIsMobileMenuOpen(false)}
                sx={{ position: 'absolute', top: 22, right: 22, color: '#bb6aff', fontSize: 32 }}
                aria-label="close menu"
              >
                <CloseIcon fontSize="large" />
              </IconButton>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 7, width: '80%' }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    sx={{
                      fontWeight: 700,
                      fontSize: '1.2rem',
                      color: '#222',
                      borderRadius: '18px',
                      px: 2.5,
                      py: 1.4,
                      textTransform: 'none',
                      width: '100%',
                      '&:hover': {
                        background: '#f4edfa',
                        color: '#bb6aff',
                        transform: 'scale(1.05)',
                      },
                      transition: 'all 0.18s',
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  variant="outlined"
                  sx={{
                    border: '2.5px solid #C8A2F0',
                    color: '#bb6aff',
                    fontWeight: 700,
                    borderRadius: '22px',
                    px: 3,
                    py: 1.2,
                    fontSize: '1.1rem',
                    background: 'transparent',
                    boxShadow: 'none',
                    textTransform: 'none',
                    transition: 'all 0.18s',
                    '&:hover': {
                      background: '#f4edfa',
                      color: '#a47cff',
                      borderColor: '#a47cff',
                      transform: 'scale(1.05)',
                    },
                  }}
                  onClick={() => {
                    scrollToSection('solution-section');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Learn More
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    background: '#111',
                    color: '#fff',
                    fontWeight: 800,
                    borderRadius: '22px',
                    px: 3.5,
                    py: 1.2,
                    fontSize: '1.1rem',
                    boxShadow: '0 4px 18px 0 rgba(153,60,255,0.07)',
                    textTransform: 'none',
                    ml: 1,
                    transition: 'all 0.18s',
                    '&:hover': {
                      background: '#bb6aff',
                      color: '#fff',
                      transform: 'scale(1.05)',
                    },
                  }}
                  onClick={() => {
                    scrollToSection('pricing-section');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Book Your Slot
                </Button>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default Header;
