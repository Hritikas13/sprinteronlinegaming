import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      title: "Select Your Game",
      description: "Browse our collection of premium games and choose your favorite.",
      icon: "🎮"
    },
    {
      title: "Request Game ID",
      description: "Contact our support team via WhatsApp or Telegram to get your game ID.",
      icon: "🎯"
    },
    {
      title: "Make a Deposit",
      description: "Fund your account through our secure payment channels.",
      icon: "💰"
    },
    {
      title: "Start Playing",
      description: "Login with your game ID and enjoy the gaming experience!",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-purple-900/20 to-black relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          HOW DOES IT WORK?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-8 rounded-xl backdrop-blur-lg border border-purple-500/20">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-purple-500/50"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;