import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer III',
      company: 'Entrata India',
      period: '2021 - Present',
      description: [
        'Led internationalization projects improving application accessibility across multiple regions',
        'Optimized API performance reducing response times by 40%',
        'Developed and maintained scalable microservices using Node.js and TypeScript',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      title: 'Software Engineer II',
      company: 'Dentsu India',
      period: '2019 - 2021',
      description: [
        'Developed and maintained enterprise-level web applications using React and PHP',
        'Implemented AWS-based solutions reducing operational costs by 30%',
        'Built automated data integration systems for multiple client platforms',
        'Collaborated with global teams to deliver high-impact marketing solutions'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-blue-400 before:to-purple-400"
            >
              <div className="absolute left-0 top-0 w-2 h-2 -translate-x-1/2 rounded-full bg-blue-400" />
              
              <div className="p-6 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/30 transition-colors">
                <h3 className="text-xl font-semibold text-blue-400 mb-1">
                  {exp.title}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-gray-300">{exp.company}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">{exp.period}</span>
                  <a 
                    href="mailto:jayishnutripathi@gmail.com"
                    className="ml-auto px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md flex items-center gap-2 transition-colors"
                    role="button"
                  >
                    <span>Email</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </a>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="text-gray-300 flex items-start"
                    >
                      <span className="text-blue-400 mr-2">▹</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience; 