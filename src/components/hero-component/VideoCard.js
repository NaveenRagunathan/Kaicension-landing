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
      {/* Video Card - Minimal, Only Play Button */}
      <Box
        sx={{
          position: 'relative',
          width: { xs: 200, sm: 260, md: 320 },
          minWidth: 120,
          aspectRatio: { xs: '4/3', md: '16/9' },
          borderRadius: '22px',
          overflow: 'hidden',
          background: `url('https://img.youtube.com/vi/AJC1jbfp-30/hqdefault.jpg') center center / cover no-repeat`,
          border: '1.5px solid rgba(123,47,242,0.13)',
          boxShadow: '0px 4px 18px 0px rgba(123,47,242,0.10)',
          cursor: 'pointer',
          transition: 'box-shadow 0.28s cubic-bezier(.4,2,.6,1), transform 0.26s cubic-bezier(.4,2,.6,1)',
          '&:hover': {
            boxShadow: '0px 8px 24px 0px rgba(122, 79, 255, 0.13), 0 0 0 4px rgba(186,153,255,0.09) inset',
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
