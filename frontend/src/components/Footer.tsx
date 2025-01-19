import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <div className="flex items-center text-gray-400">
            <span>Built with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="mx-2 text-red-400"
            >
              <FaHeart className="w-4 h-4" />
            </motion.div>
            <span>by Jayishnu Tripathi</span>
          </div>
          
          <div className="text-gray-500 text-sm">
            © {currentYear} All rights reserved
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 