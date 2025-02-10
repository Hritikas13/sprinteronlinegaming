// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Sprinter
            </h3>
            <p className="text-gray-400">
              Your premium destination for online gaming entertainment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#games" className="hover:text-purple-500 transition-colors">Games</a></li>
              <li><a href="#support" className="hover:text-purple-500 transition-colors">Support</a></li>
              <li><a href="#about" className="hover:text-purple-500 transition-colors">About Us</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#faq" className="hover:text-purple-500 transition-colors">FAQ</a></li>
              <li><a href="#terms" className="hover:text-purple-500 transition-colors">Terms of Service</a></li>
              <li><a href="#privacy" className="hover:text-purple-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {/* Add your social media icons/links here */}
              <a href="#" className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center hover:bg-purple-500/40 transition-colors">
                {/* Social Icon */}
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Sprinter. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;