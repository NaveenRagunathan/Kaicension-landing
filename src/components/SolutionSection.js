import styled from '@emotion/styled';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import WhatsAppCTA from './WhatsAppCTA';

// Styled components for enhanced visual elements
const GradientText = styled(Typography)`
  background: linear-gradient(90deg, #8a2be2 0%, #4a0082 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
`;

const SolutionCard = styled(motion.div)`
  padding: 2.5rem;
  border-radius: 16px;
  background: linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;
  height: 100%;
  transition: all 0.3s ease-in-out;
  z-index: 1;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
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

const SolutionTitle = styled(Typography)`
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #8a2be2, #4a0082);
    border-radius: 3px;
  }
`;

const SolutionSubtitle = styled(Typography)`
  color: #8a2be2;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

const SolutionItem = styled(Box)`
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 1.5rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 0;
    width: 8px;
    height: 8px;
    background: #8a2be2;
    border-radius: 50%;
  }
`;

const ConnectorLine = styled(Box)`
  position: absolute;
  background: linear-gradient(90deg, #8a2be2, #4a0082);
  z-index: 0;
  
  @media (max-width: 900px) {
    display: none;
  }
`;

const SolutionSection = () => {
  const solutions = [
    {
      id: 1,
      title: "Fix the Flaws Killing Your Business",
      subtitle: "Business Model, Brand, Financials",
      items: [
        "*Business Model Surgery*: \"Why do users try but never buy?\" → We diagnose and rebuild your value proposition, channel strategy and unit economics.",
        "*Brand That Commands Attention*: \"Stop being 'another startup'\" → Become the category leader investors compete to back.",
        "*Financial Foundations*: \"Why are we burning cash with little to show?\" → Build metrics that balance aggressive growth and sustainable operations."
      ]
    },
    {
      id: 2,
      title: "Traction That Forces Investors to Act",
      subtitle: "PMF, Scalable Systems",
      items: [
        "*Product-Market Fit Breakthrough*: Finally get past the \"Is this even working?\" question → Test real demand with paying customers. Eliminate guesswork.",
        "*Distribution Equity That Scales*: \"Find out why your CAC keeps rising and use growth hacking strategies to reduce it while getting more traction\" → Engineer viral loops and retention systems that create unstoppable momentum."
      ]
    },
    {
      id: 3,
      title: "Become a \"Must Invest\" Business",
      subtitle: "Get the Investor Magnetism your Startup deserves",
      items: [
        "*Pitch Decks That Make VCs Eager*: \"We're not another story\" → We're the solution to a $1B+ market opportunity.",
        "*Metrics That Scream \"10x Returns\"*: \"Traction\" isn't just users—it's compelling LTV:CAC ratios, expanding margins, and consistent MoM growth that shows you're investment-ready."
      ]
    }
  ];

  return (
    <Box 
      id="solution-section"
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
          width: '60%',
          height: '60%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(138,43,226,0.15) 0%, rgba(0,0,0,0) 70%)',
          top: '20%',
          right: '-30%',
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
          bottom: '10%',
          left: '-20%',
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
            Your Escape Plan
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
            From Stuck to Funded
          </GradientText>
        </motion.div>

        <Box sx={{ position: 'relative' }}>
          {/* Connector lines between steps */}
          <ConnectorLine sx={{ 
            top: '25%', 
            left: '33%', 
            width: '33%', 
            height: '4px',
            borderRadius: '4px'
          }} />
          
          <ConnectorLine sx={{ 
            top: '50%', 
            left: '66%', 
            width: '4px', 
            height: '25%',
            borderRadius: '4px'
          }} />
          
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
            gap: { xs: 6, md: 4 },
            position: 'relative'
          }}>
            {solutions.map((solution, index) => (
              <Box 
                key={solution.id} 
                sx={{ 
                  position: 'relative',
                  zIndex: 2,
                  ...(index === 1 ? { mt: { md: 12, xs: 0 } } : {}),
                  ...(index === 2 ? { mt: { md: 0, xs: 0 } } : {})
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: index * 0.2,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      mb: 3
                    }}
                  >
                    <Box 
                      sx={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #8a2be2 30%, #4a0082 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 10px 20px rgba(138,43,226,0.3)',
                        fontWeight: 'bold',
                        fontSize: '1.5rem',
                        color: 'white'
                      }}
                    >
                      {solution.id}
                    </Box>
                  </Box>
                  
                  <SolutionCard>
                    <SolutionTitle variant="h4" component="h3">
                      {solution.title}
                    </SolutionTitle>
                    <SolutionSubtitle variant="subtitle1">
                      {solution.subtitle}
                    </SolutionSubtitle>
                    <Box>
                      {solution.items.map((item, itemIndex) => (
                        <SolutionItem key={itemIndex}>
                          <Typography
                            variant="body1"
                            sx={{ 
                              color: 'rgba(255,255,255,0.9)',
                              lineHeight: 1.7,
                              '& em': {
                                color: '#a168e3',
                                fontStyle: 'italic',
                                fontWeight: 'medium'
                              }
                            }}
                            dangerouslySetInnerHTML={{ __html: item.replace(/\*([^*]+)\*/g, '<em>$1</em>') }}
                          />
                        </SolutionItem>
                      ))}
                    </Box>
                  </SolutionCard>
                </motion.div>
              </Box>
            ))}
          </Box>
        </Box>
        
        <Box sx={{ mt: 12, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Box
              component="a"
              href="#process-section"
              sx={{
                display: 'inline-block',
                p: 3,
                borderRadius: '50px',
                background: 'linear-gradient(90deg, #8a2be2, #4a0082)',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
                boxShadow: '0 10px 20px rgba(138,43,226,0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 15px 30px rgba(138,43,226,0.5)',
                }
              }}
            >
              <Typography variant="h6" component="span">
                Discover Our Process →
              </Typography>
            </Box>
          </motion.div>
        </Box>

        <Box sx={{ mt: 8 }}>
          <WhatsAppCTA 
            text="Discover Your Solution" 
            section="solution"
            message="Hi, I'd like to explore how your solutions can help my startup grow."
            subtitle="Click to discuss custom strategies for your business"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default SolutionSection; 