import React from "react";
import { Box, Tooltip, IconButton, Typography } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";

/**
 * VideoCard - Cinematic, interactive video card for hero section.
 * - Aspect ratio: 16:9 (switches to 4:3 on mobile)
 * - Glassy, rounded, shadowed, with hover zoom and glow
 * - Centered play button with pulse, accessible, click-to-expand modal handled by parent
 */
const VideoCard = ({
  thumbnail,
  alt = "Product demo thumbnail",
  onPlay,
  headline = "Experience the System in Motion",
  subtitle = "A powerful demo to show how our system turns complexity into clarity—fast, beautiful, and tailored to your growth.",
}) => {
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Headline & Subtitle */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          fontSize: { xs: '1.32rem', md: '2.1rem' },
          mb: 0.5,
          textAlign: 'center',
          letterSpacing: '-0.01em',
          color: '#3A1C7A',
        }}
      >
        {headline}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 400,
          fontSize: { xs: '1rem', md: '1.18rem' },
          mb: 2.2,
          textAlign: 'center',
          color: '#5B3FA0',
          opacity: 0.92,
        }}
      >
        {subtitle}
      </Typography>
      {/* Video Card */}
      <Box
        sx={{
          position: 'relative',
          width: { xs: '100%', sm: 360, md: 640, lg: 720 },
          minWidth: 320,
          aspectRatio: { xs: '4/3', md: '16/9' },
          borderRadius: '28px',
          overflow: 'hidden',
          boxShadow: '0px 4px 16px rgba(0,0,0,0.08)',
          background: 'linear-gradient(120deg, #c2b6ff 0%, #2d2c7a 100%)',
          cursor: 'pointer',
          transition: 'box-shadow 0.28s cubic-bezier(.4,2,.6,1), transform 0.26s cubic-bezier(.4,2,.6,1)',
          '&:hover': {
            boxShadow: '0px 8px 32px 0px rgba(122, 79, 255, 0.18), 0 0 0 4px rgba(186,153,255,0.10) inset',
            transform: 'scale(1.035)',
          },
        }}
        onClick={onPlay}
        tabIndex={0}
        role="button"
        aria-label="Play product demo video"
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') onPlay && onPlay();
        }}
      >
        {/* Thumbnail */}
        <Box
          component="img"
          src={thumbnail}
          alt={alt}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: 'inherit',
            pointerEvents: 'none',
            userSelect: 'none',
            filter: 'brightness(0.97) saturate(1.18)',
            transition: 'filter 0.4s',
          }}
        />
        {/* Play Button */}
        <Tooltip title="Play demo video" placement="top">
          <IconButton
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 76,
              height: 76,
              bgcolor: '#fff',
              color: '#7B2FF2',
              boxShadow: '0 4px 24px rgba(123,47,242,0.13)',
              border: '4px solid #E6E6FA',
              borderRadius: '50%',
              zIndex: 2,
              transition: 'all 0.22s cubic-bezier(.4,2,.6,1)',
              '&:hover': {
                bgcolor: '#F357A8',
                color: '#fff',
                boxShadow: '0 8px 32px rgba(243,87,168,0.18)',
                borderColor: '#F357A8',
              },
              animation: 'pulsePlayBtn 1.7s infinite cubic-bezier(.65,.05,.36,1)',
            }}
            onClick={e => {
              e.stopPropagation();
              onPlay && onPlay();
            }}
            aria-label="Play demo"
          >
            <PlayArrowRoundedIcon sx={{ fontSize: 48 }} />
          </IconButton>
        </Tooltip>
        {/* Pulse Animation */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 90,
            height: 90,
            borderRadius: '50%',
            zIndex: 1,
            pointerEvents: 'none',
            animation: 'pulseRing 1.7s infinite cubic-bezier(.65,.05,.36,1)',
            background: 'radial-gradient(circle, #F357A822 50%, transparent 100%)',
          }}
        />
        {/* CSS Keyframes */}
        <style>{`
          @keyframes pulsePlayBtn {
            0%, 100% { box-shadow: 0 0 0 0 #8A4FFF44; }
            50% { box-shadow: 0 0 16px 8px #F357A855; }
          }
          @keyframes pulseRing {
            0%, 100% { opacity: 0.28; transform: translate(-50%, -50%) scale(1); }
            50% { opacity: 0.82; transform: translate(-50%, -50%) scale(1.13); }
          }
        `}</style>
      </Box>
    </Box>
  );
};

export default VideoCard;
