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
        background: 'linear-gradient(180deg, rgba(20, 18, 31, 0.95) 0%, rgba(10, 10, 24, 0.95) 100%)',
        position: 'relative',
        overflow: 'hidden',
        color: 'white'
      }}
    >
      {/* Background decorative elements */}
      <Box 
        sx={{
          position: 'absolute',
          width: '60%',
          height: '60%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(138,43,226,0.08) 0%, rgba(0,0,0,0) 70%)',
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
          background: 'radial-gradient(circle, rgba(138,43,226,0.05) 0%, rgba(0,0,0,0) 70%)',
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
            sx={{ 
              mb: 2,
              fontWeight: 700,
              background: 'linear-gradient(90deg, #8A4FFF, #A375FF)',
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
              fontWeight: 700
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
                color: 'rgba(255,255,255,0.9)',
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
                color: 'rgba(255,255,255,0.9)',
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
                background: 'linear-gradient(145deg, rgba(138,43,226,0.15) 0%, rgba(74,0,130,0.08) 100%)',
                borderRadius: '16px',
                p: 4,
                textAlign: 'center',
                border: '1px solid rgba(138,43,226,0.2)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <Typography
                variant="h4"
                component="p"
                sx={{ 
                  mb: 2,
                  color: '#8A4FFF',
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
                  fontWeight: 700
                }}
              >
                $8,500 - $20,000
              </Typography>
              <Typography
                variant="h6"
                component="p"
                sx={{ 
                  color: 'rgba(255,255,255,0.9)',
                  fontStyle: 'italic'
                }}
              >
                for 6 months of transformation
              </Typography>
              <Typography
                variant="body1"
                sx={{ 
                  mt: 3,
                  color: 'rgba(255,255,255,0.7)',
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