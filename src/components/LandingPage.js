import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import FAQ from './FAQ';
import Footer from './Footer';
import Hero from './Hero';
import PricingSection from './PricingSection';
import ProblemSection from './ProblemSection';
import ProcessSection from './ProcessSection';
import ScrollProgress from './ScrollProgress';
import SolutionSection from './SolutionSection';
import Testimonials from './Testimonials';

const LandingPage = () => {
  // Add a reveal animation class on scroll
  useEffect(() => {
    // Preload all section transitions when the page loads
    const sections = document.querySelectorAll('.section-transition');
    sections.forEach(section => {
      section.classList.add('preload');
    });
    
    // Allow animations after preload
    setTimeout(() => {
      sections.forEach(section => {
        section.classList.remove('preload');
      });
    }, 300);
    
    // Add CSS to handle section transitions
    const style = document.createElement('style');
    style.innerHTML = `
      .section-transition {
        opacity: 0;
        transform: translateY(40px);
        transition: opacity 0.8s ease, transform 0.8s ease;
      }

      .section-transition.preload {
        transition: none !important;
      }
      
      .section-transition.visible {
        opacity: 1;
        transform: translateY(0);
      }
      
      .delayed-transition {
        transition-delay: 0.2s;
      }
    `;
    document.head.appendChild(style);
    
    // Intersection observer for revealing sections
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });
    
    // Observe all sections
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Box sx={{ position: 'relative' }}>
      <ScrollProgress />
      
      {/* Hero Section with 3D entry */}
      <motion.div
        id="hero-section"
        initial={{ rotateY: -15, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ perspective: 1000 }}
      >
        <Box sx={{ position: 'relative', zIndex: 2, backgroundColor: 'transparent' }}>
          <Hero />
        </Box>
      </motion.div>
      
      {/* Problem Section with 3D entry */}
      <motion.div
        id="problem-section"
        initial={{ rotateY: -15, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true }}
        style={{ perspective: 1000 }}
      >
        <Box sx={{ position: 'relative', zIndex: 2, backgroundColor: '#ffffff' }}>
          <ProblemSection />
        </Box>
      </motion.div>
      
      {/* Solution Section with 3D entry */}
      <motion.div
        id="solution-section"
        initial={{ rotateY: -15, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
        viewport={{ once: true }}
        style={{ perspective: 1000 }}
      >
        <Box sx={{ position: 'relative', zIndex: 2, backgroundColor: 'rgba(245, 247, 250, 1)' }}>
          <SolutionSection />
        </Box>
      </motion.div>

      {/* Customization Section with 3D entry */}
      {/* <motion.div
        id="customization-section"
        initial={{ rotateY: -15, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
        viewport={{ once: true }}
        style={{ perspective: 1000 }}
      >
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <{CustomizationSection} />
        </Box>
      </motion.div> */}
      
      {/* Process Section with 3D entry */}
      <motion.div
        id="process-section"
        initial={{ rotateY: -15, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
        viewport={{ once: true }}
        style={{ perspective: 1000 }}
      >
        <Box sx={{ position: 'relative', zIndex: 2, backgroundColor: '#ffffff' }}>
          <ProcessSection />
        </Box>
      </motion.div>
      
      {/* Pricing Section with 3D entry */}
      <motion.div
        id="pricing-section"
        initial={{ rotateY: -15, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
        viewport={{ once: true }}
        style={{ perspective: 1000 }}
      >
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <PricingSection />
        </Box>
      </motion.div>
      
      {/* Testimonials Section with 3D entry */}
      <motion.div
        id="testimonials-section"
        initial={{ rotateY: -15, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
        viewport={{ once: true, amount: "some", margin: "-100px" }}
        style={{ perspective: 1000 }}
      >
        <Box sx={{ position: 'relative', zIndex: 2, backgroundColor: 'rgba(245, 247, 250, 1)' }}>
          <Testimonials />
        </Box>
      </motion.div>
      
      {/* FAQ Section with 3D entry */}
      <motion.div
        id="faq-section"
        initial={{ rotateY: -15, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 1.0 }}
        viewport={{ once: true }}
        style={{ perspective: 1000 }}
      >
        <Box sx={{ position: 'relative', zIndex: 2, backgroundColor: '#ffffff' }}>
          <FAQ />
        </Box>
      </motion.div>
      
      {/* Footer Section with 3D entry */}
      <motion.div
        initial={{ rotateY: -15, opacity: 0 }}
        whileInView={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }}
        viewport={{ once: true }}
        style={{ perspective: 1000 }}
      >
        <Box sx={{ position: 'relative', zIndex: 2, backgroundColor: 'rgba(245, 247, 250, 0.5)' }}>
          <Footer />
        </Box>
      </motion.div>
    </Box>
  );
};

export default LandingPage; 