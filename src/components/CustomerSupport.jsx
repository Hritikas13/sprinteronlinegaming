import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, MessageCircle, MessageSquare, Send } from 'lucide-react';

const CustomerSupport = () => {
  const supportChannels = [
    {
      id: 1,
      type: 'WhatsApp',
      contact: '447400497555',
      icon: 'whatsapp',
      description: 'Instant Support'
    },
    {
      id: 2,
      type: 'WhatsApp',
      contact: '447400497555',
      icon: 'whatsapp',
      description: 'VIP Support'
    },
    {
      id: 3,
      type: 'Telegram',
      contact: '@',
      icon: 'telegram',
      description: 'General Inquiries'
    },
    {
      id: 4,
      type: 'Telegram',
      contact: '@',
      icon: 'telegram',
      description: 'Technical Support'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case 'WhatsApp':
        return MessageSquare;
      case 'Telegram':
        return Send;
      default:
        return MessageCircle;
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gaming-themed overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-purple-900/30 to-indigo-900/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px bg-purple-500"
            style={{
              left: 0,
              right: 0,
              top: `${i * 5}%`,
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
              scaleX: [0, 1, 0],
              transition: {
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
              },
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-4">
            <Headphones className="w-8 h-8 text-purple-500 mr-2" />
            <span className="text-sm font-medium text-purple-400 uppercase tracking-wider">
              Always Here For You
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            24/7 Customer Support
          </h2>
          <p className="text-lg text-gray-300/90 max-w-2xl mx-auto">
            Our dedicated support team is available around the clock to assist you with any questions or concerns.
          </p>
        </motion.div>

        {/* Support Channels Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {supportChannels.map((channel) => {
            const Icon = getIcon(channel.type);
            return (
              <motion.div
                key={channel.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, translateY: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-white/10 backdrop-blur-xl p-6 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full">
                      <Icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {channel.type}
                    </h3>
                    <p className="text-purple-200 mb-2">{channel.description}</p>
                    <p className="text-gray-400 mb-4">{channel.contact}</p>
                    <a
                     href={`https://wa.me/447400497555?text=Request%20ID%20for%20${encodeURIComponent('447400497555')}`}

                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Connect Now
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400">
            Need immediate assistance? Our support team typically responds within{' '}
            <span className="text-purple-400 font-semibold">5 minutes</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerSupport;