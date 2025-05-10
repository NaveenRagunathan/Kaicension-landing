import React, { useState } from "react";
import { Dialog, IconButton, Box, Typography, Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CloseIcon from "@mui/icons-material/Close";

export default function Hero() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        px: 3,
        position: "relative",
        overflow: "hidden",
        background: "#ffffff", // Light theme
        color: "#121212",
      }}
    >
      {/* Grid pattern background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.2,
          backgroundImage: `
            linear-gradient(#9c46ff20 1px, transparent 1px),
            linear-gradient(90deg, #9c46ff20 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main content container with responsive layout */}
      <Box 
        sx={{ 
          position: "relative", 
          zIndex: 2, 
          width: "100%",
          maxWidth: "1200px",
          py: 4,
        }}
      >
        <Box 
          sx={{ 
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "space-between",
            gap: { xs: 5, md: 6 },
          }}
        >
          {/* Left column - Text content & Video */}
          <Box 
            sx={{ 
              flex: 1,
              textAlign: { xs: "center", md: "left" },
              maxWidth: { xs: "100%", md: "50%" },
              display: "flex",
              flexDirection: "column",
              mb: { xs: 4, md: 0 },
            }}
          >
            {/* Hero heading - always first in both layouts */}
            <Typography 
              variant="h2" 
              fontWeight="bold" 
              gutterBottom
              sx={{
                fontSize: { xs: "2.5rem", md: "3rem" },
                mb: 2,
                order: 1,
              }}
            >
              Finally your Startup{" "}
              <span
                style={{ 
                  color: "#993cff", 
                  background: "linear-gradient(90deg, #993cff, #bb6aff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent" 
                }}
              >
                can blast off!
              </span>
            </Typography>

            {/* Subheading and paragraph - order changes in mobile */}
            <Box sx={{ 
              order: { xs: 3, md: 2 }, 
              mb: 4 
            }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: "1.1rem", 
                  mb: 3,
                  opacity: 0.8,
                }}
              >
                Stand Out, Get Traction, Go Viral, Hit PMF, Make Money, Secure Funding and{" "}
                <strong style={{ 
                  color: "#993cff",
                  background: "linear-gradient(90deg, #993cff, #bb6aff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent" 
                }}>
                  scale scale scale.
                </strong>
              </Typography>

              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: "1.1rem", 
                  mb: 0,
                  opacity: 0.8,
                }}
              >
                The World needs to feel your impact.
                <br />
                Get the Growth you have always desired.
              </Typography>
            </Box>

            {/* Video thumbnail - always last in both layouts */}
            <Box sx={{ 
              order: { xs: 4, md: 3 },
              width: "100%",
              mt: 2,
            }}>
              {/* Video Thumbnail with Play Button Overlay */}
              <Box
                onClick={handleOpen}
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: { xs: "100%", md: "90%" },
                  pt: "56.25%", // 16:9 aspect ratio
                  borderRadius: "12px",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#f3f3f3",
                }}
              >
                {/* Play button overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(153, 60, 255, 0.9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 40, color: "#fff" }} />
                </Box>
              </Box>

              <Typography 
                variant="caption" 
                sx={{ 
                  display: "block", 
                  mt: 2, 
                  opacity: 0.7,
                  textAlign: { xs: "center", md: "left" }
                }}
              >
                Watch the video below to find out if this is for you.
              </Typography>
            </Box>
          </Box>

          {/* Right column - Image placeholder */}
          <Box 
            sx={{ 
              flex: 1,
              maxWidth: { xs: "80%", md: "50%" },
              height: { xs: "300px", md: "400px" },
              position: "relative",
              // For mobile view ordering - image appears immediately after heading
              order: { xs: 2, md: 2 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(153, 60, 255, 0.1)",
              borderRadius: "12px",
              mb: { xs: 4, md: 0 },
            }}
          >
            {/* Placeholder for the image that will be uploaded */}
            <Typography 
              variant="body2" 
              sx={{ 
                color: "rgba(0, 0, 0, 0.5)",
                textAlign: "center",
                px: 2 
              }}
            >
              Image placeholder
              <br />
              (Upload your image here)
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Video Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          style: { backgroundColor: "transparent", boxShadow: "none", overflow: "hidden" },
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
              }
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
    </Box>
  );
}