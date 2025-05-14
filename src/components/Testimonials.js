import styled from '@emotion/styled';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import WhatsAppCTA from './WhatsAppCTA';

// Styled components for spotlight testimonial
const TestimonialCard = styled(motion.div)`
  padding: 2.2rem 2.1rem;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(60, 20, 120, 0.92) 0%, rgba(138,43,226,0.16) 100%);
  border: 1.5px solid #A678F2;
  box-shadow: 0 10px 38px 0 rgba(90,30,170,0.32), 0 1.5px 12px 0 rgba(80,40,160,0.18);
  transition: all 0.5s cubic-bezier(.4,2,.6,1);
  position: relative;
  overflow: hidden;
  max-width: 900px;
  margin: 0 auto;
`;

const QuoteTitle = styled(Typography)`
  font-weight: 700;
  margin-bottom: 1.1rem;
  color: #A678F2;
  font-size: 1.5rem;
  position: relative;
  text-align: center;
`;

const QuoteText = styled(Typography)`
  color: #DDD;
  line-height: 1.6;
  font-size: 1rem;
  text-align: center;
  font-weight: 400;
  letter-spacing: 0.012em;
  max-width: 800px;
  margin: 0 auto 1.2rem;
  position: relative;
  z-index: 2;
`;

const QuoteAuthor = styled(Typography)`
  font-weight: 400;
  color: #AAA;
  margin-top: 1.1rem;
  position: relative;
  text-align: center;
  font-size: 0.9rem;
  font-style: italic;
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
        pt: { xs: 2.5, md: 5 }, 
        pb: { xs: 4, md: 7 }, 
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
            Founder Success Stories
          </Typography>
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
      </Container>
      <WhatsAppCTA 
        text="Start Your 4-Month Transformation Now" 
        section="testimonial"
      />
      {/* Top and bottom fade overlay for smooth transition */}
      <Box sx={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: { xs: 28, md: 38 },
        pointerEvents: 'none',
        background: 'linear-gradient(180deg, rgba(245,245,255,0.14) 60%, rgba(20,18,31,0) 100%)',
        zIndex: 10,
        transition: 'opacity 0.5s cubic-bezier(.4,2,.6,1)',
      }} />
      <Box sx={{
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: { xs: 34, md: 48 },
        pointerEvents: 'none',
        background: 'linear-gradient(0deg, rgba(245,245,255,0.14) 60%, rgba(20,18,31,0) 100%)',
        zIndex: 10,
        transition: 'opacity 0.5s cubic-bezier(.4,2,.6,1)',
      }} />
    </Box>
  );
};

export default Testimonials; 