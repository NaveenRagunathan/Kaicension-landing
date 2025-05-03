import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen w-full bg-gradient-to-b from-[#0e0c2c] to-[#1a0840] text-white overflow-hidden">
      {/* Star field */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff44_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse opacity-10 z-0" />

      {/* Blurred planets / glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse z-0" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500 rounded-full blur-2xl opacity-10 z-0" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent"
        >
          Finally your Startup can <span className="text-purple-300">blast off!</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-6 max-w-2xl text-lg text-gray-300"
        >
          Stand out, get Traction, hit PMF, go viral, make Money, secure funding and scale scale scale.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-4 text-sm text-gray-400 italic"
        >
          The World needs to feel your impact. <br />
          Get the Growth you have always desired.
        </motion.p>

        {/* Glassmorphic Video Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-10 backdrop-blur-md bg-white/10 border border-purple-600 rounded-2xl shadow-2xl overflow-hidden w-full max-w-2xl aspect-video"
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Startup Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold text-lg shadow-md transition"
        >
          Watch the video
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
