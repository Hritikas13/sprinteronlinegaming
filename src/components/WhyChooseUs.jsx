// src/components/WhyChooseUs.jsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Clock, Users, Trophy } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Advanced encryption and security measures to protect your data and transactions"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer service through multiple channels"
    },
    {
      icon: Users,
      title: "Active Community",
      description: "Join thousands of active players in our gaming community"
    },
    {
      icon: Trophy,
      title: "Regular Tournaments",
      description: "Participate in exciting tournaments with massive prizes"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black via-purple-900/20 to-black relative overflow-hidden">
      {/* 3D Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, purple 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, purple 0%, transparent 50%)",
              "radial-gradient(circle at 0% 100%, purple 0%, transparent 50%)",
              "radial-gradient(circle at 100% 0%, purple 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, purple 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0 opacity-30"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Why Choose Sprinter Online?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-8 rounded-xl backdrop-blur-lg border border-purple-500/20"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 mb-6 bg-purple-500/20 rounded-full flex items-center justify-center"
              >
                <feature.icon className="w-8 h-8 text-purple-500" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;