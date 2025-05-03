import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import WhatsAppCTA from './WhatsAppCTA';

const Footer = () => {
  return (
    <Box id="footer-section" sx={{ 
      py: 8, 
      bgcolor: 'background.paper',
      background: 'linear-gradient(180deg, #ffffff 0%, rgba(245, 247, 250, 0.8) 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background gradient elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(138,43,226,0.05) 0%, rgba(0,0,0,0) 70%)',
          zIndex: 0
        }}
      />
      
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{ 
            mb: 3,
            fontWeight: 700,
            background: 'linear-gradient(90deg, #8A4FFF, #A375FF)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Your Startup's True Purpose
        </Typography>
        
        <Typography
          variant="h6"
          component="p"
          align="center"
          sx={{ 
            mb: 6,
            color: 'text.secondary',
            fontStyle: 'italic'
          }}
        >
          (Aspiration & Mission)
        </Typography>

        <Typography
          variant="h5"
          component="p"
          align="center"
          sx={{ 
            mb: 4,
            fontWeight: 500,
            fontStyle: 'italic'
          }}
        >
          Your startup isn't just about you.
        </Typography>
        
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {[
            {
              text: "The 10,000 small businesses waiting for your SaaS tool to transform their operations",
              emphasis: "The 10,000 small businesses"
            },
            {
              text: "The 100,000 patients your healthtech could empower with better care",
              emphasis: "The 100,000 patients"
            },
            {
              text: "The ecosystem of stakeholders who will benefit from your innovation—if you can scale it",
              emphasis: "The ecosystem of stakeholders"
            }
          ].map((item, index) => (
            <Grid item xs={12} key={index}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center',
                '&:before': {
                  content: '""',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#8A4FFF',
                  marginRight: '16px',
                  flexShrink: 0
                }
              }}>
                <Typography
                  variant="h5"
                  component="p"
                  sx={{ 
                    color: 'text.secondary',
                    '& em': {
                      color: '#8A4FFF',
                      fontStyle: 'normal',
                      fontWeight: 600
                    }
                  }}
                  dangerouslySetInnerHTML={{
                    __html: item.text.replace(item.emphasis, `<em>${item.emphasis}</em>`)
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="h5"
          component="p"
          align="center"
          sx={{ 
            mb: 3,
            maxWidth: '800px',
            mx: 'auto',
            color: 'text.secondary',
            lineHeight: 1.6
          }}
        >
          The world needs your solution to succeed. Let's build the distribution equity and brand resonance to make your startup impossible to ignore.
        </Typography>

        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <WhatsAppCTA
            text="Start Your 6-Month Transformation"
            section="footer"
            message="Hi, I'd like to start my transformation journey and make my startup impossible to ignore."
            subtitle="Let's make your startup's true purpose a reality"
            isFinal={true}
          />
        </Box>

        <Box sx={{ mt: 8, textAlign: 'center', borderTop: '1px solid rgba(0,0,0,0.1)', pt: 4 }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Kaicension. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 