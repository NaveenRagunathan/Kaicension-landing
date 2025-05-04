import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import WhatsAppCTA from './WhatsAppCTA';

const CustomizationSection = () => {
  return (
    <Box 
      id="customization-section"
      sx={{ 
        py: 12,
        background: 'linear-gradient(180deg, #F9F6FF 0%, #EEE9FB 40%, #E6DAFA 100%)',
        position: 'relative',
        overflow: 'hidden',
        color: '#2E1A47'
      }}
    >
      {/* Decorative glows */}
      <Box 
        sx={{
          position: 'absolute',
          width: '80%',
          height: '80%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192,146,255,0.25) 0%, rgba(255,255,255,0) 70%)',
          top: '-10%',
          right: '-30%',
          zIndex: 0
        }}
      />
      <Box 
        sx={{
          position: 'absolute',
          width: '50%',
          height: '50%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192,146,255,0.2) 0%, rgba(255,255,255,0) 70%)',
          bottom: '-5%',
          left: '-15%',
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
            sx={{ 
              mb: 2,
              fontWeight: 700,
              background: 'linear-gradient(90deg, #A47CFF, #C8ADFF)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Your solution is Tailored to
          </Typography>
          <Typography 
            variant="h2" 
            component="span" 
            align="center" 
            sx={{ 
              display: 'block',
              mb: 8,
              textAlign: 'center',
              fontWeight: 700,
              color: '#4B2D7A'
            }}
          >
            Your Unique Challenges
          </Typography>
        </motion.div>

        <Box sx={{ maxWidth: '800px', mx: 'auto', mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h5"
              component="p"
              sx={{ 
                mb: 4,
                color: '#4B2D7A',
                textAlign: 'center',
                lineHeight: 1.8
              }}
            >
              Whether you need a complete brand overhaul, distribution channel innovation, growth system architecture, or investor preparation, we customize our approach to your specific situation.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h5"
              component="p"
              sx={{ 
                mb: 6,
                color: '#4B2D7A',
                textAlign: 'center',
                lineHeight: 1.8
              }}
            >
              Every startup's path is different. That's why we begin with a comprehensive diagnostic to identify your specific growth blockers and opportunities before designing your transformation roadmap.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.7), rgba(245,235,255,0.85))',
                borderRadius: '16px',
                p: 4,
                textAlign: 'center',
                border: '1px solid rgba(175,140,255, 0.4)',
                boxShadow: '0 4px 30px rgba(170,130,255,0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}
            >
              <Typography
                variant="h4"
                component="p"
                sx={{ 
                  mb: 2,
                  color: '#A47CFF',
                  fontWeight: 600
                }}
              >
                Investment Range
              </Typography>
              <Typography
                variant="h3"
                component="p"
                sx={{ 
                  mb: 3,
                  fontWeight: 700,
                  color: '#4B2D7A'
                }}
              >
                $8,500 - $20,000
              </Typography>
              <Typography
                variant="h6"
                component="p"
                sx={{ 
                  color: '#6C4FA3',
                  fontStyle: 'italic'
                }}
              >
                for 6 months of transformation
              </Typography>
              <Typography
                variant="body1"
                sx={{ 
                  mt: 3,
                  color: '#8D70BA',
                  fontStyle: 'italic'
                }}
              >
                It all depends on what you need.
              </Typography>
            </Box>
          </motion.div>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <WhatsAppCTA 
            text="Discuss Your Unique Needs"
            section="customization"
            message="Hi, I'd like to discuss my startup's specific challenges and see how you can help."
            subtitle="Get a customized transformation plan"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default CustomizationSection;
