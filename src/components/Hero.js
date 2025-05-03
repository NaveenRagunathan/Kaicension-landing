import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

// StarField component for creating an animated space background
const StarField = ({ count = 100 }) => {
  const stars = [];
  
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 2 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    const opacity = Math.random() * 0.7 + 0.3;
    
    stars.push(
      <motion.div
        key={i}
        style={{
          position: 'absolute',
          width: size,
          height: size,
          borderRadius: '50%',
          backgroundColor: 'white',
          left: `${x}%`,
          top: `${y}%`,
          opacity
        }}
        animate={{
          opacity: [opacity, opacity * 1.5, opacity],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration,
          repeat: Infinity,
          delay
        }}
      />
    );
  }
  
  return <div className="absolute w-full h-full z-0">{stars}</div>;
};

// Particle effect component for rocket exhaust - FIXED BUG HERE
const RocketExhaust = ({ active }) => {
  const particles = [];
  const particleCount = active ? 40 : 0;
  
  for (let i = 0; i < particleCount; i++) {
    const size = Math.random() * 10 + 5;
    const xOffset = (Math.random() - 0.5) * 40;
    const duration = Math.random() * 1 + 0.5;
    const delay = Math.random() * 0.2;
    
    particles.push(
      <motion.div
        key={i}
        style={{
          position: 'absolute',
          width: size,
          height: size,
          borderRadius: '50%',
          background: `radial-gradient(circle at center, ${
            Math.random() > 0.7 ? '#ffcc00' : '#ff6600'
          }, transparent)`,
          left: '50%',
          transform: 'translateX(-50%)',
          marginLeft: xOffset,
          bottom: -10,
          zIndex: -1
        }}
        animate={{
          y: [0, 100 + Math.random() * 50],
          opacity: [0.8, 0]
        }}
        transition={{
          duration,
          repeat: Infinity,
          delay
        }}
      />
    );
  }
  
  return <>{particles}</>;
};

