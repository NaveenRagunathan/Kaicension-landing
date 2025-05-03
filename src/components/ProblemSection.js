import styled from '@emotion/styled';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

// Styled components for enhanced visual elements
const GradientText = styled(Typography)`
  background: linear-gradient(90deg, #8a2be2 0%, #4a0082 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
`;

const ProblemCard = styled(Paper)`
  padding: 2rem;
  height: 100%;
  border-radius: 16px;
  background: linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 15px 25px rgba(0,0,0,0.05);
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 30px rgba(0,0,0,0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(138,43,226,0.05) 0%, rgba(74,0,130,0.05) 100%);
    z-index: -1;
  }
`;

const CardNumber = styled(Typography)`
  font-size: 4rem;
  font-weight: 900;
  position: absolute;
  top: -20px;
  right: 10px;
  opacity: 0.1;
  color: #8a2be2;
`;

const ZigzagContainer = styled(Box)`
  position: relative;
  margin-bottom: 8rem;
  
  &:nth-of-type(odd) {
    .zigzag-content {
      flex-direction: row-reverse;
    }
  }
`;

const ProblemSection = () => {
  const nightmares = [
    {
      title: "The Brutal Truth",
      description: `You're facing the twin 
  challenges that kill 90% of startups: Having weak distribution equity and underdeveloped brand equity. Without solving these foundational issues, you'll remain trapped in startup purgatory.`
    },
    {
      title: "The Virality Problem",
      description: `More, you are not been able to activate virality in your product no matter what you have tried.
  
  This is your main problem, and it's because your users are not so raved about your product or you are not giving them enough incentives to share your product with their loved ones and network.`
    },
    {
      title: "Why You’ve Been Stuck",
      description: `That's why you have been stuck for so long now:`
    },
    {
      title: "The Cost of Staying Stuck",
      description: `- Your team loses faith as momentum stalls making your stress mentally, physically and financially.\n- Competitors secure funding rounds you deserve and capture your market opportunity.\n- Your runway shortens while you're stuck in endless iteration and panicking.\n- The window for category leadership closes a little more each day as you lose brand equity.`
    },
    {
      title: "There Has Got to Be a Way Out",
      description: `But you can't go through all this
  
  There has got to be an escape plan yes?
  
  The Good news is there is!
  
  Continue reading to find out what it is.`
    }
  ];
  

  return (
    <Box 
      id="problem-section"
      sx={{ 
        py: 10, 
        position: 'relative',
        background: 'linear-gradient(180deg, #0a0a18 0%, #14121F 100%)',
        color: 'white',
        overflow: 'hidden'
      }}
    >
      {/* Background design elements */}
      <Box 
        sx={{
          position: 'absolute',
          width: '60%',
          height: '60%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(138,43,226,0.15) 0%, rgba(0,0,0,0) 70%)',
          top: '-20%',
          right: '-20%',
          zIndex: 0
        }}
      />
      
      <Box 
        sx={{
          position: 'absolute',
          width: '40%',
          height: '40%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(138,43,226,0.1) 0%, rgba(0,0,0,0) 70%)',
          bottom: '-10%',
          left: '-10%',
          zIndex: 0
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Typography 
            variant="h2" 
            component="h2" 
            align="center" 
            sx={{ mb: 2, fontWeight: 700 }}
          >
            The Founder's
          </Typography>
          <GradientText 
            variant="h2" 
            component="span" 
            align="center" 
            sx={{ 
              display: 'block', 
              mb: 6,
              textAlign: 'center'
            }}
          >
            Nightmare Scenario
          </GradientText>
        </motion.div>

        {nightmares.map((nightmare, index) => (
          <ZigzagContainer key={index}>
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Grid container spacing={4} className="zigzag-content" alignItems="center">
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h3"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: '1.75rem', md: '2.25rem' },
                      color: '#8a2be2',
                      textAlign: { xs: 'center', md: 'left' },
                      mb: 2
                    }}
                  >
                    {nightmare.title}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'rgba(255,255,255,0.9)', 
                      fontSize: '1.1rem',
                      lineHeight: 1.7,
                      position: 'relative',
                      zIndex: 2
                    }}
                  >
                    {nightmare.description}
                  </Typography>
                </Grid>
              </Grid>
            </motion.div>
          </ZigzagContainer>
        ))}
        
      </Container>
    </Box>
  );
};

export default ProblemSection; 