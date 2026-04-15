'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-accent-purple/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-cyan/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

      <motion.div className="max-w-4xl mx-auto text-center z-10" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-dark-700/50 border border-accent-blue/30 rounded-full text-sm text-accent-blue">
            🚀 Welcome to my technical portfolio
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan bg-clip-text text-transparent">
            Technical Leader
          </span>
          <br />
          <span className="text-gray-300">Building Resilient Systems at Scale</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          9+ years designing and building distributed systems, microservices, and cloud-native architectures.
          Specialized in Java, Spring Boot, Kubernetes, and GCP. Currently Technical Lead at CHUBB.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center mb-12 flex-wrap">
          <motion.a href="#contact" className="px-8 py-3 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg font-semibold text-dark-900" whileHover={{ scale: 1.05 }}>
            Get in Touch
          </motion.a>
          <motion.a href="#projects" className="px-8 py-3 border border-accent-blue/50 text-accent-blue rounded-lg font-semibold hover:bg-accent-blue/10" whileHover={{ scale: 1.05 }}>
            View My Work
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-6 justify-center">
          <motion.a href="https://github.com/pritvish" className="p-3 rounded-lg bg-dark-700/50 border border-gray-700 text-gray-300 hover:text-accent-blue" whileHover={{ y: -5 }}>
            <Github size={20} />
          </motion.a>
          <motion.a href="https://linkedin.com/in/pritvishmandal" className="p-3 rounded-lg bg-dark-700/50 border border-gray-700 text-gray-300 hover:text-accent-blue" whileHover={{ y: -5 }}>
            <Linkedin size={20} />
          </motion.a>
          <motion.a href="mailto:pritvish.mandal80@gmail.com" className="p-3 rounded-lg bg-dark-700/50 border border-gray-700 text-gray-300 hover:text-accent-blue" whileHover={{ y: -5 }}>
            <Mail size={20} />
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="absolute bottom-8 left-1/2 transform -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="text-accent-blue/50" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
