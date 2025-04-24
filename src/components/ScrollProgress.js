import { Box, Tooltip } from '@mui/material';
import { motion, useScroll, useSpring } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [showTooltip, setShowTooltip] = useState(null);
  
  // Track scroll progress for the progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Section information
  const sections = [
    { id: 'hero-section', name: 'Home' },
    { id: 'problem-section', name: 'The Problem' },
    { id: 'solution-section', name: 'Your Escape Plan' },
    { id: 'process-section', name: 'Our Process' },
    { id: 'testimonials-section', name: 'Success Stories' },
    { id: 'faq-section', name: 'FAQ' }
  ];
  
  // Determine which section is currently active based on scroll position, preserving indices
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY + window.innerHeight / 3;
      // Loop through defined sections in reverse to find the first one above currentPosition
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionElement = document.getElementById(sections[i].id);
        if (sectionElement && sectionElement.offsetTop <= currentPosition) {
          setActiveSection(i);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll to section when indicator is clicked
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Get the header height (assuming 80px)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      // Smooth scroll to the section
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Progress bar at the top of the page */}
      <motion.div
        className="progress-bar"
        style={{ 
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'linear-gradient(90deg, #8A4FFF, #A375FF)',
          transformOrigin: '0%',
          zIndex: 9999
        }}
      />
      
      {/* Section indicators on the right side */}
      <Box
        sx={{
          position: 'fixed',
          right: { xs: 10, md: 20 },
          top: '50%',
          transform: 'translateY(-50%)',
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          gap: 1.5,
          zIndex: 1000,
        }}
      >
        {sections.map((section, index) => (
          <Tooltip
            key={index}
            title={section.name}
            placement="left"
            open={showTooltip === index}
            arrow
          >
            <Box 
              onClick={() => scrollToSection(section.id)}
              onMouseEnter={() => setShowTooltip(index)}
              onMouseLeave={() => setShowTooltip(null)}
              sx={{
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              {/* Indicator dot */}
              <motion.div
                animate={{
                  scale: activeSection === index ? 1 : 0.7,
                  backgroundColor: activeSection === index ? '#8A4FFF' : '#ccc',
                }}
                whileHover={{ scale: 1, backgroundColor: '#A375FF' }}
                transition={{ duration: 0.3 }}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  position: 'relative',
                  zIndex: 2,
                }}
              />
              
              {/* Line connecting dots */}
              {index < sections.length - 1 && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    height: 30,
                    width: 2,
                    backgroundColor: '#ddd',
                    transform: 'translate(-50%, 0%)',
                    zIndex: 1,
                  }}
                />
              )}
              
              {/* Section label for active item */}
              <motion.div
                animate={{
                  opacity: activeSection === index ? 1 : 0,
                  x: activeSection === index ? -10 : 0,
                }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'absolute',
                  right: 20,
                  top: 0,
                  fontWeight: 'bold',
                  color: '#8A4FFF',
                  fontSize: '0.85rem',
                  whiteSpace: 'nowrap',
                }}
              >
                {section.name}
              </motion.div>
            </Box>
          </Tooltip>
        ))}
      </Box>
    </>
  );
};

export default ScrollProgress; 