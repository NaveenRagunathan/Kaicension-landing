import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";

// VideoCard: Glassy, gradient, premium video CTA card for hero section
const VideoCard = ({
  onPlay,
  headline = "Experience the System in Motion",
}) => {
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Video Card - Glassy, Gradient, Modern */}
      <Box
        sx={{
          position: 'relative',
          width: { xs: 320, sm: 420, md: 540 },
          minWidth: 260,
          aspectRatio: { xs: '4/3', md: '16/9' },
          borderRadius: '28px',
          overflow: 'hidden',
          boxShadow: '0px 4px 22px 0px rgba(123,47,242,0.13)',
          background: 'linear-gradient(120deg, rgba(123,47,242,0.32) 0%, rgba(243,87,168,0.23) 100%)',
          backdropFilter: 'blur(18px) saturate(1.15)',
          border: '1.5px solid rgba(123,47,242,0.13)',
          cursor: 'pointer',
          transition: 'box-shadow 0.28s cubic-bezier(.4,2,.6,1), transform 0.26s cubic-bezier(.4,2,.6,1)',
          '&:hover': {
            boxShadow: '0px 8px 36px 0px rgba(122, 79, 255, 0.19), 0 0 0 4px rgba(186,153,255,0.13) inset',
            transform: 'scale(1.045)',
          },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={onPlay}
        tabIndex={0}
        role="button"
        aria-label="Play product demo video"
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') onPlay && onPlay();
        }}
      >
        {/* Headline Overlay */}
        <Typography
          sx={{
            position: 'absolute',
            top: '14%',
            left: '50%',
            transform: 'translateX(-50%)',
            color: '#fff',
            fontFamily: 'Montserrat, Inter, Open Sans, sans-serif',
            fontWeight: 600,
            fontSize: { xs: '1.08rem', sm: '1.25rem', md: '1.44rem' },
            letterSpacing: '-0.01em',
            textShadow: '0 4px 32px rgba(36, 34, 39, 0.75)',
            textAlign: 'center',
            zIndex: 2,
            width: '90%',
            lineHeight: 1.2,
            color: '#e6e6e6',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          {headline}
        </Typography>
        {/* Sleek Glassy Gradient Visual (no image) */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 60% 40%, rgba(255,255,255,0.22) 0%, rgba(123,47,242,0.08) 100%)',
            opacity: 0.85,
            zIndex: 1,
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none',
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
              width: 60,
              height: 60,
              bgcolor: 'rgba(255,255,255,0.93)',
              color: '#7B2FF2',
              boxShadow: '0 4px 24px rgba(123,47,242,0.13)',
              border: '3px solid #E6E6FA',
              borderRadius: '50%',
              zIndex: 3,
              transition: 'all 0.22s cubic-bezier(.4,2,.6,1)',
              '&:hover': {
                bgcolor: 'rgba(243,87,168,0.42)',
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
            <PlayArrowRoundedIcon sx={{ fontSize: 36 }} />
          </IconButton>
        </Tooltip>
        {/* Pulse Animation */}
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 76,
            height: 76,
            borderRadius: '50%',
            zIndex: 2,
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
