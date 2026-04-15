'use client';

import { motion } from 'framer-motion';
import { Code, Server, Cloud, Database, Zap, Settings } from 'lucide-react';

const expertiseAreas = [
  {
    icon: Server,
    title: 'Backend Architecture',
    description: 'Design and build scalable microservices using Spring Boot, REST APIs, and event-driven architectures',
    skills: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'Apache Camel'],
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Deploy, manage, and optimize applications on GCP and Azure with Kubernetes orchestration',
    skills: ['GCP', 'Azure', 'Kubernetes', 'Docker', 'CI/CD'],
  },
  {
    icon: Database,
    title: 'Data Systems',
    description: 'Work with distributed databases and event streaming for real-time data processing',
    skills: ['Kafka', 'Oracle', 'MS SQL', 'SAP HANA', 'JPA'],
  },
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Build end-to-end solutions with backend services and modern frontend technologies',
    skills: ['Angular', 'TypeScript', 'React', 'Web Services', 'Testing'],
  },
  {
    icon: Zap,
    title: 'System Reliability',
    description: 'Ensure production systems remain resilient, performant, and maintainable at scale',
    skills: ['Monitoring', 'Debugging', 'Load Testing', 'Code Quality', 'Refactoring'],
  },
  {
    icon: Settings,
    title: 'DevOps & Tools',
    description: 'Streamline development workflows with modern tooling and automation practices',
    skills: ['Maven', 'Jenkins', 'Sonar', 'JIRA', 'Git'],
  },
];

export default function Expertise() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Deep expertise across backend systems, cloud infrastructure, and distributed architectures
          </p>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div key={index} variants={cardVariants} className="group p-6 rounded-xl bg-dark-700/50 border border-gray-700/50 hover:border-accent-blue/50 transition-all duration-300" whileHover={{ y: -5 }}>
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple p-2.5 text-dark-900">
                    <Icon size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{area.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-dark-900/50 border border-accent-blue/30 text-accent-blue text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
