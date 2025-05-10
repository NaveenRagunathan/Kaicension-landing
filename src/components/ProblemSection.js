import styled from '@emotion/styled';
import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

// Styled components with enhanced visual elements
const GlowingGradientText = styled(Typography)`
  background: linear-gradient(90deg, #8a2be2 0%, #4a0082 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  position: relative;
  
  &::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    background: linear-gradient(90deg, #8a2be2 0%, #4a0082 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: blur(8px);
    opacity: 0.7;
  }
`;

const FloatingCard = styled(motion.div)`
  padding: 2rem;
  height: 100%;
  border-radius: 16px;
  background: rgba(20, 18, 31, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(138, 43, 226, 0.2);
  box-shadow: 
    0 15px 35px rgba(0, 0, 0, 0.2),
    inset 0 0 15px rgba(138, 43, 226, 0.1);
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at top right,
      rgba(138, 43, 226, 0.15),
      transparent 70%
    );
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(138, 43, 226, 0.1),
      transparent
    );
    transform: rotate(45deg);
    animation: shimmer 8s infinite linear;
    z-index: -1;
  }
  
  @keyframes shimmer {
    from { transform: translateX(-50%) rotate(45deg); }
    to { transform: translateX(50%) rotate(45deg); }
  }
`;

const CardTitle = styled(Typography)`
  font-weight: 700;
  background: linear-gradient(90deg, #8a2be2 0%, #4a0082 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  display: inline-block;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    height: 2px;
    width: 0;
    background: linear-gradient(90deg, #8a2be2 0%, #4a0082 100%);
    transition: width 0.5s ease;
  }
  
  ${FloatingCard}:hover &::after {
    width: 100%;
  }
`;

const CardNumber = styled(Typography)`
  font-size: 8rem;
  font-weight: 900;
  position: absolute;
  top: -30px;
  right: 10px;
  opacity: 0.07;
  color: #8a2be2;
  font-family: 'Poppins', sans-serif;
`;

const ParticleCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.5;
`;

// Component for particles animation
const Particles = () => {
  React.useEffect(() => {
    const canvas = document.getElementById('particles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: `rgba(138, 43, 226, ${Math.random() * 0.5})`,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <ParticleCanvas id="particles" />;
};

const ProblemSection = () => {
  const [setHoveredCard] = useState(null);

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
      title: "The Cost of Staying Stuck",
      description: `Your team loses faith as momentum stalls making your stress mentally, physically and financially.\nCompetitors secure funding rounds you deserve and capture your market opportunity.\nYour runway shortens while you're stuck in endless iteration and panicking.\nThe window for category leadership closes a little more each day as you lose brand equity.`
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.03,
      boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
      transition: {
        duration: 0.3
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  return (
    <Box
      id="problem-section"
      sx={{
        py: 12,
        position: 'relative',
        background: 'linear-gradient(180deg, #0a0a18 0%, #14121F 100%)',
        color: 'white',
        overflow: 'hidden'
      }}
    >
      <Particles />

      {/* Background design elements */}
      <Box
        sx={{
          position: 'absolute',
          width: '70%',
          height: '70%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(138,43,226,0.12) 0%, rgba(0,0,0,0) 70%)',
          top: '-30%',
          right: '-20%',
          zIndex: 0,
          filter: 'blur(40px)'
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          width: '50%',
          height: '50%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74,0,130,0.08) 0%, rgba(0,0,0,0) 70%)',
          bottom: '-10%',
          left: '-10%',
          zIndex: 0,
          filter: 'blur(30px)'
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleVariants}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{
              mb: 1,
              fontWeight: 700,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}
          >
            The Founder's
          </Typography>
          <GlowingGradientText
            data-text="Nightmare Scenario"
            variant="h2"
            component="span"
            align="center"
            sx={{
              display: 'block',
              mb: 8,
              textAlign: 'center',
              fontSize: { xs: '2.5rem', md: '3.5rem' },
            }}
          >
            Nightmare Scenario
          </GlowingGradientText>
        </motion.div>

        <Grid container spacing={4}>
          {nightmares.map((nightmare, index) => (
            <Grid item xs={12} key={index} sx={{ mb: 5 }}>
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariants}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <FloatingCard>
                  <CardNumber>{index + 1}</CardNumber>
                  <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} md={4}>
                      <CardTitle
                        variant="h3"
                        component="h3"
                        sx={{
                          fontSize: { xs: '1.8rem', md: '2.3rem' },
                        }}
                      >
                        {nightmare.title}
                      </CardTitle>
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'rgba(255,255,255,0.9)',
                          fontSize: '1.1rem',
                          lineHeight: 1.8,
                          position: 'relative',
                          whiteSpace: 'pre-line',
                          letterSpacing: '0.02em',
                          fontWeight: 300,
                          textShadow: '0 1px 2px rgba(0,0,0,0.2)',
                          fontFamily: "'Montserrat', 'Arial', sans-serif"
                        }}
                      >
                        {nightmare.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </FloatingCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>


        {/* Escape Way Out Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: 8,
              p: 5,
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.15), rgba(74, 0, 130, 0.1))',
              border: '1px solid rgba(138, 43, 226, 0.2)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(138, 43, 226, 0.2), transparent 70%)',
                borderRadius: '50%',
                transform: 'translate(30%, -30%)',
                filter: 'blur(20px)',
              }}
            />

            <Typography
              variant="h3"
              sx={{
                color: '#8a2be2',
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2rem', md: '2.5rem' },
                textShadow: '0 2px 10px rgba(0,0,0,0.2)'
              }}
            >
              There Has Got to Be a Way Out
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: '1.15rem',
                lineHeight: 1.8,
                mb: 2,
                letterSpacing: '0.02em',
                fontWeight: 300,
                textShadow: '0 1px 2px rgba(0,0,0,0.2)'
              }}
            >
              But you can't go through all this
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: '1.15rem',
                lineHeight: 1.8,
                mb: 2
              }}
            >
              There has got to be an escape plan yes?
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'white',
                fontSize: '1.25rem',
                fontWeight: 500,
                mb: 3,
                letterSpacing: '0.03em',
                textShadow: '0 1px 3px rgba(138,43,226,0.3)'
              }}
            >
              The Good news is there is!
            </Typography>

            <Box sx={{ mt: 12, textAlign: 'center' }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <Box
                  component="a"
                  href="#solution-section"
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
                    Continue Reading This →
                  </Typography>
                </Box>
              </motion.div>
            </Box>


          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProblemSection;
