import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        {/* TODO: Add your headline here */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text text-balance">
          Chroma
        </h1>

        {/* TODO: Add your subheadline here */}
        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          A live audio-reactive visual instrument for performers, directors, and capture workflows
        </p>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button variant="primary" size="lg" className="min-w-[180px]">
            Download on App Store
          </Button>
          <Button variant="secondary" size="lg" className="min-w-[180px]">
            Get on Mac App Store
          </Button>
        </div>

        {/* GitHub Link */}
        <motion.a
          href="https://github.com/stagedevices/chroma"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <Github className="w-5 h-5" />
          <span className="text-sm">View on GitHub</span>
        </motion.a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center"
        >
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};