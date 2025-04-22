import { Box } from '@mui/material';
import React from 'react';
import FAQ from './FAQ';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import PricingSection from './PricingSection';
import ProblemSection from './ProblemSection';
import ProcessSection from './ProcessSection';
import SolutionSection from './SolutionSection';
import Testimonials from './Testimonials';

const LandingPage = () => {
  return (
    <Box>
      <Header />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <PricingSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </Box>
  );
};

export default LandingPage; 