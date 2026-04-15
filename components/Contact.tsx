'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, ArrowRight } from 'lucide-react';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div className="text-center" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm actively exploring new opportunities to lead technical initiatives and mentor talented engineers.
            Let's discuss how we can build something great together.
          </motion.p>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.a href="mailto:pritvish.mandal80@gmail.com" className="p-6 rounded-lg bg-dark-700/50 border border-gray-700/50 hover:border-accent-blue/50 transition-all group" whileHover={{ y: -5 }}>
              <Mail className="text-accent-blue mb-3 mx-auto group-hover:scale-110 transition-transform" size={28} />
              <p className="font-semibold text-white mb-1">Email</p>
              <p className="text-gray-400 text-sm break-all">pritvish.mandal80@gmail.com</p>
            </motion.a>

            <motion.a href="tel:+917569584334" className="p-6 rounded-lg bg-dark-700/50 border border-gray-700/50 hover:border-accent-blue/50 transition-all group" whileHover={{ y: -5 }}>
              <Phone className="text-accent-blue mb-3 mx-auto group-hover:scale-110 transition-transform" size={28} />
              <p className="font-semibold text-white mb-1">Phone</p>
              <p className="text-gray-400 text-sm">+91 7569584334</p>
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-12">
            <motion.a href="https://linkedin.com/in/pritvishmandal" className="p-4 rounded-lg bg-dark-700/50 border border-gray-700/50 text-gray-300 hover:text-accent-blue hover:border-accent-blue/50 transition-all" whileHover={{ y: -5, scale: 1.1 }}>
              <Linkedin size={24} />
            </motion.a>
            <motion.a href="https://github.com/pritvish" className="p-4 rounded-lg bg-dark-700/50 border border-gray-700/50 text-gray-300 hover:text-accent-blue hover:border-accent-blue/50 transition-all" whileHover={{ y: -5, scale: 1.1 }}>
              <Github size={24} />
            </motion.a>
          </motion.div>

          <motion.a
            variants={itemVariants}
            href="mailto:pritvish.mandal80@gmail.com?subject=Let's%20Connect!&body=Hi%20Pritvish,%0A%0AI'd%20like%20to%20discuss%20opportunities%20to%20work%20together.%0A%0ALooking%20forward%20to%20hearing%20from%20you!"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple rounded-lg font-semibold text-dark-900 hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send me an Email <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
