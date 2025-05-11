import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Dialog,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

// eslint-disable-next-line no-unused-vars
function TypingHeadline() {
  const fullText = "Finally your Startup can blast off!";
  const [displayed, setDisplayed] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 32);
    const cursorBlink = setInterval(() => setShowCursor((v) => !v), 550);
    return () => { clearInterval(interval); clearInterval(cursorBlink); };
  }, []);
  return (
    <Typography
      variant="h1"
      sx={{
        fontWeight: 900,
        fontSize: { xs: "2.7rem", sm: "3.2rem", md: "3.8rem" },
        letterSpacing: '-0.5px',
        lineHeight: 1.08,
        color: "#C8A2F0",
        mb: 1,
        textShadow: '0 2px 16px #e7d6fa',
        textAlign: { xs: "center", md: "left" },
        fontFamily: `'Inter', 'Manrope', 'Poppins', 'Montserrat', 'Roboto', sans-serif`,
      }}
    >
      {displayed}
      <span style={{ color: '#C8A2F0', fontWeight: 900, opacity: showCursor ? 1 : 0 }}>|</span>
    </Typography>
  );
}

// --- Premium 3D Navbar ---
function PremiumNavbar({ active = 'Home' }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 28,
        left: '50%',
        transform: 'translateX(-50%)',
        width: { xs: '85%', sm: '70%', md: '60%', lg: '50%' },
        maxWidth: '800px',
        zIndex: 2000,
        animation: 'fadeInNav 0.6s cubic-bezier(.16,1,.3,1) forwards',
      }}
    >
      <Box
        sx={{
          background: '#ffffff',
          backdropFilter: 'blur(12px)',
          borderRadius: '24px',
          boxShadow: '0 4px 24px 0 rgba(200,162,240,0.08)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          padding: { xs: '12px 16px', md: '12px 24px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          height: { xs: '64px', md: '64px' },
          maxWidth: { xs: '90%', md: '1100px' },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: '5%',
            right: '5%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(137,79,242,0.2), transparent)',
          }
        }}
      >
        {/* Logo - Bigger size */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            src="/logo.png"
            alt="Kaicension Logo"
            sx={{
              height: { xs: 40, md: 42 },
              width: 'auto',
              maxHeight: '100%',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
        </Box>

        {/* Desktop Navigation */}
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: 3,
          }}
        >
          {[
            { label: 'Home', id: 'home-section' },
            { label: 'Problem', id: 'problem-section' },
            { label: 'Solution', id: 'solution-section' },
            { label: 'Pricing', id: 'pricing-section' },
            { label: 'Testimonial', id: 'testimonials-section' }
          ].map((item) => (
            <Typography
              key={item.label}
              variant="body1"
              sx={{
                fontWeight: 700,
                fontSize: '0.95rem',
                color: active === item.label ? '#7030e0' : '#1a1a2e',
                cursor: 'pointer',
                transition: 'all 0.2s',
                position: 'relative',
                textShadow: '0 1px 1px rgba(255,255,255,0.8)',
                '&:hover': {
                  color: '#7030e0',
                  transform: 'translateY(-1px)',
                },
                '&::after': active === item.label ? {
                  content: '""',
                  position: 'absolute',
                  bottom: -2,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '70%',
                  height: '3px',
                  background: 'linear-gradient(90deg, #7030e0 0%, #4f8cf2 100%)',
                  borderRadius: '8px',
                } : {},
              }}
              onClick={() => {
                const el = document.getElementById(item.id);
                if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Box>

        {/* CTA Button */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box
            sx={{
              background: 'linear-gradient(90deg, #894ff2 0%, #4f8cf2 100%)',
              borderRadius: '30px',
              padding: { xs: '9px 18px', md: '10px 22px' },
              color: '#fff',
              fontWeight: 700,
              fontSize: { xs: '0.85rem', md: '0.95rem' },
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(137,79,242,0.25)',
              transition: 'all 0.3s cubic-bezier(.16,1,.3,1)',
              '&:hover': {
                transform: 'translateY(-2px) scale(1.03)',
                boxShadow: '0 8px 20px rgba(137,79,242,0.35)',
              },
              '&:active': {
                transform: 'translateY(1px)',
              },
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              gap: 1,
            }}
            onClick={() => {
              const footerEl = document.getElementById('footer-section') || document.querySelector('footer');
              if (footerEl) window.scrollTo({ top: footerEl.offsetTop - 80, behavior: 'smooth' });
            }}
          >
            <span>Transform Now</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Box>

          {/* Mobile Menu Button */}
          {!menuOpen && (
            <Box
              onClick={() => setMenuOpen(true)}
              sx={{
                display: { xs: 'flex', md: 'none' },
                alignItems: 'center',
                justifyContent: 'center',
                width: 36,
                height: 36,
                cursor: 'pointer',
                borderRadius: '8px',
                background: 'rgba(137,79,242,0.1)',
                transition: 'all 0.2s',
                '&:hover': {
                  background: 'rgba(137,79,242,0.2)',
                  transform: 'translateY(-1px)'
                },
                '&:active': {
                  transform: 'translateY(1px)'
                }
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect y="5" width="24" height="2" rx="1" fill="white" />
                <rect y="11" width="24" height="2" rx="1" fill="white" />
                <rect y="17" width="24" height="2" rx="1" fill="white" />
              </svg>
            </Box>
          )}
        </Box>
      </Box>
    
      {/* Add keyframes for animations */}
      <style jsx global>{`
          @keyframes fadeInNav {
            from { opacity: 0; transform: translate(-50%, -10px); }
            to { opacity: 1; transform: translate(-50%, 0); }
          }
          @keyframes fadeInHero {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse {
            0% { transform: translateX(-50%) scale(1); opacity: 1; }
            50% { transform: translateX(-50%) scale(1.5); opacity: 0.7; }
            100% { transform: translateX(-50%) scale(1); opacity: 1; }
          }
          @keyframes chevronPulse {
            0% { transform: translateX(var(--tx)) rotate(var(--r)) translateY(0); opacity: var(--o); }
            50% { transform: translateX(var(--tx)) rotate(var(--r)) translateY(3px); opacity: var(--o); }
            100% { transform: translateX(var(--tx)) rotate(var(--r)) translateY(0); opacity: var(--o); }
          }
          @keyframes fadeInPill {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
    </Box>
  );
}

// --- Sticker effect for "blast off!" ---
function Sticker({ children }) {
  return (
    <span
      style={{
        display: 'inline-block',
        background: 'rgba(112, 48, 224, 0.25)',
        border: '2.5px dashed #7030e0',
        borderRadius: 14,
        padding: '0.2em 0.6em',
        color: '#7030e0',
        fontWeight: 900,
        fontSize: '1em',
        boxShadow: '2px 4px 18px 0 rgba(112, 48, 224, 0.3)',
        transform: 'rotate(2.5deg)',
        marginLeft: 8,
        marginRight: 2,
        marginTop: '0.5rem', // Added margin top for mobile view
        filter: 'drop-shadow(0 2px 8px rgba(112, 48, 224, 0.5))',
        fontFamily: 'inherit',
        position: 'relative',
        zIndex: 1,
        animation: 'stickerPop 0.7s cubic-bezier(.7,1.6,.4,1) 0.3s both',
        textShadow: '0 1px 1px rgba(255,255,255,0.8)',
      }}
    >
      {children}
      {/* Optional: subtle paper texture overlay, could use a base64 SVG bg or CSS if desired */}
    </span>
  );
}

// --- Main Hero Component ---
function Hero() {
  // State for video modal
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{
      width: '100vw',
      minHeight: '100vh',
      fontFamily: `'Inter','Poppins','Segoe UI',sans-serif`,
      position: 'relative',
      overflow: 'hidden',
      pb: { xs: 8, md: 0 },
      // Enhanced gradient background
      background: {
        xs: 'linear-gradient(120deg, #f3f0ff 0%, #e4e9ff 40%, #e6d0fe 100%)',
        md: 'linear-gradient(120deg, #f3f0ff 0%, #e4e9ff 40%, #e6d0fe 100%)',
      },
    }}>
      
      
      {/* Gradient/shape animation keyframes */}
      <style>{`
        @keyframes rocketFloat { 
          0%, 100% { transform: translateY(0) rotate(15deg); } 
          50% { transform: translateY(-25px) rotate(15deg); } 
        }
        @keyframes twinkle { 
          0%, 100% { opacity: 0.7; transform: scale(1); } 
          50% { opacity: 1; transform: scale(1.2); } 
        }
        @keyframes planetRotate { 
          0% { transform: rotate(0deg); } 
          100% { transform: rotate(360deg); } 
        }
        @keyframes satelliteOrbit { 
          0% { transform: translateX(0) translateY(0); } 
          25% { transform: translateX(50px) translateY(-30px); } 
          50% { transform: translateX(100px) translateY(0); } 
          75% { transform: translateX(50px) translateY(30px); } 
          100% { transform: translateX(0) translateY(0); } 
        }
      `}</style>
      {/* Premium 3D Navbar */}
      <PremiumNavbar active="Home" />

      {/* Main Hero Content - Centered Layout */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: 1200,
          mx: 'auto',
          pt: { xs: 16, md: 20 },
          pb: { xs: 8, md: 16 },
          px: { xs: 2, md: 4 },
          minHeight: '90vh',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Centered Headline with Sticker and animations */}
        <Typography
  variant="h2"
  sx={{
    fontFamily: `'GT America Extended Black', 'Inter', 'Poppins', 'Montserrat', 'Roboto', sans-serif`,
    fontWeight: 900,
    fontSize: { xs: '2.1rem', sm: '2.7rem', md: '3.2rem', lg: '3.7rem' },
    color: '#1C1C28',
    mb: { xs: 3, md: 4 },
    lineHeight: 1.08,
    textAlign: { xs: 'center', md: 'left' },
    letterSpacing: '-0.5px',
    width: { xs: '100%', md: '80%' },
    position: 'relative',
    overflow: 'hidden',
    textShadow: '0 2px 16px #f0ebfa',
  }}
>
  Transforming Visionary Startups into Market Leaders Across Africa and Asia
</Typography>
        
        {/* Video Thumbnail - Centered */}
        <Box
          sx={{
            position: 'relative',
            width: { xs: '100%', sm: 540, md: 720 },
            maxWidth: 720,
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(137,79,242,0.08)',
            border: '2px solid #894ff2',
            background: '#fff',
            transition: 'transform 0.3s cubic-bezier(.4,2,.6,1)',
            '&:hover': { transform: 'scale(1.02)' },
            cursor: 'pointer',
            mx: 'auto',
            my: 3,
            animation: 'fadeInHero 1s cubic-bezier(.7,1.6,.4,1) 0.6s both',
          }}
          onClick={() => setOpen(true)}
        >
          <Box
            component="img"
            src="/video-thumbnail.png"
            alt="Video Thumbnail"
            sx={{ width: '100%', height: 'auto', display: 'block', borderRadius: 3 }}
          />
          {/* Play Button */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'linear-gradient(135deg, #894ff2 0%, #f24fb2 100%)',
              borderRadius: '50%',
              width: 70,
              height: 70,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 12px #894ff277',
              border: '3px solid #fff',
              animation: 'pulsePlay 1.5s infinite',
              cursor: 'pointer',
              zIndex: 2,
            }}
          >
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="19" cy="19" r="19" fill="none" />
              <polygon points="15,12 28,19 15,26" fill="#fff" />
            </svg>
          </Box>
          <button
            style={{
              width: '100%',
              marginTop: 24,
              background: '#1C1C28',
              color: '#fff',
              fontFamily: `'Roobert Semi-Bold', 'Inter', 'Poppins', 'Montserrat', 'Roboto', sans-serif`,
              fontWeight: 600,
              borderRadius: 8,
              padding: '18px 0',
              fontSize: '1.09rem',
              border: 'none',
              outline: 'none',
              boxShadow: '0 2px 10px #1C1C2822',
              cursor: 'pointer',
              transition: 'background 0.2s, color 0.2s, box-shadow 0.18s',
              letterSpacing: '0.01em',
              position: 'relative',
              zIndex: 2,
              display: 'block',
            }}
            onClick={() => setOpen(true)}
            aria-label="Discover if we're right for you"
          >
            Discover If We're Right For You
          </button>
        </Box>
        
        {/* CTA Button - Centered */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'center', md: 'flex-start' },
            justifyContent: { xs: 'center', md: 'flex-start' },
            mt: { xs: 3, md: 5 },
            mb: { xs: 2, md: 3 },
            gap: { xs: 2, md: 3 },
            width: '100%',
            maxWidth: 600,
            mx: { xs: 'auto', md: 0 },
            animation: 'fadeInHero 1s cubic-bezier(.7,1.6,.4,1) 0.7s both',
          }}
        >
          <button
            style={{
              background: 'linear-gradient(90deg, #3A1A5A 0%, #4C2B82 100%)',
              color: '#fff',
              fontFamily: `'Roobert Semi-Bold', 'Inter', 'Poppins', 'Montserrat', 'Roboto', sans-serif`,
              fontWeight: 600,
              borderRadius: 8,
              padding: '16px 48px',
              fontSize: '1.15rem',
              border: 'none',
              outline: 'none',
              boxShadow: '0 4px 18px #3A1A5A22',
              cursor: 'pointer',
              transition: 'transform 0.18s cubic-bezier(.4,2,.6,1), box-shadow 0.18s',
              minHeight: 56,
              letterSpacing: '0.01em',
              position: 'relative',
              zIndex: 2,
            }}
            onClick={() => {
              const footerEl = document.getElementById('footer-section') || document.querySelector('footer');
              if (footerEl && typeof footerEl.scrollIntoView === 'function') {
                footerEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            aria-label="Unleash your growth potential"
          >
            Unleash Your Growth Potential
          </button>
        </Box>
        
        {/* Scroll Indicator - Centered at bottom */}
        <Box
          sx={{
            position: 'absolute',
            bottom: { xs: 24, md: 48 },
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeInUp 1s ease-out 1.2s both',
            zIndex: 10,
            cursor: 'pointer',
            width: 'auto',
            mx: 'auto',
            textAlign: 'center',
            '&:hover': {
              transform: 'translateX(-50%) translateY(-4px)',
              transition: 'transform 0.3s cubic-bezier(.4,2,.6,1)'
            },
            '&:active': {
              transform: 'translateX(-50%) translateY(0px)'
            }
          }}
          onClick={() => {
            const problemSection = document.getElementById('problem-section');
            const solutionSection = document.getElementById('solution-section');
            const nextSection = problemSection || solutionSection || document.getElementById('features-section');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: '#1C1C28',
              fontWeight: 600,
              fontSize: '1.05rem',
              mb: 1,
              opacity: 0.95,
              textAlign: 'center',
              width: '100%',
              display: 'block',
              letterSpacing: '0.01em',
              textShadow: '0 1px 8px #fff',
            }}
          >
            Discover More
          </Typography>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ animation: 'bounce 1.6s infinite' }}>
            <path d="M12 5v14M12 19l-7-7m7 7l7-7" stroke="#C9A55C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Box>
      </Box>

      {/* Video Modal */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
            overflow: "hidden",
          },
        }}
      >
        <Box position="relative" pt="56.25%" width="100%">
          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 10,
              color: "#fff",
              backgroundColor: "rgba(0,0,0,0.4)",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.6)",
              },
            }}
            aria-label="Close video"
          >
            <CloseIcon />
          </IconButton>
          {open && (
            <iframe
              src="https://www.youtube.com/embed/xZqT3E3-POk?autoplay=1"
              title="Kaicension Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "12px",
              }}
              loading="lazy"
            />
          )}
        </Box>
      </Dialog>
      
      {/* Additional animations */}
      <style jsx global>{`
        @keyframes stickerPop { 
          0% { opacity: 0; transform: scale(0.7) rotate(2.5deg); } 
          80% { opacity: 1; transform: scale(1.1) rotate(2.5deg); } 
          100% { opacity: 1; transform: scale(1) rotate(2.5deg); } 
        }
        @keyframes pulsePlay { 
          0% { box-shadow: 0 0 0 0 rgba(137,79,242,0.4); } 
          70% { box-shadow: 0 0 0 16px rgba(137,79,242,0); } 
          100% { box-shadow: 0 0 0 0 rgba(137,79,242,0); } 
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes textFadeUp {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 5px rgba(137,79,242,0.3); }
          50% { text-shadow: 0 0 20px rgba(137,79,242,0.6); }
        }
      `}</style>
    </Box>
  );
}
export default Hero;
