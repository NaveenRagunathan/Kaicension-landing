import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Dialog, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import PremiumNavbar from "./PremiumNavbar";
import ScrollDownAnimation from "./ScrollDownAnimation";
import VideoCard from "./VideoCard";

// --- Main Hero Component ---
function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  // Placeholder video thumbnail
  const videoThumbnail = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80";
  // Replace with your actual video embed URL
  const videoEmbedUrl = "https://www.youtube.com/embed/xZqT3E3-POk?si=tSscDApO7P2S6dx4&autoplay=1";

  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pt: { xs: '0.64rem', md: '0.92rem' },
        pb: { xs: 2, md: 3 },
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(120deg, #E6E6FA 0%, #FFFFFF 100%)',
        animation: 'heroBgAnim 16s ease-in-out infinite alternate',
        pt: 0,
        pb: 0,
      }}
    >
      {/* Blurred Background Image + Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          overflow: 'hidden',
        }}
        aria-hidden="true"
      >
        <Box
          component="img"
          src="/hero-bg.jpg"
          alt="Background"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'blur(18px) brightness(0.96) saturate(1.18)',
            transform: 'scale(1.08)',
            transition: 'filter 0.6s',
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        />
        {/* Overlay for readability and premium effect */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(120deg, rgba(245,245,255,0.82) 0%, rgba(245,230,255,0.62) 100%)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />
      </Box>

      {/* Central content container for grid alignment */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '77.5rem', // 1240px
          mx: 'auto',
          px: { xs: '1rem', md: '2rem' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <PremiumNavbar />
        {/* Spacer to prevent headline from being hidden by navbar */}
        <Box sx={{ height: { xs: 90, md: 120 } }} />
        {/* New Captivating Headline */}
        <Typography
          component="h1"
          sx={{
            fontFamily: 'Space Grotesk, Outfit, Inter, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2.25rem, 5vw, 4rem)',
            color: '#7B2FF2',
            textAlign: 'center',
            mt: '1.25rem',
            mb: '0.4rem',
            lineHeight: 1.08,
            letterSpacing: '-0.03125rem',
            opacity: 0,
            transform: 'translateY(18px)',
            animation: 'fadeSlideUp 1.1s 0.1s cubic-bezier(.16,1,.3,1) forwards',
            background: 'linear-gradient(90deg, #7B2FF2 25%, #F357A8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
          }}
        >
          Finally your Startup can blast off!
        </Typography>
        {/* New Subheadline */}
        <Typography
          sx={{
            fontFamily: 'Inter, Open Sans, sans-serif',
            fontWeight: 500,
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            color: '#4B2D7A',
            textAlign: 'center',
            maxWidth: '45rem',
            mx: 'auto',
            mt: '0.4rem',
            mb: { xs: '2rem', md: '2.4rem' },
            lineHeight: 1.6,
            opacity: 0,
            animation: 'fadeSlideUp 1.1s 0.35s cubic-bezier(.16,1,.3,1) forwards',
          }}
        >
          <>
  <Box component="span" sx={{ fontWeight: 600, color: '#7B2FF2', letterSpacing: '0.01em' }}>Stand Out</Box>, Get Traction, <Box component="span" sx={{ fontWeight: 600, color: '#7B2FF2', letterSpacing: '0.01em' }}>Go Viral</Box>, <Box component="span" sx={{ fontWeight: 600, color: '#7B2FF2', letterSpacing: '0.01em' }}>Hit PMF</Box>, <Box component="span" sx={{ fontWeight: 600, color: '#7B2FF2', letterSpacing: '0.01em' }}>Make Money</Box>, Secure Funding and <Box component="span" sx={{ fontWeight: 700, color: '#4B2D7A', fontSize: { xs: '1.22em', md: '1.28em' }, letterSpacing: '0.015em' }}>scale scale scale</Box>.
</>
        </Typography>
        <VideoCard
          thumbnail={videoThumbnail}
          alt="Product demo thumbnail"
          onPlay={() => setVideoOpen(true)}
        />
        {/* CTA Row */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2.5,
            mt: { xs: 4, md: 6 },
            mb: { xs: 1.5, md: 2 },
            justifyContent: 'center',
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              minWidth: '18rem',
              px: 4.5,
              py: 1.1,
              whiteSpace: 'nowrap',
              fontSize: '1.15rem',
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
              const el = document.getElementById('footer');
              if (el) {
                const offset = 40;
                const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: pos, behavior: 'smooth' });
              }
            }}
          >
            Get Your Competitive Edge
          </Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 0.1, md: 0.2 }, mb: { xs: 0, md: 0 } }}>
          <ScrollDownAnimation />
        </Box>
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
