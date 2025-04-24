import styled from '@emotion/styled';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import WhatsAppCTA from './WhatsAppCTA';

// Styled components for spotlight testimonial
const TestimonialCard = styled(motion.div)`
  padding: 3.5rem;
  border-radius: 24px;
  background: linear-gradient(145deg, rgba(138,43,226,0.15) 0%, rgba(74,0,130,0.08) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(138,43,226,0.2);
  box-shadow: 0 25px 50px rgba(0,0,0,0.15);
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;
  max-width: 900px;
  margin: 0 auto;
  
  &::before {
    content: '"';
    position: absolute;
    top: 15px;
    left: 25px;
    font-size: 10rem;
    font-family: serif;
    color: rgba(138,43,226,0.15);
    line-height: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 150px;
    height: 150px;
    background: radial-gradient(circle, rgba(138,43,226,0.2) 0%, rgba(138,43,226,0) 70%);
    border-radius: 50%;
    z-index: 0;
  }
`;

const QuoteTitle = styled(Typography)`
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #8a2be2;
  font-size: 2.2rem;
  position: relative;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const QuoteText = styled(Typography)`
  color: rgba(255,255,255,0.85);
  line-height: 1.9;
  font-size: 1.25rem;
  text-align: center;
  font-weight: 400;
  letter-spacing: 0.015em;
  max-width: 800px;
  margin: 0 auto 2rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.7;
  }
`;

const QuoteAuthor = styled(Typography)`
  font-weight: 700;
  color: #8a2be2;
  margin-top: 2rem;
  position: relative;
  text-align: center;
  font-size: 1.1rem;
  
  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #8a2be2, #4a0082);
    border-radius: 3px;
  }
`;

const GradientText = styled(Typography)`
  background: linear-gradient(90deg, #8a2be2 0%, #4a0082 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
`;

const GlowingOrb = styled(Box)`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(138,43,226,0.3) 0%, rgba(138,43,226,0) 70%);
  filter: blur(25px);
  z-index: 0;
`;

const Testimonials = () => {
  return (
    <Box 
      id="testimonials-section"
      sx={{ 
        py: { xs: 10, md: 16 },
        position: 'relative',
        background: 'linear-gradient(180deg, #0a0a18 0%, #14121F 100%)',
        color: 'white',
        overflow: 'hidden' 
      }}
    >
      {/* Background glow effects */}
      <GlowingOrb sx={{ width: '600px', height: '600px', top: '-5%', left: '-10%', opacity: 0.6 }} />
      <GlowingOrb sx={{ width: '400px', height: '400px', bottom: '10%', right: '-8%', opacity: 0.5 }} />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Typography 
            variant="h2" 
            component="h2" 
            align="center" 
            sx={{ 
              mb: 2, 
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            From Struggle to
          </Typography>
          <GradientText 
            variant="h2" 
            component="span" 
            align="center" 
            sx={{ 
              display: 'block', 
              mb: { xs: 6, md: 10 },
              textAlign: 'center',
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Sustainable Success
          </GradientText>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <TestimonialCard>
            <QuoteTitle variant="h3" component="h3">
              "I Was Embarrassed By Our Metrics"
            </QuoteTitle>
            <QuoteText variant="body1">
              "Kaicension rebuilt our Brand Identity, Business Model, Unit Economics and Distribution Channels. We went from $5K MRR to $45K in just months—and closed and got to PMF faster than we thought possible."
            </QuoteText>
            <QuoteAuthor variant="subtitle1">
              – Austin, Fintech Founder (Nigeria)
            </QuoteAuthor>
          </TestimonialCard>
        </motion.div>
        
        <Box sx={{ mt: { xs: 10, md: 16 }, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                maxWidth: '700px',
                mx: 'auto',
                p: { xs: 3, md: 5 },
                borderRadius: '24px',
                background: 'linear-gradient(145deg, rgba(138,43,226,0.1) 0%, rgba(74,0,130,0.1) 100%)',
                border: '1px solid rgba(138,43,226,0.2)',
              }}
            >
              <Typography
                variant="h4"
                component="p"
                sx={{ 
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '1.75rem', md: '2.2rem' }
                }}
              >
                Ready to Transform Your Startup?
              </Typography>
              <Typography
                variant="body1"
                sx={{ 
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: 1.8,
                  fontSize: { xs: '1rem', md: '1.2rem' }
                }}
              >
                Your startup has the potential to transform its industry - but potential isn't enough. You need a strategic partner who can help you fix your foundations, build distribution equity, and position your business as a "must-invest" opportunity.
              </Typography>
              
              <WhatsAppCTA 
                text="Transform Your Business Like Austin" 
                section="testimonial"
                message="Hi, I saw Austin's amazing results and would like to achieve something similar with my startup."
                subtitle="Message us to start your transformation journey"
              />
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials; 