import styled from '@emotion/styled';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

// Modify the styled component to use a transient prop with $ prefix
// This prevents the prop from being passed to the DOM element
const CTAButton = styled(Button)`
  background: linear-gradient(90deg, #8a2be2 0%, #4a0082 100%);
  color: white;
  font-weight: 700;
  padding: ${props => (props.$isFinal || props.$testimonial) ? '18px 38px' : '12px 24px'};
  border-radius: 50px;
  font-size: ${props => (props.$isFinal || props.$testimonial) ? '1.23rem' : '1rem'};
  text-transform: none;
  box-shadow: ${props => (props.$isFinal || props.$testimonial) ? '0 10px 32px 0 rgba(138, 43, 226, 0.45)' : '0 4px 15px rgba(138, 43, 226, 0.3)'};
  transition: all 0.3s cubic-bezier(.4,2,.6,1);
  min-width: ${props => (props.$isFinal || props.$testimonial) ? '320px' : '220px'};
  margin-top: ${props => (props.$isFinal || props.$testimonial) ? '32px' : '0'};
  animation: ${props => (props.$isFinal || props.$testimonial) ? 'pulseCTA 1.5s infinite cubic-bezier(.4,2,.6,1)' : 'none'};
  
  &:hover {
    background: linear-gradient(90deg, #9945e8 0%, #6c14a4 100%);
    box-shadow: 0 14px 36px rgba(138, 43, 226, 0.6);
    transform: translateY(-3px) scale(1.04);
  }
  
  .MuiButton-startIcon {
    margin-right: 8px;
  }

  @keyframes pulseCTA {
    0%, 100% { box-shadow: 0 0 0 0 #8A4FFF44; }
    50% { box-shadow: 0 0 18px 8px #A678F244; }
  }
`;

const WhatsAppCTA = ({ 
  text = "Start Your Transformation",
  message = "Hi, I need your service",
  section = "general",
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
      const phoneNumber = "+2347055432421";
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
          $isFinal={isFinal}
          $testimonial={section === "testimonial"}
        >
          {text}
        </CTAButton>
      </motion.div>
    </Box>
  );
};

export default WhatsAppCTA;