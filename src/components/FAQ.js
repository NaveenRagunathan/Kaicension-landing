import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Container,
    Typography
} from '@mui/material';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react';

// Magnetic Button Component
const MagneticButton = ({ children, onClick }) => {
  const buttonRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Motion values for the magnetic effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth spring animation for mouse movement
  const springConfig = { damping: 25, stiffness: 400 };
  const moveX = useSpring(useTransform(mouseX, [-100, 100], [-15, 15]), springConfig);
  const moveY = useSpring(useTransform(mouseY, [-100, 100], [-15, 15]), springConfig);
  const scale = useSpring(isHovered ? 1.1 : 1, springConfig);
  
  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to button center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate mouse distance from center
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;
    
    // Update motion values
    mouseX.set(x);
    mouseY.set(y);
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };
  
  return (
    <motion.div
      ref={buttonRef}
      style={{
        x: moveX,
        y: moveY,
        scale,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

const FAQ = () => {
  const [expandedPanel, setExpandedPanel] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState(null);
  
  const faqs = [
    {
      question: "What if we're too early?",
      answer: "We work with startups that have some traction (even $2K MRR), focusing on building the foundations for exponential growth."
    },
    {
      question: "What if our market is too niche?",
      answer: "We've scaled startups in vertical SaaS, Foodtech, Fintech, and dozens of specialized markets. Niche often means better defensibility."
    },
    {
      question: "Can't we just hire separate specialists?",
      answer: "Fragmented advice creates fragmented results. We deliver an integrated approach that aligns your business model, distribution strategy, brand positioning, and investor story."
    }
  ];
  
  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
  };
  
  const handleQuestionHover = (index) => {
    setActiveQuestion(index);
  };
  
  const handleQuestionLeave = () => {
    setActiveQuestion(null);
  };

  return (
    <Box 
      sx={{ 
        py: 8, 
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative elements */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        sx={{
          position: 'absolute',
          top: '5%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at center, rgba(138, 79, 255, 0.05), transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />
      
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{ 
              mb: 2,
              background: 'linear-gradient(90deg, #8A4FFF, #A375FF)',
              backgroundSize: '200% auto',
              color: 'transparent',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          >
            FAQ
          </Typography>
        </motion.div>

        <Typography
          variant="h6"
          component="p"
          align="center"
          sx={{ 
            mb: 6, 
            fontStyle: 'italic',
            color: 'text.secondary'
          }}
        >
          (Ease Anxiety)
        </Typography>

        <Box sx={{ mb: 6 }}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Accordion
                expanded={expandedPanel === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                elevation={expandedPanel === `panel${index}` ? 3 : 1}
                sx={{
                  mb: 2,
                  borderRadius: '8px !important',
                  overflow: 'hidden',
                  '&:before': {
                    display: 'none',
                  },
                  '&.Mui-expanded': {
                    margin: '0 0 16px 0',
                    transform: 'scale(1.02)',
                    transition: 'all 0.3s ease',
                  },
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: expandedPanel === `panel${index}` ? '' : 'rgba(138, 79, 255, 0.03)',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <motion.div
                      animate={{ 
                        rotate: expandedPanel === `panel${index}` ? 180 : 0,
                        color: expandedPanel === `panel${index}` ? '#8A4FFF' : 'rgba(0, 0, 0, 0.54)',
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExpandMoreIcon />
                    </motion.div>
                  }
                  sx={{
                    '&.Mui-expanded': {
                      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
                    },
                    '&:hover': {
                      '.question-text': {
                        color: '#8A4FFF',
                        transform: 'translateX(8px)',
                      },
                    },
                  }}
                  onMouseEnter={() => handleQuestionHover(index)}
                  onMouseLeave={handleQuestionLeave}
                >
                  <motion.div
                    animate={{ 
                      color: expandedPanel === `panel${index}` || activeQuestion === index ? '#8A4FFF' : 'inherit',
                      x: expandedPanel === `panel${index}` ? 10 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="question-text"
                    style={{ transition: 'transform 0.3s ease, color 0.3s ease' }}
                  >
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontStyle: 'italic',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </motion.div>
                </AccordionSummary>
                <AccordionDetails>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Typography variant="body1">{faq.answer}</Typography>
                  </motion.div>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
          <MagneticButton>
            <Button
              variant="contained"
              size="large"
              sx={{
                py: 1.5,
                px: 4,
                borderRadius: '28px',
                fontSize: '1.1rem',
                backgroundColor: '#8A4FFF',
                background: 'linear-gradient(45deg, #8A4FFF, #A375FF)',
                boxShadow: '0 6px 20px rgba(138, 79, 255, 0.25)',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  background: 'linear-gradient(45deg, #8A4FFF, #A375FF)',
                  boxShadow: '0 10px 30px rgba(138, 79, 255, 0.35)',
                },
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                  transition: 'all 0.6s ease',
                },
                '&:hover:before': {
                  left: '100%',
                }
              }}
            >
              Start Your Transformation
            </Button>
          </MagneticButton>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ; 