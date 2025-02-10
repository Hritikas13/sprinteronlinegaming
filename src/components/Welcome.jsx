// src/components/Welcome.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black"></div>
      
      {/* 3D Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="relative w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-purple-500 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Welcome to Sprinters Online
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the thrill of premium online gaming with Sprinters Online. 
            We offer a wide range of exciting games, secure transactions, and 
            round-the-clock support to ensure you have the best gaming experience.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Premium Games', 'Secure Platform', 'Instant Payouts'].map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-8 rounded-xl backdrop-blur-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">{feature}</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Welcome;