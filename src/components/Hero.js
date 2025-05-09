import CloseIcon from "@mui/icons-material/Close";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  Box,
  Button,
  Dialog,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        minHeight: "90vh", // Reduced to ensure it fits on one page
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
        py: { xs: 4, md: 6 }, // Reduced padding
        backgroundColor: "#fff",
        color: "#121212",
        fontFamily: `'Inter', 'Poppins', 'Montserrat', 'Roboto', sans-serif`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top-left logo */}
      <Box
        component="img"
        src="/logo.png"
        alt="Logo"
        sx={{
          position: "absolute",
          top: 20,
          left: 20,
          width: { xs: 40, md: 60 },
          height: "auto",
          zIndex: 100,
        }}
      />

      <Box sx={{ width: "100%", maxWidth: "1200px", py: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: { xs: 4, md: 6 }, // Reduced gap
          }}
        >
          {/* Left Column */}
          <Box
            sx={{
              flex: 1,
              textAlign: { xs: "center", md: "left" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 2.5, // Reduced gap
              order: { xs: 2, md: 1 },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" }, // Slightly reduced font size
                letterSpacing: '-0.5px',
                lineHeight: 1.1,
              }}
            >
              <span style={{ 
                fontWeight: 900, 
                color: "#000000" // Changed to solid black
              }}>
                Finally your <span style={{ color: "#000000", fontWeight: 900 }}>Startup</span>
              </span>
              <span
                style={{
                  fontWeight: 900,
                  background: 'linear-gradient(90deg, #993cff, #bb6aff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 4px 30px rgba(153, 60, 255, 0.10)'
                }}
              >
                {" "}can blast off!
              </span>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1.15rem",
                opacity: 0.95,
                fontWeight: 600, // Increased font weight
                color: "#000000", // Changed to solid black
              }}
            >
              Stand Out, Get Traction, Go Viral, Hit PMF, Make Money, Secure
              Funding and{" "}
              <strong
                style={{
                  background: "linear-gradient(90deg, #993cff, #bb6aff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                scale scale scale.
              </strong>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1.1rem",
                opacity: 0.9,
                color: "#000000", // Changed to solid black
                fontWeight: 600, // Increased font weight
              }}
            >
              The World needs to feel your impact.
              <br />
              Get the Growth you have always desired.
            </Typography>

            <Typography
              variant="caption"
              sx={{
                mb: 1,
                opacity: 0.8,
                textAlign: { xs: "center", md: "left" },
                fontWeight: 600,
                color: '#7c4cff',
                letterSpacing: '0.5px',
                fontSize: { xs: '1rem', md: '1.07rem' },
              }}
            >
              Watch the video below to find out if this is for you.
            </Typography>

            {/* Video Placeholder */}
            <Box
              onClick={handleOpen}
              sx={{
                position: "relative",
                width: "100%",
                pt: "56.25%",
                backgroundColor: "#f3eaff",
                borderRadius: "8px",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: '0 4px 20px rgba(153,60,255,0.08)',
                border: '1.5px solid #bb6aff',
              }}
            >
              <Box
                component="img"
                src="/video-thumbnail.png" // Make sure this image exists in public folder
                alt="Video Thumbnail"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "#993cff",
                  borderRadius: "50%",
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: '0 2px 8px rgba(153,60,255,0.12)',
                  border: '2.5px solid #fff',
                }}
              >
                <PlayArrowIcon sx={{ fontSize: 36, color: "#fff" }} />
              </Box>
            </Box>
          </Box>

          {/* Right Column with Image */}
          <Box
            sx={{
              flex: 1,
              maxWidth: { xs: "100%", md: "46%" },
              minHeight: { xs: "200px", md: "320px" },
              position: "relative",
              order: { xs: 1, md: 2 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f7f2ff",
              border: "2px dashed #c9a9f7",
              borderRadius: "16px",
              boxShadow: "0 2px 16px rgba(153,60,255,0.05)",
              overflow: "hidden",
              p: 2,
            }}
          >
            <Box
              component="img"
              src="/hero-image.jpeg" // Make sure this image exists in public folder
              alt="Hero Visual"
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>

        {/* Video Dialog */}
        <Dialog
          open={open}
          onClose={handleClose}
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
              onClick={handleClose}
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

        {/* Scroll Down Indicator - Made more compact */}
        <Box sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mt: { xs: 4, md: 5 }, // Reduced margin
          mb: 1,
          pointerEvents: 'none',
        }}>
          <Box sx={{ width: 28, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="28" height="44" viewBox="0 0 28 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1.5" y="1.5" width="25" height="41" rx="12.5" stroke="#bb6aff" strokeWidth="2" fill="none"/>
              <circle cx="14" cy="14" r="3.5" fill="#bb6aff">
                <animate attributeName="cy" values="14;24;14" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </Box>
          <Typography variant="caption" sx={{ color: '#bb6aff', fontWeight: 500, letterSpacing: '0.5px', fontSize: '0.8rem', mt: 0.5 }}>
            SCROLL DOWN
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}