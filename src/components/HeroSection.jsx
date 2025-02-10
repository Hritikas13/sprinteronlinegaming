import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Gamepad2, Trophy, Users } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { icon: Users, value: "50K+", label: "Active Players" },
    { icon: Trophy, value: "$1M+", label: "Weekly Prizes" },
    { icon: Gamepad2, value: "100+", label: "Premium Games" },
  ];
  const handelwhatsapp = () => {
    const phoneNumber = "447400497555";
    const message = `Request ID for ${phoneNumber}`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank"); // Open link in a new tab
  };
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Parallax Background */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/30 to-purple-900/40 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block px-6 py-2 mb-6 rounded-full bg-white/90 shadow-lg"
              >
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-medium">
                  Welcome to Sprinters Online
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-white drop-shadow-lg">
                  Level Up Your
                </span>
                <br />
                <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  Gaming Experience
                </span>
              </motion.h1>

              <motion.p
                className="text-lg text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Join the ultimate gaming platform where passion meets competition.
                Experience stunning graphics, seamless gameplay, and a vibrant
                community of gamers from around the world.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <button onClick={handelwhatsapp} className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg">
                  Start Gaming
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-3 bg-white/90 text-indigo-900 rounded-full font-semibold hover:bg-white transition-all duration-300 shadow-lg">
                  Explore Games
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column - Featured Game */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative mt-12 lg:mt-0"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
                  alt="Featured Game"
                  className="w-full rounded-2xl transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/90 p-6 rounded-xl shadow-lg backdrop-blur-lg border border-white/20"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg text-white">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-indigo-900">{stat.value}</div>
                    <div className="text-indigo-600">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;