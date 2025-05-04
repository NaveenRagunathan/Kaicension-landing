import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, MeshWobbleMaterial, Sparkles, Stars, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
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

const GradientBackground = styled(Box)(({ theme }) => ({
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
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "url('/noise.png')",
    opacity: 0.05,
    mixBlendMode: "overlay",
    pointerEvents: "none",
  }
}));

const HeroText = styled(motion.div)(({ theme }) => ({
  maxWidth: "600px",
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
  transform: "rotate3d(1, 1, 0, -5deg)",
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

const CanvasContainer = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  zIndex: 1,
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

// =============== 3D COMPONENTS ===============

// Custom animation function
function animate(obj, prop, opts) {
  let start = null;
  const startValues = {};
  const propKeys = Object.keys(prop);

  propKeys.forEach(key => {
    startValues[key] = obj[key];
  });

  function loop(timestamp) {
    if (!start) start = timestamp;
    const progress = Math.min(1, (timestamp - start) / (opts.duration * 1000));

    propKeys.forEach(key => {
      const startVal = startValues[key];
      const endVal = prop[key];
      obj[key] = startVal + (endVal - startVal) * progress;
    });

    opts.onUpdate && opts.onUpdate();

    if (progress < 1) {
      window.requestAnimationFrame(loop);
    }
  }

  window.requestAnimationFrame(loop);
}

// Rocket Component
function Rocket({ isLaunching, launchProgress }) {
  const rocketRef = useRef();
  const { viewport } = useThree();

  useFrame((state, delta) => {
    if (!rocketRef.current) return;

    // Idle floating animation
    if (!isLaunching) {
      rocketRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      rocketRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    } 
    // Launch animation
    else {
      rocketRef.current.position.y += delta * 5 * launchProgress.get();
      rocketRef.current.rotation.z = 0;
      
      // If rocket goes out of view, reset its position for the next launch
      if (rocketRef.current.position.y > viewport.height) {
        rocketRef.current.position.y = -2;
      }
    }
  });

  return (
    <group ref={rocketRef} position={[2, 0, 0]} scale={[0.4, 0.4, 0.4]}>
      <mesh castShadow>
        <coneGeometry args={[0.5, 2, 16]} />
        <meshStandardMaterial color="#bb6aff" metalness={0.6} roughness={0.2} />
      </mesh>
      <mesh castShadow position={[0, -1.25, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.5, 16]} />
        <meshStandardMaterial color="#993cff" metalness={0.6} roughness={0.2} />
      </mesh>
      <mesh castShadow position={[0, -1.75, 0]}>
        <cylinderGeometry args={[0.25, 0.5, 0.5, 16]} />
        <meshStandardMaterial color="#f44336" metalness={0.5} roughness={0.5} />
      </mesh>

      {/* Rocket Fins */}
      <mesh castShadow position={[0.5, -1.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <coneGeometry args={[0.2, 0.5, 16]} />
        <meshStandardMaterial color="#f1f1f1" metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh castShadow position={[-0.5, -1.5, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.2, 0.5, 16]} />
        <meshStandardMaterial color="#f1f1f1" metalness={0.5} roughness={0.5} />
      </mesh>
      
      {/* Rocket Flames - only shown when launching */}
      {isLaunching && (
        <group position={[0, -2, 0]}>
          <mesh>
            <coneGeometry args={[0.3, 1, 16]} />
            <meshBasicMaterial color="#ff9800" transparent opacity={0.8} />
          </mesh>
          <Sparkles count={30} scale={[0.5, 1, 0.5]} size={5} speed={0.5} color="#ff9800" />
        </group>
      )}
    </group>
  );
}

// Floating Elements Component
function FloatingElements() {
  const floatingRefs = useRef([]);

  useFrame((state) => {
    floatingRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const t = state.clock.elapsedTime + i * 100;
      mesh.position.y = Math.sin(t * 0.2) * 0.5;
      mesh.rotation.x = Math.sin(t * 0.2) * 0.2;
      mesh.rotation.z = Math.sin(t * 0.2) * 0.2;
    });
  });

  return (
    <group>
      {[...Array(8)].map((_, i) => (
        <mesh
          key={i}
          ref={(el) => (floatingRefs.current[i] = el)}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 5,
            (Math.random() - 0.5) * 5 - 5
          ]}
        >
          <sphereGeometry args={[0.1, 16, 16]} />
          <MeshWobbleMaterial
            color={i % 2 === 0 ? "#993cff" : "#bb6aff"}
            factor={0.2}
            speed={0.5}
            emissive={i % 2 === 0 ? "#993cff" : "#bb6aff"}
            emissiveIntensity={0.3}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

// =============== MAIN COMPONENT ===============

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  const launchProgress = { get: () => rocketAnimationProgress };
  const [rocketAnimationProgress, setRocketAnimationProgress] = useState(0);

  const handleWatchClick = () => {
    setIsLaunching(true);
    setTimeout(() => {
      setShowVideo(true);
    }, 2000); // Show video after rocket launch animation
  };

  useEffect(() => {
    if (isLaunching) {
      const controls = {
        progress: 0
      };
      const animation = {
        progress: 1
      };
      
      const tween = {
        duration: 2,
        ease: "easeOut",
        onUpdate: () => {
          setRocketAnimationProgress(controls.progress);
        }
      };
      
      // Animate launch progress
      animate(controls, animation, tween);
    }
  }, [isLaunching]);

  return (
    <GradientBackground>
      <CanvasContainer>
        <Canvas
          camera={{ position: [0, 0, 10], fov: 60 }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <pointLight position={[-10, -10, -10]} color="#993cff" intensity={0.2} />

          <Suspense fallback={null}>
            <Rocket isLaunching={isLaunching} launchProgress={launchProgress} />
            <FloatingElements />
            <Stars radius={100} depth={50} count={300} factor={4} fade speed={1} />
            <Environment preset="sunset" />
          </Suspense>
        </Canvas>
      </CanvasContainer>

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
          <SubText> <strong>
            Stand Out, Get Traction, Go Viral, Hit PMF, Make Money, Secure Funding and{" "}</strong>
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
            disabled={isLaunching}
          >
            <PlayArrowIcon />
            Watch the video
          </WatchButton>

          <Typography variant="caption" display="block" mt={2} color="#666">
            Watch the video below to find out if this is for you.
          </Typography>
        </motion.div>
      </HeroText>

      {showVideo && (
        <VideoContainer
          initial={{ opacity: 0, y: 100, rotateX: 30 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 20 
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Wleby2uqYDE?autoplay=1&mute=0&controls=1"
            title="Startup Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "18px" }}
          ></iframe>
        </VideoContainer>
      )}

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
    </GradientBackground>
  );
}