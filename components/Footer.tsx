'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-700/30 bg-dark-900/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan bg-clip-text text-transparent mb-2">
              {'<pm />'}
            </h3>
            <p className="text-gray-400 text-sm">
              Technical Leader | Backend Systems Architect
            </p>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Crafted with React, Next.js, and Tailwind CSS
            </p>
          </div>

          <p className="text-gray-500 text-sm text-right">
            © {currentYear} Pritvish Mandal. All rights reserved.
          </p>
        </motion.div>

        <motion.div className="mt-8 pt-8 border-t border-gray-700/30 flex flex-wrap justify-center gap-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          {[
            { label: 'Home', href: '#home' },
            { label: 'Expertise', href: '#expertise' },
            { label: 'Projects', href: '#projects' },
            { label: 'Experience', href: '#experience' },
            { label: 'Contact', href: '#contact' },
          ].map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-gray-400 hover:text-accent-blue transition-colors">
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
