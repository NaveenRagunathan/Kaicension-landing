import React, { useState } from "react";
import { Dialog, IconButton, Box, Typography } from "@mui/material";
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
        px: 3,
        backgroundColor: "#111",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      >
        {/* Left Column */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            gap: 3,
            order: { xs: 2, md: 1 },
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
          >
            Finally your Startup can blast off!
          </Typography>

          <Box
            sx={{
              width: "100%",
              height: "auto",
              backgroundColor: "#222",
              minHeight: "300px",
              borderRadius: "8px",
              display: { xs: "block", md: "none" },
              mb: 2,
            }}
          >
            {/* Mobile image placeholder (actual image to be uploaded) */}
            <Typography sx={{ p: 2, color: "#888" }}>Upload image here</Typography>
          </Box>

          <Typography variant="body1" sx={{ fontSize: "1.1rem", opacity: 0.9 }}>
            Stand Out, Get Traction, Go Viral, Hit PMF, Make Money, Secure
            Funding and <strong>scale scale scale.</strong>
          </Typography>

          <Typography variant="body1" sx={{ fontSize: "1.1rem", opacity: 0.9 }}>
            The World needs to feel your impact.
            <br />
            Get the Growth you have always desired.
          </Typography>

          <Box
            onClick={handleOpen}
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "100%",
              pt: "56.25%", // 16:9 aspect ratio
              backgroundColor: "#333",
              borderRadius: "8px",
              overflow: "hidden",
              cursor: "pointer",
              mt: 2,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage: `url('https://via.placeholder.com/800x450')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
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
              }}
            >
              <PlayArrowIcon sx={{ fontSize: 36, color: "#fff" }} />
            </Box>
          </Box>

          <Typography
            variant="caption"
            sx={{ mt: 1, opacity: 0.7, textAlign: { xs: "center", md: "left" } }}
          >
            Watch the video below to find out if this is for you.
          </Typography>
        </Box>

        {/* Right Column - Image (desktop only) */}
        <Box
          sx={{
            flex: 1,
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#222",
            minHeight: "400px",
            borderRadius: "8px",
          }}
        >
          <Typography sx={{ color: "#888" }}>Upload image here</Typography>
        </Box>
      </Box>

      {/* Modal Dialog with YouTube iframe */}
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
    </Box>
  );
}
