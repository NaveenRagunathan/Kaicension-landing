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
        background: "#f6f7fb", // Softer light theme
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
            alignItems: { xs: "stretch", md: "flex-start" },
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
              justifyContent: "flex-start",
              mb: { xs: 4, md: 0 },
              gap: { xs: 0, md: 3 },
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
              mb: 4,
              px: { xs: 0, md: 1 }
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
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              pb: { xs: 2, md: 0 },
            }}>
              {/* Video Thumbnail with Play Button Overlay */}
              <Box
                onClick={handleOpen}
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: { xs: "100%", md: "90%" },
                  pt: "56.25%", // 16:9 aspect ratio
                  borderRadius: "16px",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 4px 24px rgba(153,60,255,0.07)",
                  backgroundColor: "#f7f2ff",
                  border: "1.5px solid #e4d7fa",
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
              maxWidth: { xs: "100%", md: "46%" },
              minHeight: { xs: "220px", md: "400px" },
              position: "relative",
              order: { xs: 2, md: 2 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f7f2ff",
              border: "2px dashed #c9a9f7",
              borderRadius: "16px",
              mb: { xs: 4, md: 0 },
              boxShadow: "0 2px 16px rgba(153,60,255,0.05)",
              p: { xs: 2, md: 3 },
              overflow: "hidden"
            }}
          >
            {/* Placeholder for the image that will be uploaded */}
            <Typography 
              variant="body2" 
              sx={{ 
                color: "#a48be2",
                textAlign: "center",
                px: 2,
                fontWeight: 500,
                fontSize: { xs: "1rem", md: "1.1rem" },
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
      {/* Got questions CTA */}
      <Box sx={{ mt: { xs: 6, md: 10 }, width: "100%", textAlign: "center" }}>
        <Typography variant="h6" sx={{ color: "#7c4cff", fontWeight: 600, mb: 1 }}>
          Got questions?
        </Typography>
        <Button variant="outlined" sx={{ borderColor: "#bb6aff", color: "#993cff", ':hover': { borderColor: "#993cff", background: "#f3eaff" } }}>
          Contact Us
        </Button>
      </Box>
    </Box>
  );
}