import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Dialog, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import PremiumNavbar from "./PremiumNavbar";

// --- Main Hero Component ---
function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  // Placeholder video thumbnail
  const videoThumbnail = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80";
  // Replace with your actual video embed URL
  const videoEmbedUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        px: { xs: 2, md: 0 },
        py: { xs: 7, md: 0 },
        background: 'linear-gradient(120deg, #E6E6FA 0%, #FFFFFF 100%)',
        animation: 'heroBgAnim 16s ease-in-out infinite alternate',
      }}
    >
      <PremiumNavbar />
      {/* Headline */}
      <Typography
        component="h1"
        sx={{
          fontFamily: 'Outfit, Inter, sans-serif',
          fontWeight: 900,
          fontSize: { xs: 'clamp(2.5rem, 9vw, 3.8rem)', md: 'clamp(3.5rem, 8vw, 6rem)' },
          color: '#0F0F0F',
          textAlign: 'center',
          mb: { xs: 3, md: 3.5 },
          lineHeight: 1.08,
          letterSpacing: '-0.03em',
          opacity: 0,
          transform: 'translateY(24px)',
          animation: 'fadeSlideUp 1.1s 0.1s cubic-bezier(.16,1,.3,1) forwards',
        }}
      >
        IGNITE YOUR IMPACT:
        <br />
        <Box
          component="span"
          sx={{
            background: 'linear-gradient(45deg, #800080, #D8BFD8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            fontWeight: 900,
            display: 'inline-block',
            px: 0.5,
          }}
        >
          Propel Your Startup to Unrivaled Market Leadership.
        </Box>
      </Typography>

      {/* Subheadline */}
      <Typography
        sx={{
          fontFamily: 'Inter, Open Sans, sans-serif',
          fontWeight: 500,
          fontSize: { xs: 'clamp(1.09rem, 3vw, 1.22rem)', md: 'clamp(1.15rem, 2vw, 1.32rem)' },
          color: '#5A3D85',
          textAlign: 'center',
          maxWidth: 600,
          mb: { xs: 4.2, md: 5 },
          opacity: 0,
          transform: 'translateY(22px)',
          animation: 'fadeSlideUp 1.1s 0.8s cubic-bezier(.16,1,.3,1) forwards',
        }}
      >
        Struggling to stand out, attract funding, or build real traction? We help founders break through the noise and dominate their market.
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Inter, Open Sans, sans-serif',
          fontWeight: 400,
          fontSize: { xs: 'clamp(0.99rem, 2.2vw, 1.08rem)', md: 'clamp(1.05rem, 1.5vw, 1.18rem)' },
          color: '#6B3FA0',
          textAlign: 'center',
          maxWidth: 600,
          mb: { xs: 2, md: 3 },
          opacity: 0,
          transform: 'translateY(18px)',
          animation: 'fadeSlideUp 1.1s 1.1s cubic-bezier(.16,1,.3,1) forwards',
        }}
      >
        We engineer bespoke growth strategies, secure pivotal funding, and build sustainable market dominance for ambitious ventures in the world's most dynamic emerging economies. Your legacy starts here.
      </Typography>

      {/* Video Area */}
      <Box
        sx={{
          width: { xs: '99%', sm: '90%', md: '70%', lg: '58%' },
          maxWidth: 680,
          mx: 'auto',
          mb: { xs: 4, md: 5 },
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Text above video */}
        <Typography
          sx={{
            fontFamily: 'Inter, Open Sans, sans-serif',
            fontWeight: 600,
            fontSize: { xs: '1.08rem', md: '1.19rem' },
            color: '#0F0F0F',
            mb: 2,
            textAlign: 'center',
            letterSpacing: '0.01em',
            opacity: 0,
            animation: 'fadeSlideUp 1.1s 1.4s cubic-bezier(.16,1,.3,1) forwards',
          }}
        >
          Witness the Blueprint for Breakthrough Growth.
        </Typography>
        {/* Video Placeholder */}
        <Box
          sx={{
            width: '100%',
            aspectRatio: '16/9',
            borderRadius: 6,
            overflow: 'hidden',
            border: '1.5px solid #D8BFD8',
            boxShadow: '0 10px 30px rgba(0,0,0,0.10)',
            position: 'relative',
            background: `url(${videoThumbnail}) center/cover no-repeat`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 0,
          }}
        >
          {/* Overlay Play Button */}
          <Button
            aria-label="Play Our Vision Video"
            onClick={() => setVideoOpen(true)}
            sx={{
              width: 80,
              height: 80,
              borderRadius: '50%',
              minWidth: 0,
              background: 'linear-gradient(135deg, #800080 60%, #D8BFD8 100%)',
              color: '#fff',
              boxShadow: '0 4px 20px rgba(128,0,128,0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 38,
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 2,
              transition: 'transform 0.17s cubic-bezier(.16,1,.3,1), box-shadow 0.2s',
              '&:hover': {
                background: 'linear-gradient(135deg, #800080 80%, #D8BFD8 100%)',
                transform: 'translate(-50%, -50%) scale(1.07)',
                boxShadow: '0 8px 32px rgba(128,0,128,0.25)',
              },
            }}
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="18" fill="none" />
              <polygon points="14,11 27,18 14,25" fill="#fff" />
            </svg>
          </Button>
        </Box>
        {/* CTA Row */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2.5,
            mt: { xs: 3, md: 4 },
            mb: { xs: 3, md: 5 },
            justifyContent: 'center',
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              px: 5,
              py: 1.6,
              fontSize: { xs: '1.08rem', md: '1.18rem' },
              fontWeight: 700,
              borderRadius: 18,
              boxShadow: '0 4px 16px rgba(137,79,242,0.10)',
              background: 'linear-gradient(90deg, #894ff2 0%, #f24fb2 100%)',
              textTransform: 'none',
              letterSpacing: '0.02em',
              transition: 'all 0.25s cubic-bezier(.4,2,.6,1)',
              '&:hover': {
                background: 'linear-gradient(90deg, #a47cff 0%, #f24fb2 100%)',
                transform: 'translateY(-2px) scale(1.04)',
                boxShadow: '0 8px 32px rgba(137,79,242,0.14)',
              },
            }}
            onClick={() => {
              const el = document.getElementById('problem-section');
              if (el) {
                const offset = 80;
                const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: pos, behavior: 'smooth' });
              }
            }}
          >
            Break Through the Noise
          </Button>
        </Box>
        {/* Video Dialog Modal */}
        <Dialog
          open={videoOpen}
          onClose={() => setVideoOpen(false)}
          fullScreen
          PaperProps={{
            sx: {
              background: 'rgba(0,0,0,0.94)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}
        >
          <IconButton
            aria-label="Close video"
            onClick={() => setVideoOpen(false)}
            sx={{
              position: 'absolute',
              top: 30,
              right: 38,
              color: '#fff',
              zIndex: 10,
              background: 'rgba(0,0,0,0.33)',
              '&:hover': { background: 'rgba(0,0,0,0.5)' },
            }}
          >
            <CloseIcon sx={{ fontSize: 32 }} />
          </IconButton>
          <Box
            sx={{
              width: { xs: '98vw', sm: '92vw', md: '70vw', lg: '54vw' },
              maxWidth: 900,
              aspectRatio: '16/9',
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(0,0,0,0.28)',
              position: 'relative',
              background: '#000',
            }}
          >
            <iframe
              src={videoEmbedUrl}
              title="Kaicension Vision Video"
              width="100%"
              height="100%"
              allow="autoplay; fullscreen"
              allowFullScreen
              style={{ border: 0, width: '100%', height: '100%', borderRadius: 4 }}
            />
          </Box>
        </Dialog>
      </Box>

      {/* Animations and Background Keyframes */}
      <style>{`
        @keyframes heroBgAnim {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Box>
  );
}

export default Hero;