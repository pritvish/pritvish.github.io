'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'GCP Cloud Migration Platform',
    description: 'Led successful migration of legacy monolithic application to Google Cloud Platform, implementing cloud-native architecture patterns. Achieved 40% cost reduction and 3x improvement in deployment frequency.',
    tags: ['GCP', 'Kubernetes', 'Spring Boot', 'Microservices', 'Cloud Architecture'],
    impact: '10,000+ concurrent users',
    year: '2023-2024',
  },
  {
    title: 'Real-time Event Processing System',
    description: 'Designed and implemented high-throughput Kafka-based event streaming platform for order processing. Handles 100k+ events/second with sub-second latency, ensuring reliability in financial transactions.',
    tags: ['Kafka', 'Java', 'Spring Boot', 'Distributed Systems', 'Real-time Processing'],
    impact: '100K+ events/second',
    year: '2022-2023',
  },
  {
    title: 'REST API & Microservices Framework',
    description: 'Built scalable REST API framework with Spring and Spring Data JPA for product usage monitoring. Integrated with multiple backend systems, enabling seamless data transmission and business metrics calculation.',
    tags: ['REST APIs', 'Spring Boot', 'Microservices', 'Database Design', 'API Gateway'],
    impact: '50+ endpoints, 99.9% uptime',
    year: '2021-2022',
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            High-impact work demonstrating architectural thinking and technical depth
          </p>
        </motion.div>

        <motion.div className="space-y-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {projects.map((project, index) => (
            <motion.div key={index} variants={cardVariants} className="group p-8 rounded-xl bg-dark-700/50 border border-gray-700/50 hover:border-accent-blue/50 transition-all duration-300" whileHover={{ x: 5 }}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-500">{project.year}</p>
                </div>
                <span className="inline-block px-4 py-2 bg-accent-blue/10 border border-accent-blue/30 text-accent-blue rounded-lg text-sm font-semibold whitespace-nowrap">
                  {project.impact}
                </span>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed text-lg">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full bg-dark-900/70 border border-accent-cyan/30 text-accent-cyan text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-gray-700/50">
                <motion.a href="#" className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-cyan transition-colors text-sm font-semibold" whileHover={{ x: 5 }}>
                  View Case Study <ExternalLink size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
