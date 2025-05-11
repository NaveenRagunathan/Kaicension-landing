import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Fade, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

// --- Premium Elite Navbar ---
function PremiumEliteNavbar({ active = 'Home' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const navLinks = [
    { label: 'Problems', id: 'problem-section' },
    { label: 'Solution', id: 'solution-section' },
    { label: 'Process', id: 'process-section' },
    { label: 'Pricing', id: 'pricing-section' },
  ];
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <Box sx={{
      position: 'fixed',
      top: scrolled ? 18 : 32,
      left: '50%',
      transform: 'translateX(-50%)',
      width: { xs: '94%', sm: '86%', md: '74%', lg: '64%' },
      maxWidth: '1200px',
      zIndex: 2000,
      transition: 'all 0.38s cubic-bezier(0.34, 1.56, 0.64, 1)',
    }}>
      <Box 
        sx={{
          background: scrolled 
            ? 'rgba(250, 250, 250, 0.93)' 
            : 'rgba(250, 250, 250, 0.90)',
          backdropFilter: 'blur(10px) saturate(160%)',
          borderRadius: scrolled ? '14px' : '18px',
          boxShadow: '0 1px 8px rgba(107, 63, 160, 0.04)',
          border: '1px solid rgba(229, 228, 233, 0.5)',
          px: { xs: 1.2, md: 2.2 },
          py: { xs: scrolled ? 0.6 : 0.8, md: scrolled ? 0.8 : 1.1 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          transition: 'all 0.36s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        {/* Logo Area */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: { xs: 40, md: 56 },
            minWidth: { xs: 44, md: 80 },
            maxWidth: { xs: 54, md: 90 },
            px: 0,
            pl: '3px',
            pr: { xs: 1, md: 2.5 }, // right margin to nav links
            mr: { xs: 0.5, md: 2.5 },
            flex: '0 0 auto',
            cursor: 'pointer',
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Box
            component="img"
            src="/logo.png"
            alt="Kaicension Logo"
            sx={{
              width: '100%',
              height: { xs: 36, md: 48 },
              maxHeight: '100%',
              objectFit: 'contain',
              borderRadius: '8px',
              display: 'block',
            }}
          />
        </Box>
        
        {/* Desktop Nav Links */}
        <Box sx={{ 
          display: { xs: 'none', md: 'flex' }, 
          alignItems: 'center', 
          gap: 1.8,
          ml: 'auto',
          mr: 2
        }}>
          {navLinks.map(link => (
            <Button
              key={link.id}
              disableRipple
              onMouseEnter={() => setHoveredItem(link.id)}
              onMouseLeave={() => setHoveredItem(null)}
              sx={{
                background: active === link.label || hoveredItem === link.id 
                  ? 'rgba(107, 63, 160, 0.04)' 
                  : 'transparent',
                color: active === link.label 
                  ? '#6B3FA0' 
                  : hoveredItem === link.id 
                    ? '#6B3FA0' 
                    : '#0D0D0D',
                fontWeight: active === link.label ? 700 : 500,
                fontSize: '0.98rem',
                px: 2.4,
                py: 1.4,
                borderRadius: 18,
                letterSpacing: '0.02em',
                fontFamily: 'Inter, sans-serif',
                transition: 'all 0.26s cubic-bezier(0.34, 1.56, 0.64, 1)',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  background: 'rgba(107, 63, 160, 0.05)',
                  transform: 'translateY(-1px)',
                },
                '&::after': active === link.label ? {
                  content: '""',
                  position: 'absolute',
                  bottom: '6px',
                  left: '18%',
                  width: '64%',
                  height: '2px',
                  background: 'linear-gradient(90deg, rgba(107, 63, 160, 0) 0%, rgba(107, 63, 160, 0.8) 50%, rgba(107, 63, 160, 0) 100%)',
                  borderRadius: '1px',
                } : {}
              }}
              onClick={() => handleScroll(link.id)}
            >
              {link.label}
            </Button>
          ))}
        </Box>
        
        {/* Action Buttons */}
        <Box sx={{ 
          display: { xs: 'none', md: 'flex' }, 
          alignItems: 'center',
          gap: 2
        }}>
          
          <Button
             variant="contained"
             sx={{
               background: 'linear-gradient(135deg, #6B3FA0 0%, #9A6AD6 100%)',
               color: '#FFFFFF',
               fontWeight: 600,
               borderRadius: '16px',
               px: 3,
               py: 1.1,
               fontSize: '0.92rem',
               letterSpacing: '0.02em',
               boxShadow: '0 4px 16px rgba(107, 63, 160, 0.16), 0 1px 0 rgba(255, 255, 255, 0.1) inset',
               textTransform: 'none',
               fontFamily: 'Inter, sans-serif',
               position: 'relative',
               overflow: 'hidden',
               transition: 'all 0.24s cubic-bezier(0.34, 1.56, 0.64, 1)',
               '&::before': {
                 content: '""',
                 position: 'absolute',
                 top: 0,
                 left: '-100%',
                 width: '100%',
                 height: '100%',
                 background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                 transition: 'left 0.7s ease',
               },
               '&:hover': {
                 background: 'linear-gradient(135deg, #7B4FB5 0%, #9A6AD6 100%)',
                 transform: 'translateY(-2px)',
                 boxShadow: '0 6px 20px rgba(107, 63, 160, 0.2), 0 1px 0 rgba(255, 255, 255, 0.15) inset',
                 '&::before': {
                   left: '100%'
                 }
               },
             }}
             onClick={() => handleScroll('footer-section')}
            aria-label="Transform Now"
          >
            Transform Now
          </Button>
        </Box>
        
        {/* Mobile Menu Button */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', ml: 'auto' }}>
          <IconButton
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            sx={{ 
              color: '#6B3FA0', 
              background: 'rgba(107, 63, 160, 0.05)',
              width: 44,
              height: 44,
              borderRadius: '14px',
              transition: 'all 0.2s ease',
              '&:hover': {
                background: 'rgba(107, 63, 160, 0.08)',
                transform: 'scale(1.05)'
              }
            }}
          >
            {menuOpen ? 
              <CloseIcon sx={{ fontSize: 24 }} /> : 
              <MenuIcon sx={{ fontSize: 24 }} />
            }
          </IconButton>
        </Box>
        
        {/* Mobile Menu Drawer */}
        <Fade in={menuOpen} timeout={400}>
          <Box
            sx={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(250, 250, 250, 0.98)',
              backdropFilter: 'blur(24px) saturate(180%)',
              zIndex: 3000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingTop: 8,
            }}
            tabIndex={-1}
            role="menu"
            aria-modal="true"
            onKeyDown={e => { if (e.key === 'Escape') setMenuOpen(false); }}
          >
            <Box sx={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              right: 0,
              py: 3,
              px: 4,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '1px solid rgba(107, 63, 160, 0.08)'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                <Box
                  component="img"
                  src="/logo.png"
                  alt="Kaicension Logo"
                  sx={{
                    width: 36,
                    height: 36,
                    objectFit: 'contain',
                    borderRadius: '8px',
                  }}
                />
              </Box>
              
              <IconButton
                onClick={() => setMenuOpen(false)}
                sx={{ 
                  color: '#6B3FA0', 
                  background: 'rgba(107, 63, 160, 0.05)',
                  width: 40,
                  height: 40,
                  borderRadius: '12px',
                  '&:hover': {
                    background: 'rgba(107, 63, 160, 0.08)',
                  }
                }}
                aria-label="Close menu"
              >
                <CloseIcon sx={{ fontSize: 22 }} />
              </IconButton>
            </Box>
            
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 1.8, 
              mt: 12, 
              width: '85%',
              maxWidth: '380px'
            }}>
              {navLinks.map((link, index) => (
                <Button
                  key={link.id}
                  onClick={() => { handleScroll(link.id); setMenuOpen(false); }}
                  sx={{
                    fontWeight: 600,
                    fontSize: '1.15rem',
                    color: active === link.label ? '#6B3FA0' : '#0D0D0D',
                    borderRadius: '16px',
                    px: 3,
                    py: 1.8,
                    textTransform: 'none',
                    justifyContent: 'flex-start',
                    background: active === link.label ? 'rgba(107, 63, 160, 0.05)' : 'transparent',
                    letterSpacing: '0.02em',
                    fontFamily: 'Inter, sans-serif',
                    position: 'relative',
                    '&:hover': {
                      background: 'rgba(107, 63, 160, 0.05)',
                      color: '#6B3FA0',
                    },
                    '&::after': active === link.label ? {
                      content: '""',
                      position: 'absolute',
                      left: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '4px',
                      height: '40%',
                      background: 'linear-gradient(180deg, #6B3FA0 0%, #9A6AD6 100%)',
                      borderRadius: '4px',
                    } : {},
                    transition: 'all 0.2s ease',
                    animation: `fadeIn 0.5s ease forwards ${0.15 + index * 0.1}s`,
                    opacity: 0,
                  }}
                  aria-label={link.label}
                >
                  {link.label}
                </Button>
              ))}
              
              <Box sx={{ 
                mt: 3, 
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                animation: 'fadeIn 0.5s ease forwards 0.55s',
                opacity: 0,
              }}>
                
                
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    background: 'linear-gradient(135deg, #6B3FA0 0%, #9A6AD6 100%)',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    borderRadius: '16px',
                    px: 2.5,
                    py: 1.5,
                    fontSize: '1.05rem',
                    letterSpacing: '0.02em',
                    boxShadow: '0 4px 16px rgba(107, 63, 160, 0.16), 0 1px 0 rgba(255, 255, 255, 0.1) inset',
                    textTransform: 'none',
                    fontFamily: 'Inter, sans-serif',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.24s ease',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                      transition: 'left 0.7s ease',
                    },
                    '&:hover': {
                      background: 'linear-gradient(135deg, #7B4FB5 0%, #9A6AD6 100%)',
                      boxShadow: '0 6px 20px rgba(107, 63, 160, 0.2), 0 1px 0 rgba(255, 255, 255, 0.15) inset',
                      '&::before': {
                        left: '100%'
                      }
                    },
                  }}
                  onClick={() => { handleScroll('footer-section'); setMenuOpen(false); }}
                  aria-label="Transform now"
                >
                  Transform Now
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Box>
      
      {/* Keyframes for animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </Box>
  );
}

export default PremiumEliteNavbar;