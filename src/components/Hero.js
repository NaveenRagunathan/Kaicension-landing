import React, { useState } from "react";
import { Dialog, IconButton, Box, Typography, Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

export default function Hero() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Staggered animations for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Floating animation for background elements
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse"
    }
  };

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
        background: "linear-gradient(135deg, #121212 0%, #1a1a1a 100%)",
        color: "#fff",
      }}
    >
      {/* Background elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          opacity: 0.6,
        }}
      >
        {/* Grid pattern */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.4,
            backgroundImage: `
              linear-gradient(#9c46ff10 1px, transparent 1px),
              linear-gradient(90deg, #9c46ff10 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </Box>

      {/* Main content container with responsive layout */}
      <Box 
        sx={{ 
          position: "relative", 
          zIndex: 2, 
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        <Box 
          sx={{ 
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: "space-between",
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* Left column - Text content */}
          <Box 
            sx={{ 
              flex: 1,
              textAlign: { xs: "center", md: "left" },
              maxWidth: { xs: "100%", md: "50%" },
              display: "flex",
              flexDirection: "column",
              order: { xs: 2, md: 1 },
            }}
          >
            {/* For mobile, this will appear first, then get reordered on desktop */}
            <Box sx={{ order: { xs: 1, md: 1 } }}>
              <motion.div
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7 }}
                variants={textVariants}
              >
                <Typography 
                  variant="h2" 
                  fontWeight="bold" 
                  gutterBottom
                  sx={{
                    fontSize: { xs: "2.5rem", md: "3rem" },
                    mb: 2,
                  }}
                >
                  Finally your Startup{" "}
                  <motion.span
                    style={{ 
                      color: "#993cff", 
                      display: "inline-block",
                      background: "linear-gradient(90deg, #993cff, #bb6aff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent" 
                    }}
                    animate={{ 
                      scale: [1, 1.05, 1],
                      transition: { duration: 2, repeat: Infinity } 
                    }}
                  >
                    can blast off!
                  </motion.span>
                </Typography>
              </motion.div>
            </Box>

            {/* This content will be reordered on mobile */}
            <Box sx={{ order: { xs: 3, md: 2 } }}>
              <motion.div
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7, delay: 0.2 }}
                variants={textVariants}
              >
                <Typography 
                  variant="body1" 
                  mb={3}
                  sx={{ 
                    fontSize: "1.1rem", 
                    mb: 3,
                    opacity: 0.9,
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
                  mb={4}
                  sx={{ 
                    fontSize: "1.1rem", 
                    mb: 4,
                    opacity: 0.9,
                  }}
                >
                  The World needs to feel your impact.
                  <br />
                  Get the Growth you have always desired.
                </Typography>
              </motion.div>
            </Box>

            {/* Video thumbnail under the text on desktop, at bottom on mobile */}
            <Box sx={{ 
              order: { xs: 4, md: 3 },
              width: "100%",
              mt: 3,
            }}>
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
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
                    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
                    "&:hover .play-overlay": {
                      backgroundColor: "rgba(153, 60, 255, 0.7)",
                    },
                  }}
                >
                  {/* Video thumbnail image */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#2a2a2a",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  
                  {/* Play button overlay */}
                  <Box
                    className="play-overlay"
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
                      transition: "all 0.3s ease",
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
              </motion.div>
            </Box>
          </Box>

          {/* Right column - Rocket illustration */}
          <Box 
            sx={{ 
              flex: 1,
              maxWidth: { xs: "80%", md: "50%" },
              position: "relative",
              order: { xs: 2, md: 2 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              py: 4,
            }}
          >
            {/* Main rocket image - visible on both mobile and desktop */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              {/* Rocket illustration */}
              <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none">
                {/* Growth chart in background */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  <rect x="50" y="300" width="300" height="2" fill="#555" />
                  <rect x="50" y="100" width="2" height="200" fill="#555" />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                    d="M50 280 L100 240 L150 260 L200 180 L250 140 L300 100"
                    stroke="#993cff"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <motion.circle cx="100" cy="240" r="4" fill="#993cff" />
                  <motion.circle cx="150" cy="260" r="4" fill="#993cff" />
                  <motion.circle cx="200" cy="180" r="4" fill="#993cff" />
                  <motion.circle cx="250" cy="140" r="4" fill="#993cff" />
                  <motion.circle cx="300" cy="100" r="4" fill="#993cff" />
                </motion.g>

                {/* Rocket body */}
                <motion.path
                  animate={{
                    y: [-5, 5, -5],
                    transition: { duration: 3, repeat: Infinity, repeatType: "reverse" }
                  }}
                  d="M200 50C188.9543 50 180 58.9543 180 70V150L160 190H240L220 150V70C220 58.9543 211.046 50 200 50Z"
                  fill="#993cff"
                />
                <motion.path 
                  animate={{
                    y: [-8, 8, -8],
                    transition: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                  }}
                  d="M180 150L150 160L160 190L180 150Z" 
                  fill="#bb6aff" 
                />
                <motion.path 
                  animate={{
                    y: [-8, 8, -8],
                    transition: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                  }}
                  d="M220 150L250 160L240 190L220 150Z" 
                  fill="#bb6aff" 
                />
                <motion.path
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    y: [5, 15, 5],
                    transition: { duration: 0.8, repeat: Infinity, repeatType: "reverse" }
                  }}
                  d="M190 190H210L200 220L190 190Z" 
                  fill="#ff9d4d" 
                />
                <circle cx="200" cy="100" r="15" fill="white" />

                {/* Stars/particles */}
                <motion.circle 
                  cx="100" 
                  cy="150" 
                  r="3" 
                  fill="#fff" 
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.3, 1],
                    transition: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                  }}
                />
                <motion.circle 
                  cx="320" 
                  cy="180" 
                  r="2" 
                  fill="#fff" 
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.3, 1],
                    transition: { duration: 1.7, delay: 0.5, repeat: Infinity, repeatType: "reverse" }
                  }}
                />
                <motion.circle 
                  cx="270" 
                  cy="80" 
                  r="2.5" 
                  fill="#fff" 
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.3, 1],
                    transition: { duration: 2.3, delay: 0.2, repeat: Infinity, repeatType: "reverse" }
                  }}
                />
              </svg>
            </motion.div>
          </Box>
        </Box>
      </Box>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.3, 1, 0.3],
            transition: { duration: 2, repeat: Infinity }
          }}
        >
          <Box
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "20px",
              border: "2px solid rgba(153, 60, 255, 0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "6px",
                height: "6px",
                borderRadius: "3px",
                backgroundColor: "rgba(153, 60, 255, 0.8)",
              }}
            />
          </Box>
          <Typography variant="caption" sx={{ display: "block", mt: 1, color: "rgba(255,255,255,0.6)" }}>
            SCROLL
          </Typography>
        </motion.div>
      </Box>

      {/* Modal Dialog with YouTube iframe */}
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