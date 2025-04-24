import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Badge, Box, Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import WhatsAppCTA from './WhatsAppCTA';

// Particle component for creating the 3D effect
const Particle = ({ size, color, x, y, delay }) => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: color,
        x,
        y,
        filter: 'blur(1px)',
      }}
      animate={{
        x: [x, x + Math.random() * 80 - 40],
        y: [y, y + Math.random() * 80 - 40],
        opacity: [0, 0.8, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
};

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const ref = useRef(null);
  
  // Mouse movement tracking for interactive background
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animation for mouse movement
  const springConfig = { damping: 30, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  // Transform mouse position to parallax effect values
  const moveX = useTransform(smoothMouseX, [0, 1], [-20, 20]);
  const moveY = useTransform(smoothMouseY, [0, 1], [-20, 20]);
  
  // Generate particles for background effect
  const particles = [];
  const particleCount = 30; // Increased particle count for more dynamic effect
  
  for (let i = 0; i < particleCount; i++) {
    const size = Math.random() * 15 + 5;
    const x = Math.random() * 100 + "%";
    const y = Math.random() * 100 + "%";
    const delay = Math.random() * 5;
    const opacity = Math.random() * 0.8;
    
    particles.push(
      <Particle 
        key={i} 
        size={size} 
        color={`rgba(138, 79, 255, ${opacity})`} 
        x={x} 
        y={y} 
        delay={delay}
      />
    );
  }
  
  // Update mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      mouseX.set(clientX / innerWidth);
      mouseY.set(clientY / innerHeight);
      setMousePosition({ x: clientX, y: clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);
  
  const scrollToFeatured = () => {
    const element = document.getElementById('problem-section');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100);
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(138, 79, 255, 0.08) 0%, rgba(163, 117, 255, 0.15) 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%238a4fff\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
          opacity: 0.5,
          zIndex: 0,
        }
      }}
    >
      {/* 3D Particle Background */}
      <Box sx={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none' }}>
        {particles}
        
        {/* 3D geometric shape that follows mouse */}
        <motion.div
          style={{
            position: 'absolute',
            width: 350,
            height: 350,
            borderRadius: '50%',
            background: 'radial-gradient(circle at center, rgba(138, 79, 255, 0.18), transparent 70%)',
            filter: 'blur(20px)',
            x: moveX,
            y: moveY,
            display: isMobile ? 'none' : 'block',
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Kaicension Brand */}
        <motion.div
          initial={{ opacity: 0, rotateX: -30 }}
          animate={{ opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
        >
          <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography
              variant="h4"
              sx={{
                textAlign: 'center',
                mb: 6,
                mt: { xs: -6, md: -8 },
                fontWeight: 800,
                fontSize: { xs: '2.4rem', sm: '3.2rem' },
                letterSpacing: "-1px",
                background: 'linear-gradient(135deg, #8A4FFF 0%, #A375FF 100%)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                position: 'relative',
                textShadow: '0 2px 10px rgba(138, 79, 255, 0.15)',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: { xs: 100, sm: 140 },
                  height: 4,
                  background: 'linear-gradient(90deg, #8A4FFF, #A375FF)',
                  borderRadius: 2,
                }
              }}
            >
              Kaicension
            </Typography>
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              style={{ position: 'absolute', right: { xs: '30%', sm: '35%' }, top: '0' }}
            >
              <Badge 
                sx={{ 
                  '& .MuiBadge-badge': { 
                    backgroundColor: '#a142f5',
                    padding: '8px 12px',
                    borderRadius: '12px',
                    fontSize: { xs: '0.7rem', sm: '0.85rem' },
                    fontWeight: 600,
                    letterSpacing: '0.5px',
                    boxShadow: '0 4px 8px rgba(138, 79, 255, 0.3)',
                  },
                }}
                badgeContent="16-WEEKS"
                overlap="rectangular"
                color="primary"
              />
            </motion.div>
          </Box>
        </motion.div>
        
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: { xs: '100%', sm: '90%', md: '900px' },
            mx: 'auto',
            position: 'relative',
            zIndex: 2,
            px: { xs: 2, sm: 4 },
          }}
        >
          {/* Headline in dramatic 3D split layout - Always visible when scrolling from bottom */}
          <Box sx={{ position: 'relative', mb: 6, opacity: 1 }}>
            {/* Part 1: From Stuck to Fundable - Always visble */}
            <Box
              sx={{
                opacity: 1,
                transform: { xs: 'none', md: 'translateX(-20px)' },
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.8rem', sm: '4rem', md: '5rem' },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  textAlign: { xs: 'center', md: 'left' },
                  mb: 1,
                  background: 'linear-gradient(90deg, #8A4FFF, #A375FF)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  textShadow: '0 2px 15px rgba(138, 79, 255, 0.2)',
                  letterSpacing: '-0.02em',
                }}
              >
                From Stuck to Fundable
              </Typography>
            </Box>

            {/* Transformation icon - Always visible */}
            <Box
              sx={{ 
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                marginTop: '0.5rem',
                marginBottom: '0.5rem',
                opacity: 1
              }}
            >
              <Box sx={{ 
                display: 'inline-flex', 
                p: 1.5,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(138, 79, 255, 0.15), rgba(163, 117, 255, 0.05))',
                boxShadow: '0 6px 15px rgba(138, 79, 255, 0.2)',
              }}>
                <TrendingUpIcon sx={{ 
                  fontSize: { xs: '2rem', sm: '2.5rem' },
                  color: '#8A4FFF'
                }} />
              </Box>
            </Box>
            
            {/* Part 2: Transform Your Business - Always visible */}
            <Box
              sx={{
                opacity: 1,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.8rem', md: '3.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  textAlign: 'center',
                  color: 'text.primary',
                  position: 'relative',
                  letterSpacing: '-0.01em',
                }}
              >
                Transform Your Business Model
              </Typography>
            </Box>
            
            {/* Part 3: Traction & Investor Appeal - Always visible */}
            <Box
              sx={{
                opacity: 1,
                transform: { xs: 'none', md: 'translateX(20px)' },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2rem', sm: '2.8rem', md: '3.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  textAlign: { xs: 'center', md: 'right' },
                  color: 'text.primary',
                  letterSpacing: '-0.01em',
                }}
              >
                <Box component="span" sx={{ 
                  position: 'relative',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -4,
                    left: 0,
                    width: '100%',
                    height: 3,
                    background: 'linear-gradient(90deg, #A375FF, #8A4FFF)',
                    borderRadius: 2,
                  }
                }}>
                  Traction & Investor Appeal
                </Box>
              </Typography>
            </Box>
            
            {/* Part 4: in 4 Months - Always visible */}
            <Box
              sx={{
                opacity: 1,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  mt: 2,
                  fontSize: { xs: '2.2rem', sm: '3rem', md: '3.8rem' },
                  fontWeight: 800,
                  textAlign: 'center',
                  background: 'linear-gradient(90deg, #8A4FFF, #A375FF)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  textShadow: '0 2px 15px rgba(138, 79, 255, 0.2)',
                  letterSpacing: '-0.01em',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -15,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: { xs: 60, sm: 80 },
                    height: 4,
                    background: 'linear-gradient(90deg, #8A4FFF, #A375FF)',
                    borderRadius: 2,
                  }
                }}
              >
                in 4 Months
              </Typography>
            </Box>
          </Box>
            
          {/* Subtitle text - Always visible */}
          <Box>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: { xs: 5, sm: 6 }, 
                color: 'text.secondary', 
                fontWeight: 400,
                maxWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '1.2rem', sm: '1.4rem' },
                lineHeight: 1.5,
                letterSpacing: '0.01em',
              }}
            >
              A dedicated program that propels founders from being 'almost there' to building truly 
              <Box 
                component="span" 
                sx={{ 
                  fontWeight: 700, 
                  color: '#8A4FFF',
                  mx: 0.5,
                }}
              >
                investor-ready startups
              </Box> 
              with compelling metrics.
            </Typography>
          </Box>
            
          <Box sx={{ mt: 5, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <WhatsAppCTA 
              text="Begin Your Transformation" 
              section="hero"
              message="Hi, I'm ready to transform my startup and achieve sustainable growth."
              subtitle="Instant response via WhatsApp"
            />
          </Box>
            
          {/* Scroll hint arrow */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            style={{ marginTop: '3.5rem', display: 'flex', justifyContent: 'center' }}
          >
            <ArrowForwardIcon sx={{ 
              transform: 'rotate(90deg)', 
              color: 'rgba(138, 79, 255, 0.6)', 
              fontSize: '2.2rem',
              filter: 'drop-shadow(0 2px 4px rgba(138, 79, 255, 0.3))'
            }} />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero; 