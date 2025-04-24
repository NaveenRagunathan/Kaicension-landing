import styled from '@emotion/styled';
import { Box, Container, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import WhatsAppCTA from './WhatsAppCTA';

// Styled components for the timeline
const TimelineContainer = styled(Box)`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background: linear-gradient(180deg, #8a2be2 0%, #4a0082 100%);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    border-radius: 3px;
    box-shadow: 0 0 15px rgba(138,43,226,0.3);
    
    @media (max-width: 768px) {
      left: 31px;
    }
  }
`;

const TimelineItem = styled(Box)`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
  
  &:nth-of-type(odd) {
    left: 0;
  }
  
  &:nth-of-type(even) {
    left: 50%;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    
    &:nth-of-type(even) {
      left: 0;
    }
  }
`;

const TimelineContent = styled(Paper)`
  padding: 30px;
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
    transform: translateY(-5px);
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

const TimelineDot = styled(Box)`
  position: absolute;
  width: 25px;
  height: 25px;
  right: -12.5px;
  background-color: #8a2be2;
  top: 26px;
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 0 10px rgba(138,43,226,0.5);
  
  &::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    left: 5px;
    top: 5px;
    background: white;
    border-radius: 50%;
  }
  
  ${TimelineItem}:nth-of-type(even) & {
    left: -12.5px;
  }
  
  @media (max-width: 768px) {
    left: 21px !important;
  }
`;

const GradientText = styled(Typography)`
  background: linear-gradient(90deg, #8a2be2 0%, #4a0082 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
`;

const ProcessSection = () => {
  const steps = [
    {
      title: "Phase 1: Fix the Foundation",
      timing: "Weeks 1-5",
      description: "Identify and repair the critical flaws in your business model, brand positioning, and financial structure.",
      items: [
        "*Business Model Reimagining*: Transform \"why users won't pay\" into \"what they'll eagerly pay premium pricing for.\"",
        "*Brand Architecture*: Evolve from \"forgettable\" to \"category defining.\"",
        "*Financial Framework*: Stop the cash burn while accelerating growth vectors."
      ]
    },
    {
      title: "Phase 2: Build Distribution & Branding Equity",
      timing: "Weeks 6-10",
      description: "Establish systems that generate consistent growth and build your company's reputation and market position.",
      items: [
        "*PMF Acceleration*: Validate demand with actual purchasing behavior, not vanity metrics.",
        "*Growth Systems Engineering*: Build automated acquisition and retention loops that scale without proportional cost increases."
      ]
    },
    {
      title: "Phase 3: Investor Readiness & Outreach",
      timing: "Weeks 11-16",
      description: "Prepare and position your company to attract the right investors with a compelling narrative and proof points.",
      items: [
        "*Pitch Narrative Overhaul*: Replace technical jargon with a compelling story investors can't ignore.",
        "*Strategic Introductions*: Get in front of 50+ global VCs actively hunting for your specific type of opportunity."
      ]
    },
    {
      title: "Transformation Complete",
      timing: "Week 16+",
      description: "Your startup has evolved from 'almost there' to 'can't ignore' with systems for continued growth.",
      items: [
        "*Sustainable Growth Engine*: Clear path to scaling with metrics that attract investors.",
        "*Compelling Investment Narrative*: Your story now resonates with VCs looking for opportunities in your space.",
        "*Operational Excellence*: Systems and processes that enable efficient scaling with the right team in place."
      ]
    }
  ];

  const transformationQuotes = [
    { week: 1, quote: "\"Finally, someone understands exactly why we're stuck.\"" },
    { week: 5, quote: "\"This is why users weren't paying—and now they are.\"" },
    { week: 10, quote: "\"Our growth finally feels systematic instead of accidental.\"" },
    { week: 16, quote: "\"Investors are competing for our attention now.\"" }
  ];

  return (
    <Box 
      id="process-section" 
      sx={{ 
        py: 10, 
        position: 'relative',
        background: 'linear-gradient(180deg, #14121F 0%, #0a0a18 100%)',
        color: 'white',
        overflow: 'hidden' 
      }}
    >
      {/* Background design elements */}
      <Box 
        sx={{
          position: 'absolute',
          width: '50%',
          height: '50%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(138,43,226,0.1) 0%, rgba(0,0,0,0) 70%)',
          top: '10%',
          left: '-20%',
          zIndex: 0
        }}
      />
      
      <Box 
        sx={{
          position: 'absolute',
          width: '40%',
          height: '40%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(138,43,226,0.08) 0%, rgba(0,0,0,0) 70%)',
          bottom: '10%',
          right: '-10%',
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
            Your 4-Month
          </Typography>
          <GradientText 
            variant="h2" 
            component="span" 
            align="center" 
            sx={{ 
              display: 'block', 
              mb: 8,
              textAlign: 'center'
            }}
          >
            Transformation Journey
          </GradientText>
        </motion.div>

        <TimelineContainer>
          {steps.map((step, index) => (
            <TimelineItem key={index}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <TimelineDot />
                <TimelineContent>
                  <Typography 
                    variant="overline" 
                    component="div"
                    sx={{ 
                      color: '#8a2be2',
                      fontWeight: 'bold',
                      letterSpacing: 1.5,
                      mb: 1
                    }}
                  >
                    {step.timing}
                  </Typography>
                  <Typography 
                    variant="h4" 
                    component="h3" 
                    sx={{ 
                      mb: 2, 
                      color: 'white',
                      position: 'relative',
                      zIndex: 2
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'rgba(255,255,255,0.8)', 
                      mb: 3,
                      lineHeight: 1.6,
                      position: 'relative',
                      zIndex: 2
                    }}
                  >
                    {step.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {step.items.map((item, itemIndex) => (
                      <Typography
                        key={itemIndex}
                        variant="body1"
                        sx={{ 
                          color: 'rgba(255,255,255,0.9)',
                          lineHeight: 1.6,
                          '& em': {
                            color: '#a168e3',
                            fontStyle: 'italic',
                            fontWeight: 'medium'
                          }
                        }}
                        dangerouslySetInnerHTML={{ __html: item.replace(/\*([^*]+)\*/g, '<em>$1</em>') }}
                      />
                    ))}
                  </Box>
                </TimelineContent>
              </motion.div>
            </TimelineItem>
          ))}
        </TimelineContainer>
        
        <Box sx={{ mt: 12, mb: 4, textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            component="h3" 
            sx={{ mb: 6 }}
          >
            What Founders Say
          </Typography>
          
          <Box 
            sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 4, 
              justifyContent: 'center' 
            }}
          >
            {transformationQuotes.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                style={{ width: '260px' }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Box
                    sx={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #8a2be2 0%, #4a0082 100%)',
                      margin: '0 auto 1rem',
                      boxShadow: '0 5px 15px rgba(138,43,226,0.3)'
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      component="span"
                      sx={{ 
                        fontWeight: 'bold',
                        color: 'white'
                      }}
                    >
                      Week {item.week}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{ 
                      color: 'white',
                      fontStyle: 'italic',
                      textAlign: 'center',
                      lineHeight: 1.6
                    }}
                  >
                    {item.quote}
                  </Typography>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </Box>

        <Box sx={{ mt: 8 }}>
          <WhatsAppCTA 
            text="Start Your 4-Month Journey" 
            section="process"
            message="Hi, I want to begin the 4-month transformation process for my startup."
            subtitle="Click to discuss how we can tailor our process to your needs"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default ProcessSection; 