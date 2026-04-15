'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Technical Lead',
    company: 'CHUBB',
    period: 'September 2024 - Present',
    location: 'Hyderabad, India',
    highlights: [
      'Leading system integration and architectural decisions',
      'Mentoring junior developers on best practices',
      'Enhancing operational efficiency through technical innovation',
    ],
  },
  {
    role: 'Developer',
    company: 'SAP',
    period: 'July 2022 - September 2024',
    location: 'Hyderabad, India',
    highlights: [
      'Successfully migrated product to Google Cloud HyperScalers',
      'Designed REST APIs using Spring and Bean Framework',
      'Led comprehensive code and design reviews',
      'Improved code coverage with comprehensive test cases (Jasmine & Karma)',
    ],
  },
  {
    role: 'Module Lead',
    company: 'Mindtree',
    period: 'May 2021 - July 2022',
    location: 'Hyderabad, India',
    highlights: [
      'Led UI development of Load File Generator (LFG) component',
      'Integrated frontend with backend APIs for seamless data transmission',
      'Mentored junior developers and fostered collaborative environment',
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'IVY Comptech',
    period: 'December 2020 - May 2021',
    location: 'Hyderabad, India',
    highlights: [
      'Developed standalone microservices with Spring Boot and RESTful services',
      'Resolved Sonar issues and enhanced code coverage',
      'Provided knowledge transfer and mentorship to team members',
    ],
  },
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
              Career Timeline
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            9+ years of progressive experience in software engineering and system architecture
          </p>
        </motion.div>

        <motion.div className="space-y-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              {index !== experiences.length - 1 && (
                <div className="absolute left-0 top-12 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-purple to-transparent"></div>
              )}

              <div className="pl-8">
                <div className="absolute left-0 top-0 w-2 h-2 bg-accent-blue rounded-full border-4 border-dark-900"></div>

                <div className="p-6 rounded-lg bg-dark-700/50 border border-gray-700/50 hover:border-accent-blue/50 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                      <p className="text-accent-blue font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400">{exp.period}</p>
                      <p className="text-sm text-gray-500">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-gray-400 text-sm">
                        <span className="text-accent-cyan mt-1">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