// Hero component
const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isRocketHovered, setIsRocketHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef(null);
  
  // Animation values
  const baseY = useMotionValue(0);
  const rocketY = useTransform(baseY, [0, 100], [0, -50]);
  const rotation = useMotionValue(0);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      baseY.set(Math.min(window.scrollY / 5, 100));
      
      // Add slight rotation based on scroll
      const newRotation = Math.sin(window.scrollY / 500) * 5;
      rotation.set(newRotation);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [baseY, rotation]);
  
  // Handle video playback
  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };
  
  return (
    <div className="relative min-h-screen overflow-hidden flex items-center justify-center pt-4 md:pt-0" 
         style={{background: 'linear-gradient(135deg, #0F0F1A 0%, #1A1A2E 100%)'}}>
      {/* Animated star background */}
      <StarField count={150} />
      
      {/* Purple nebula effect */}
      <div className="absolute w-full h-full z-0" 
           style={{background: 'radial-gradient(ellipse at center, rgba(138, 79, 255, 0.15) 0%, transparent 70%)'}} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 py-4 md:py-8">
          {/* Text Content Side */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4"
                  style={{textShadow: '0 0 15px rgba(138, 79, 255, 0.5)'}}>
                Finally your Startup can{' '}
                <span className="relative" 
                      style={{
                        background: 'linear-gradient(90deg, #8A4FFF, #A375FF)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        position: 'relative'
                      }}>
                  blast off!
                  <span className="absolute bottom-0 left-0 w-full h-1 rounded-md"
                        style={{background: 'linear-gradient(90deg, #8A4FFF, #A375FF)'}} />
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
                Stand out, get Traction, hit PMF, go viral, make Money, secure funding and{' '}
                <span className="font-bold text-purple-400">
                  scale scale scale.
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-lg md:text-xl font-semibold text-white mb-8">
                The World needs to feel your impact.
                <br />
                Get the Growth you have always desired.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center md:justify-start"
            >
              <button
                onClick={toggleVideo}
                className="flex items-center px-6 py-3 rounded-full font-semibold text-white text-lg"
                style={{
                  background: 'linear-gradient(90deg, #8A4FFF, #A375FF)',
                  boxShadow: '0 4px 20px rgba(138, 79, 255, 0.3)'
                }}
              >
                <PlayCircle className="mr-2" size={24} />
                Watch the video
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1 }}
            >
              <p className="mt-4 text-gray-400 text-sm text-center md:text-left">
                Watch the video below to find out if this is for you.
              </p>
            </motion.div>
          </div>

          {/* Video and Rocket Side */}
          <div className="w-full md:w-1/2 relative h-64 md:h-96 flex justify-center items-center">
            {/* Interactive rocket animation */}
            <motion.div
              style={{ 
                position: 'absolute',
                y: rocketY,
                rotate: rotation,
                zIndex: 5
              }}
              onHoverStart={() => setIsRocketHovered(true)}
              onHoverEnd={() => setIsRocketHovered(false)}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="relative w-24 sm:w-32 h-40 sm:h-52 mb-3">
                {/* Stylized rocket based on image 2 */}
                <div className="w-full h-full relative">
                  {/* Rocket glow effect */}
                  <div className="absolute w-full h-full"
                       style={{
                         background: 'radial-gradient(ellipse at center, rgba(138, 79, 255, 0.3) 0%, transparent 70%)',
                         filter: 'blur(15px)',
                         transform: 'translateZ(-10px)'
                       }} />
                  
                  {/* Rocket body */}
                  <div className="absolute w-3/4 h-3/4 left-1/8 bg-purple-500 rounded-t-full"
                       style={{
                         left: '12.5%',
                         background: 'linear-gradient(135deg, #8A4FFF 0%, #A375FF 100%)',
                         borderRadius: '50% 50% 15% 15% / 60% 60% 15% 15%',
                         boxShadow: '0 0 20px rgba(138, 79, 255, 0.5)'
                       }} />
                  
                  {/* Rocket tip */}
                  <div className="absolute w-1/2 h-1/3 left-1/4 -top-3"
                       style={{
                         background: 'linear-gradient(135deg, #7340D1 0%, #8A4FFF 100%)',
                         borderRadius: '50% 50% 0 0 / 80% 80% 0 0'
                       }} />
                  
                  {/* Window */}
                  <div className="absolute w-1/3 h-1/5 top-1/4"
                       style={{
                         left: '33.3%',
                         background: 'radial-gradient(ellipse at center, rgba(173, 216, 230, 0.9) 0%, rgba(110, 180, 210, 0.9) 100%)',
                         borderRadius: '50%',
                         boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.2), 0 0 10px rgba(173, 216, 230, 0.5)'
                       }} />
                  
                  {/* Left fin */}
                  <div className="absolute w-1/5 h-1/3 -left-1 bottom-1/5"
                       style={{
                         background: 'linear-gradient(135deg, #6030B1 0%, #7340D1 100%)',
                         borderRadius: '50% 50% 0 50% / 50% 50% 0 50%',
                         transform: 'rotate(-20deg)'
                       }} />
                  
                  {/* Right fin */}
                  <div className="absolute w-1/5 h-1/3 -right-1 bottom-1/5"
                       style={{
                         background: 'linear-gradient(135deg, #6030B1 0%, #7340D1 100%)',
                         borderRadius: '50% 50% 50% 0 / 50% 50% 50% 0',
                         transform: 'rotate(20deg)'
                       }} />
                  
                  {/* Bottom exhaust */}
                  <div className="absolute w-2/5 h-1/6 left-3/10 bottom-0 bg-gray-600 rounded-b-full"
                       style={{
                         left: '30%',
                         borderRadius: '0 0 40% 40% / 0 0 100% 100%'
                       }} />
                </div>
                
                {/* Rocket exhaust animation - position fixed */}
                <div className="absolute bottom-0 left-0 w-full h-8 overflow-visible flex justify-center">
                  <RocketExhaust active={isRocketHovered || scrollY > 50} />
                </div>
              </div>
            </motion.div>

            {/* Video container */}
            <div className="w-full h-full relative flex justify-center items-center overflow-hidden rounded-xl border-2 border-purple-500 border-opacity-30 z-10"
                 style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 30px rgba(138, 79, 255, 0.3)' }}>
              {/* Placeholder video - you'll replace this with your actual video */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover rounded-lg"
                poster="/api/placeholder/800/450"
                onClick={toggleVideo}
              >
                <source src="your-video-url.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video play overlay */}
              <AnimatePresence>
                {!isVideoPlaying && (
                  <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-30 rounded-lg cursor-pointer"
                    onClick={toggleVideo}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex justify-center items-center w-16 h-16 sm:w-20 sm:h-20 rounded-full"
                      style={{
                        background: 'rgba(138, 79, 255, 0.8)',
                        boxShadow: '0 0 30px rgba(138, 79, 255, 0.5)'
                      }}
                    >
                      <PlayCircle size={48} color="white" />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated scroll indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
      >
        <div className="w-8 h-12 border-2 border-white border-opacity-30 rounded-full flex justify-center pt-1 pb-1">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;