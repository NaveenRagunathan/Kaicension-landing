import React from "react";
import { Box, keyframes } from "@mui/material";

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(18px); }
`;
const glow = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 #8A4FFF44; }
  50% { box-shadow: 0 0 16px 8px #F357A855; }
`;

const ScrollDownAnimation = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      mt: 5,
      mb: { xs: 3, md: 5 },
      cursor: "pointer",
      userSelect: "none",
      zIndex: 20,
    }}
    aria-label="Scroll down"
    onClick={() => window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' })}
  >
    {/* Glowing ring behind mouse */}
    <Box
      sx={{
        position: 'absolute',
        width: 62,
        height: 62,
        borderRadius: '50%',
        background: 'radial-gradient(circle, #F357A822 50%, transparent 100%)',
        zIndex: 0,
        animation: `${glow} 1.7s infinite cubic-bezier(.65,.05,.36,1)`,
        pointerEvents: 'none',
      }}
    />
    {/* Mouse outline */}
    <Box
      sx={{
        width: 36,
        height: 54,
        border: "4px solid #8A4FFF",
        borderRadius: "22px",
        position: "relative",
        mb: 1,
        background: "rgba(255,255,255,0.82)",
        boxShadow: "0 2px 24px rgba(123,47,242,0.13)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        zIndex: 2,
      }}
    >
      {/* Animated dot inside mouse */}
      <Box
        sx={{
          width: 8,
          height: 16,
          borderRadius: "8px",
          background: "#F357A8",
          mt: 2.6,
          mx: "auto",
          animation: `${bounce} 1.3s infinite cubic-bezier(.65,.05,.36,1)`,
        }}
      />
    </Box>
    {/* Label */}
    <Box
      sx={{
        mt: 1.5,
        fontSize: { xs: '1rem', md: '1.14rem' },
        color: '#7B2FF2',
        fontWeight: 600,
        letterSpacing: '0.01em',
        textShadow: '0 2px 12px rgba(123,47,242,0.08)',
      }}
    >
      Scroll Down
    </Box>
  </Box>
);

export default ScrollDownAnimation;
