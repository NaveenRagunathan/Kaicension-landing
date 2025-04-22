import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from '@mui/material';
import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What if we're too early?",
      answer: "We work with startups that have some traction (even $2K MRR)."
    },
    {
      question: "What if our market is too niche?",
      answer: "We've scaled startups in vertical SaaS, micro-mobility, and decentralized finance."
    },
    {
      question: "Can't we just hire a freelancer?",
      answer: "Freelancers fix logos. We fix business models, traction, and investor appeal."
    }
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{ mb: 6 }}
        >
          FAQ
        </Typography>

        <Box sx={{ width: '100%' }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                borderRadius: 2,
                '&:before': {
                  display: 'none',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  backgroundColor: 'background.paper',
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" component="h3">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: 'background.paper',
                  borderBottomLeftRadius: 2,
                  borderBottomRightRadius: 2,
                }}
              >
                <Typography variant="body1" color="text.secondary">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ; 