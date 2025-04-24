import styled from '@emotion/styled';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const CTAButton = styled(Button)`
  background: linear-gradient(90deg, #8a2be2 0%, #4a0082 100%);
  color: white;
  font-weight: 700;
  padding: ${props => props.isFinal ? '14px 28px' : '12px 24px'};
  border-radius: 50px;
  font-size: ${props => props.isFinal ? '1.1rem' : '1rem'};
  text-transform: none;
  box-shadow: ${props => props.isFinal ? '0 6px 20px rgba(138, 43, 226, 0.4)' : '0 4px 15px rgba(138, 43, 226, 0.3)'};
  transition: all 0.3s ease;
  min-width: ${props => props.isFinal ? '280px' : '220px'};
  margin-top: ${props => props.isFinal ? '24px' : '0'};
  
  &:hover {
    background: linear-gradient(90deg, #9945e8 0%, #6c14a4 100%);
    box-shadow: 0 8px 25px rgba(138, 43, 226, 0.5);
    transform: translateY(-3px);
  }
  
  .MuiButton-startIcon {
    margin-right: 8px;
  }
`;

const WhatsAppCTA = ({ 
  text = "Start Your Transformation",
  message = "Hi, I need your service",
  section = "general",
  subtitle = "Click to message us directly on WhatsApp",
  isFinal = false
}) => {
  const handleWhatsAppClick = () => {
    // Send WhatsApp message only if this is the final CTA
    if (isFinal) {
      // Create section-specific messages
      let customMessage = message;
      
      // Add section context to the message if not already customized
      if (message === "Hi, I need your service") {
        switch(section) {
          case "problem":
            customMessage = "Hi, I'm facing similar challenges and need your help";
            break;
          case "solution":
            customMessage = "Hi, I'm interested in your solution for my startup";
            break;
          case "process":
            customMessage = "Hi, I want to learn more about your process";
            break;
          case "testimonial":
            customMessage = "Hi, I'm impressed by your results and want similar outcomes";
            break;
          default:
            // Keep default message
        }
      }
      
      // Format the phone number properly for WhatsApp API
      const phoneNumber = "6382641449";
      const formattedPhone = phoneNumber.replace(/[^\d+]/g, ""); // Remove any non-digit chars
      const whatsappURL = `https://api.whatsapp.com/send?phone=${formattedPhone}&text=${encodeURIComponent(customMessage)}`;
      
      // Open WhatsApp in a new tab
      window.open(whatsappURL, '_blank');
    } else {
      // Scroll to the next section in sequence
      let targetSectionId;
      
      switch(section) {
        case "hero":
          targetSectionId = "problem-section";
          break;
        case "problem":
          targetSectionId = "solution-section";
          break;
        case "solution":
          targetSectionId = "process-section";
          break;
        case "process":
          targetSectionId = "testimonials-section";
          break;
        default:
          targetSectionId = "testimonials-section";
      }
      
      const element = document.getElementById(targetSectionId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <Box sx={{ textAlign: 'center', my: 4, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={isFinal ? { scale: 1.03 } : { scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <CTAButton 
          variant="contained" 
          startIcon={<WhatsAppIcon />}
          onClick={handleWhatsAppClick}
          isFinal={isFinal}
        >
          {text}
        </CTAButton>
        <Typography
          variant="body2"
          sx={{ 
            mt: 2, 
            color: 'rgba(255,255,255,0.7)',
            fontSize: isFinal ? '1rem' : '0.9rem',
            maxWidth: isFinal ? '280px' : '220px'
          }}
        >
          {subtitle}
        </Typography>
      </motion.div>
    </Box>
  );
};

export default WhatsAppCTA; 