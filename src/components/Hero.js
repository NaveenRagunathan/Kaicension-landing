import React, { useState } from "react";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { styled, keyframes } from "@mui/system";

// =============== STYLED COMPONENTS ===============

const glowPulse = keyframes`
  0% { text-shadow: 0 0 10px rgba(197, 158, 249, 0.3), 0 0 20px rgba(197, 158, 249, 0.2); }
  50% { text-shadow: 0 0 15px rgba(197, 158, 249, 0.8), 0 0 30px rgba(197, 158, 249, 0.5), 0 0 40px rgba(197, 158, 249, 0.3); }
  100% { text-shadow: 0 0 10px rgba(197, 158, 249, 0.3), 0 0 20px rgba(197, 158, 249, 0.2); }`;

const heroTextGlow = keyframes`
  0% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.1); }
  50% { text-shadow: 0 0 30px rgba(255, 255, 255, 0.3), 0 0 50px rgba(153, 60, 255, 0.5); }
  100% { text-shadow: 0 0 20px rgba(255, 255, 255, 0.1); }`;

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  width: "100%",
  background: "radial-gradient(ellipse at center, #f8faff 0%, #eef1fa 100%)",
  color: "#333",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 5%",
  position: "relative",
  overflow: "hidden",
  flexWrap: "wrap",
  backgroundImage: "url('./assets/Untitled.jpeg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(255, 255, 255, 0.7)",
    pointerEvents: "none",
  }
}));

const HeroText = styled(motion.div)(({ theme }) => ({
  maxWidth: "500px",
  zIndex: 5,
  position: "relative",
  "@media (max-width: 900px)": {
    maxWidth: "100%",
    textAlign: "center",
    marginBottom: "40px",
  }
}));

const MainHeading = styled(motion.h1)({
  fontSize: "clamp(2.5rem, 5vw, 4rem)",
  fontWeight: 900,
  lineHeight: 1.1,
  margin: 0,
  letterSpacing: "-0.02em",
  backgroundImage: "linear-gradient(135deg, #333 30%, #993cff 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
  animation: `${heroTextGlow} 3s ease-in-out infinite`,
  "@media (max-width: 600px)": {
    fontSize: "2.5rem",
  }
});

const BlastText = styled("span")({
  position: "relative",
  display: "inline-block",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: "-5px",
    left: 0,
    width: "100%",
    height: "2px",
    background: "linear-gradient(90deg, transparent, #993cff, transparent)",
  }
});

const Highlight = styled("span")({
  color: "#993cff",
  fontWeight: 700,
  animation: `${glowPulse} 2s infinite ease-in-out`,
});

const SubText = styled(Typography)({
  marginTop: "20px",
  fontSize: "1.1rem",
  color: "#444",
  lineHeight: 1.6,
  letterSpacing: "0.01em",
});

const WatchButton = styled(motion.button)({
  marginTop: "30px",
  padding: "14px 28px",
  borderRadius: "30px",
  background: "linear-gradient(90deg, #993cff 0%, #bb6aff 100%)",
  color: "#fff",
  textTransform: "none",
  fontWeight: 600,
  fontSize: "1rem",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  border: "none",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  boxShadow: "0 5px 15px rgba(153, 60, 255, 0.4)",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
    transition: "0.5s",
  },
  "&:hover::before": {
    left: "100%",
  }
});

const VideoContainer = styled(motion.div)({
  position: "relative",
  zIndex: 10,
  width: "100%",
  maxWidth: "560px",
  height: "315px",
  borderRadius: "20px",
  overflow: "hidden",
  boxShadow: "0 20px 40px rgba(0,0,0,0.15), 0 0 30px rgba(153, 60, 255, 0.2)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#fff",
  perspective: "1000px",
  "&::before": {
    content: '""',
    position: "absolute",
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    zIndex: -1,
    borderRadius: "22px",
    background: "linear-gradient(45deg, #993cff, transparent, #bb6aff)",
    animation: "rotate 6s linear infinite",
  },
  "@media (max-width: 900px)": {
    maxWidth: "90%",
    margin: "0 auto",
    height: "auto",
    aspectRatio: "16/9",
  }
});

const ScrollIndicator = styled(motion.div)({
  position: "absolute",
  bottom: "30px",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: "#555",
  fontSize: "12px",
  letterSpacing: "2px",
  opacity: 0.7,
  zIndex: 5,
});

const ArrowDown = styled(motion.div)({
  width: "20px",
  height: "20px",
  border: "2px solid #555",
  borderLeft: "none",
  borderTop: "none",
  transform: "rotate(45deg)",
  marginTop: "8px",
});

// =============== MAIN COMPONENT ===============

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  const handleWatchClick = () => {
    setShowVideo(true);
  };

  return (
    <HeroContainer>
      <HeroText
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <MainHeading>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Finally your Startup{" "}
          </motion.span>
          <br />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <BlastText>can blast off!</BlastText>
          </motion.div>
        </MainHeading>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <SubText>
            <strong>
              Stand Out, Get Traction, Go Viral, Hit PMF, Make Money, Secure Funding and{" "}
            </strong>
            <Highlight>scale scale scale.</Highlight>
          </SubText>

          <Typography variant="body1" fontWeight={600} mt={3} color="#333">
            The World needs to feel your impact. <br />
            Get the Growth you have always desired.
          </Typography>

          <WatchButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleWatchClick}
          >
            <PlayArrowIcon />
            Watch the video
          </WatchButton>

          <Typography variant="caption" display="block" mt={2} color="#666">
            Watch the video to find out if this is for you.
          </Typography>
        </motion.div>
      </HeroText>

      <VideoContainer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 0.5,
          type: "spring", 
          stiffness: 100, 
          damping: 20 
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src={showVideo ? "https://www.youtube.com/embed/xZqT3E3-POk" : ""}
          title="Startup Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: "18px" }}
        ></iframe>
      </VideoContainer>

      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <Typography variant="caption" component="span">
          SCROLL
        </Typography>
        <ArrowDown
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />
      </ScrollIndicator>
    </HeroContainer>
  );
}