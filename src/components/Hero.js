import React, { useState } from "react";
import {
  Dialog,
  IconButton,
  Box,
  Typography,
  Button,
} from "@mui/material";
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
      <Box sx={{ width: "100%", maxWidth: "1200px", py: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: { xs: 5, md: 6 },
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
              sx={{ fontSize: { xs: "2.5rem", md: "3rem" } }}
            >
              Finally your Startup{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #993cff, #bb6aff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                can blast off!
              </span>
            </Typography>

            <Typography
              variant="body1"
              sx={{ fontSize: "1.1rem", opacity: 0.8 }}
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
              sx={{ fontSize: "1.1rem", opacity: 0.8 }}
            >
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
                pt: "56.25%",
                backgroundColor: "#333",
                borderRadius: "8px",
                overflow: "hidden",
                cursor: "pointer",
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
              sx={{
                mt: 1,
                opacity: 0.7,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              Watch the video below to find out if this is for you.
            </Typography>
          </Box>

          {/* Right Column */}
          <Box
            sx={{
              flex: 1,
              maxWidth: { xs: "100%", md: "46%" },
              minHeight: { xs: "220px", md: "400px" },
              position: "relative",
              order: { xs: 1, md: 2 },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#f7f2ff",
              border: "2px dashed #c9a9f7",
              borderRadius: "16px",
              boxShadow: "0 2px 16px rgba(153,60,255,0.05)",
              p: { xs: 2, md: 3 },
              overflow: "hidden",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#a48be2",
                textAlign: "center",
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

        {/* CTA */}
        <Box sx={{ mt: { xs: 6, md: 10 }, width: "100%", textAlign: "center" }}>
          <Typography
            variant="h6"
            sx={{ color: "#7c4cff", fontWeight: 600, mb: 1 }}
          >
            Got questions?
          </Typography>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#bb6aff",
              color: "#993cff",
              ":hover": {
                borderColor: "#993cff",
                background: "#f3eaff",
              },
            }}
          >
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
