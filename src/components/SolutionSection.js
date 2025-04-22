import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

const SolutionSection = () => {
  const solutions = [
    {
      title: "Fix the Flaws Killing Your Business",
      subtitle: "Business Model, Brand, Financials",
      items: [
        "Business Model Surgery: Why do users try but never buy? → We dissect pricing, channels, and unit economics.",
        "Brand That Converts: Stop being 'another startup' → Become the category leader investors fight over.",
        "Financial Firewalls: Why are we burning cash? → Build metrics that balance growth and survival."
      ]
    },
    {
      title: "Traction That Forces Investors to Act",
      subtitle: "PMF, Scalable Systems",
      items: [
        "PMF or Die Trying: Is this even working? → Test demand in real markets. Kill guesswork.",
        "Growth That Feels Effortless: Why does CAC keep rising? → Engineer referral loops and retention hooks that actually scale."
      ]
    },
    {
      title: "Become a 'Must Invest' Business",
      subtitle: "Investor Magnetism",
      items: [
        "Pitch Decks That Make VCs Beg: We're not another story → We're the solution to a $1B+ problem.",
        "Metrics That Scream '10x Returns': Traction isn't users—it's LTV:CAC ratios, margins, and MoM growth."
      ]
    }
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{ mb: 6 }}
        >
          Your Escape Plan: Fix the Foundations, Ignite Growth, Secure Funding
        </Typography>

        <Grid container spacing={4}>
          {solutions.map((solution, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      transition: 'transform 0.3s ease-in-out',
                    },
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h3"
                    sx={{ mb: 2, color: 'primary.main' }}
                  >
                    {solution.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ mb: 3, color: 'text.secondary' }}
                  >
                    {solution.subtitle}
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {solution.items.map((item, itemIndex) => (
                      <Typography
                        key={itemIndex}
                        component="li"
                        variant="body1"
                        sx={{ mb: 2 }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SolutionSection; 